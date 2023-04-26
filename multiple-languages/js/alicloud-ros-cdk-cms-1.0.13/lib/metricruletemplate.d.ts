import * as ros from '@alicloud/ros-cdk-core';
import { RosMetricRuleTemplate } from './cms.generated';
export { RosMetricRuleTemplate as MetricRuleTemplateProperty };
/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTemplate`
 */
export interface MetricRuleTemplateProps {
    /**
     * Property name: The name of the alert template.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property alertTemplates: Valid values of N: 0 to 200.
     */
    readonly alertTemplates?: Array<RosMetricRuleTemplate.AlertTemplatesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property description: The description of the alert template.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
     * to obtain information about the alert templates. The combination of version and ID
     * uniquely identifies an alert template.
     */
    readonly restVersion?: number | ros.IResolvable;
    /**
     * Property templateId: The ID of the alert template.
     */
    readonly templateId?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CMS::MetricRuleTemplate`
 */
export declare class MetricRuleTemplate extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Id: Alarm template ID.
     */
    readonly attrId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CMS::MetricRuleTemplate`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricRuleTemplateProps, enableResourcePropertyConstraint?: boolean);
}
