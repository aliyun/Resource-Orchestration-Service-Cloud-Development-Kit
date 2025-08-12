package alicloudroscdkselectdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkselectdb/internal"
)

// Represents a `DBInstance`.
type IDBInstance interface {
	alicloudroscdkcore.IResource
	// Attribute DBInstanceId: Instance ID.
	AttrDbInstanceId() interface{}
	// Attribute VpcConnectionString: The VPC connection string of the selectdb instance.
	AttrVpcConnectionString() interface{}
	Props() *DBInstanceProps
}

// The jsii proxy for IDBInstance
type jsiiProxy_IDBInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrVpcConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) Props() *DBInstanceProps {
	var returns *DBInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

