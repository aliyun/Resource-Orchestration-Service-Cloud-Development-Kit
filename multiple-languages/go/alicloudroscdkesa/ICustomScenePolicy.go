package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `CustomScenePolicy`.
type ICustomScenePolicy interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the policy takes effect.
	AttrCreateTime() interface{}
	// Attribute CustomScenePolicyName: The name of the policy.
	AttrCustomScenePolicyName() interface{}
	// Attribute EndTime: The time when the policy expires.
	AttrEndTime() interface{}
	// Attribute Objects: The IDs of websites associated.
	AttrObjects() interface{}
	// Attribute PolicyId: The Id of the Policy.
	AttrPolicyId() interface{}
	// Attribute Template: The name of the policy template.
	AttrTemplate() interface{}
	Props() *CustomScenePolicyProps
}

// The jsii proxy for ICustomScenePolicy
type jsiiProxy_ICustomScenePolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICustomScenePolicy) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomScenePolicy) AttrCustomScenePolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomScenePolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomScenePolicy) AttrEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomScenePolicy) AttrObjects() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrObjects",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomScenePolicy) AttrPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomScenePolicy) AttrTemplate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICustomScenePolicy) Props() *CustomScenePolicyProps {
	var returns *CustomScenePolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

