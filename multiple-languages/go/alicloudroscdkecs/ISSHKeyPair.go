package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SSHKeyPair`.
type ISSHKeyPair interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute KeyPairFingerPrint: The fingerprint of the key pair.
	//
	// The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
	AttrKeyPairFingerPrint() interface{}
	// Attribute KeyPairName: SSH Key pair name.
	AttrKeyPairName() interface{}
	// Attribute PrivateKeyBody: The private key of the key pair.
	//
	// Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
	AttrPrivateKeyBody() interface{}
	Props() *SSHKeyPairProps
}

// The jsii proxy for ISSHKeyPair
type jsiiProxy_ISSHKeyPair struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISSHKeyPair) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISSHKeyPair) AttrKeyPairFingerPrint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairFingerPrint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISSHKeyPair) AttrKeyPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISSHKeyPair) AttrPrivateKeyBody() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateKeyBody",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISSHKeyPair) Props() *SSHKeyPairProps {
	var returns *SSHKeyPairProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

