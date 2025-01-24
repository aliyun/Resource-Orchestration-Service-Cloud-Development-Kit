package alicloudroscdkddospro

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkddospro/internal"
)

// Represents a `SchedulerRule`.
type ISchedulerRule interface {
	alicloudroscdkcore.IResource
	// Attribute RuleName: The name of the rule.
	AttrRuleName() interface{}
	Props() *SchedulerRuleProps
}

// The jsii proxy for ISchedulerRule
type jsiiProxy_ISchedulerRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISchedulerRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISchedulerRule) Props() *SchedulerRuleProps {
	var returns *SchedulerRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

