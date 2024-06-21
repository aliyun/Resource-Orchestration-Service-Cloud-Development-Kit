import * as ros from '@alicloud/ros-cdk-core';
import { RosAcl } from './ga.generated';
export { RosAcl as AclProperty };
/**
 * Properties for defining a `Acl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
 */
export interface AclProps {
    /**
     * Property addressIpVersion: The IP version of the ACL.
     */
    readonly addressIpVersion: string | ros.IResolvable;
    /**
     * Property aclEntries: The entries of IP addresses or CIDR blocks to add to the ACL. You can add up to 20 entries.
     */
    readonly aclEntries?: Array<RosAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property aclName: The name of the ACL.
     */
    readonly aclName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of the ACL.
     */
    readonly tags?: RosAcl.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::Acl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
 */
export declare class Acl extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AclProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclEntries: The entries of the ACL.
     */
    readonly attrAclEntries: ros.IResolvable;
    /**
     * Attribute AclId: The  ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * Attribute AclName: The name of the ACL.
     */
    readonly attrAclName: ros.IResolvable;
    /**
     * Attribute AddressIPVersion: The IP version of the ACL.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclProps, enableResourcePropertyConstraint?: boolean);
}
