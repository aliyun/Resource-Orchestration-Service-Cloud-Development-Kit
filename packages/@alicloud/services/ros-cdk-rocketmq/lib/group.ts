import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './rocketmq.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROCKETMQ::Group`, which is used to create a Group ID on the ROCKETMQ client. The Group ID that you create is used to publish and subscribe to messages.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq-group
 */
export class Group extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupId: Group ID
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * Attribute GroupType: Group Type
     */
    public readonly attrGroupType: ros.IResolvable;

    /**
     * Attribute InstanceId: Instance ID
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGroup = new RosGroup(this, id,  {
            groupType: props.groupType,
            instanceId: props.instanceId,
            remark: props.remark,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGroupId = rosGroup.attrGroupId;
        this.attrGroupType = rosGroup.attrGroupType;
        this.attrInstanceId = rosGroup.attrInstanceId;
    }
}
