package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `AclsListenerAssociation`.
type IAclsListenerAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute AclIds: The IDs of the ACL.
	AttrAclIds() interface{}
	// Attribute ListenerId: The ID of the listener.
	AttrListenerId() interface{}
	Props() *AclsListenerAssociationProps
}

// The jsii proxy for IAclsListenerAssociation
type jsiiProxy_IAclsListenerAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAclsListenerAssociation) AttrAclIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAclsListenerAssociation) AttrListenerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAclsListenerAssociation) Props() *AclsListenerAssociationProps {
	var returns *AclsListenerAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

