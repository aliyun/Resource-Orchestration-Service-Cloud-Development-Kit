import * as ros from '@alicloud/ros-cdk-core';
import { RosInvocation } from './ecs.generated';
export { RosInvocation as InvocationProperty };
/**
 * Properties for defining a `ALIYUN::ECS::Invocation`
 */
export interface InvocationProps {
    /**
     * Property instanceIds: The instance id list. Instances status must be running.
     */
    readonly instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property commandId: The id of command.
     */
    readonly commandId?: string | ros.IResolvable;
    /**
     * Property commandName: The name of command. Only system commands whose provide is AlibabaCloud are supported
     */
    readonly commandName?: string | ros.IResolvable;
    /**
     * Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute). It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
     */
    readonly frequency?: string | ros.IResolvable;
    /**
     * Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
     * Number of custom parameters: 0 to 10.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property sync: Whether to invoke synchronously.
     */
    readonly sync?: boolean | ros.IResolvable;
    /**
     * Property timed: Whether it is timed execution. Default is False.
     */
    readonly timed?: boolean | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::Invocation`
 */
export declare class Invocation extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute InvokeId: The id of command execution.
     */
    readonly attrInvokeId: ros.IResolvable;
    /**
     * Attribute InvokeInstances: The InvokeInstances of command.
     */
    readonly attrInvokeInstances: ros.IResolvable;
    /**
     * Attribute InvokeResults: The results of invoke command.
     */
    readonly attrInvokeResults: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::Invocation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InvocationProps, enableResourcePropertyConstraint?: boolean);
}
