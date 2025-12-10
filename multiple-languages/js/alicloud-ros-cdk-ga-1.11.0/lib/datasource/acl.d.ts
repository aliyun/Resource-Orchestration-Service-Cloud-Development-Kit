import * as ros from '@alicloud/ros-cdk-core';
import { RosAcl } from './ga.generated';
export { RosAcl as AclProperty };
/**
 * Properties for defining a `Acl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acl
 */
export interface AclProps {
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
 * Represents a `Acl`.
 */
export interface IAcl extends ros.IResource {
    readonly props: AclProps;
    /**
     * Attribute AclEntries: The entries of the ACL.
     */
    readonly attrAclEntries: ros.IResolvable | string;
    /**
     * Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable | string;
    /**
     * Attribute AclName: The ID of the GA instance.
     */
    readonly attrAclName: ros.IResolvable | string;
    /**
     * Attribute AddressIPVersion: The ID of the network ACL.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The name of the network ACL.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the ACL.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GA::Acl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acl
 */
export declare class Acl extends ros.Resource implements IAcl {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AclProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclEntries: The entries of the ACL.
     */
    readonly attrAclEntries: ros.IResolvable | string;
    /**
     * Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable | string;
    /**
     * Attribute AclName: The ID of the GA instance.
     */
    readonly attrAclName: ros.IResolvable | string;
    /**
     * Attribute AddressIPVersion: The ID of the network ACL.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The name of the network ACL.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the ACL.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclProps, enableResourcePropertyConstraint?: boolean);
}
