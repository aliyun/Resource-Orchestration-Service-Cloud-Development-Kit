package alicloudroscdkpaifeaturestore

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaifeaturestore/internal"
)

// Represents a `Datasource`.
type IDatasource interface {
	alicloudroscdkcore.IResource
	// Attribute Config: Resource configuration information.
	//
	// The string format is json.
	AttrConfig() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute DatasourceId: The first ID of the resource.
	AttrDatasourceId() interface{}
	// Attribute DatasourceName: The datasource name.
	//
	// Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
	AttrDatasourceName() interface{}
	// Attribute Type: Data source type.
	AttrType() interface{}
	// Attribute Uri: The resource address of the datasource.
	//
	// The maximum length cannot exceed 64.
	AttrUri() interface{}
	// Attribute WorkspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
	AttrWorkspaceId() interface{}
	Props() *DatasourceProps
}

// The jsii proxy for IDatasource
type jsiiProxy_IDatasource struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDatasource) AttrConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasource) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasource) AttrDatasourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatasourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasource) AttrDatasourceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatasourceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasource) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasource) AttrUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasource) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasource) Props() *DatasourceProps {
	var returns *DatasourceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

