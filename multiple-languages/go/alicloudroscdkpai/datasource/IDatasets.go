package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/datasource/internal"
)

// Represents a `Datasets`.
type IDatasets interface {
	alicloudroscdkcore.IResource
	// Attribute DatasetIds: The list of dataset IDs.
	AttrDatasetIds() interface{}
	// Attribute Datasets: The list of datasets.
	AttrDatasets() interface{}
	Props() *DatasetsProps
}

// The jsii proxy for IDatasets
type jsiiProxy_IDatasets struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDatasets) AttrDatasetIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatasetIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasets) AttrDatasets() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatasets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasets) Props() *DatasetsProps {
	var returns *DatasetsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

