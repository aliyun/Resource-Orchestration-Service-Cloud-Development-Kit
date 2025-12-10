import * as ros from '@alicloud/ros-cdk-core';
import { RosListener } from './gwlb.generated';
export { RosListener as ListenerProperty };
/**
 * Properties for defining a `Listener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-listener
 */
export interface ListenerProps {
    /**
     * Property loadBalancerId: The ID of the gateway load balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property serverGroupId: The ID of the server group.
     */
    readonly serverGroupId: string | ros.IResolvable;
    /**
     * Property listenerDescription: The custom listener description.
     * The length is limited to 2 to 256 characters. It supports Chinese and English letters and can contain numbers, half-width commas (,), half-width periods (.), half-width semicolons (;), forward slashes (\/), at(@), underscores (_), and dashes (-).
     */
    readonly listenerDescription?: string | ros.IResolvable;
    /**
     * Property tags: Tags of listener.
     */
    readonly tags?: RosListener.TagsProperty[];
}
/**
 * Represents a `Listener`.
 */
export interface IListener extends ros.IResource {
    readonly props: ListenerProps;
    /**
     * Attribute ListenerDescription: The custom listener description.
     */
    readonly attrListenerDescription: ros.IResolvable | string;
    /**
     * Attribute ListenerId: The ID of listener.
     */
    readonly attrListenerId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the gateway load balancer instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute ServerGroupId: The ID of the server group.
     */
    readonly attrServerGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The list of tags.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GWLB::Listener`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosListener`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-listener
 */
export declare class Listener extends ros.Resource implements IListener {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ListenerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ListenerDescription: The custom listener description.
     */
    readonly attrListenerDescription: ros.IResolvable | string;
    /**
     * Attribute ListenerId: The ID of listener.
     */
    readonly attrListenerId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the gateway load balancer instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute ServerGroupId: The ID of the server group.
     */
    readonly attrServerGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The list of tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ListenerProps, enableResourcePropertyConstraint?: boolean);
}
