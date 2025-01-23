package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgraphdatabase/datasource/internal"
)

// Represents a `DbInstances`.
type IDbInstances interface {
	alicloudroscdkcore.IResource
	// Attribute DbInstanceIds: The list of db instance IDs.
	AttrDbInstanceIds() interface{}
	// Attribute DbInstances: The list of db instances.
	AttrDbInstances() interface{}
	Props() *DbInstancesProps
}

// The jsii proxy for IDbInstances
type jsiiProxy_IDbInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDbInstances) AttrDbInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstances) AttrDbInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDbInstances) Props() *DbInstancesProps {
	var returns *DbInstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

