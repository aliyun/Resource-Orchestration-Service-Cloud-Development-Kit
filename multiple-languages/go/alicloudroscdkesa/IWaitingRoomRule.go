package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `WaitingRoomRule`.
type IWaitingRoomRule interface {
	alicloudroscdkcore.IResource
	// Attribute Rule: The content of the rule, the implemented policy or conditional expression.
	AttrRule() interface{}
	// Attribute RuleEnable: Rule switch.
	//
	// When adding global configuration, this parameter does not need to be set.
	AttrRuleEnable() interface{}
	// Attribute RuleName: Rule name, optional, used to query by waiting room bypass rule name.
	AttrRuleName() interface{}
	// Attribute WaitingRoomRuleId: The rule ID, which can be used to query a specific rule.
	AttrWaitingRoomRuleId() interface{}
	Props() *WaitingRoomRuleProps
}

// The jsii proxy for IWaitingRoomRule
type jsiiProxy_IWaitingRoomRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWaitingRoomRule) AttrRule() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRule",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomRule) AttrRuleEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomRule) AttrWaitingRoomRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitingRoomRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomRule) Props() *WaitingRoomRuleProps {
	var returns *WaitingRoomRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

