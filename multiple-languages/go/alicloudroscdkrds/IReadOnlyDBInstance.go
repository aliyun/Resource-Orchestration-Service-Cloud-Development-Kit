package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `ReadOnlyDBInstance`.
type IReadOnlyDBInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionString: DB instance connection url by Intranet.
	AttrConnectionString() interface{}
	// Attribute DBInstanceId: The instance id of created database instance.
	AttrDbInstanceId() interface{}
	// Attribute Port: Intranet port of created DB instance.
	AttrPort() interface{}
	Props() *ReadOnlyDBInstanceProps
}

// The jsii proxy for IReadOnlyDBInstance
type jsiiProxy_IReadOnlyDBInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IReadOnlyDBInstance) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReadOnlyDBInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReadOnlyDBInstance) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IReadOnlyDBInstance) Props() *ReadOnlyDBInstanceProps {
	var returns *ReadOnlyDBInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

