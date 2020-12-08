import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './ram.generated';
export { RosGroup as GroupProperty };
/**
 * Properties for defining a `ALIYUN::RAM::Group`
 */
export interface GroupProps {
    /**
     * @Property groupName: Specifies the group name, containing up to 64 characters.
     */
    readonly groupName: string;
    /**
     * @Property comments: Remark information, up to 128 characters or Chinese characters.
     */
    readonly comments?: string;
    /**
     * @Property policies: Describes what actions are allowed on what resources.
     */
    readonly policies?: Array<RosGroup.PoliciesProperty | ros.IResolvable> | ros.IResolvable;
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
     * @Attribute GroupName: Id of ram group.
     */
    readonly attrGroupName: any;
    /**
     * Create a new `ALIYUN::RAM::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint?: boolean);
}
