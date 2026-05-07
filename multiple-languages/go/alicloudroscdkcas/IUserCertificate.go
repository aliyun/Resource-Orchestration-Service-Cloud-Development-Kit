package alicloudroscdkcas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcas/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `UserCertificate`.
type IUserCertificate interface {
	alicloudroscdkcore.IResource
	// Attribute Cert: The certificate content in PEM format.
	AttrCert() interface{}
	// Attribute CertId: Certificate ID.
	AttrCertId() interface{}
	// Attribute CertificateName: Custom certificate name.
	//
	// Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
	AttrCertificateName() interface{}
	// Attribute EncryptCert: The content of the encryption certificate in PEM format.
	AttrEncryptCert() interface{}
	// Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
	AttrEncryptPrivateKey() interface{}
	// Attribute Key: The private key content of the certificate in PEM format.
	AttrKey() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SignCert: The signature certificate content in PEM format.
	AttrSignCert() interface{}
	// Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.
	AttrSignPrivateKey() interface{}
	// Attribute Tags: The tag of the resource.
	AttrTags() interface{}
	Props() *UserCertificateProps
}

// The jsii proxy for IUserCertificate
type jsiiProxy_IUserCertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserCertificate) AttrCert() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCert",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) AttrCertId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) AttrCertificateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) AttrEncryptCert() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncryptCert",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) AttrEncryptPrivateKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEncryptPrivateKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) AttrKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) AttrSignCert() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSignCert",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) AttrSignPrivateKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSignPrivateKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserCertificate) Props() *UserCertificateProps {
	var returns *UserCertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

