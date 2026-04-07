package alicloudroscdkthreatdetection

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkthreatdetection/internal"
)

// Represents a `ContainerDefenseRule`.
type IContainerDefenseRule interface {
	alicloudroscdkcore.IResource
	// Attribute Description: Rule description.
	AttrDescription() interface{}
	// Attribute RuleAction: The action that is performed when the rule is hit.
	AttrRuleAction() interface{}
	// Attribute RuleId: Rule Id.
	AttrRuleId() interface{}
	// Attribute RuleName: The name of the rule.
	AttrRuleName() interface{}
	// Attribute RuleSwitch: The switch of the rule.
	AttrRuleSwitch() interface{}
	// Attribute RuleType: The rule type.
	AttrRuleType() interface{}
	// Attribute Scope: Rule scope.
	AttrScope() interface{}
	// Attribute Whitelist: The whitelist of rule.
	AttrWhitelist() interface{}
	Props() *ContainerDefenseRuleProps
}

// The jsii proxy for IContainerDefenseRule
type jsiiProxy_IContainerDefenseRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IContainerDefenseRule) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerDefenseRule) AttrRuleAction() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleAction",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerDefenseRule) AttrRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerDefenseRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerDefenseRule) AttrRuleSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerDefenseRule) AttrRuleType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerDefenseRule) AttrScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerDefenseRule) AttrWhitelist() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWhitelist",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContainerDefenseRule) Props() *ContainerDefenseRuleProps {
	var returns *ContainerDefenseRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

