import * as ros from '@alicloud/ros-cdk-core';
import { RosBinding } from './amqp.generated';
export { RosBinding as BindingProperty };
/**
 * Properties for defining a `Binding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::AMQP::Binding`, which is used to bind a queue or an exchange to an exchange.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
 */
export declare class Binding extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BindingProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BindingProps, enableResourcePropertyConstraint?: boolean);
}
