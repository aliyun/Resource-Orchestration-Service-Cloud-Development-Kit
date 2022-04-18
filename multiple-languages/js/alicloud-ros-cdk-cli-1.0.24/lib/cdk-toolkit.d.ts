/// <reference types="node" />
import { CloudExecutable } from './api/cloud-executable';
import { Configuration } from './settings';
export interface CdkToolkitProps {
    /**
     * The Cloud Executable
     */
    cloudExecutable: CloudExecutable;
    /**
     * Whether to be verbose
     *
     * @default false
     */
    verbose?: boolean;
    /**
     * Don't stop on error metadata
     *
     * @default false
     */
    ignoreErrors?: boolean;
    /**
     * Treat warnings in metadata as errors
     *
     * @default false
     */
    strict?: boolean;
    /**
     * Application configuration (settings and context)
     */
    configuration: Configuration;
}
/**
 * Toolkit logic
 *
 * The toolkit runs the `cloudExecutable` to obtain a cloud assembly
 *
 */
export declare class CdkToolkit {
    private readonly props;
    private static getJson;
    constructor(props: CdkToolkitProps);
    getRosClient(): Promise<any>;
    config(global: boolean): Promise<void>;
    configSet(options: ConfigSetOptions): Promise<void>;
    loadCliConfig(options: LoadConfigOptions): Promise<void>;
    list(selectors: string[]): Promise<void>;
    /**
     * Synthesize the given set of stacks (called when the user runs 'cdk synth')
     *
     * INPUT: Stack names can be supplied using a glob filter. If no stacks are
     * given, all stacks from the application are implictly selected.
     *
     * OUTPUT: If more than one stack ends up being selected, an output directory
     * should be supplied, where the templates will be written.
     */
    synth(stackNames: string[], exclusively: boolean): Promise<any>;
    deploy(options: DeployOptions): Promise<void>;
    diff(options: DiffOptions): Promise<void>;
    event(options: EventOptions): Promise<void>;
    output(options: OutPutOptions): Promise<void>;
    resource(options: ResourceOptions): Promise<void>;
    generateStackInfo(options: GenerateStackInfoOptions): Promise<void>;
    private getStackByName;
    private getStackById;
    listStacks(options: ListStackOptions): Promise<void>;
    destroy(options: DestroyOptions): Promise<void>;
    private syncStackInfo;
    private updateStackInfo;
    private findStackInfo;
    private selectStacksForList;
    private selectStacksForDestroy;
    private selectStacksForDeploy;
    private selectStacksForDiff;
    /**
     * Validate the stacks for errors and warnings according to the CLI's current settings
     */
    private validateStacks;
    private assembly;
    private getCliConfig;
    private syncDeployStack;
    private static getResources;
    private static withDefaultPrinter;
    private syncUpdateStack;
    private syncDestroyStack;
}
export interface DiffOptions {
    stackNames: string[];
    path: string;
    stream?: NodeJS.WritableStream;
    contextLines: number;
}
export interface DeployOptions {
    stackNames: string[];
    /**
     * Only select the given stack
     *
     * @default false
     */
    exclusively?: boolean;
    parameters?: {
        [name: string]: string | undefined;
    };
    timeout: string;
    sync: boolean;
    outputsFile: boolean;
    skipIfNoChanges: boolean;
    disableRollback: boolean;
    resourceGroupId: string;
}
export interface DestroyOptions {
    stackNames: string[];
    quiet?: boolean;
    sync: boolean;
}
export interface EventOptions {
    stackName: string[];
    logicalResourceId: string;
    pageNumber: string;
    pageSize: string;
}
export interface OutPutOptions {
    stackName: string;
}
export interface ResourceOptions {
    stackNames: string[];
}
export interface GenerateStackInfoOptions {
    resourceGroupId: string;
}
export interface ListStackOptions {
    stackNames: string[];
    pageNumber: string;
    pageSize: string;
    all: string;
    resourceGroupId: string;
}
export interface ConfigSetOptions {
    global: string;
    endpoint: string;
    region: string;
    mode: string;
    ak: string;
    sk: string;
    sts: string;
    ramRoleArn: string;
    roleSessionName: string;
    ramRoleName: string;
}
export interface LoadConfigOptions {
    global?: string;
    loadFilePath: string;
}
export interface Tag {
    readonly Key: string;
    readonly Value: string;
}
export declare function writeAndUpdateLanguageInfo(language: string): void;
export declare function readLanguageInfo(): any;
export declare function padLeft(n: number, x: string): string;
export declare function padRight(n: number, x: string): string;
export declare function shorten(maxWidth: number, p: string): string;
