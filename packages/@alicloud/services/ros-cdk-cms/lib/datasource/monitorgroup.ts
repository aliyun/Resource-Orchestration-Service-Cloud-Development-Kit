import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroup } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMonitorGroup as MonitorGroupProperty };

/**
 * Properties for defining a `MonitorGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
 */
export interface MonitorGroupProps {

    /**
     * Property groupId: GroupId.
     */
    readonly groupId: number | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::MonitorGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitorGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
 */
export class MonitorGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MonitorGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BindUrl: BindUrl.
     */
    public readonly attrBindUrl: ros.IResolvable;

    /**
     * Attribute ContactGroups: AlarmContactGroupName.
     */
    public readonly attrContactGroups: ros.IResolvable;

    /**
     * Attribute CreateTime: GmtCreate.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DynamicTagRuleId: DynamicTagRuleId.
     */
    public readonly attrDynamicTagRuleId: ros.IResolvable;

    /**
     * Attribute GmtModified: GmtModified.
     */
    public readonly attrGmtModified: ros.IResolvable;

    /**
     * Attribute GroupId: GroupId.
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * Attribute MonitorGroupName: MonitorGroupName.
     */
    public readonly attrMonitorGroupName: ros.IResolvable;

    /**
     * Attribute ServiceId: ServiceId.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * Attribute Tags: Tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute TemplateIds: TemplateIds.
     */
    public readonly attrTemplateIds: ros.IResolvable;

    /**
     * Attribute Type: Type.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMonitorGroup = new RosMonitorGroup(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitorGroup;
        this.attrBindUrl = rosMonitorGroup.attrBindUrl;
        this.attrContactGroups = rosMonitorGroup.attrContactGroups;
        this.attrCreateTime = rosMonitorGroup.attrCreateTime;
        this.attrDynamicTagRuleId = rosMonitorGroup.attrDynamicTagRuleId;
        this.attrGmtModified = rosMonitorGroup.attrGmtModified;
        this.attrGroupId = rosMonitorGroup.attrGroupId;
        this.attrMonitorGroupName = rosMonitorGroup.attrMonitorGroupName;
        this.attrServiceId = rosMonitorGroup.attrServiceId;
        this.attrTags = rosMonitorGroup.attrTags;
        this.attrTemplateIds = rosMonitorGroup.attrTemplateIds;
        this.attrType = rosMonitorGroup.attrType;
    }
}
