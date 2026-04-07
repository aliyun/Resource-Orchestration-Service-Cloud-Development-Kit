import * as cxapi from '@alicloud/ros-cdk-cxapi';
import { Configuration } from '../settings';
/** Invokes the cloud executable and returns JSON output */
export declare function execProgram(config: Configuration): Promise<cxapi.CloudAssembly>;
