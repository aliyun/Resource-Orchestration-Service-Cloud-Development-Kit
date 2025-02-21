package alicloudroscdkddos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkddos/internal"
)

// Represents a `OriginInstance`.
type IOriginInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	Props() *OriginInstanceProps
}

// The jsii proxy for IOriginInstance
type jsiiProxy_IOriginInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOriginInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginInstance) Props() *OriginInstanceProps {
	var returns *OriginInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

