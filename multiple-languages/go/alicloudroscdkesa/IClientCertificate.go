package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `ClientCertificate`.
type IClientCertificate interface {
	alicloudroscdkcore.IResource
	// Attribute CACertificateId: The ID of the CA certificate.
	AttrCaCertificateId() interface{}
	// Attribute Certificate: Certificate content.
	AttrCertificate() interface{}
	// Attribute ClientCertId: ClientCertificate Id.
	AttrClientCertId() interface{}
	// Attribute ClientCertificateName: The certificate name.
	AttrClientCertificateName() interface{}
	// Attribute CommonName: The Common Name of the certificate.
	AttrCommonName() interface{}
	// Attribute CreateTime: The time when the certificate was created.
	AttrCreateTime() interface{}
	// Attribute Issuer: The certificate authority (CA) that issued the certificate.
	AttrIssuer() interface{}
	// Attribute NotAfter: The time when the certificate expires.
	AttrNotAfter() interface{}
	// Attribute NotBefore: The time when the certificate takes effect.
	AttrNotBefore() interface{}
	// Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
	AttrPubkeyAlgorithm() interface{}
	// Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
	AttrSan() interface{}
	// Attribute SignatureAlgorithm: The signature algorithm of the certificate.
	AttrSignatureAlgorithm() interface{}
	// Attribute SiteId: Site Id.
	AttrSiteId() interface{}
	// Attribute SiteName: The website name.
	AttrSiteName() interface{}
	// Attribute Type: The certificate type.
	AttrType() interface{}
	// Attribute UpdateTime: The time when the certificate was updated.
	AttrUpdateTime() interface{}
	Props() *ClientCertificateProps
}

// The jsii proxy for IClientCertificate
type jsiiProxy_IClientCertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClientCertificate) AttrCaCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCaCertificateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrCertificate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrClientCertId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientCertId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrClientCertificateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientCertificateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrCommonName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrIssuer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIssuer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrNotAfter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotAfter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrNotBefore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotBefore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrPubkeyAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPubkeyAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrSan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrSignatureAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSignatureAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrSiteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCertificate) Props() *ClientCertificateProps {
	var returns *ClientCertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

