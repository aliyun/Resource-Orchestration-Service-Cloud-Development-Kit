package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `ElasticDBInstance`.
type IElasticDBInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute ConnectionString: The endpoint of the instance.
	AttrConnectionString() interface{}
	// Attribute DBInstanceId: The ID of the instance.
	AttrDbInstanceId() interface{}
	// Attribute OrderId: The order ID of the instance.
	AttrOrderId() interface{}
	// Attribute Port: The port used to connect to the instance.
	AttrPort() interface{}
	Props() *ElasticDBInstanceProps
}

// The jsii proxy for IElasticDBInstance
type jsiiProxy_IElasticDBInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IElasticDBInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IElasticDBInstance) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IElasticDBInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IElasticDBInstance) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IElasticDBInstance) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IElasticDBInstance) Props() *ElasticDBInstanceProps {
	var returns *ElasticDBInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

