package alicloudroscdkfc3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc3/internal"
)

// Represents a `VpcBinding`.
type IVpcBinding interface {
	alicloudroscdkcore.IResource
	// Attribute VpcId: VPC instance ID.
	AttrVpcId() interface{}
	Props() *VpcBindingProps
}

// The jsii proxy for IVpcBinding
type jsiiProxy_IVpcBinding struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcBinding) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcBinding) Props() *VpcBindingProps {
	var returns *VpcBindingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

