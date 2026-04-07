import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './threatdetection.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroup as GroupProperty };

/**
 * Properties for defining a `Group`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
 */
export interface GroupProps {

    /**
     * Property groupId: The ID of the server group for which you want to add to or remove servers.
     * >  To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
     */
    readonly groupId?: number | ros.IResolvable;

    /**
     * Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     * >  To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
     */
    readonly groupName?: string | ros.IResolvable;
}

/**
 * Represents a `Group`.
 */
export interface IGroup extends ros.IResource {
    readonly props: GroupProps;

    /**
     * Attribute GroupFlag: The type of the server group.
     */
    readonly attrGroupFlag: ros.IResolvable | string;

    /**
     * Attribute GroupId: The ID of the server group for which you want to add to or remove servers.
     */
    readonly attrGroupId: ros.IResolvable | string;

    /**
     * Attribute GroupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     */
    readonly attrGroupName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::Group`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
 */
export class Group extends ros.Resource implements IGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupFlag: The type of the server group.
     */
    public readonly attrGroupFlag: ros.IResolvable | string;

    /**
     * Attribute GroupId: The ID of the server group for which you want to add to or remove servers.
     */
    public readonly attrGroupId: ros.IResolvable | string;

    /**
     * Attribute GroupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.
     */
    public readonly attrGroupName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGroup = new RosGroup(this, id,  {
            groupName: props.groupName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGroupFlag = rosGroup.attrGroupFlag;
        this.attrGroupId = rosGroup.attrGroupId;
        this.attrGroupName = rosGroup.attrGroupName;
    }
}
