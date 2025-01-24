package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Group`.
type IGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupId: The id of the created Group resource.
	AttrGroupId() interface{}
	// Attribute SubDomain: The sub domain assigned to the Group by the system.
	AttrSubDomain() interface{}
	// Attribute Tags: Tags of app.
	AttrTags() interface{}
	Props() *GroupProps
}

// The jsii proxy for IGroup
type jsiiProxy_IGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGroup) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) AttrSubDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGroup) Props() *GroupProps {
	var returns *GroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

