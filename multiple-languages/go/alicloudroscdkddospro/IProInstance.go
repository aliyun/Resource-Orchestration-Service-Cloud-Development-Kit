package alicloudroscdkddospro

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkddospro/internal"
)

// Represents a `ProInstance`.
type IProInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	Props() *ProInstanceProps
}

// The jsii proxy for IProInstance
type jsiiProxy_IProInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProInstance) Props() *ProInstanceProps {
	var returns *ProInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

