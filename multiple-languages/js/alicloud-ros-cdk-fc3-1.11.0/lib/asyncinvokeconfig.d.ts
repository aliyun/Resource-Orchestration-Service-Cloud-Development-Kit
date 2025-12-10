import * as ros from '@alicloud/ros-cdk-core';
import { RosAsyncInvokeConfig } from './fc3.generated';
export { RosAsyncInvokeConfig as AsyncInvokeConfigProperty };
/**
 * Properties for defining a `AsyncInvokeConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
 */
export interface AsyncInvokeConfigProps {
    /**
     * Property functionName: Function name.
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * Property asyncTask: Whether to enable asynchronous tasks (optional).
     */
    readonly asyncTask?: boolean | ros.IResolvable;
    /**
     * Property destinationConfig: Configuration structure of asynchronous invocation target (optional).
     */
    readonly destinationConfig?: RosAsyncInvokeConfig.DestinationConfigProperty | ros.IResolvable;
    /**
     * Property maxAsyncEventAgeInSeconds: Maximum message survival time (optional), value range [1,604800], default is 86400, unit is seconds.
     */
    readonly maxAsyncEventAgeInSeconds?: number | ros.IResolvable;
    /**
     * Property maxAsyncRetryAttempts: Maximum number of retries after asynchronous invocation fails, optional. Value range [0,8]. When not configured, the default number of retries is 3.
     */
    readonly maxAsyncRetryAttempts?: number | ros.IResolvable;
}
/**
 * Represents a `AsyncInvokeConfig`.
 */
export interface IAsyncInvokeConfig extends ros.IResource {
    readonly props: AsyncInvokeConfigProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC3::AsyncInvokeConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAsyncInvokeConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-asyncinvokeconfig
 */
export declare class AsyncInvokeConfig extends ros.Resource implements IAsyncInvokeConfig {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AsyncInvokeConfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AsyncInvokeConfigProps, enableResourcePropertyConstraint?: boolean);
}
