// ---- Simple Types & Type Fragments ----

/** @pattern ^[A-Za-z]$ */
export type SingleChar = string;

/** @pattern ^[A-Za-z\-\ ]+ */
export type Verb = string;

export type Alias = (Verb | SingleChar);

/** @pattern ^[A-Za-z]+[A-Za-z0-9-_ ]*$ */
export type HumanReadableIdentifier = string;

export type SanitizedAbsPath = string;

/** @pattern ^(\.\.|\.\/|\/) */
export type SanitizedPath = string;

export type Settings = {
	consent: 'opt_in' | 'opt_out';
};

// ---- CLI Types ----

// export type SanitizedArgs = string

// TODO: Option
// TODO: PositionalArg

// ---- Plugin Definition Types ----

/** interpreted using yargs @pattern ^([A-Za-z-_ ]+ ?)((\[.+\] ?)|(\<.+\>) ?)*$ */
export type Command = string;

export type InstalledPlugin = {
	type: 'npm' | 'binary' | 'deno';
	name: string;
};

export type PluginActionName =
	| 'proxy'
	| 'pluginInfo'
	| 'checkRuntimeDependencies'
	| 'installRuntimeDependencies'
	| 'proxyTemplate';

// TODO: Operation
// TODO: ParsedOperation
// TODO: ParsedTemplate
// TODO: Template
// TODO: PluginInfo
// TODO: PluginSchema

// ---- Process Interop ----

// TODO: PluginDependenciesResponse
// TODO: PluginJsonResponse
// TODO: PluginProxyResponse
// TODO: PluginResponseEncoding
// TODO: RequestArgs

// ---- Hash Types ----

/** @pattern ^P[A-Za-z0-9]{50}$ */
export type EconomicalPrototypeHash = string;

/** @pattern ^tz1[A-Za-z0-9]{33}$ */
export type PublicKeyHash = string;

/** @pattern ^[A-Fa-f0-9]{64}$ */
export type SHA256 = string;

// ---- Contract Objects ----

export type Contract = {
	sourceFile: string;
	hash: SHA256;
};

export type Faucet = {
	pkh: PublicKeyHash;
	mnemonic: string[];
	/** @format email */
	email: string;
	password: string;
	/** @pattern ^\d+$ */
	amount: string;
	activation_code: string;
};

// ---- Project State ----

// TODO: Config
// TODO: LoadedConfig
// TODO: MetadataConfig
// TODO: NetworkConfig
// TODO: SandboxAccountConfig
// TODO: SandboxConfig
// TODO: ScaffoldConfig

// TODO: Environment

// TODO: EphemeralState
// TODO: PersistentState

// TODO: Provisioner
// TODO: ProvisionerID
// TODO: Provisions

// ---- Unsorted ----

// TODO: TaqError
// TODO: Task
// TODO: Template
// TODO: Timestamp
// TODO: Tz
// TODO: TzKtConfig
// TODO: Url
// TODO: Verb
// TODO: VersionNumber
