package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `ForwardingRules`.
type IForwardingRules interface {
	alicloudroscdkcore.IResource
	// Attribute ForwardingRuleIds: The IDs of the endpoint groups.
	AttrForwardingRuleIds() interface{}
	Props() *ForwardingRulesProps
}

// The jsii proxy for IForwardingRules
type jsiiProxy_IForwardingRules struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IForwardingRules) AttrForwardingRuleIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrForwardingRuleIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IForwardingRules) Props() *ForwardingRulesProps {
	var returns *ForwardingRulesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

