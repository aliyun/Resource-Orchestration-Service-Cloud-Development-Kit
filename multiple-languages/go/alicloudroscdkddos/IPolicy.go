package alicloudroscdkddos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkddos/internal"
)

// Represents a `Policy`.
type IPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute Content: Configuration Content.
	AttrContent() interface{}
	// Attribute PolicyId: The ID of the policy.
	AttrPolicyId() interface{}
	// Attribute PolicyName: The name of the policy.
	AttrPolicyName() interface{}
	// Attribute Type: The type of the policy.
	AttrType() interface{}
	Props() *PolicyProps
}

// The jsii proxy for IPolicy
type jsiiProxy_IPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPolicy) AttrContent() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContent",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) AttrPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) AttrPolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) Props() *PolicyProps {
	var returns *PolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

