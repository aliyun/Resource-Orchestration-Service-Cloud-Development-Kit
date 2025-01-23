package alicloudroscdkcr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
)

// Represents a `InstanceVpcEndpointLinkedVpc`.
type IInstanceVpcEndpointLinkedVpc interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	// Attribute VpcId: The ID of the vpc.
	AttrVpcId() interface{}
	// Attribute VswitchId: The ID of the vswitch.
	AttrVswitchId() interface{}
	Props() *InstanceVpcEndpointLinkedVpcProps
}

// The jsii proxy for IInstanceVpcEndpointLinkedVpc
type jsiiProxy_IInstanceVpcEndpointLinkedVpc struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceVpcEndpointLinkedVpc) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceVpcEndpointLinkedVpc) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceVpcEndpointLinkedVpc) AttrVswitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVswitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceVpcEndpointLinkedVpc) Props() *InstanceVpcEndpointLinkedVpcProps {
	var returns *InstanceVpcEndpointLinkedVpcProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

