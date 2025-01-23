package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `OssExternalStore`.
type IOssExternalStore interface {
	alicloudroscdkcore.IResource
	// Attribute ExternalStoreName: The name of the external store.
	AttrExternalStoreName() interface{}
	// Attribute Project: The name of the project to which the external store belongs.
	AttrProject() interface{}
	Props() *OssExternalStoreProps
}

// The jsii proxy for IOssExternalStore
type jsiiProxy_IOssExternalStore struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOssExternalStore) AttrExternalStoreName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExternalStoreName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssExternalStore) AttrProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOssExternalStore) Props() *OssExternalStoreProps {
	var returns *OssExternalStoreProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

