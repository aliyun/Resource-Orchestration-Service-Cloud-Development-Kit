package alicloudroscdksag

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksag/internal"
)

// Represents a `ACLAssociation`.
type IACLAssociation interface {
	alicloudroscdkcore.IResource
	Props() *ACLAssociationProps
}

// The jsii proxy for IACLAssociation
type jsiiProxy_IACLAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IACLAssociation) Props() *ACLAssociationProps {
	var returns *ACLAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

