package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `NetworkInterfaces`.
type INetworkInterfaces interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkInterfaceIds: The list of NetworkInterfaceIds.
	AttrNetworkInterfaceIds() interface{}
	// Attribute NetworkInterfaces: The list of NetworkInterfaces.
	AttrNetworkInterfaces() interface{}
	Props() *NetworkInterfacesProps
}

// The jsii proxy for INetworkInterfaces
type jsiiProxy_INetworkInterfaces struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkInterfaces) AttrNetworkInterfaceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterfaceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterfaces) AttrNetworkInterfaces() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterfaces",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterfaces) Props() *NetworkInterfacesProps {
	var returns *NetworkInterfacesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

