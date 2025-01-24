package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `NetworkAcl`.
type INetworkAcl interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkAclId: The ID of the network ACL.
	AttrNetworkAclId() interface{}
	Props() *NetworkAclProps
}

// The jsii proxy for INetworkAcl
type jsiiProxy_INetworkAcl struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkAcl) AttrNetworkAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkAcl) Props() *NetworkAclProps {
	var returns *NetworkAclProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

