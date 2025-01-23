package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `Network`.
type INetwork interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkId: The ID of the network.
	AttrNetworkId() interface{}
	Props() *NetworkProps
}

// The jsii proxy for INetwork
type jsiiProxy_INetwork struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetwork) AttrNetworkId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetwork) Props() *NetworkProps {
	var returns *NetworkProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

