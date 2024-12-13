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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::MonitorGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitorGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroup
 */
export declare class MonitorGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MonitorGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BindUrl: BindUrl.
     */
    readonly attrBindUrl: ros.IResolvable;
    /**
     * Attribute ContactGroups: AlarmContactGroupName.
     */
    readonly attrContactGroups: ros.IResolvable;
    /**
     * Attribute CreateTime: GmtCreate.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DynamicTagRuleId: DynamicTagRuleId.
     */
    readonly attrDynamicTagRuleId: ros.IResolvable;
    /**
     * Attribute GmtModified: GmtModified.
     */
    readonly attrGmtModified: ros.IResolvable;
    /**
     * Attribute GroupId: GroupId.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * Attribute MonitorGroupName: MonitorGroupName.
     */
    readonly attrMonitorGroupName: ros.IResolvable;
    /**
     * Attribute ServiceId: ServiceId.
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute TemplateIds: TemplateIds.
     */
    readonly attrTemplateIds: ros.IResolvable;
    /**
     * Attribute Type: Type.
     */
    readonly attrType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupProps, enableResourcePropertyConstraint?: boolean);
}
