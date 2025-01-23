package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `ControlPolicy`.
type IControlPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute AttachmentCount: AttachmentCount.
	AttrAttachmentCount() interface{}
	// Attribute ControlPolicyName: PolicyName.
	AttrControlPolicyName() interface{}
	// Attribute Description: Description.
	AttrDescription() interface{}
	// Attribute EffectScope: EffectScope.
	AttrEffectScope() interface{}
	// Attribute PolicyDocument: PolicyDocument.
	AttrPolicyDocument() interface{}
	// Attribute PolicyId: PolicyId.
	AttrPolicyId() interface{}
	// Attribute PolicyType: PolicyType.
	AttrPolicyType() interface{}
	Props() *ControlPolicyProps
}

// The jsii proxy for IControlPolicy
type jsiiProxy_IControlPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IControlPolicy) AttrAttachmentCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachmentCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicy) AttrControlPolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrControlPolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicy) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicy) AttrEffectScope() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEffectScope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicy) AttrPolicyDocument() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyDocument",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicy) AttrPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicy) AttrPolicyType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicy) Props() *ControlPolicyProps {
	var returns *ControlPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

