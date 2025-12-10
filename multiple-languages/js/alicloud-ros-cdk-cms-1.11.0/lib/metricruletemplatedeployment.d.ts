import * as ros from '@alicloud/ros-cdk-core';
import { RosMetricRuleTemplateDeployment } from './cms.generated';
export { RosMetricRuleTemplateDeployment as MetricRuleTemplateDeploymentProperty };
/**
 * Properties for defining a `MetricRuleTemplateDeployment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplatedeployment
 */
export interface MetricRuleTemplateDeploymentProps {
    /**
     * Property groupId: Apply group ID.
     * For how to get the application group ID, see DescribeMonitorGroups.
     */
    readonly groupId: number | ros.IResolvable;
    /**
     * Property templateIds: The ID list of the Alarm Template to be applied.
     * For how to get the alarm template ID, see DescribeMetricRuleTemplateList.
     */
    readonly templateIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property appendMode: Template application policy.Value:
     * all: Delete all rules created by the alarm template on the selected group, and then create a new alarm rule by the template (default).
     * append: Delete the rules created by the alarm template on the selected group, and then create a new alarm rule based on the current template.
     */
    readonly appendMode?: string | ros.IResolvable;
    /**
     * Property applyMode: How to apply templates.Value:
     * GROUP_INSTANCE_FIRST: Application grouping instances are preferred.When applying an alarm template, the application grouping instance is preferred. If the instance does not exist in the application grouping, the rules in the template are ignored.
     * ALARM_TEMPLATE_FIRST: Alarm template instances are preferred.When an alarm template is applied, an alarm rule is created regardless of whether the instance exists in the application group.
     */
    readonly applyMode?: string | ros.IResolvable;
    /**
     * Property enableEndTime: The end time when the alarm takes effect.Value range: 0~23, indicating 00:59 to 23:59.
     */
    readonly enableEndTime?: number | ros.IResolvable;
    /**
     * Property enableStartTime: The start time when the alarm takes effect.Value range: 0~23, indicating 00:00 to 23:00.
     */
    readonly enableStartTime?: number | ros.IResolvable;
    /**
     * Property notifyLevel: Alarm notification method.Value:
     * 2: Phone + SMS + Email + Wangwang + DingTalk Robot.
     * 3: SMS + Email + Wangwang + DingTalk Robot.
     * 4: Wangwang + Dingding Robot.
     */
    readonly notifyLevel?: number | ros.IResolvable;
    /**
     * Property silenceTime: Channel silence period.Unit: seconds.Default value: 86400.
     * Note When the monitoring data continues to exceed the alarm rule threshold, only one alarm notification will be sent during each silence cycle.
     */
    readonly silenceTime?: number | ros.IResolvable;
    /**
     * Property webhook: When an alarm occurs, the specified URL address will be called back and a POST request will be sent.
     */
    readonly webhook?: string | ros.IResolvable;
}
/**
 * Represents a `MetricRuleTemplateDeployment`.
 */
export interface IMetricRuleTemplateDeployment extends ros.IResource {
    readonly props: MetricRuleTemplateDeploymentProps;
    /**
     * Attribute GroupId: The ID of the group that applied the template to.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute RuleIds: The IDs of rhe generated rules.
     */
    readonly attrRuleIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::MetricRuleTemplateDeployment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMetricRuleTemplateDeployment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplatedeployment
 */
export declare class MetricRuleTemplateDeployment extends ros.Resource implements IMetricRuleTemplateDeployment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MetricRuleTemplateDeploymentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupId: The ID of the group that applied the template to.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute RuleIds: The IDs of rhe generated rules.
     */
    readonly attrRuleIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricRuleTemplateDeploymentProps, enableResourcePropertyConstraint?: boolean);
}
