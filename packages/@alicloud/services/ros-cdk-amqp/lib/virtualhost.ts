import * as ros from '@alicloud/ros-cdk-core';
import { RosVirtualHost } from './amqp.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVirtualHost as VirtualHostProperty };

/**
 * Properties for defining a `VirtualHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::AMQP::VirtualHost`, which is used to create a vhost.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVirtualHost`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-virtualhost
 */
export class VirtualHost extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VirtualHostProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute VirtualHost: The name of the virtual host.
     */
    public readonly attrVirtualHost: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VirtualHostProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVirtualHost = new RosVirtualHost(this, id,  {
            instanceId: props.instanceId,
            virtualHost: props.virtualHost,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVirtualHost;
        this.attrVirtualHost = rosVirtualHost.attrVirtualHost;
    }
}
