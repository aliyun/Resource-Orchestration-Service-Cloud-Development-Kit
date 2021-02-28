import * as ros from '@alicloud/ros-cdk-core';
import { RosVPC } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVPC as VPCProperty };

/**
 * Properties for defining a `ALIYUN::ECS::VPC`
 */
export interface VPCProps {

    /**
     * Property cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
     * 10.0.0.0/8
     * 172.16.0.0/12 (Default)
     * 192.168.0.0/16
     */
    readonly cidrBlock?: string;

    /**
     * Property description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    readonly enableIpv6?: boolean | ros.IResolvable;

    /**
     * Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    readonly ipv6CidrBlock?: string;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * Property tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vpcName?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::VPC`
 */
export class Vpc extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute RouteTableId: The router table id of created VPC.
     */
    public readonly attrRouteTableId: any;

    /**
     * Attribute VRouterId: Router id of created VPC.
     */
    public readonly attrVRouterId: any;

    /**
     * Attribute VpcId: Id of created VPC.
     */
    public readonly attrVpcId: any;

    /**
     * Create a new `ALIYUN::ECS::VPC`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VPCProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVPC = new RosVPC(this, id,  {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            cidrBlock: props.cidrBlock,
            vpcName: props.vpcName,
            ipv6CidrBlock: props.ipv6CidrBlock,
            tags: ros.tagFactory(props.tags),
            enableIpv6: props.enableIpv6 ? props.enableIpv6 : false,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVPC;
        this.attrRouteTableId = rosVPC.attrRouteTableId;
        this.attrVRouterId = rosVPC.attrVRouterId;
        this.attrVpcId = rosVPC.attrVpcId;
    }
}
