package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `PolicyAttachment`.
type IPolicyAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute AttachDate: Authorization time.
	AttrAttachDate() interface{}
	// Attribute Description: Policy description.
	AttrDescription() interface{}
	// Attribute PolicyName: The name of the policy.
	AttrPolicyName() interface{}
	// Attribute PolicyType: The type of the policy.
	AttrPolicyType() interface{}
	// Attribute PrincipalName: The name of the object to which you want to attach the policy.
	AttrPrincipalName() interface{}
	// Attribute PrincipalType: The type of the object to which you want to attach the policy.
	//
	// Valid values: IMSUser: RAM user, IMSGroup: RAM user group, ServiceRole: RAM role.
	AttrPrincipalType() interface{}
	// Attribute ResourceGroupId: The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.
	AttrResourceGroupId() interface{}
	Props() *PolicyAttachmentProps
}

// The jsii proxy for IPolicyAttachment
type jsiiProxy_IPolicyAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPolicyAttachment) AttrAttachDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAttachDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicyAttachment) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicyAttachment) AttrPolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicyAttachment) AttrPolicyType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicyAttachment) AttrPrincipalName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrincipalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicyAttachment) AttrPrincipalType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrincipalType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicyAttachment) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicyAttachment) Props() *PolicyAttachmentProps {
	var returns *PolicyAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

