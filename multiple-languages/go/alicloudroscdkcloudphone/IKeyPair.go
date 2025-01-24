package alicloudroscdkcloudphone

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudphone/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `KeyPair`.
type IKeyPair interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute KeyPairFingerPrint: The fingerprint of the key pair.
	//
	// The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716.
	AttrKeyPairFingerPrint() interface{}
	// Attribute KeyPairName: The name of the key pair.
	AttrKeyPairName() interface{}
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

func (j *jsiiProxy_IKeyPair) AttrKeyPairFingerPrint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairFingerPrint",
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

func (j *jsiiProxy_IKeyPair) Props() *KeyPairProps {
	var returns *KeyPairProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

