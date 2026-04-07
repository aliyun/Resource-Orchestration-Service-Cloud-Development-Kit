package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `OriginClientCertificate`.
type IOriginClientCertificate interface {
	alicloudroscdkcore.IResource
	// Attribute Certificate: The certificate content.
	AttrCertificate() interface{}
	// Attribute CommonName: The Common Name of the certificate.
	AttrCommonName() interface{}
	// Attribute CreateTime: The time when the certificate was created.
	AttrCreateTime() interface{}
	// Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.
	AttrFingerprintSha256() interface{}
	// Attribute Hostnames: The domain names to associate.
	AttrHostnames() interface{}
	// Attribute Issuer: The certificate authority (CA) that issued the certificate.
	AttrIssuer() interface{}
	// Attribute NotAfter: The time when the certificate expires.
	AttrNotAfter() interface{}
	// Attribute NotBefore: The time when the certificate takes effect.
	AttrNotBefore() interface{}
	// Attribute OriginClientCertificateId: The certificate ID.
	AttrOriginClientCertificateId() interface{}
	// Attribute OriginClientCertificateName: The certificate name.
	AttrOriginClientCertificateName() interface{}
	// Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
	AttrPubkeyAlgorithm() interface{}
	// Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
	AttrSan() interface{}
	// Attribute SerialNumber: The serial number of the certificate.
	AttrSerialNumber() interface{}
	// Attribute SignatureAlgorithm: The signature algorithm of the certificate.
	AttrSignatureAlgorithm() interface{}
	// Attribute SiteId: The website ID.
	AttrSiteId() interface{}
	// Attribute SiteName: The website name.
	AttrSiteName() interface{}
	// Attribute Type: The certificate type.
	AttrType() interface{}
	// Attribute UpdateTime: The time when the certificate was updated.
	AttrUpdateTime() interface{}
	Props() *OriginClientCertificateProps
}

// The jsii proxy for IOriginClientCertificate
type jsiiProxy_IOriginClientCertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOriginClientCertificate) AttrCertificate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrCommonName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrFingerprintSha256() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFingerprintSha256",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrHostnames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostnames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrIssuer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIssuer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrNotAfter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotAfter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrNotBefore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotBefore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrOriginClientCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginClientCertificateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrOriginClientCertificateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOriginClientCertificateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrPubkeyAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPubkeyAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrSan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrSerialNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSerialNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrSignatureAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSignatureAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrSiteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOriginClientCertificate) Props() *OriginClientCertificateProps {
	var returns *OriginClientCertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

