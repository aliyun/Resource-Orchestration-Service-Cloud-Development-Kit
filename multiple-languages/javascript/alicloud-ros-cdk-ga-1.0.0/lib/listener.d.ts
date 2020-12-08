import * as ros from '@alicloud/ros-cdk-core';
import { RosListener } from './ga.generated';
export { RosListener as ListenerProperty };
/**
 * Properties for defining a `ALIYUN::GA::Listener`
 */
export interface ListenerProps {
    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    readonly acceleratorId: string;
    /**
     * @Property portRanges:
     */
    readonly portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     */
    readonly protocol: string;
    /**
     * @Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    readonly clientAffinity?: string;
    /**
     * @Property description: The description of the listener.
     */
    readonly description?: string;
    /**
     * @Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    readonly name?: string;
}
/**
 * A ROS resource type:  `ALIYUN::GA::Listener`
 */
export declare class Listener extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: any;
    /**
     * Create a new `ALIYUN::GA::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ListenerProps, enableResourcePropertyConstraint?: boolean);
}
