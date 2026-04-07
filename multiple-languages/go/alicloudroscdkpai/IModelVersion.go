package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `ModelVersion`.
type IModelVersion interface {
	alicloudroscdkcore.IResource
	// Attribute ApprovalStatus: Admission status, with values as follows:.
	AttrApprovalStatus() interface{}
	// Attribute ExtraInfo: Other information.
	AttrExtraInfo() interface{}
	// Attribute FormatType: Model format, possible values:.
	AttrFormatType() interface{}
	// Attribute FrameworkType: Model framework, possible values:.
	AttrFrameworkType() interface{}
	// Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.
	AttrGmtCreateTime() interface{}
	// Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.
	AttrGmtModifiedTime() interface{}
	// Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.
	AttrInferenceSpec() interface{}
	// Attribute Labels: List of model version labels.
	AttrLabels() interface{}
	// Attribute Metrics: Model indicators.
	AttrMetrics() interface{}
	// Attribute Options: Extension field.
	//
	// The JsonString type.
	AttrOptions() interface{}
	// Attribute OwnerId: The Alibaba Cloud account ID.
	AttrOwnerId() interface{}
	// Attribute SourceId: Source ID.
	AttrSourceId() interface{}
	// Attribute SourceType: Model source type, possible values:.
	AttrSourceType() interface{}
	// Attribute TrainingSpec: Training configuration.
	//
	// Configuration for fine-tuning, incremental training.
	AttrTrainingSpec() interface{}
	// Attribute Uri: Model version URI, that is, the location where the model is stored.
	AttrUri() interface{}
	// Attribute UserId: The user ID.
	AttrUserId() interface{}
	// Attribute VersionDescription: Model version description.
	AttrVersionDescription() interface{}
	// Attribute VersionName: Model version.
	AttrVersionName() interface{}
	Props() *ModelVersionProps
}

// The jsii proxy for IModelVersion
type jsiiProxy_IModelVersion struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IModelVersion) AttrApprovalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApprovalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrExtraInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExtraInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrFormatType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFormatType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrFrameworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFrameworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrGmtCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrGmtModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrInferenceSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInferenceSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrLabels() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLabels",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrMetrics() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMetrics",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrOptions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOptions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrSourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrSourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrTrainingSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrainingSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrVersionDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) AttrVersionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVersionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IModelVersion) Props() *ModelVersionProps {
	var returns *ModelVersionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

