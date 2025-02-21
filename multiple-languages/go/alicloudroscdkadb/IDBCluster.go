package alicloudroscdkadb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkadb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `DBCluster`.
type IDBCluster interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute ConnectionString: Vpc connection string.
	AttrConnectionString() interface{}
	// Attribute DBClusterId: The ID of the cluster.
	AttrDbClusterId() interface{}
	// Attribute OrderId: The ID of the order.
	AttrOrderId() interface{}
	Props() *DBClusterProps
}

// The jsii proxy for IDBCluster
type jsiiProxy_IDBCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBCluster) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) Props() *DBClusterProps {
	var returns *DBClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

