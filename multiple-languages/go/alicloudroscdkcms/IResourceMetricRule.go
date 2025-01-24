package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ResourceMetricRule`.
type IResourceMetricRule interface {
	alicloudroscdkcore.IResource
	// Attribute RuleId: The ID of the alert rule.
	AttrRuleId() interface{}
	// Attribute RuleName: The name of the alert rule.
	AttrRuleName() interface{}
	Props() *ResourceMetricRuleProps
}

// The jsii proxy for IResourceMetricRule
type jsiiProxy_IResourceMetricRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceMetricRule) AttrRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceMetricRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceMetricRule) Props() *ResourceMetricRuleProps {
	var returns *ResourceMetricRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

