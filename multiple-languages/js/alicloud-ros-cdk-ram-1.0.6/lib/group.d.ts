import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './ram.generated';
export { RosGroup as GroupProperty };
/**
 * Properties for defining a `ALIYUN::RAM::Group`
 */
export interface GroupProps {
    /**
     * Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    readonly comments?: string | ros.IResolvable;
    /**
     * Property deletionForce: Whether force detach the policies attached to the group. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property policyAttachments: System and custom policy names to attach.
     */
    readonly policyAttachments?: RosGroup.PolicyAttachmentsProperty | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::RAM::Group`
 */
export declare class Group extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute GroupName: Id of ram group.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::RAM::Group`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=group.d.ts.map