import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessControl } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `AccessControl`.
 */
export interface IAccessControl extends ros.IResource {
    readonly props: AccessControlProps;

    /**
     * Attribute AclEntries: The IP entries that you want to remove from the network ACL.
     */
    readonly attrAclEntries: ros.IResolvable | string;

    /**
     * Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AclName: The ACL name.
     */
    readonly attrAclName: ros.IResolvable | string;

    /**
     * Attribute AddressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;

    /**
     * Attribute RelatedListeners: The listeners that are associated with the network ACL.
     */
    readonly attrRelatedListeners: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::AccessControl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessControl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrol
 */
export class AccessControl extends ros.Resource implements IAccessControl {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccessControlProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclEntries: The IP entries that you want to remove from the network ACL.
     */
    public readonly attrAclEntries: ros.IResolvable | string;

    /**
     * Attribute AclId: The ID of the ACL.
     */
    public readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AclName: The ACL name.
     */
    public readonly attrAclName: ros.IResolvable | string;

    /**
     * Attribute AddressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    public readonly attrAddressIpVersion: ros.IResolvable | string;

    /**
     * Attribute RelatedListeners: The listeners that are associated with the network ACL.
     */
    public readonly attrRelatedListeners: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group ID.
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
    constructor(scope: ros.Construct, id: string, props: AccessControlProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccessControl = new RosAccessControl(this, id,  {
            aclId: props.aclId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessControl;
        this.attrAclEntries = rosAccessControl.attrAclEntries;
        this.attrAclId = rosAccessControl.attrAclId;
        this.attrAclName = rosAccessControl.attrAclName;
        this.attrAddressIpVersion = rosAccessControl.attrAddressIpVersion;
        this.attrRelatedListeners = rosAccessControl.attrRelatedListeners;
        this.attrResourceGroupId = rosAccessControl.attrResourceGroupId;
        this.attrTags = rosAccessControl.attrTags;
    }
}
