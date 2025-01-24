package alicloudroscdkots

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkots/internal"
)

// Represents a `VpcBinder`.
type IVpcBinder interface {
	alicloudroscdkcore.IResource
	// Attribute Domains: The domain names used to access the OTS instance in the VPC.
	AttrDomains() interface{}
	// Attribute Endpoints: Private network addresses used to access the OTS instance in the VPC.
	AttrEndpoints() interface{}
	Props() *VpcBinderProps
}

// The jsii proxy for IVpcBinder
type jsiiProxy_IVpcBinder struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcBinder) AttrDomains() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomains",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcBinder) AttrEndpoints() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpoints",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcBinder) Props() *VpcBinderProps {
	var returns *VpcBinderProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

