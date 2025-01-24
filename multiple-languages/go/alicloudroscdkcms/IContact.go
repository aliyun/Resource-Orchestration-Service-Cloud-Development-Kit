package alicloudroscdkcms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Contact`.
type IContact interface {
	alicloudroscdkcore.IResource
	// Attribute ContactName: The name of the alarm contact.
	AttrContactName() interface{}
	Props() *ContactProps
}

// The jsii proxy for IContact
type jsiiProxy_IContact struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IContact) AttrContactName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContactName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IContact) Props() *ContactProps {
	var returns *ContactProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

