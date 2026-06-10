import * as cxapi from '@alicloud/ros-cdk-cxapi';
import { Configuration } from '../settings';
import { CloudAssembly } from './cloud-assembly';
/**
 * @returns output directory
 */
type Synthesizer = (config: Configuration) => Promise<cxapi.CloudAssembly>;
export interface CloudExecutableProps {
    /**
     * Application configuration (settings and context)
     */
    configuration: Configuration;
    /**
     * Callback invoked to synthesize the actual stacks
     */
    synthesizer: Synthesizer;
}
/**
 * Represent the Cloud Executable and the synthesis we can do on it
 */
export declare class CloudExecutable {
    private readonly props;
    private _cloudAssembly?;
    constructor(props: CloudExecutableProps);
    /**
     * Return whether there is an app command from the configuration
     */
    get hasApp(): boolean;
    /**
     * Synthesize a set of stacks
     */
    synthesize(): Promise<CloudAssembly>;
    private doSynthesize;
}
export {};
