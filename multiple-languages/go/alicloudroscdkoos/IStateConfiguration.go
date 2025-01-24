package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `StateConfiguration`.
type IStateConfiguration interface {
	alicloudroscdkcore.IResource
	// Attribute StateConfigurationId: The ID of the desired-state configuration.
	AttrStateConfigurationId() interface{}
	Props() *StateConfigurationProps
}

// The jsii proxy for IStateConfiguration
type jsiiProxy_IStateConfiguration struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStateConfiguration) AttrStateConfigurationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStateConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStateConfiguration) Props() *StateConfigurationProps {
	var returns *StateConfigurationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

