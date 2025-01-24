package alicloudroscdkdfs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdfs/internal"
)

// Represents a `AccessGroup`.
type IAccessGroup interface {
	alicloudroscdkcore.IResource
	// Attribute AccessGroupId: The ID of the access_group.
	AttrAccessGroupId() interface{}
	Props() *AccessGroupProps
}

// The jsii proxy for IAccessGroup
type jsiiProxy_IAccessGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessGroup) AttrAccessGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessGroup) Props() *AccessGroupProps {
	var returns *AccessGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

