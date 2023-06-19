import * as ros from '@alicloud/ros-cdk-core';
import { RosVirtualHost } from './amqp.generated';
export { RosVirtualHost as VirtualHostProperty };
/**
 * Properties for defining a `ALIYUN::AMQP::VirtualHost`
 */
export interface VirtualHostProps {
    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::AMQP::VirtualHost`
 */
export declare class VirtualHost extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute VirtualHost: The name of the virtual host.
     */
    readonly attrVirtualHost: ros.IResolvable;
    /**
     * Create a new `ALIYUN::AMQP::VirtualHost`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VirtualHostProps, enableResourcePropertyConstraint?: boolean);
}
