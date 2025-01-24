package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `InstanceSecurityGroupAttachment`.
type IInstanceSecurityGroupAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: Instance ID.
	AttrInstanceId() interface{}
	// Attribute SecurityGroupId: Security group ID.
	AttrSecurityGroupId() interface{}
	Props() *InstanceSecurityGroupAttachmentProps
}

// The jsii proxy for IInstanceSecurityGroupAttachment
type jsiiProxy_IInstanceSecurityGroupAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceSecurityGroupAttachment) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceSecurityGroupAttachment) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceSecurityGroupAttachment) Props() *InstanceSecurityGroupAttachmentProps {
	var returns *InstanceSecurityGroupAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

