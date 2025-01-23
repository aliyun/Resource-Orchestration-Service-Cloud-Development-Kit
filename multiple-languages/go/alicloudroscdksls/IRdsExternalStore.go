package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `RdsExternalStore`.
type IRdsExternalStore interface {
	alicloudroscdkcore.IResource
	// Attribute ExternalStoreName: The name of the external store.
	AttrExternalStoreName() interface{}
	// Attribute Project: The name of the project to which the external store belongs.
	AttrProject() interface{}
	Props() *RdsExternalStoreProps
}

// The jsii proxy for IRdsExternalStore
type jsiiProxy_IRdsExternalStore struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRdsExternalStore) AttrExternalStoreName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExternalStoreName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRdsExternalStore) AttrProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRdsExternalStore) Props() *RdsExternalStoreProps {
	var returns *RdsExternalStoreProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

