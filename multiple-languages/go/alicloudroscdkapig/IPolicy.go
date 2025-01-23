package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Policy`.
type IPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute PolicyClassId: The ID of policy class.
	AttrPolicyClassId() interface{}
	// Attribute PolicyClassName: The name of policy class.
	AttrPolicyClassName() interface{}
	// Attribute PolicyConfig: Policy Configuration.
	AttrPolicyConfig() interface{}
	// Attribute PolicyId: The ID of the policy.
	AttrPolicyId() interface{}
	// Attribute PolicyName: The name of the policy.
	AttrPolicyName() interface{}
	Props() *PolicyProps
}

// The jsii proxy for IPolicy
type jsiiProxy_IPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPolicy) AttrPolicyClassId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyClassId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) AttrPolicyClassName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyClassName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) AttrPolicyConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyConfig",
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

func (j *jsiiProxy_IPolicy) Props() *PolicyProps {
	var returns *PolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

