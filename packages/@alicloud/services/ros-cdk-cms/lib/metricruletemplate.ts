import * as ros from '@alicloud/ros-cdk-core';
import { RosMetricRuleTemplate } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMetricRuleTemplate as MetricRuleTemplateProperty };

/**
 * Properties for defining a `MetricRuleTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplate
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::MetricRuleTemplate`, which is used to create an alert template.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMetricRuleTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-metricruletemplate
 */
export class MetricRuleTemplate extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MetricRuleTemplateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Id: Alarm template ID.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricRuleTemplateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMetricRuleTemplate = new RosMetricRuleTemplate(this, id,  {
            alertTemplates: props.alertTemplates,
            description: props.description,
            restVersion: props.restVersion,
            templateId: props.templateId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMetricRuleTemplate;
        this.attrId = rosMetricRuleTemplate.attrId;
    }
}
