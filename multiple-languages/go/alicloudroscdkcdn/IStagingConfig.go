package alicloudroscdkcdn

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcdn/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `StagingConfig`.
type IStagingConfig interface {
	alicloudroscdkcore.IResource
	// Attribute ConfigId: The config id.
	AttrConfigId() interface{}
	// Attribute FunctionName: The function name.
	AttrFunctionName() interface{}
	Props() *StagingConfigProps
}

// The jsii proxy for IStagingConfig
type jsiiProxy_IStagingConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStagingConfig) AttrConfigId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStagingConfig) AttrFunctionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFunctionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStagingConfig) Props() *StagingConfigProps {
	var returns *StagingConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

