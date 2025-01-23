package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `GroupMetricRule`.
type IGroupMetricRule interface {
	alicloudroscdkcore.IResource
	// Attribute RuleId: Rule ID.
	AttrRuleId() interface{}
	Props() *GroupMetricRuleProps
}

// The jsii proxy for IGroupMetricRule
type jsiiProxy_IGroupMetricRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGroupMetricRule) AttrRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroupMetricRule) Props() *GroupMetricRuleProps {
	var returns *GroupMetricRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

