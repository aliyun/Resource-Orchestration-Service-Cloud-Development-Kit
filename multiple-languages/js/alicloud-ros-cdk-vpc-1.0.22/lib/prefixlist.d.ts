import * as ros from '@alicloud/ros-cdk-core';
import { RosPrefixList } from './vpc.generated';
export { RosPrefixList as PrefixListProperty };
/**
 * Properties for defining a `PrefixList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
 */
export interface PrefixListProps {
    /**
     * Property entries: The CIDR address block list of the prefix list.
     */
    readonly entries?: Array<RosPrefixList.EntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ipVersion: The IP version of the prefix list. Value:
     * - **IPvv4**:IPv4 version.
     * - **IPv6**:IPv6.
     */
    readonly ipVersion?: string | ros.IResolvable;
    /**
     * Property maxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    readonly maxEntries?: number | ros.IResolvable;
    /**
     * Property prefixListDescription: The description of the prefix list.
     * It must be 2 to 256 characters in length and must start with a letter or Chinese, but cannot start with http:\/\/ or https.
     */
    readonly prefixListDescription?: string | ros.IResolvable;
    /**
     * Property prefixListName: The name of the prefix list.
     */
    readonly prefixListName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of prefix list.
     */
    readonly tags?: RosPrefixList.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::PrefixList`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrefixList`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-prefixlist
 */
export declare class PrefixList extends ros.Resource {
    /**
     * Attribute CreateTime: The time when the prefix list was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Entries: The CIDR address block list of the prefix list.
     */
    readonly attrEntries: ros.IResolvable;
    /**
     * Attribute IpVersion: The IP version of the prefix list.
     */
    readonly attrIpVersion: ros.IResolvable;
    /**
     * Attribute MaxEntries: The maximum number of entries for CIDR address blocks in the prefix list.
     */
    readonly attrMaxEntries: ros.IResolvable;
    /**
     * Attribute OwnerId: The Alibaba Cloud account (primary account) to which the prefix list belongs.
     */
    readonly attrOwnerId: ros.IResolvable;
    /**
     * Attribute PrefixListDescription: The description of the prefix list.
     */
    readonly attrPrefixListDescription: ros.IResolvable;
    /**
     * Attribute PrefixListId: The ID of the query Prefix List.
     */
    readonly attrPrefixListId: ros.IResolvable;
    /**
     * Attribute PrefixListName: The name of the prefix list.
     */
    readonly attrPrefixListName: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute ShareType: The share type of the prefix list.
     */
    readonly attrShareType: ros.IResolvable;
    /**
     * Attribute Tags: The tags of PrefixList.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PrefixListProps, enableResourcePropertyConstraint?: boolean);
}
