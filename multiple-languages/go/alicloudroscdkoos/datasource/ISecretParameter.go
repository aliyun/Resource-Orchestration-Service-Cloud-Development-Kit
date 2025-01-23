package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/datasource/internal"
)

// Represents a `SecretParameter`.
type ISecretParameter interface {
	alicloudroscdkcore.IResource
	// Attribute Constraints: The constraints of the encryption parameter.
	AttrConstraints() interface{}
	// Attribute CreatedBy: The user who created the encryption parameter.
	AttrCreatedBy() interface{}
	// Attribute CreateTime: The time when the encryption parameter was created.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the encryption parameter.
	AttrDescription() interface{}
	// Attribute KeyId: The ID of the key of Key Management Service (KMS) that is used for encryption.
	AttrKeyId() interface{}
	// Attribute ParameterVersion: The version number of the encryption parameter.
	AttrParameterVersion() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SecretParameterId: The ID of the encryption parameter.
	AttrSecretParameterId() interface{}
	// Attribute SecretParameterName: The name of the parameter.
	AttrSecretParameterName() interface{}
	// Attribute ShareType: The share type of the encryption parameter.
	AttrShareType() interface{}
	// Attribute Tags: The tags of the parameter.
	AttrTags() interface{}
	// Attribute Type: The type of the parameter.
	AttrType() interface{}
	// Attribute UpdatedBy: The user who updated the encryption parameter.
	AttrUpdatedBy() interface{}
	// Attribute UpdatedDate: The time when the encryption parameter was updated.
	AttrUpdatedDate() interface{}
	// Attribute Value: The value of the encryption parameter.
	AttrValue() interface{}
	Props() *SecretParameterProps
}

// The jsii proxy for ISecretParameter
type jsiiProxy_ISecretParameter struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecretParameter) AttrConstraints() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConstraints",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrCreatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrParameterVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrSecretParameterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretParameterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrSecretParameterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretParameterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrShareType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShareType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrUpdatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrUpdatedDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) AttrValue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecretParameter) Props() *SecretParameterProps {
	var returns *SecretParameterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

