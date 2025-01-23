package alicloudroscdkddospro

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkddospro/internal"
)

// Represents a `PremiumInstance`.
type IPremiumInstance interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	Props() *PremiumInstanceProps
}

// The jsii proxy for IPremiumInstance
type jsiiProxy_IPremiumInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPremiumInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPremiumInstance) Props() *PremiumInstanceProps {
	var returns *PremiumInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

