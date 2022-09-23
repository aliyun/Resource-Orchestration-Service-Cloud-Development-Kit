import * as ros from '@alicloud/ros-cdk-core';
import { RosVirtualHost } from './amqp.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class VirtualHost extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute VirtualHost: The name of the virtual host.
     */
    public readonly attrVirtualHost: ros.IResolvable;

    /**
     * Create a new `ALIYUN::AMQP::VirtualHost`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VirtualHostProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVirtualHost = new RosVirtualHost(this, id,  {
            instanceId: props.instanceId,
            virtualHost: props.virtualHost,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVirtualHost;
        this.attrVirtualHost = rosVirtualHost.attrVirtualHost;
    }
}
