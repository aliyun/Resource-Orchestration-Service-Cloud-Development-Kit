package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/datasource/internal"
)

// Represents a `NetworkRule`.
type INetworkRule interface {
	alicloudroscdkcore.IResource
	// Attribute Description: The access control rule description.
	AttrDescription() interface{}
	// Attribute SourcePrivateIp: The private IP address or private CIDR block.
	AttrSourcePrivateIp() interface{}
	Props() *NetworkRuleProps
}

// The jsii proxy for INetworkRule
type jsiiProxy_INetworkRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkRule) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkRule) AttrSourcePrivateIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourcePrivateIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkRule) Props() *NetworkRuleProps {
	var returns *NetworkRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

