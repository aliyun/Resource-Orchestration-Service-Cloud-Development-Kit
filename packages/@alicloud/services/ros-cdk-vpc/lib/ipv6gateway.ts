import * as ros from '@alicloud/ros-cdk-core';
import { RosIpv6Gateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIpv6Gateway as Ipv6GatewayProperty };

/**
 * Properties for defining a `Ipv6Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6gateway
 */
export interface Ipv6GatewayProps {

    /**
     * Property vpcId: To open VPC ID IPv6 gateway.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property description: Description of IPv6 gateway.
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): \/\/ or https: \/\/ at the beginning .
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): \/\/ or with https: \/\/ .
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property spec: Specifications IPv6 gateway, the value:
     * Small (default): Free.
     * Medium: Enterprise Edition.
     * Large: Enterprise Enhanced Edition.
     * Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
     */
    readonly spec?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIpv6Gateway.TagsProperty[];
}

/**
 * Represents a `Ipv6Gateway`.
 */
export interface IIpv6Gateway extends ros.IResource {
    readonly props: Ipv6GatewayProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute Ipv6GatewayId: ID IPv6 gateway.
     */
    readonly attrIpv6GatewayId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::Ipv6Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv6Gateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv6gateway
 */
export class Ipv6Gateway extends ros.Resource implements IIpv6Gateway {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: Ipv6GatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute Ipv6GatewayId: ID IPv6 gateway.
     */
    public readonly attrIpv6GatewayId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Ipv6GatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIpv6Gateway = new RosIpv6Gateway(this, id,  {
            description: props.description,
            vpcId: props.vpcId,
            spec: props.spec,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv6Gateway;
        this.attrArn = rosIpv6Gateway.attrArn;
        this.attrIpv6GatewayId = rosIpv6Gateway.attrIpv6GatewayId;
    }
}
