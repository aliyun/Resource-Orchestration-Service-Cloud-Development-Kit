package alicloudroscdkconfig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkconfig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ReportTemplate`.
type IReportTemplate interface {
	alicloudroscdkcore.IResource
	// Attribute ReportFileFormats: Report Format.
	//
	// Currently only support `excel`.
	AttrReportFileFormats() interface{}
	// Attribute ReportGranularity: Report Aggregation Granularity.
	AttrReportGranularity() interface{}
	// Attribute ReportLanguage: Report Content Language, Currently only support `zh-CN` or `en-US`.
	AttrReportLanguage() interface{}
	// Attribute ReportScope: Report range, yes and logic between multiple sets of k-v pairs.
	AttrReportScope() interface{}
	// Attribute ReportTemplateDescription: Report Template Description.
	AttrReportTemplateDescription() interface{}
	// Attribute ReportTemplateId: Report template Id.
	AttrReportTemplateId() interface{}
	// Attribute ReportTemplateName: Report Template Name.
	AttrReportTemplateName() interface{}
	// Attribute SubscriptionFrequency: Report subscription frequency.
	//
	// If this field is not empty, it is a Cron expression in Quartz format triggered by the subscription notification.
	AttrSubscriptionFrequency() interface{}
	Props() *ReportTemplateProps
}

// The jsii proxy for IReportTemplate
type jsiiProxy_IReportTemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IReportTemplate) AttrReportFileFormats() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReportFileFormats",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReportTemplate) AttrReportGranularity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReportGranularity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReportTemplate) AttrReportLanguage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReportLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReportTemplate) AttrReportScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReportScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReportTemplate) AttrReportTemplateDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReportTemplateDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReportTemplate) AttrReportTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReportTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReportTemplate) AttrReportTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReportTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReportTemplate) AttrSubscriptionFrequency() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubscriptionFrequency",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReportTemplate) Props() *ReportTemplateProps {
	var returns *ReportTemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

