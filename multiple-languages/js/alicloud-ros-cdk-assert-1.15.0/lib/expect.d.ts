import * as api from '@alicloud/ros-cdk-cxapi';
import { Stack } from '@alicloud/ros-cdk-core';
import { StackInspector } from './inspector';
export declare function expect(stack: api.RosStackArtifact | Stack, skipValidation?: boolean): StackInspector;
