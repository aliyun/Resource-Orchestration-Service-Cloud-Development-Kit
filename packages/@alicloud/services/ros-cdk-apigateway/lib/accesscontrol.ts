import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessControl } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessControl as AccessControlProperty };

/**
 * Properties for defining a `AccessControl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-accesscontrol
 */
export interface AccessControlProps {

    /**
     * Property accessControlListName: The name of the ACL. The name must be 1 to 30 characters in length, and can contain letters, digits, periods (.), hyphens (-), forward slashes (\/), and underscores (_). The name must be unique within the region.
     */
    readonly accessControlListName: string | ros.IResolvable;

    /**
     * Property aclEntrys: Information list of access control policies. You can add at most 50 IP addresses or CIDR blocks to an ACL in each call. If the IP address or CIDR block that you want to add to an ACL already exists, the IP address or CIDR block is not added. The entries that you add must be CIDR blocks.
     */
    readonly aclEntrys?: Array<RosAccessControl.AclEntrysProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
}

/**
 * Represents a `AccessControl`.
 */
export interface IAccessControl extends ros.IResource {
    readonly props: AccessControlProps;

    /**
     * Attribute AccessControlListName: The name of the ACL.
     */
    readonly attrAccessControlListName: ros.IResolvable | string;

    /**
     * Attribute AclEntrys: Information list of access control policies.
     */
    readonly attrAclEntrys: ros.IResolvable | string;

    /**
     * Attribute AclId: The ID of the access control list (ACL).
     */
    readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AddressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::AccessControl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessControl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-accesscontrol
 */
export class AccessControl extends ros.Resource implements IAccessControl {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccessControlProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccessControlListName: The name of the ACL.
     */
    public readonly attrAccessControlListName: ros.IResolvable | string;

    /**
     * Attribute AclEntrys: Information list of access control policies.
     */
    public readonly attrAclEntrys: ros.IResolvable | string;

    /**
     * Attribute AclId: The ID of the access control list (ACL).
     */
    public readonly attrAclId: ros.IResolvable | string;

    /**
     * Attribute AddressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    public readonly attrAddressIpVersion: ros.IResolvable | string;

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
            addressIpVersion: props.addressIpVersion,
            accessControlListName: props.accessControlListName,
            aclEntrys: props.aclEntrys,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessControl;
        this.attrAccessControlListName = rosAccessControl.attrAccessControlListName;
        this.attrAclEntrys = rosAccessControl.attrAclEntrys;
        this.attrAclId = rosAccessControl.attrAclId;
        this.attrAddressIpVersion = rosAccessControl.attrAddressIpVersion;
    }
}
