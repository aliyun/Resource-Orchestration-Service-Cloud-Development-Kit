package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `Dataset`.
type IDataset interface {
	alicloudroscdkcore.IResource
	// Attribute Accessibility: Workspace visibility.
	AttrAccessibility() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute DatasetId: The first ID of the resource.
	AttrDatasetId() interface{}
	// Attribute DatasetName: The name of the dataset.
	AttrDatasetName() interface{}
	// Attribute DataSourceType: The data source type.
	AttrDataSourceType() interface{}
	// Attribute DataType: The dataset type.
	//
	// The default value is COMMON.
	AttrDataType() interface{}
	// Attribute Description: Custom descriptions of datasets to distinguish between different datasets.
	AttrDescription() interface{}
	// Attribute GmtModifiedTime: Update time.
	AttrGmtModifiedTime() interface{}
	// Attribute Options: The extended field, which is of the JsonString type.
	AttrOptions() interface{}
	// Attribute OwnerId: The ID of the primary account.
	AttrOwnerId() interface{}
	// Attribute Property: The properties of the dataset.
	AttrProperty() interface{}
	// Attribute SourceId: The data source ID.
	AttrSourceId() interface{}
	// Attribute SourceType: The data source type.
	//
	// The default value is USER.
	AttrSourceType() interface{}
	// Attribute Uri: The Uri configuration sample is as follows:.
	AttrUri() interface{}
	// Attribute UserId: The ID of the user to which the dataset belongs.
	AttrUserId() interface{}
	// Attribute WorkspaceId: The ID of the workspace where the dataset is located.
	AttrWorkspaceId() interface{}
	Props() *DatasetProps
}

// The jsii proxy for IDataset
type jsiiProxy_IDataset struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDataset) AttrAccessibility() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessibility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrDatasetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatasetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrDatasetName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatasetName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrDataSourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrDataType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrGmtModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrProperty() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProperty",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrSourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrSourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDataset) Props() *DatasetProps {
	var returns *DatasetProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

