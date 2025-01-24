package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `ControlPolicyAttachment`.
type IControlPolicyAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute AttachDate: AttachDate.
	AttrAttachDate() interface{}
	// Attribute Description: Description.
	AttrDescription() interface{}
	// Attribute PolicyId: PolicyId.
	AttrPolicyId() interface{}
	// Attribute PolicyName: PolicyName.
	AttrPolicyName() interface{}
	// Attribute PolicyType: PolicyType.
	AttrPolicyType() interface{}
	// Attribute TargetId: TargetId.
	AttrTargetId() interface{}
	Props() *ControlPolicyAttachmentProps
}

// The jsii proxy for IControlPolicyAttachment
type jsiiProxy_IControlPolicyAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IControlPolicyAttachment) AttrAttachDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicyAttachment) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicyAttachment) AttrPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicyAttachment) AttrPolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicyAttachment) AttrPolicyType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicyAttachment) AttrTargetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTargetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicyAttachment) Props() *ControlPolicyAttachmentProps {
	var returns *ControlPolicyAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

