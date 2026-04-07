package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `OriginCaCertificate`.
type IOriginCaCertificate interface {
	alicloudroscdkcore.IResource
	// Attribute Certificate: The certificate content.
	AttrCertificate() interface{}
	// Attribute CommonName: The certificate common name.
	AttrCommonName() interface{}
	// Attribute CreateTime: The time when the certificate was created.
	AttrCreateTime() interface{}
	// Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.
	AttrFingerprintSha256() interface{}
	// Attribute Issuer: The certificate authority (CA) that issued the certificate.
	AttrIssuer() interface{}
	// Attribute Name: The certificate name.
	AttrName() interface{}
	// Attribute NotAfter: The expiration date of the certificate validity period.
	AttrNotAfter() interface{}
	// Attribute NotBefore: The start time of the certificate validity period.
	AttrNotBefore() interface{}
	// Attribute OriginCaCertificateId: The certificate ID.
	AttrOriginCaCertificateId() interface{}
	// Attribute PubkeyAlgorithm: Certificate public key algorithm.
	AttrPubkeyAlgorithm() interface{}
	// Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
	AttrSan() interface{}
	// Attribute SerialNumber: The serial number of the certificate.
	AttrSerialNumber() interface{}
	// Attribute SignatureAlgorithm: The signature algorithm of the certificate.
	AttrSignatureAlgorithm() interface{}
	// Attribute SiteId: The website ID.
	AttrSiteId() interface{}
	// Attribute Type: The type of the certificate.
	AttrType() interface{}
	// Attribute UpdateTime: The time when the certificate was updated.
	AttrUpdateTime() interface{}
	Props() *OriginCaCertificateProps
}

// The jsii proxy for IOriginCaCertificate
type jsiiProxy_IOriginCaCertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOriginCaCertificate) AttrCertificate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrCommonName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrFingerprintSha256() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFingerprintSha256",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrIssuer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIssuer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrNotAfter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotAfter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrNotBefore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotBefore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrOriginCaCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginCaCertificateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrPubkeyAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPubkeyAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrSan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrSerialNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSerialNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrSignatureAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSignatureAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginCaCertificate) Props() *OriginCaCertificateProps {
	var returns *OriginCaCertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

