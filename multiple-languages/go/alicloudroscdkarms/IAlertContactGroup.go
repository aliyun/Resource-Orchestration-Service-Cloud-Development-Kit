package alicloudroscdkarms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AlertContactGroup`.
type IAlertContactGroup interface {
	alicloudroscdkcore.IResource
	// Attribute ContactGroupId: The ID of the alert contact group that you created.
	AttrContactGroupId() interface{}
	Props() *AlertContactGroupProps
}

// The jsii proxy for IAlertContactGroup
type jsiiProxy_IAlertContactGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAlertContactGroup) AttrContactGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContactGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAlertContactGroup) Props() *AlertContactGroupProps {
	var returns *AlertContactGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

