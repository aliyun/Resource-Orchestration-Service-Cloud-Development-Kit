package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `DatasetVersion`.
type IDatasetVersion interface {
	alicloudroscdkcore.IResource
	// Attribute VersionName: Dataset version name.
	AttrVersionName() interface{}
	Props() *DatasetVersionProps
}

// The jsii proxy for IDatasetVersion
type jsiiProxy_IDatasetVersion struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDatasetVersion) AttrVersionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatasetVersion) Props() *DatasetVersionProps {
	var returns *DatasetVersionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

