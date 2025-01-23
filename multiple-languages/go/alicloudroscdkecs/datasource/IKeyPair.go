package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `KeyPair`.
type IKeyPair interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the key pair was created.
	AttrCreateTime() interface{}
	// Attribute FingerPrint: The fingerprint of the key pair.
	AttrFingerPrint() interface{}
	// Attribute KeyPairName: The name of the key pair.
	AttrKeyPairName() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tags of the key pair.
	AttrTags() interface{}
	Props() *KeyPairProps
}

// The jsii proxy for IKeyPair
type jsiiProxy_IKeyPair struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IKeyPair) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeyPair) AttrFingerPrint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFingerPrint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeyPair) AttrKeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeyPair) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeyPair) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IKeyPair) Props() *KeyPairProps {
	var returns *KeyPairProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

