import * as ros from '@alicloud/ros-cdk-core';
import { RosACL } from './sag.generated';
export { RosACL as ACLProperty };
/**
 * Properties for defining a `ALIYUN::SAG::ACL`
 */
export interface ACLProps {
    /**
     * Property name: Access control name.
     * The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https://.
     */
    readonly name: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SAG::ACL`
 */
export declare class Acl extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AclId: Access control set ID.
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::ACL`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ACLProps, enableResourcePropertyConstraint?: boolean);
}
