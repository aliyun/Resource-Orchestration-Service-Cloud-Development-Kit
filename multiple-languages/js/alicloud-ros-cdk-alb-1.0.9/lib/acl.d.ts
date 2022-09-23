import * as ros from '@alicloud/ros-cdk-core';
import { RosAcl } from './alb.generated';
export { RosAcl as AclProperty };
/**
 * Properties for defining a `ALIYUN::ALB::Acl`
 */
export interface AclProps {
    /**
     * Property aclEntries: undefined
     */
    readonly aclEntries?: Array<RosAcl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property aclName: The name of the ACL. The name must be 2 to 128 characters in length, and can contain
     * letters, digits, hyphens (-) and underscores (_). It must start with a letter.
     */
    readonly aclName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ALB::Acl`
 */
export declare class Acl extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ALB::Acl`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AclProps, enableResourcePropertyConstraint?: boolean);
}
