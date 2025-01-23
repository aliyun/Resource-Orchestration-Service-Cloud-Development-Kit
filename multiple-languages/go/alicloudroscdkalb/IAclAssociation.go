package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AclAssociation`.
type IAclAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute ListenerId: The ID of the listener.
	AttrListenerId() interface{}
	Props() *AclAssociationProps
}

// The jsii proxy for IAclAssociation
type jsiiProxy_IAclAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAclAssociation) AttrListenerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAclAssociation) Props() *AclAssociationProps {
	var returns *AclAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

