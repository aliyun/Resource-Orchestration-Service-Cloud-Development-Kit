import * as ros from '@alicloud/ros-cdk-core';
import { RosListener } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosListener as ListenerProperty };

/**
 * Properties for defining a `ALIYUN::GA::Listener`
 */
export interface ListenerProps {

    /**
     * Property acceleratorId: The ID of the Global Accelerator instance to which the listener will be added.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * Property portRanges:
     */
    readonly portRanges: Array<RosListener.PortRangesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property protocol: The network transmission protocol of the listener. Valid values:
     * tcp: TCP protocol
     * udp: UDP protocol
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * Property clientAffinity: Specifies whether to enable client affinity for the listener.
     * If you do not specify the default value in the parameter, client affinity is disabled.
     * When client affinity is disabled, the connections from a specific source (client)
     * IP address are not always routed to the same endpoint.
     * If you set the value to SOURCE_IP, client affinity is enabled. When client affinity is enabled, the connections from
     * a specific source (client) IP address are always routed to the same endpoint.
     */
    readonly clientAffinity?: string | ros.IResolvable;

    /**
     * Property description: The description of the listener.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property name: The name of the listener.
     * The name must be 2 to 128 characters in length and can contain letters, digits, underscores
     * (_), and hyphens (-). It must start with a letter or Chinese character.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::GA::Listener`
 */
export class Listener extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ListenerId: The ID of the listener.
     */
    public readonly attrListenerId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::GA::Listener`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ListenerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosListener = new RosListener(this, id,  {
            description: props.description,
            portRanges: props.portRanges,
            protocol: props.protocol,
            acceleratorId: props.acceleratorId,
            name: props.name,
            clientAffinity: props.clientAffinity,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosListener;
        this.attrListenerId = rosListener.attrListenerId;
    }
}
