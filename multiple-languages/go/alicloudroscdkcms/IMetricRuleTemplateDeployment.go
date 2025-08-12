package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MetricRuleTemplateDeployment`.
type IMetricRuleTemplateDeployment interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: The ID of the group that applied the template to.
	AttrGroupId() interface{}
	// Attribute RuleIds: The IDs of rhe generated rules.
	AttrRuleIds() interface{}
	Props() *MetricRuleTemplateDeploymentProps
}

// The jsii proxy for IMetricRuleTemplateDeployment
type jsiiProxy_IMetricRuleTemplateDeployment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMetricRuleTemplateDeployment) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMetricRuleTemplateDeployment) AttrRuleIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMetricRuleTemplateDeployment) Props() *MetricRuleTemplateDeploymentProps {
	var returns *MetricRuleTemplateDeploymentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

