import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './rocketmq.generated';
export { RosGroup as GroupProperty };
/**
 * Properties for defining a `Group`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-group
 */
export interface GroupProps {
    /**
     * Property groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
     * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
     * A group ID ranges from 7 to 64 bytes.
     * Once a group ID is created, it cannot be edited anymore.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
     * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
     * http: represents the Group ID was created only for the HTTP protocol messaging.
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * Property remark: The remarks on the request.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * Represents a `Group`.
 */
export interface IGroup extends ros.IResource {
    readonly props: GroupProps;
    /**
     * Attribute GroupId: Group ID
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute GroupType: Group Type
     */
    readonly attrGroupType: ros.IResolvable | string;
    /**
     * Attribute InstanceId: Instance ID
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROCKETMQ::Group`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-group
 */
export declare class Group extends ros.Resource implements IGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupId: Group ID
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute GroupType: Group Type
     */
    readonly attrGroupType: ros.IResolvable | string;
    /**
     * Attribute InstanceId: Instance ID
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint?: boolean);
}
