package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `Run`.
type IRun interface {
	alicloudroscdkcore.IResource
	// Attribute Accessibility: Resource attribute fields representing visibility.
	AttrAccessibility() interface{}
	// Attribute CreateTime: The creation time of the Run.
	AttrCreateTime() interface{}
	// Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.
	AttrExperimentId() interface{}
	// Attribute GmtModifiedTime: Resource attribute fields representing edit time.
	AttrGmtModifiedTime() interface{}
	// Attribute Labels: Run attribute field representing the run tag.
	AttrLabels() interface{}
	// Attribute Metrics: Resource attribute field representing the run metric.
	AttrMetrics() interface{}
	// Attribute OwnerId: Resource attribute field representing owner.
	AttrOwnerId() interface{}
	// Attribute Params: Resource attribute field representing the run parameter.
	AttrParams() interface{}
	// Attribute RunId: The ID of the Run.
	AttrRunId() interface{}
	// Attribute RunName: The name of the Run.
	AttrRunName() interface{}
	// Attribute SourceId: Attribute Resource field representing the source task ID.
	AttrSourceId() interface{}
	// Attribute SourceType: Run attribute fields representing the source type.
	AttrSourceType() interface{}
	// Attribute UserId: Run attribute field representing creator ID.
	AttrUserId() interface{}
	// Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.
	AttrWorkspaceId() interface{}
	Props() *RunProps
}

// The jsii proxy for IRun
type jsiiProxy_IRun struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRun) AttrAccessibility() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessibility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrExperimentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExperimentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrGmtModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrLabels() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLabels",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrMetrics() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMetrics",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrParams() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParams",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrRunId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRunId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrRunName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRunName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrSourceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrSourceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRun) Props() *RunProps {
	var returns *RunProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

