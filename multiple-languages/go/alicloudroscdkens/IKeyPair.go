package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `KeyPair`.
type IKeyPair interface {
	alicloudroscdkcore.IResource
	// Attribute KeyPairFingerPrint: The fingerprint of the key pair.
	//
	// The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
	AttrKeyPairFingerPrint() interface{}
	// Attribute KeyPairName: SSH Key pair name.
	AttrKeyPairName() interface{}
	// Attribute PrivateKeyBody: The private key of the key pair.
	//
	// The private key is encoded with PEM in the PKCS#8 format.
	AttrPrivateKeyBody() interface{}
	Props() *KeyPairProps
}

// The jsii proxy for IKeyPair
type jsiiProxy_IKeyPair struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_IKeyPair) AttrPrivateKeyBody() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateKeyBody",
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

