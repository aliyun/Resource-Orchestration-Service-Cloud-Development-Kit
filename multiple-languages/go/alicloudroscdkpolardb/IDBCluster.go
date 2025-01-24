package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `DBCluster`.
type IDBCluster interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterConnectionString: The cluster connection string of the db cluster.
	AttrClusterConnectionString() interface{}
	// Attribute ClusterEndpointId: The cluster endpoint ID of the db cluster.
	AttrClusterEndpointId() interface{}
	// Attribute ColdStorageInstanceId: The ID of the cold storage instance.
	AttrColdStorageInstanceId() interface{}
	// Attribute CustomConnectionStrings: The custom connection strings of the db cluster.
	AttrCustomConnectionStrings() interface{}
	// Attribute CustomEndpointIds: The custom endpoint IDs of the db cluster.
	AttrCustomEndpointIds() interface{}
	// Attribute DBClusterDescription: The description of the db cluster.
	AttrDbClusterDescription() interface{}
	// Attribute DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
	AttrDbClusterId() interface{}
	// Attribute DBNodeIds: The ID list of cluster nodes.
	AttrDbNodeIds() interface{}
	// Attribute OrderId: The Order ID.
	AttrOrderId() interface{}
	// Attribute PrimaryConnectionString: The primary connection string of the db cluster.
	AttrPrimaryConnectionString() interface{}
	// Attribute PrimaryConnectionStrings: The primary connection strings of the db cluster.
	AttrPrimaryConnectionStrings() interface{}
	// Attribute PrimaryEndpointId: The primary endpoint ID of the db cluster.
	AttrPrimaryEndpointId() interface{}
	// Attribute PrimaryEndpointIds: The primary endpoint IDs of the db cluster.
	AttrPrimaryEndpointIds() interface{}
	Props() *DBClusterProps
}

// The jsii proxy for IDBCluster
type jsiiProxy_IDBCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBCluster) AttrClusterConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrClusterEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrColdStorageInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrColdStorageInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrCustomConnectionStrings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomConnectionStrings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrCustomEndpointIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomEndpointIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrDbClusterDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterDescription",
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

func (j *jsiiProxy_IDBCluster) AttrDbNodeIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeIds",
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

func (j *jsiiProxy_IDBCluster) AttrPrimaryConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrimaryConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrPrimaryConnectionStrings() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrimaryConnectionStrings",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrPrimaryEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrimaryEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBCluster) AttrPrimaryEndpointIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrimaryEndpointIds",
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

