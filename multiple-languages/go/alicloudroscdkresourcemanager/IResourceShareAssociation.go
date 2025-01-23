package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `ResourceShareAssociation`.
type IResourceShareAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute ResourceShareId: The ID of the resource share.
	AttrResourceShareId() interface{}
	Props() *ResourceShareAssociationProps
}

// The jsii proxy for IResourceShareAssociation
type jsiiProxy_IResourceShareAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceShareAssociation) AttrResourceShareId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceShareId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceShareAssociation) Props() *ResourceShareAssociationProps {
	var returns *ResourceShareAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

