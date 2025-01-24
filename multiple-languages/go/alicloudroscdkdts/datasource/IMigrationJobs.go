package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/datasource/internal"
)

// Represents a `MigrationJobs`.
type IMigrationJobs interface {
	alicloudroscdkcore.IResource
	// Attribute DtsInstanceIds: The list of dts instance IDs.
	AttrDtsInstanceIds() interface{}
	// Attribute MigrationInstances: The list of migration instances.
	AttrMigrationInstances() interface{}
	Props() *MigrationJobsProps
}

// The jsii proxy for IMigrationJobs
type jsiiProxy_IMigrationJobs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMigrationJobs) AttrDtsInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJobs) AttrMigrationInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMigrationInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJobs) Props() *MigrationJobsProps {
	var returns *MigrationJobsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

