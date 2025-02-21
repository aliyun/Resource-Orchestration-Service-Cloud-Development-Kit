package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenInstance`.
type ICenInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute CenId: The ID of the request.
	AttrCenId() interface{}
	Props() *CenInstanceProps
}

// The jsii proxy for ICenInstance
type jsiiProxy_ICenInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenInstance) AttrCenId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCenId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICenInstance) Props() *CenInstanceProps {
	var returns *CenInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

