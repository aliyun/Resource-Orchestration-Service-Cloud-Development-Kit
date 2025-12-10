import * as ros from '@alicloud/ros-cdk-core';
import { RosAcl } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `Acl`.
 */
export interface IAcl extends ros.IResource {
    readonly props: AclProps;

    /**
     * Attribute AclEntries: The entries of the ACL.
     */
    readonly attrAclEntries: ros.IResolvable | string;

    /**
     * Attribute AclId: The  ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AclName: The name of the ACL.
     */
    readonly attrAclName: ros.IResolvable | string;

    /**
     * Attribute AddressIPVersion: The IP version of the ACL.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::Acl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-acl
 */
export class Acl extends ros.Resource implements IAcl {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AclProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclEntries: The entries of the ACL.
     */
    public readonly attrAclEntries: ros.IResolvable | string;

    /**
     * Attribute AclId: The  ID of the ACL.
     */
    public readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AclName: The name of the ACL.
     */
    public readonly attrAclName: ros.IResolvable | string;

    /**
     * Attribute AddressIPVersion: The IP version of the ACL.
     */
    public readonly attrAddressIpVersion: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAcl = new RosAcl(this, id,  {
            aclEntries: props.aclEntries,
            resourceGroupId: props.resourceGroupId,
            addressIpVersion: props.addressIpVersion,
            aclName: props.aclName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAcl;
        this.attrAclEntries = rosAcl.attrAclEntries;
        this.attrAclId = rosAcl.attrAclId;
        this.attrAclName = rosAcl.attrAclName;
        this.attrAddressIpVersion = rosAcl.attrAddressIpVersion;
        this.attrResourceGroupId = rosAcl.attrResourceGroupId;
        this.attrTags = rosAcl.attrTags;
    }
}
