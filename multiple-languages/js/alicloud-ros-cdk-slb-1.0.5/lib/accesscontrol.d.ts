import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessControl } from './slb.generated';
export { RosAccessControl as AccessControlProperty };
/**
 * Properties for defining a `ALIYUN::SLB::AccessControl`
 */
export interface AccessControlProps {
    /**
     * Property aclName: The name of the access control list.
     */
    readonly aclName: string | ros.IResolvable;
    /**
     * Property aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
     */
    readonly aclEntrys?: Array<RosAccessControl.AclEntrysProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosAccessControl.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::SLB::AccessControl`
 */
export declare class AccessControl extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AclId: The ID of the access control list.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLB::AccessControl`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessControlProps, enableResourcePropertyConstraint?: boolean);
}
