import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './rocketmq.generated';
export { RosGroup as GroupProperty };
/**
 * Properties for defining a `ALIYUN::ROCKETMQ::Group`
 */
export interface GroupProps {
    /**
     * @Property groupId: The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:
     * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
     * A group ID ranges from 7 to 64 bytes.
     * Once a group ID is created, it cannot be edited anymore.
     */
    readonly groupId: string;
    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;
    /**
     * @Property groupType: Group ID specify the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
     * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
     * http: represents the Group ID was created only for the HTTP protocol messaging.
     */
    readonly groupType?: string;
    /**
     * @Property remark: The remarks on the request.
     */
    readonly remark?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ::Group`
 */
export declare class Group extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute GroupId: Group ID
     */
    readonly attrGroupId: any;
    /**
     * @Attribute GroupType: Group Type
     */
    readonly attrGroupType: any;
    /**
     * @Attribute InstanceId: Instance ID
     */
    readonly attrInstanceId: any;
    /**
     * Create a new `ALIYUN::ROCKETMQ::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint?: boolean);
}
