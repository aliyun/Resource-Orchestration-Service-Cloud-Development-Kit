package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `SiteOriginClientCertificate`.
type ISiteOriginClientCertificate interface {
	alicloudroscdkcore.IResource
	// Attribute Certificate: The certificate content.
	AttrCertificate() interface{}
	// Attribute CommonName: The Common Name of the certificate.
	AttrCommonName() interface{}
	// Attribute CreateTime: The time when the certificate was created.
	AttrCreateTime() interface{}
	// Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.
	AttrFingerprintSha256() interface{}
	// Attribute Issuer: The certificate authority (CA) that issued the certificate.
	AttrIssuer() interface{}
	// Attribute NotAfter: The time when the certificate expires.
	AttrNotAfter() interface{}
	// Attribute NotBefore: The time when the certificate takes effect.
	AttrNotBefore() interface{}
	// Attribute PubkeyAlgorithm: The public key algorithm of the certificate.
	AttrPubkeyAlgorithm() interface{}
	// Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
	AttrSan() interface{}
	// Attribute SerialNumber: The serial number of the certificate.
	AttrSerialNumber() interface{}
	// Attribute SignatureAlgorithm: The signature algorithm of the certificate.
	AttrSignatureAlgorithm() interface{}
	// Attribute SiteId: Site ID.
	AttrSiteId() interface{}
	// Attribute SiteName: The website name.
	AttrSiteName() interface{}
	// Attribute SiteOriginClientCertificateId: The certificate ID on ESA.
	AttrSiteOriginClientCertificateId() interface{}
	// Attribute SiteOriginClientCertificateName: The certificate name.
	AttrSiteOriginClientCertificateName() interface{}
	// Attribute Type: The certificate type.
	AttrType() interface{}
	// Attribute UpdateTime: The time when the certificate was updated.
	AttrUpdateTime() interface{}
	Props() *SiteOriginClientCertificateProps
}

// The jsii proxy for ISiteOriginClientCertificate
type jsiiProxy_ISiteOriginClientCertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrCertificate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrCommonName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrFingerprintSha256() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFingerprintSha256",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrIssuer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIssuer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrNotAfter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotAfter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrNotBefore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotBefore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrPubkeyAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPubkeyAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrSan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrSerialNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSerialNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrSignatureAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSignatureAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrSiteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrSiteOriginClientCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteOriginClientCertificateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrSiteOriginClientCertificateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteOriginClientCertificateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISiteOriginClientCertificate) Props() *SiteOriginClientCertificateProps {
	var returns *SiteOriginClientCertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

