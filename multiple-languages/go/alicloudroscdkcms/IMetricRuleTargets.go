package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MetricRuleTargets`.
type IMetricRuleTargets interface {
	alicloudroscdkcore.IResource
	// Attribute Arns: The ARN list of targets.
	AttrArns() interface{}
	// Attribute Ids: The ID list of targets.
	AttrIds() interface{}
	Props() *MetricRuleTargetsProps
}

// The jsii proxy for IMetricRuleTargets
type jsiiProxy_IMetricRuleTargets struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMetricRuleTargets) AttrArns() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArns",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMetricRuleTargets) AttrIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMetricRuleTargets) Props() *MetricRuleTargetsProps {
	var returns *MetricRuleTargetsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

