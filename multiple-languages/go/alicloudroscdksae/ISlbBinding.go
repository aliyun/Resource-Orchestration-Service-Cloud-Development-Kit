package alicloudroscdksae

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksae/internal"
)

// Represents a `SlbBinding`.
type ISlbBinding interface {
	alicloudroscdkcore.IResource
	// Attribute AppId: Successful application deployment target ID.
	AttrAppId() interface{}
	// Attribute ChangeOrderId: Return to release a single ID, used to query task execution status.
	AttrChangeOrderId() interface{}
	Props() *SlbBindingProps
}

// The jsii proxy for ISlbBinding
type jsiiProxy_ISlbBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISlbBinding) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISlbBinding) AttrChangeOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChangeOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISlbBinding) Props() *SlbBindingProps {
	var returns *SlbBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

