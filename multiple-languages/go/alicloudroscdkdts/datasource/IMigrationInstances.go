package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/datasource/internal"
)

// Represents a `MigrationInstances`.
type IMigrationInstances interface {
	alicloudroscdkcore.IResource
	// Attribute DtsInstanceIds: The list of dts instance IDs.
	AttrDtsInstanceIds() interface{}
	// Attribute MigrationInstances: The list of migration instances.
	AttrMigrationInstances() interface{}
	Props() *MigrationInstancesProps
}

// The jsii proxy for IMigrationInstances
type jsiiProxy_IMigrationInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMigrationInstances) AttrDtsInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationInstances) AttrMigrationInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMigrationInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationInstances) Props() *MigrationInstancesProps {
	var returns *MigrationInstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

