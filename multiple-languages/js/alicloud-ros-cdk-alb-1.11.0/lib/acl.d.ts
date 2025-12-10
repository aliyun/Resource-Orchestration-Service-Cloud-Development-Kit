import * as ros from '@alicloud/ros-cdk-core';
import { RosAcl } from './alb.generated';
export { RosAcl as AclProperty };
/**
 * Properties for defining a `Acl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-acl
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
 * Represents a `Acl`.
 */
export interface IAcl extends ros.IResource {
    readonly props: AclProps;
    /**
     * Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::Acl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-acl
 */
export declare class Acl extends ros.Resource implements IAcl {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AclProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclId: The ID of the ACL.
     */
    readonly attrAclId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AclProps, enableResourcePropertyConstraint?: boolean);
}
