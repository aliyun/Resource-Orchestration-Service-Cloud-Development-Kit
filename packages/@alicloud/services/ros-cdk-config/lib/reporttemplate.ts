import * as ros from '@alicloud/ros-cdk-core';
import { RosReportTemplate } from './config.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosReportTemplate as ReportTemplateProperty };

/**
 * Properties for defining a `ReportTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
 */
export interface ReportTemplateProps {

    /**
     * Property reportTemplateName: Report Template Name.
     */
    readonly reportTemplateName: string | ros.IResolvable;

    /**
     * Property reportFileFormats: Report Format. Currently only support `excel`.
     */
    readonly reportFileFormats?: string | ros.IResolvable;

    /**
     * Property reportGranularity: Report Aggregation Granularity.
     */
    readonly reportGranularity?: string | ros.IResolvable;

    /**
     * Property reportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.
     */
    readonly reportLanguage?: string | ros.IResolvable;

    /**
     * Property reportScope: Report range, yes and logic between multiple sets of k-v pairs.
     */
    readonly reportScope?: Array<RosReportTemplate.ReportScopeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property reportTemplateDescription: Report Template Description.
     */
    readonly reportTemplateDescription?: string | ros.IResolvable;

    /**
     * Property subscriptionFrequency: Report subscription frequency. If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
     * The format is: Seconds, time, day, month, week. The following are examples of commonly used Cron expressions:
     * - Execute at 0 o'clock every day: 0 0 0 * *?
     * - Every Monday at 15: 30: 0 30 15? * MON
     * - Execute at 2 o'clock on the 1st of each month: 0 0 2 1 *?
     * Among them:
     * - "*" Indicates any value
     * - What-? Used for day and week fields, indicating that no specific value is specified
     * - MON means Monday
     * > The trigger time is UTC +8, and the settings of the cron expression can be converted according to the time zone.
     * > It can only be triggered according to the cron expression time as much as possible. The cron expression limits the same template to trigger at most one notification per day.
     */
    readonly subscriptionFrequency?: string | ros.IResolvable;
}

/**
 * Represents a `ReportTemplate`.
 */
export interface IReportTemplate extends ros.IResource {
    readonly props: ReportTemplateProps;

    /**
     * Attribute ReportFileFormats: Report Format. Currently only support `excel`.
     */
    readonly attrReportFileFormats: ros.IResolvable | string;

    /**
     * Attribute ReportGranularity: Report Aggregation Granularity.
     */
    readonly attrReportGranularity: ros.IResolvable | string;

    /**
     * Attribute ReportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.
     */
    readonly attrReportLanguage: ros.IResolvable | string;

    /**
     * Attribute ReportScope: Report range, yes and logic between multiple sets of k-v pairs.
     */
    readonly attrReportScope: ros.IResolvable | string;

    /**
     * Attribute ReportTemplateDescription: Report Template Description.
     */
    readonly attrReportTemplateDescription: ros.IResolvable | string;

    /**
     * Attribute ReportTemplateId: Report template Id.
     */
    readonly attrReportTemplateId: ros.IResolvable | string;

    /**
     * Attribute ReportTemplateName: Report Template Name.
     */
    readonly attrReportTemplateName: ros.IResolvable | string;

    /**
     * Attribute SubscriptionFrequency: Report subscription frequency. If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
     */
    readonly attrSubscriptionFrequency: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Config::ReportTemplate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosReportTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
 */
export class ReportTemplate extends ros.Resource implements IReportTemplate {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ReportTemplateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ReportFileFormats: Report Format. Currently only support `excel`.
     */
    public readonly attrReportFileFormats: ros.IResolvable | string;

    /**
     * Attribute ReportGranularity: Report Aggregation Granularity.
     */
    public readonly attrReportGranularity: ros.IResolvable | string;

    /**
     * Attribute ReportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.
     */
    public readonly attrReportLanguage: ros.IResolvable | string;

    /**
     * Attribute ReportScope: Report range, yes and logic between multiple sets of k-v pairs.
     */
    public readonly attrReportScope: ros.IResolvable | string;

    /**
     * Attribute ReportTemplateDescription: Report Template Description.
     */
    public readonly attrReportTemplateDescription: ros.IResolvable | string;

    /**
     * Attribute ReportTemplateId: Report template Id.
     */
    public readonly attrReportTemplateId: ros.IResolvable | string;

    /**
     * Attribute ReportTemplateName: Report Template Name.
     */
    public readonly attrReportTemplateName: ros.IResolvable | string;

    /**
     * Attribute SubscriptionFrequency: Report subscription frequency. If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
     */
    public readonly attrSubscriptionFrequency: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ReportTemplateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosReportTemplate = new RosReportTemplate(this, id,  {
            reportGranularity: props.reportGranularity,
            reportScope: props.reportScope,
            reportFileFormats: props.reportFileFormats,
            subscriptionFrequency: props.subscriptionFrequency,
            reportTemplateName: props.reportTemplateName,
            reportLanguage: props.reportLanguage,
            reportTemplateDescription: props.reportTemplateDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosReportTemplate;
        this.attrReportFileFormats = rosReportTemplate.attrReportFileFormats;
        this.attrReportGranularity = rosReportTemplate.attrReportGranularity;
        this.attrReportLanguage = rosReportTemplate.attrReportLanguage;
        this.attrReportScope = rosReportTemplate.attrReportScope;
        this.attrReportTemplateDescription = rosReportTemplate.attrReportTemplateDescription;
        this.attrReportTemplateId = rosReportTemplate.attrReportTemplateId;
        this.attrReportTemplateName = rosReportTemplate.attrReportTemplateName;
        this.attrSubscriptionFrequency = rosReportTemplate.attrSubscriptionFrequency;
    }
}
