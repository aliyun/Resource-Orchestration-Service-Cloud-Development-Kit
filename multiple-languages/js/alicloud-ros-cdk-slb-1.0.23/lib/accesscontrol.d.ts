import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessControl } from './slb.generated';
export { RosAccessControl as AccessControlProperty };
/**
 * Properties for defining a `AccessControl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesscontrol
 */
export interface AccessControlProps {
    /**
     * Property aclName: The name of the access control list.
     */
    readonly aclName: string | ros.IResolvable;
    /**
     * Property aclEntries: A list of acl entries. Each entry can be IP addresses or CIDR blocks. Max length: 50.
     */
    readonly aclEntries?: Array<RosAccessControl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosAccessControl.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::AccessControl`, which is used to create an access control list (ACL).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessControl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-accesscontrol
 */
export declare class AccessControl extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccessControlProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclId: The ID of the access control list.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessControlProps, enableResourcePropertyConstraint?: boolean);
}
