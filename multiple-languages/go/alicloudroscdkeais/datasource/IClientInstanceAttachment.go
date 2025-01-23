package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeais/datasource/internal"
)

// Represents a `ClientInstanceAttachment`.
type IClientInstanceAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
	AttrClientInstanceId() interface{}
	// Attribute InstanceId: The EAIS instance ID.
	AttrInstanceId() interface{}
	// Attribute SecurityGroupId: The ID of the security group.
	AttrSecurityGroupId() interface{}
	// Attribute VSwitchId: The vSwitch ID.
	AttrVSwitchId() interface{}
	Props() *ClientInstanceAttachmentProps
}

// The jsii proxy for IClientInstanceAttachment
type jsiiProxy_IClientInstanceAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClientInstanceAttachment) AttrClientInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientInstanceAttachment) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientInstanceAttachment) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientInstanceAttachment) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientInstanceAttachment) Props() *ClientInstanceAttachmentProps {
	var returns *ClientInstanceAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

