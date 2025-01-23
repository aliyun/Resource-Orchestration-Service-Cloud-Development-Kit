package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/datasource/internal"
)

// Represents a `Rules`.
type IRules interface {
	alicloudroscdkcore.IResource
	// Attribute RuleIds: The list of rule IDs.
	AttrRuleIds() interface{}
	// Attribute Rules: The list of rules.
	AttrRules() interface{}
	Props() *RulesProps
}

// The jsii proxy for IRules
type jsiiProxy_IRules struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRules) AttrRuleIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRules) AttrRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRules) Props() *RulesProps {
	var returns *RulesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

