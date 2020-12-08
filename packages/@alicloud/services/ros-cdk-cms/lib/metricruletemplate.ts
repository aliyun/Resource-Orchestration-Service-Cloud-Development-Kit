import * as ros from '@alicloud/ros-cdk-core';
import { RosMetricRuleTemplate } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMetricRuleTemplate as MetricRuleTemplateProperty };

/**
 * Properties for defining a `ALIYUN::CMS::MetricRuleTemplate`
 */
export interface MetricRuleTemplateProps {

    /**
     * @Property name: The name of the alert template.
     */
    readonly name: string;

    /**
     * @Property alertTemplates: Valid values of N: 0 to 200.
     */
    readonly alertTemplates?: Array<RosMetricRuleTemplate.AlertTemplatesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the alert template.
     */
    readonly description?: string;

    /**
     * @Property restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
     * to obtain information about the alert templates. The combination of version and ID
     * uniquely identifies an alert template.
     */
    readonly restVersion?: number;

    /**
     * @Property templateId: The ID of the alert template.
     */
    readonly templateId?: number;
}

/**
 * A ROS resource type:  `ALIYUN::CMS::MetricRuleTemplate`
 */
export class MetricRuleTemplate extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute Id: Alarm template ID.
     */
    public readonly attrId: any;

    /**
     * Create a new `ALIYUN::CMS::MetricRuleTemplate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MetricRuleTemplateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
