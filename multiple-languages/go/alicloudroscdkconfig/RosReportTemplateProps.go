package alicloudroscdkconfig


// Properties for defining a `RosReportTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-reporttemplate
type RosReportTemplateProps struct {
	ReportTemplateName interface{} `field:"required" json:"reportTemplateName" yaml:"reportTemplateName"`
	ReportFileFormats interface{} `field:"optional" json:"reportFileFormats" yaml:"reportFileFormats"`
	ReportGranularity interface{} `field:"optional" json:"reportGranularity" yaml:"reportGranularity"`
	ReportLanguage interface{} `field:"optional" json:"reportLanguage" yaml:"reportLanguage"`
	ReportScope interface{} `field:"optional" json:"reportScope" yaml:"reportScope"`
	ReportTemplateDescription interface{} `field:"optional" json:"reportTemplateDescription" yaml:"reportTemplateDescription"`
	SubscriptionFrequency interface{} `field:"optional" json:"subscriptionFrequency" yaml:"subscriptionFrequency"`
}

