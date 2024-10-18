export declare type SettingsMap = {
    [key: string]: any;
};
export declare const PROJECT_CONFIG = "cdk.json";
export declare const PROJECT_CONTEXT = "cdk.context.json";
export declare const USER_DEFAULTS = "~/.cdk.json";
/**
 * If a context value is an object with this key set to a truthy value, it won't be saved to cdk.context.json
 */
export declare const TRANSIENT_CONTEXT_KEY = "$dontSaveContext";
export declare type Arguments = {
    readonly [name: string]: unknown;
};
/**
 * All sources of settings combined
 */
export declare class Configuration {
    settings: Settings;
    context: Context;
    readonly defaultConfig: Settings;
    private readonly commandLineArguments;
    private readonly commandLineContext;
    private _projectConfig?;
    private _projectContext?;
    private loaded;
    constructor(commandLineArguments?: Arguments);
    private get projectConfig();
    private get projectContext();
    /**
     * Load all config
     */
    load(): Promise<this>;
    /**
     * Save the project context
     */
    saveContext(): Promise<this>;
}
/**
 * Class that supports overlaying property bags
 *
 * Reads come from the first property bag that can has the given key,
 * writes go to the first property bag that is not readonly. A write
 * will remove the value from all property bags after the first
 * writable one.
 */
export declare class Context {
    private readonly bags;
    constructor(...bags: Settings[]);
    get keys(): string[];
    has(key: string): boolean;
    get all(): {
        [key: string]: any;
    };
    get(key: string): any;
    set(key: string, value: any): void;
    unset(key: string): void;
    clear(): void;
}
/**
 * A single bag of settings
 */
export declare class Settings {
    private settings;
    readonly readOnly: boolean;
    /**
     * Parse Settings out of CLI arguments.
     * @param argv the received CLI arguments.
     * @returns a new Settings object.
     */
    static fromCommandLineArguments(argv: Arguments): Settings;
    static mergeAll(...settings: Settings[]): Settings;
    private static parseStringContextListToObject;
    private static parseStringTagsListToObject;
    constructor(settings?: SettingsMap, readOnly?: boolean);
    load(fileName: string): Promise<this>;
    save(fileName: string): Promise<this>;
    get all(): any;
    merge(other: Settings): Settings;
    subSettings(keyPrefix: string[]): Settings;
    makeReadOnly(): Settings;
    clear(): void;
    get empty(): boolean;
    get(path: string[]): any;
    set(path: string[], value: any): Settings;
    unset(path: string[]): void;
}
