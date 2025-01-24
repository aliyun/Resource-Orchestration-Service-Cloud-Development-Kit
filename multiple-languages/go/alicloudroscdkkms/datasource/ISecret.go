package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/datasource/internal"
)

// Represents a `Secret`.
type ISecret interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.
	AttrArn() interface{}
	// Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.
	AttrAutomaticRotation() interface{}
	// Attribute CreateTime: The time when the secret was created.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the secret.
	AttrDescription() interface{}
	// Attribute DKMSInstanceId: The ID of the dedicated KMS instance.
	AttrDkmsInstanceId() interface{}
	// Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.
	AttrEncryptionKeyId() interface{}
	// Attribute ExtendedConfig: The extended configuration of the secret.
	AttrExtendedConfig() interface{}
	// Attribute LastRotationDate: The time when the last rotation was performed.
	AttrLastRotationDate() interface{}
	// Attribute NextRotationDate: The time when the next rotation will be performed.
	AttrNextRotationDate() interface{}
	// Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.
	AttrPlannedDeleteTime() interface{}
	// Attribute RotationInterval: The interval for automatic rotation.
	//
	// The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
	AttrRotationInterval() interface{}
	// Attribute SecretName: The name of the secret.
	AttrSecretName() interface{}
	// Attribute SecretType: The type of the secret.
	AttrSecretType() interface{}
	// Attribute UpdateTime: The time when the secret was updated.
	AttrUpdateTime() interface{}
	Props() *SecretProps
}

// The jsii proxy for ISecret
type jsiiProxy_ISecret struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecret) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrAutomaticRotation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutomaticRotation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrDkmsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDkmsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrEncryptionKeyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncryptionKeyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrExtendedConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExtendedConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrLastRotationDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastRotationDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrNextRotationDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNextRotationDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrPlannedDeleteTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlannedDeleteTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrRotationInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRotationInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrSecretName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrSecretType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecret) Props() *SecretProps {
	var returns *SecretProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

