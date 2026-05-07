import * as ros from '@alicloud/ros-cdk-core';
import { RosACL } from './sag.generated';
export { RosACL as ACLProperty };
/**
 * Properties for defining a `ACL`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-acl
 */
export interface ACLProps {
    /**
     * Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name: string | ros.IResolvable;
}
/**
 * Represents a `ACL`.
 */
export interface IAcl extends ros.IResource {
    readonly props: ACLProps;
    /**
     * Attribute AclId: Access control set ID.
     */
    readonly attrAclId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::ACL`, which is used to create an access control list (ACL).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosACL`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-acl
 */
export declare class Acl extends ros.Resource implements IAcl {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ACLProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclId: Access control set ID.
     */
    readonly attrAclId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ACLProps, enableResourcePropertyConstraint?: boolean);
}
