import { runTests } from '@vscode/test-electron';
import * as fse from 'fs-extra';
import * as path from 'path';

const homedir = require('os').homedir();
const testProjectDestination = path.resolve(homedir, 'TVsCE_e2e/vscode-taq-test-project/');
const vsCodeUserData = path.resolve(__dirname, '../../.vscode-test/user-data');
const sourceFilesRoot = path.resolve(__dirname, '../../../');

async function main() {
	// Disable activation events, so that we can activate a VsCode instance with mocked functions
	const packageJsonPath = path.join(sourceFilesRoot, 'package.json');
	const originalPackageJsonContents = await fse.readFile(packageJsonPath, 'utf-8');
	const activationEventsRemoved = originalPackageJsonContents.replace(
		/\"activationEvents\": \[(.|\n)*?\]/,
		'"activationEvents": []',
	);
	await fse.writeFile(packageJsonPath, activationEventsRemoved);

	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');

		// The path to the extension test script
		// Passed to --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, '../../out/test/suite/index');

		const launchArgs = [`${testProjectDestination}/`, '--disable-extension=true'];

		// Download VS Code, unzip it and run the integration test

		await runTests({ extensionDevelopmentPath, extensionTestsPath, launchArgs });

		// fse.rmdirSync(vsCodeUserData, { recursive: true });
	} catch (err) {
		console.error('Failed to run tests');

		if (fse.existsSync(vsCodeUserData)) {
			fse.rmdirSync(vsCodeUserData, { recursive: true });
		}
		if (fse.existsSync(testProjectDestination)) {
			fse.rmdirSync(testProjectDestination, { recursive: true });
		}
		process.exit(1);
	} finally {
		await fse.writeFile(packageJsonPath, originalPackageJsonContents);
	}

	process.exit(0);
}

main();
