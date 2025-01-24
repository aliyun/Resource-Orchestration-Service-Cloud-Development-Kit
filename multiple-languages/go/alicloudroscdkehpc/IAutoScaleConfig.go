package alicloudroscdkehpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkehpc/internal"
)

// Represents a `AutoScaleConfig`.
type IAutoScaleConfig interface {
	alicloudroscdkcore.IResource
	// Attribute ClusterId: Cluster Id.
	AttrClusterId() interface{}
	Props() *AutoScaleConfigProps
}

// The jsii proxy for IAutoScaleConfig
type jsiiProxy_IAutoScaleConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAutoScaleConfig) AttrClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAutoScaleConfig) Props() *AutoScaleConfigProps {
	var returns *AutoScaleConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

