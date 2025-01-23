package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `Vpcs`.
type IVpcs interface {
	alicloudroscdkcore.IResource
	// Attribute VpcIds: The list of The VPC IDs.
	AttrVpcIds() interface{}
	// Attribute Vpcs: The detailed information about the VPCs.
	AttrVpcs() interface{}
	Props() *VpcsProps
}

// The jsii proxy for IVpcs
type jsiiProxy_IVpcs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcs) AttrVpcIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcs) AttrVpcs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcs) Props() *VpcsProps {
	var returns *VpcsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

