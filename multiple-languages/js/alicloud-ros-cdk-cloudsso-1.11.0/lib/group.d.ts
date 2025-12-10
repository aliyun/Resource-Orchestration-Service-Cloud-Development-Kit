import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './cloudsso.generated';
export { RosGroup as GroupProperty };
/**
 * Properties for defining a `Group`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
 */
export interface GroupProps {
    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * Property groupName: The name of the group.
     * The name can contain letters, digits, underscores (_), hyphens (-), and periods (.).
     * The name can be up to 128 characters in length.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * Property description: The description of the group.
     * The description can be up to 1,024 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `Group`.
 */
export interface IGroup extends ros.IResource {
    readonly props: GroupProps;
    /**
     * Attribute GroupId: The ID of the group.
     */
    readonly attrGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::Group`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-group
 */
export declare class Group extends ros.Resource implements IGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupId: The ID of the group.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint?: boolean);
}
