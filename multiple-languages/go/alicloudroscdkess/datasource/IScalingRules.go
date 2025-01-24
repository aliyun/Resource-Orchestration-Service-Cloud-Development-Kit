package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/datasource/internal"
)

// Represents a `ScalingRules`.
type IScalingRules interface {
	alicloudroscdkcore.IResource
	// Attribute ScalingRuleIds: The list of scaling rule IDs.
	AttrScalingRuleIds() interface{}
	// Attribute ScalingRules: The list of scaling rules.
	AttrScalingRules() interface{}
	Props() *ScalingRulesProps
}

// The jsii proxy for IScalingRules
type jsiiProxy_IScalingRules struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScalingRules) AttrScalingRuleIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRules) AttrScalingRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingRules) Props() *ScalingRulesProps {
	var returns *ScalingRulesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

