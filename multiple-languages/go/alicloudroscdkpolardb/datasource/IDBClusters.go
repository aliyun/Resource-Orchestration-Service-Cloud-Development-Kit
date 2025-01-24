package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/datasource/internal"
)

// Represents a `DBClusters`.
type IDBClusters interface {
	alicloudroscdkcore.IResource
	// Attribute DbClusterIds: The ID of the cluster.
	AttrDbClusterIds() interface{}
	// Attribute DBClusters: The list of db clusters.
	AttrDbClusters() interface{}
	Props() *DBClustersProps
}

// The jsii proxy for IDBClusters
type jsiiProxy_IDBClusters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBClusters) AttrDbClusterIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBClusters) AttrDbClusters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBClusters) Props() *DBClustersProps {
	var returns *DBClustersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

