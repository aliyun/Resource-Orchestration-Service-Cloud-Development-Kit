import * as ros from '@alicloud/ros-cdk-core';
import { RosGroups } from './rocketmq.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroups as GroupsProperty };

/**
 * Properties for defining a `Groups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-groups
 */
export interface GroupsProps {

    /**
     * Property groupName: GroupName
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * Property groupType: GroupType
     */
    readonly groupType?: string | ros.IResolvable;

    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Groups`.
 */
export interface IGroups extends ros.IResource {
    readonly props: GroupsProps;

    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable | string;

    /**
     * Attribute Groups: The list of groups.
     */
    readonly attrGroups: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ROCKETMQ::Groups`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rocketmq-groups
 */
export class Groups extends ros.Resource implements IGroups {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GroupsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupNames: The list of group names.
     */
    public readonly attrGroupNames: ros.IResolvable | string;

    /**
     * Attribute Groups: The list of groups.
     */
    public readonly attrGroups: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGroups = new RosGroups(this, id,  {
            groupName: props.groupName,
            groupType: props.groupType,
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroups;
        this.attrGroupNames = rosGroups.attrGroupNames;
        this.attrGroups = rosGroups.attrGroups;
    }
}
