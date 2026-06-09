package alicloudroscdkconfig


// Properties for defining a `ReportTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
type ReportTemplateProps struct {
	// Property reportTemplateName: Report Template Name.
	ReportTemplateName interface{} `field:"required" json:"reportTemplateName" yaml:"reportTemplateName"`
	// Property reportFileFormats: Report Format.
	//
	// Currently only support `excel`.
	ReportFileFormats interface{} `field:"optional" json:"reportFileFormats" yaml:"reportFileFormats"`
	// Property reportGranularity: Report Aggregation Granularity.
	ReportGranularity interface{} `field:"optional" json:"reportGranularity" yaml:"reportGranularity"`
	// Property reportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.
	ReportLanguage interface{} `field:"optional" json:"reportLanguage" yaml:"reportLanguage"`
	// Property reportScope: Report range, yes and logic between multiple sets of k-v pairs.
	ReportScope interface{} `field:"optional" json:"reportScope" yaml:"reportScope"`
	// Property reportTemplateDescription: Report Template Description.
	ReportTemplateDescription interface{} `field:"optional" json:"reportTemplateDescription" yaml:"reportTemplateDescription"`
	// Property subscriptionFrequency: Report subscription frequency.
	//
	// If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
	// The format is: Seconds, time, day, month, week. The following are examples of commonly used Cron expressions:
	// - Execute at 0 o'clock every day: 0 0 0 * *?
	// - Every Monday at 15: 30: 0 30 15? * MON
	// - Execute at 2 o'clock on the 1st of each month: 0 0 2 1 *?
	// Among them:
	// - "*" Indicates any value
	// - What-? Used for day and week fields, indicating that no specific value is specified
	// - MON means Monday
	// > The trigger time is UTC +8, and the settings of the cron expression can be converted according to the time zone.
	// > It can only be triggered according to the cron expression time as much as possible. The cron expression limits the same template to trigger at most one notification per day.
	SubscriptionFrequency interface{} `field:"optional" json:"subscriptionFrequency" yaml:"subscriptionFrequency"`
}

