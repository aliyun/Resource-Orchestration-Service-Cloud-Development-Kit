import * as ros from '@alicloud/ros-cdk-core';
import { RosAcl } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GA::Acl`, which is used to query the information about an access control list (ACL).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acl
 */
export class Acl extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AclProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclEntries: The entries of the ACL.
     */
    public readonly attrAclEntries: ros.IResolvable;

    /**
     * Attribute AclId: The ID of the ACL.
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * Attribute AclName: The ID of the GA instance.
     */
    public readonly attrAclName: ros.IResolvable;

    /**
     * Attribute AddressIPVersion: The ID of the network ACL.
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The name of the network ACL.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Tags: The tag of the ACL.
     */
    public readonly attrTags: ros.IResolvable;

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
            aclId: props.aclId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
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
