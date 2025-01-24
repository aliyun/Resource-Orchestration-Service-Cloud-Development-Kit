package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `AttachPolicyToGroup`.
type IAttachPolicyToGroup interface {
	alicloudroscdkcore.IResource
	// Attribute GroupName: User group name.
	AttrGroupName() interface{}
	// Attribute PolicyName: Authorization policy name.
	AttrPolicyName() interface{}
	Props() *AttachPolicyToGroupProps
}

// The jsii proxy for IAttachPolicyToGroup
type jsiiProxy_IAttachPolicyToGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAttachPolicyToGroup) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttachPolicyToGroup) AttrPolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAttachPolicyToGroup) Props() *AttachPolicyToGroupProps {
	var returns *AttachPolicyToGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

