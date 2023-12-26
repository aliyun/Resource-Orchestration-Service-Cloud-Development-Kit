import * as ros from '@alicloud/ros-cdk-core';
import { RosFunctionInvoker } from './fc.generated';
export { RosFunctionInvoker as FunctionInvokerProperty };
/**
 * Properties for defining a `FunctionInvoker`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-functioninvoker
 */
export interface FunctionInvokerProps {
    /**
     * Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property async: Invocation type, Sync or Async. Defaults to Sync.
     */
    readonly async?: boolean | ros.IResolvable;
    /**
     * Property checkError: Whether check error for function invocation result.
     * If set true and function invocation result has error, the resource creation will be regard as failed.
     * Default is false
     */
    readonly checkError?: boolean | ros.IResolvable;
    /**
     * Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
     * If the value needs to be binary, encode it via base64 before passing to this property.
     */
    readonly event?: string | ros.IResolvable;
    /**
     * Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
     */
    readonly executeVersion?: number | ros.IResolvable;
    /**
     * Property qualifier: service version, can be versionId or aliasName
     */
    readonly qualifier?: string | ros.IResolvable;
    /**
     * Property serviceRegionId: Which region service belongs to.
     */
    readonly serviceRegionId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::FunctionInvoker`, which is used to invoke a function.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFunctionInvoker`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-functioninvoker
 */
export declare class FunctionInvoker extends ros.Resource {
    /**
     * Attribute Result: Depends on result type:
NoResult: Async invoke has no result.
Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
Failure: Error Message.
     */
    readonly attrResult: ros.IResolvable;
    /**
     * Attribute ResultType: Result type:
NoResult: Async invoke has no result.
Success: Sync invoke succeeds.
Failure: Sync invoke fails.
     */
    readonly attrResultType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionInvokerProps, enableResourcePropertyConstraint?: boolean);
}
