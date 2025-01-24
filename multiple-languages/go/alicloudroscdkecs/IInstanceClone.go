package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `InstanceClone`.
type IInstanceClone interface {
	alicloudroscdkcore.IResource
	// Attribute HostName: Host name of created instance.
	AttrHostName() interface{}
	// Attribute InnerIp: Inner IP address of the specified instance.
	//
	// Only for classical instance.
	AttrInnerIp() interface{}
	// Attribute InstanceId: The instance ID of created ecs instance.
	AttrInstanceId() interface{}
	// Attribute PrimaryNetworkInterfaceId: Primary network interface ID of created instance.
	AttrPrimaryNetworkInterfaceId() interface{}
	// Attribute PrivateIp: Private IP address of created ecs instance.
	//
	// Only for VPC instance.
	AttrPrivateIp() interface{}
	// Attribute PublicIp: Public IP address of created ecs instance.
	AttrPublicIp() interface{}
	// Attribute SecurityGroupIds: Security group ID list of created instance.
	AttrSecurityGroupIds() interface{}
	// Attribute ZoneId: Zone ID of created instance.
	AttrZoneId() interface{}
	Props() *InstanceCloneProps
}

// The jsii proxy for IInstanceClone
type jsiiProxy_IInstanceClone struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceClone) AttrHostName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClone) AttrInnerIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClone) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClone) AttrPrimaryNetworkInterfaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrimaryNetworkInterfaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClone) AttrPrivateIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClone) AttrPublicIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClone) AttrSecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClone) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceClone) Props() *InstanceCloneProps {
	var returns *InstanceCloneProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

