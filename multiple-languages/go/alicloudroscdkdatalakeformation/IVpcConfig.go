package alicloudroscdkdatalakeformation

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdatalakeformation/internal"
)

// Represents a `VpcConfig`.
type IVpcConfig interface {
	alicloudroscdkcore.IResource
	// Attribute VpcId: VPC ID.
	AttrVpcId() interface{}
	Props() *VpcConfigProps
}

// The jsii proxy for IVpcConfig
type jsiiProxy_IVpcConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcConfig) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcConfig) Props() *VpcConfigProps {
	var returns *VpcConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

