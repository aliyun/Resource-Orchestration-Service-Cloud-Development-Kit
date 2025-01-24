package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MetricRuleTemplate`.
type IMetricRuleTemplate interface {
	alicloudroscdkcore.IResource
	// Attribute Id: Alarm template ID.
	AttrId() interface{}
	Props() *MetricRuleTemplateProps
}

// The jsii proxy for IMetricRuleTemplate
type jsiiProxy_IMetricRuleTemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMetricRuleTemplate) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMetricRuleTemplate) Props() *MetricRuleTemplateProps {
	var returns *MetricRuleTemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

