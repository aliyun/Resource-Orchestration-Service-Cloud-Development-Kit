package alicloudroscdksae

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/internal"
)

// Represents a `ApplicationScalingRule`.
type IApplicationScalingRule interface {
	alicloudroscdkcore.IResource
	// Attribute ScalingRuleName: The name of the scaling rule.
	AttrScalingRuleName() interface{}
	Props() *ApplicationScalingRuleProps
}

// The jsii proxy for IApplicationScalingRule
type jsiiProxy_IApplicationScalingRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApplicationScalingRule) AttrScalingRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApplicationScalingRule) Props() *ApplicationScalingRuleProps {
	var returns *ApplicationScalingRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

