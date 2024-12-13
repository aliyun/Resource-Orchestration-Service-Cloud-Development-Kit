import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessControl } from './slb.generated';
export { RosAccessControl as AccessControlProperty };
/**
 * Properties for defining a `AccessControl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
 */
export interface AccessControlProps {
    /**
     * Property aclId: The ID of the ACL.
     */
    readonly aclId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::AccessControl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessControl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
 */
export declare class AccessControl extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccessControlProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclEntries: The IP entries that you want to remove from the network ACL.
     */
    readonly attrAclEntries: ros.IResolvable;
    /**
     * Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * Attribute AclName: The ACL name.
     */
    readonly attrAclName: ros.IResolvable;
    /**
     * Attribute AddressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * Attribute RelatedListeners: The listeners that are associated with the network ACL.
     */
    readonly attrRelatedListeners: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The resource group ID.
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
    constructor(scope: ros.Construct, id: string, props: AccessControlProps, enableResourcePropertyConstraint?: boolean);
}
