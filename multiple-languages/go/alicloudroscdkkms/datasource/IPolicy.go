package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/datasource/internal"
)

// Represents a `Policy`.
type IPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute Description: The policy description.
	AttrDescription() interface{}
	// Attribute KmsInstanceId: KMS instance accessed by this policy.
	AttrKmsInstanceId() interface{}
	// Attribute NetworkRules: The network access rule that is associated with the permission policy.
	AttrNetworkRules() interface{}
	// Attribute Permissions: A list of operations that can be performed.
	AttrPermissions() interface{}
	// Attribute PolicyName: The name of the permission policy.
	AttrPolicyName() interface{}
	// Attribute Resources: A list of keys and secrets that are allowed to access.
	AttrResources() interface{}
	Props() *PolicyProps
}

// The jsii proxy for IPolicy
type jsiiProxy_IPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPolicy) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) AttrKmsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKmsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) AttrNetworkRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkRules",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) AttrPermissions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPermissions",
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

func (j *jsiiProxy_IPolicy) AttrResources() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResources",
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

