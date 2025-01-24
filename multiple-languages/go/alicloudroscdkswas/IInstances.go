package alicloudroscdkswas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkswas/internal"
)

// Represents a `Instances`.
type IInstances interface {
	alicloudroscdkcore.IResource
	// Attribute InnerIpAddresses: The inner IP addresses of simple application servers.
	AttrInnerIpAddresses() interface{}
	// Attribute InstanceIds: The IDs of the simple application servers.
	AttrInstanceIds() interface{}
	// Attribute PublicIpAddresses: The public IP addresses of simple application servers.
	AttrPublicIpAddresses() interface{}
	Props() *InstancesProps
}

// The jsii proxy for IInstances
type jsiiProxy_IInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstances) AttrInnerIpAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerIpAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstances) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstances) AttrPublicIpAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstances) Props() *InstancesProps {
	var returns *InstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

