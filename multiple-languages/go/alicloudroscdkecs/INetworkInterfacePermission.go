package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `NetworkInterfacePermission`.
type INetworkInterfacePermission interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkInterfacePermissionId: the network interface permission id.
	AttrNetworkInterfacePermissionId() interface{}
	Props() *NetworkInterfacePermissionProps
}

// The jsii proxy for INetworkInterfacePermission
type jsiiProxy_INetworkInterfacePermission struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkInterfacePermission) AttrNetworkInterfacePermissionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkInterfacePermissionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkInterfacePermission) Props() *NetworkInterfacePermissionProps {
	var returns *NetworkInterfacePermissionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

