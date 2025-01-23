package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `MigrateTask`.
type IMigrateTask interface {
	alicloudroscdkcore.IResource
	// Attribute DBName: The name of the database that you want to restore.
	AttrDbName() interface{}
	// Attribute MigrateTaskId: The ID of the migrate task.
	AttrMigrateTaskId() interface{}
	Props() *MigrateTaskProps
}

// The jsii proxy for IMigrateTask
type jsiiProxy_IMigrateTask struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMigrateTask) AttrDbName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrateTask) AttrMigrateTaskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMigrateTaskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrateTask) Props() *MigrateTaskProps {
	var returns *MigrateTaskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

