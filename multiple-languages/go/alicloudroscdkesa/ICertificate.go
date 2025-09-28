package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `Certificate`.
type ICertificate interface {
	alicloudroscdkcore.IResource
	// Attribute ApplyCode: Certificate application error code.
	AttrApplyCode() interface{}
	// Attribute ApplyMessage: Certificate application error message.
	AttrApplyMessage() interface{}
	// Attribute CasId: Cloud certificate ID.
	AttrCasId() interface{}
	// Attribute CertId: The certificate Id.
	AttrCertId() interface{}
	// Attribute Certificate: Certificate content.
	AttrCertificate() interface{}
	// Attribute CertName: The certificate name.
	AttrCertName() interface{}
	// Attribute CommonName: Common Name (CN) field of the certificate.
	AttrCommonName() interface{}
	// Attribute CreateTime: Creation time.
	AttrCreateTime() interface{}
	// Attribute DCV: DCV information.
	AttrDcv() interface{}
	// Attribute Domains: A list of domain names.
	//
	// Multiple domain names are separated by commas.
	AttrDomains() interface{}
	// Attribute FingerprintSha256: SHA256 fingerprint of the certificate.
	AttrFingerprintSha256() interface{}
	// Attribute Issuer: Certificate issuer.
	AttrIssuer() interface{}
	// Attribute IssuerCN: Common name of the certificate issuer.
	AttrIssuerCn() interface{}
	// Attribute NotAfter: End time of the certificate validity period.
	AttrNotAfter() interface{}
	// Attribute NotBefore: Start time of the certificate validity period.
	AttrNotBefore() interface{}
	// Attribute PubAlg: Certificate public key algorithm.
	AttrPubAlg() interface{}
	// Attribute SerialNumber: Serial number of the certificate.
	AttrSerialNumber() interface{}
	// Attribute SigAlg: Certificate signature algorithm.
	AttrSigAlg() interface{}
	// Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.
	AttrSiteId() interface{}
	// Attribute SiteName: Site name.
	AttrSiteName() interface{}
	// Attribute UpdateTime: Update time.
	AttrUpdateTime() interface{}
	Props() *CertificateProps
}

// The jsii proxy for ICertificate
type jsiiProxy_ICertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICertificate) AttrApplyCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApplyCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrApplyMessage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApplyMessage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrCasId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCasId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrCertId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrCertificate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrCertName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrCommonName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrDcv() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDcv",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrDomains() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomains",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrFingerprintSha256() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFingerprintSha256",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrIssuer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIssuer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrIssuerCn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIssuerCn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrNotAfter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotAfter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrNotBefore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotBefore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrPubAlg() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPubAlg",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrSerialNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSerialNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrSigAlg() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSigAlg",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrSiteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICertificate) Props() *CertificateProps {
	var returns *CertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

