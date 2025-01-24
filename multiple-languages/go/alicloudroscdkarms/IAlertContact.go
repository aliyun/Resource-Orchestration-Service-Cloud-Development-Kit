package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AlertContact`.
type IAlertContact interface {
	alicloudroscdkcore.IResource
	// Attribute ContactId: The ID of the alert contact that you created.
	AttrContactId() interface{}
	Props() *AlertContactProps
}

// The jsii proxy for IAlertContact
type jsiiProxy_IAlertContact struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAlertContact) AttrContactId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContactId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlertContact) Props() *AlertContactProps {
	var returns *AlertContactProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

