package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkclickhouse/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `EnterpriseDBClusters`.
type IEnterpriseDBClusters interface {
	alicloudroscdkcore.IResource
	// Attribute DBInstanceIds: The list of DB instance IDs.
	AttrDbInstanceIds() interface{}
	// Attribute EnterpriseDBClusters: The list of enterprise DB clusters.
	AttrEnterpriseDbClusters() interface{}
	Props() *EnterpriseDBClustersProps
}

// The jsii proxy for IEnterpriseDBClusters
type jsiiProxy_IEnterpriseDBClusters struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnterpriseDBClusters) AttrDbInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusters) AttrEnterpriseDbClusters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnterpriseDbClusters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnterpriseDBClusters) Props() *EnterpriseDBClustersProps {
	var returns *EnterpriseDBClustersProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

