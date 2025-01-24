package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `RamRoleAttachment`.
type IRamRoleAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceIds: The list of ecs instance id.
	AttrInstanceIds() interface{}
	// Attribute RamRoleName: The ram role name.
	AttrRamRoleName() interface{}
	Props() *RamRoleAttachmentProps
}

// The jsii proxy for IRamRoleAttachment
type jsiiProxy_IRamRoleAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRamRoleAttachment) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRamRoleAttachment) AttrRamRoleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRamRoleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRamRoleAttachment) Props() *RamRoleAttachmentProps {
	var returns *RamRoleAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

