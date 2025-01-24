package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/datasource/internal"
)

// Represents a `NetworkRules`.
type INetworkRules interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkRuleNames: The list of network rule names.
	AttrNetworkRuleNames() interface{}
	// Attribute NetworkRules: The list of network rules.
	AttrNetworkRules() interface{}
	Props() *NetworkRulesProps
}

// The jsii proxy for INetworkRules
type jsiiProxy_INetworkRules struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkRules) AttrNetworkRuleNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkRuleNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkRules) AttrNetworkRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkRules) Props() *NetworkRulesProps {
	var returns *NetworkRulesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

