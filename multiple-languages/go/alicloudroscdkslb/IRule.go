package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `Rule`.
type IRule interface {
	alicloudroscdkcore.IResource
	// Attribute Rules: A list of forwarding rules.
	//
	// Each element of rules contains "RuleId".
	AttrRules() interface{}
	Props() *RuleProps
}

// The jsii proxy for IRule
type jsiiProxy_IRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRule) AttrRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) Props() *RuleProps {
	var returns *RuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

