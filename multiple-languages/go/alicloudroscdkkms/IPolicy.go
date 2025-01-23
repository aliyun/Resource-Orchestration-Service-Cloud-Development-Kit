package alicloudroscdkkms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/internal"
)

// Represents a `Policy`.
type IPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute AccessControlRules: Network Rules info.
	AttrAccessControlRules() interface{}
	// Attribute Description: Description.
	AttrDescription() interface{}
	// Attribute KmsInstanceId: The scope of the permission policy.
	//
	// You need to specify the KMS instance that you want to access.
	AttrKmsInstanceId() interface{}
	// Attribute Permissions: RbacPermission Template, support RbacPermission/Template/CryptoServiceKeyUser and RbacPermission/Template/CryptoServiceSecretUser.
	AttrPermissions() interface{}
	// Attribute PolicyName: The name of the permission policy.
	AttrPolicyName() interface{}
	// Attribute Resources: Resources that allowed access by this policy.
	AttrResources() interface{}
	Props() *PolicyProps
}

// The jsii proxy for IPolicy
type jsiiProxy_IPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPolicy) AttrAccessControlRules() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessControlRules",
		&returns,
	)
	return returns
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

