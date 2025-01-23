package alicloudroscdksls

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksls/internal"
)

// Represents a `Logstore`.
type ILogstore interface {
	alicloudroscdkcore.IResource
	// Attribute LogstoreName: Logstore name.
	AttrLogstoreName() interface{}
	// Attribute ProjectName: Project name.
	AttrProjectName() interface{}
	Props() *LogstoreProps
}

// The jsii proxy for ILogstore
type jsiiProxy_ILogstore struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILogstore) AttrLogstoreName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogstoreName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogstore) AttrProjectName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProjectName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILogstore) Props() *LogstoreProps {
	var returns *LogstoreProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

