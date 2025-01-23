package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/datasource/internal"
)

// Represents a `Services`.
type IServices interface {
	alicloudroscdkcore.IResource
	// Attribute ServiceNames: The list of service names.
	AttrServiceNames() interface{}
	// Attribute Services: The list of services.
	AttrServices() interface{}
	Props() *ServicesProps
}

// The jsii proxy for IServices
type jsiiProxy_IServices struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServices) AttrServiceNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServices) AttrServices() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServices",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServices) Props() *ServicesProps {
	var returns *ServicesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

