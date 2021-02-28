import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv6Gateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpv6Gateway as Ipv6GatewayProperty };

/**
 * Properties for defining a `ALIYUN::VPC::Ipv6Gateway`
 */
export interface Ipv6GatewayProps {

    /**
     * Property vpcId: To open VPC ID IPv6 gateway.
     */
    readonly vpcId: string;

    /**
     * Property description: Description of IPv6 gateway.
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
     */
    readonly description?: string;

    /**
     * Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
     */
    readonly name?: string;

    /**
     * Property spec: Specifications IPv6 gateway, the value:
     * Small (default): Free.
     * Medium: Enterprise Edition.
     * Large: Enterprise Enhanced Edition.
     * Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
     */
    readonly spec?: string;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];
}

/**
 * A ROS resource type:  `ALIYUN::VPC::Ipv6Gateway`
 */
export class Ipv6Gateway extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Ipv6GatewayId: ID IPv6 gateway.
     */
    public readonly attrIpv6GatewayId: any;

    /**
     * Create a new `ALIYUN::VPC::Ipv6Gateway`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv6GatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosIpv6Gateway = new RosIpv6Gateway(this, id,  {
            description: props.description,
            vpcId: props.vpcId,
            spec: props.spec,
            tags: ros.tagFactory(props.tags),
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv6Gateway;
        this.attrIpv6GatewayId = rosIpv6Gateway.attrIpv6GatewayId;
    }
}
