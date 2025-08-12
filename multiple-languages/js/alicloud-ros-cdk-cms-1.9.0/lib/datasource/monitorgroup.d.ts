import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroup } from './cms.generated';
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
 * Represents a `MonitorGroup`.
 */
export interface IMonitorGroup extends ros.IResource {
    readonly props: MonitorGroupProps;
    /**
     * Attribute BindUrl: BindUrl.
     */
    readonly attrBindUrl: ros.IResolvable | string;
    /**
     * Attribute ContactGroups: AlarmContactGroupName.
     */
    readonly attrContactGroups: ros.IResolvable | string;
    /**
     * Attribute CreateTime: GmtCreate.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DynamicTagRuleId: DynamicTagRuleId.
     */
    readonly attrDynamicTagRuleId: ros.IResolvable | string;
    /**
     * Attribute GmtModified: GmtModified.
     */
    readonly attrGmtModified: ros.IResolvable | string;
    /**
     * Attribute GroupId: GroupId.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute MonitorGroupName: MonitorGroupName.
     */
    readonly attrMonitorGroupName: ros.IResolvable | string;
    /**
     * Attribute ServiceId: ServiceId.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TemplateIds: TemplateIds.
     */
    readonly attrTemplateIds: ros.IResolvable | string;
    /**
     * Attribute Type: Type.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::MonitorGroup`, which is used to query the information about an application group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitorGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
 */
export declare class MonitorGroup extends ros.Resource implements IMonitorGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MonitorGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BindUrl: BindUrl.
     */
    readonly attrBindUrl: ros.IResolvable | string;
    /**
     * Attribute ContactGroups: AlarmContactGroupName.
     */
    readonly attrContactGroups: ros.IResolvable | string;
    /**
     * Attribute CreateTime: GmtCreate.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DynamicTagRuleId: DynamicTagRuleId.
     */
    readonly attrDynamicTagRuleId: ros.IResolvable | string;
    /**
     * Attribute GmtModified: GmtModified.
     */
    readonly attrGmtModified: ros.IResolvable | string;
    /**
     * Attribute GroupId: GroupId.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute MonitorGroupName: MonitorGroupName.
     */
    readonly attrMonitorGroupName: ros.IResolvable | string;
    /**
     * Attribute ServiceId: ServiceId.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TemplateIds: TemplateIds.
     */
    readonly attrTemplateIds: ros.IResolvable | string;
    /**
     * Attribute Type: Type.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupProps, enableResourcePropertyConstraint?: boolean);
}
