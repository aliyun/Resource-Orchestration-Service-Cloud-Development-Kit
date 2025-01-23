package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `NetworkInterfaceAttachment`.
type INetworkInterfaceAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: ID of ECS instance.
	AttrInstanceId() interface{}
	// Attribute NetworkInterfaceId: ID of your Network Interface.
	AttrNetworkInterfaceId() interface{}
	// Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
	AttrTrunkNetworkInstanceId() interface{}
	Props() *NetworkInterfaceAttachmentProps
}

// The jsii proxy for INetworkInterfaceAttachment
type jsiiProxy_INetworkInterfaceAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkInterfaceAttachment) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterfaceAttachment) AttrNetworkInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterfaceAttachment) AttrTrunkNetworkInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrunkNetworkInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterfaceAttachment) Props() *NetworkInterfaceAttachmentProps {
	var returns *NetworkInterfaceAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

