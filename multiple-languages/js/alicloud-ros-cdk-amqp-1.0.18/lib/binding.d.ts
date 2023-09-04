import * as ros from '@alicloud/ros-cdk-core';
import { RosBinding } from './amqp.generated';
export { RosBinding as BindingProperty };
/**
 * Properties for defining a `ALIYUN::AMQP::Binding`
 */
export interface BindingProps {
    /**
     * Property argument: X-match Attributes. Valid Values:
     * "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
     * "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
     */
    readonly argument: string | ros.IResolvable;
    /**
     * Property bindingKey: The Binding Key.
     */
    readonly bindingKey: string | ros.IResolvable;
    /**
     * Property bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
     */
    readonly bindingType: string | ros.IResolvable;
    /**
     * Property destinationName: The Target Queue Or Exchange of the Name.
     */
    readonly destinationName: string | ros.IResolvable;
    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property sourceExchange: The Source Exchange Name.
     */
    readonly sourceExchange: string | ros.IResolvable;
    /**
     * Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::AMQP::Binding`
 */
export declare class Binding extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::AMQP::Binding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BindingProps, enableResourcePropertyConstraint?: boolean);
}
