import * as ros from '@alicloud/ros-cdk-core';
import { RosIpam } from './vpc.generated';
export { RosIpam as IpamProperty };
/**
 * Properties for defining a `Ipam`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipam
 */
export interface IpamProps {
    /**
     * Property operatingRegionList: List of IPAM effective regions.
     */
    readonly operatingRegionList: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ipamDescription: The description of IPAM.
     * It must be 2 to 256 characters in length and must start with an uppercase letter or a Chinese character, but cannot start with 'http:\/\/ 'or 'https. If the description is not filled in, it is blank. The default value is blank.
     */
    readonly ipamDescription?: string | ros.IResolvable;
    /**
     * Property ipamName: The name of the IPAM.
     */
    readonly ipamName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of ipam.
     */
    readonly tags?: RosIpam.TagsProperty[];
}
/**
 * Represents a `Ipam`.
 */
export interface IIpam extends ros.IResource {
    readonly props: IpamProps;
    /**
     * Attribute CreateTime: The creation time of the IPAM.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DefaultResourceDiscoveryAssociationId: After an IPAM is created, the association between the resource discovery created by the system by default and the IPAM.
     */
    readonly attrDefaultResourceDiscoveryAssociationId: ros.IResolvable | string;
    /**
     * Attribute DefaultResourceDiscoveryId: After IPAM is created, the system creates resource discovery by default.
     */
    readonly attrDefaultResourceDiscoveryId: ros.IResolvable | string;
    /**
     * Attribute IpamDescription: The description of IPAM.
     */
    readonly attrIpamDescription: ros.IResolvable | string;
    /**
     * Attribute IpamId: The first ID of the resource.
     */
    readonly attrIpamId: ros.IResolvable | string;
    /**
     * Attribute IpamName: The name of the IPAM.
     */
    readonly attrIpamName: ros.IResolvable | string;
    /**
     * Attribute OperatingRegionList: List of IPAM effective regions.
     */
    readonly attrOperatingRegionList: ros.IResolvable | string;
    /**
     * Attribute PrivateDefaultScopeId: After an IPAM is created, the scope of the private network IPAM created by the system by default.
     */
    readonly attrPrivateDefaultScopeId: ros.IResolvable | string;
    /**
     * Attribute PublicDefaultScopeId: After an IPAM is created, the public network IPAM is created by default.
     */
    readonly attrPublicDefaultScopeId: ros.IResolvable | string;
    /**
     * Attribute ResourceDiscoveryAssociationCount: The number of resource discovery objects associated with IPAM.
     */
    readonly attrResourceDiscoveryAssociationCount: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the IPAM.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::Ipam`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpam`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipam
 */
export declare class Ipam extends ros.Resource implements IIpam {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: IpamProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the IPAM.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DefaultResourceDiscoveryAssociationId: After an IPAM is created, the association between the resource discovery created by the system by default and the IPAM.
     */
    readonly attrDefaultResourceDiscoveryAssociationId: ros.IResolvable | string;
    /**
     * Attribute DefaultResourceDiscoveryId: After IPAM is created, the system creates resource discovery by default.
     */
    readonly attrDefaultResourceDiscoveryId: ros.IResolvable | string;
    /**
     * Attribute IpamDescription: The description of IPAM.
     */
    readonly attrIpamDescription: ros.IResolvable | string;
    /**
     * Attribute IpamId: The first ID of the resource.
     */
    readonly attrIpamId: ros.IResolvable | string;
    /**
     * Attribute IpamName: The name of the IPAM.
     */
    readonly attrIpamName: ros.IResolvable | string;
    /**
     * Attribute OperatingRegionList: List of IPAM effective regions.
     */
    readonly attrOperatingRegionList: ros.IResolvable | string;
    /**
     * Attribute PrivateDefaultScopeId: After an IPAM is created, the scope of the private network IPAM created by the system by default.
     */
    readonly attrPrivateDefaultScopeId: ros.IResolvable | string;
    /**
     * Attribute PublicDefaultScopeId: After an IPAM is created, the public network IPAM is created by default.
     */
    readonly attrPublicDefaultScopeId: ros.IResolvable | string;
    /**
     * Attribute ResourceDiscoveryAssociationCount: The number of resource discovery objects associated with IPAM.
     */
    readonly attrResourceDiscoveryAssociationCount: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the IPAM.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IpamProps, enableResourcePropertyConstraint?: boolean);
}
