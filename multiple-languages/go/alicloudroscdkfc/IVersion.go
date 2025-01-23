package alicloudroscdkfc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/internal"
)

// Represents a `Version`.
type IVersion interface {
	alicloudroscdkcore.IResource
	// Attribute ServiceName: The service name.
	AttrServiceName() interface{}
	// Attribute VersionId: The version ID.
	AttrVersionId() interface{}
	Props() *VersionProps
}

// The jsii proxy for IVersion
type jsiiProxy_IVersion struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVersion) AttrServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVersion) AttrVersionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVersion) Props() *VersionProps {
	var returns *VersionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

