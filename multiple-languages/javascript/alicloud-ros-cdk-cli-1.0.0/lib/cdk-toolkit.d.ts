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
}
export interface DiffOptions {
    region?: string;
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
}
export interface DestroyOptions {
    region?: string;
    stackNames: string[];
}
export interface Tag {
    readonly Key: string;
    readonly Value: string;
}
