import * as ros from '@alicloud/ros-cdk-core';
import { RosVpd } from './eflo.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpd as VpdProperty };

/**
 * Properties for defining a `Vpd`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
 */
export interface VpdProps {

    /**
     * Property cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0\/8,172.16.0.0\/12,192.168.0.0\/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, or 169.254.0.0\/16 and their subnets as the primary IPv4 CIDR block of the VPD.
     */
    readonly cidr: string | ros.IResolvable;

    /**
     * Property vpdName: Lingjun CIDR block instance name.
     */
    readonly vpdName: string | ros.IResolvable;

    /**
     * Property resourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property secondaryCidrBlocks: List of additional network segment information.
     */
    readonly secondaryCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property subnets: Lingjun subnet information List.
     */
    readonly subnets?: Array<RosVpd.SubnetsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tags: Tags of vpd.
     */
    readonly tags?: RosVpd.TagsProperty[];
}

/**
 * Represents a `Vpd`.
 */
export interface IVpd extends ros.IResource {
    readonly props: VpdProps;

    /**
     * Attribute Cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
     */
    readonly attrCidr: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute GmtModified: Modification time.
     */
    readonly attrGmtModified: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecondaryCidrBlocks: List of additional network segment information.
     */
    readonly attrSecondaryCidrBlocks: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VpdId: The ID of the VPD.
     */
    readonly attrVpdId: ros.IResolvable | string;

    /**
     * Attribute VpdName: Lingjun CIDR block instance name.
     */
    readonly attrVpdName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Eflo::Vpd`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpd`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
 */
export class Vpd extends ros.Resource implements IVpd {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VpdProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.
     */
    public readonly attrCidr: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute GmtModified: Modification time.
     */
    public readonly attrGmtModified: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecondaryCidrBlocks: List of additional network segment information.
     */
    public readonly attrSecondaryCidrBlocks: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the resource.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VpdId: The ID of the VPD.
     */
    public readonly attrVpdId: ros.IResolvable | string;

    /**
     * Attribute VpdName: Lingjun CIDR block instance name.
     */
    public readonly attrVpdName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpdProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVpd = new RosVpd(this, id,  {
            subnets: props.subnets,
            resourceGroupId: props.resourceGroupId,
            cidr: props.cidr,
            secondaryCidrBlocks: props.secondaryCidrBlocks,
            vpdName: props.vpdName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpd;
        this.attrCidr = rosVpd.attrCidr;
        this.attrCreateTime = rosVpd.attrCreateTime;
        this.attrGmtModified = rosVpd.attrGmtModified;
        this.attrResourceGroupId = rosVpd.attrResourceGroupId;
        this.attrSecondaryCidrBlocks = rosVpd.attrSecondaryCidrBlocks;
        this.attrTags = rosVpd.attrTags;
        this.attrVpdId = rosVpd.attrVpdId;
        this.attrVpdName = rosVpd.attrVpdName;
    }
}
