package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ContactGroup`.
type IContactGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ContactGroupName: The name of the alert contact group.
	AttrContactGroupName() interface{}
	Props() *ContactGroupProps
}

// The jsii proxy for IContactGroup
type jsiiProxy_IContactGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IContactGroup) AttrContactGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContactGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContactGroup) Props() *ContactGroupProps {
	var returns *ContactGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

