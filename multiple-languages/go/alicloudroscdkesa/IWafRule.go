package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `WafRule`.
type IWafRule interface {
	alicloudroscdkcore.IResource
	// Attribute Config: The configuration of the rule.
	AttrConfig() interface{}
	// Attribute Phase: The version of the website.
	AttrPhase() interface{}
	// Attribute RulesetId: The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https://www.alibabacloud.com/help/en/doc-detail/2850233.html) operation.
	AttrRulesetId() interface{}
	// Attribute UpdateTime: The time when the rule was last modified.
	AttrUpdateTime() interface{}
	// Attribute WafRuleId: WafRule Id.
	AttrWafRuleId() interface{}
	Props() *WafRuleProps
}

// The jsii proxy for IWafRule
type jsiiProxy_IWafRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWafRule) AttrConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWafRule) AttrPhase() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPhase",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWafRule) AttrRulesetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRulesetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWafRule) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWafRule) AttrWafRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWafRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWafRule) Props() *WafRuleProps {
	var returns *WafRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

