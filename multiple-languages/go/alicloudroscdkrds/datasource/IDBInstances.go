package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/datasource/internal"
)

// Represents a `DBInstances`.
type IDBInstances interface {
	alicloudroscdkcore.IResource
	// Attribute DBInstanceIds: The list of The RDS Database instance Ids.
	AttrDbInstanceIds() interface{}
	// Attribute DBInstances: The list of The RDS Database instances.
	AttrDbInstances() interface{}
	Props() *DBInstancesProps
}

// The jsii proxy for IDBInstances
type jsiiProxy_IDBInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBInstances) AttrDbInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstances) AttrDbInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstances) Props() *DBInstancesProps {
	var returns *DBInstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

