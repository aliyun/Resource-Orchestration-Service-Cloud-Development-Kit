package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `NetworkAclAssociation`.
type INetworkAclAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute NetworkAclId: The network acl id to associate.
	AttrNetworkAclId() interface{}
	Props() *NetworkAclAssociationProps
}

// The jsii proxy for INetworkAclAssociation
type jsiiProxy_INetworkAclAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INetworkAclAssociation) AttrNetworkAclId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkAclId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INetworkAclAssociation) Props() *NetworkAclAssociationProps {
	var returns *NetworkAclAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

