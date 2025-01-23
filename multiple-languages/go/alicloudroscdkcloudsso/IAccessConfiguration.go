package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AccessConfiguration`.
type IAccessConfiguration interface {
	alicloudroscdkcore.IResource
	// Attribute AccessConfigurationId: The ID of the access configuration.
	AttrAccessConfigurationId() interface{}
	Props() *AccessConfigurationProps
}

// The jsii proxy for IAccessConfiguration
type jsiiProxy_IAccessConfiguration struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccessConfiguration) AttrAccessConfigurationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccessConfiguration) Props() *AccessConfigurationProps {
	var returns *AccessConfigurationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

