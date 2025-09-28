package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `ClientCaCertificate`.
type IClientCaCertificate interface {
	alicloudroscdkcore.IResource
	// Attribute Certificate: Certificate content.
	AttrCertificate() interface{}
	// Attribute ClientCaCertId: ClientCaCertificate Id.
	AttrClientCaCertId() interface{}
	// Attribute ClientCaCertName: The certificate name.
	AttrClientCaCertName() interface{}
	// Attribute CommonName: The certificate common name.
	AttrCommonName() interface{}
	// Attribute CreateTime: Creation time.
	AttrCreateTime() interface{}
	// Attribute Issuer: Certificate Authority.
	AttrIssuer() interface{}
	// Attribute NotAfter: The expiration date of the certificate validity period.
	AttrNotAfter() interface{}
	// Attribute NotBefore: The start time of the certificate validity period.
	AttrNotBefore() interface{}
	// Attribute PubkeyAlgorithm: Certificate public key algorithm.
	AttrPubkeyAlgorithm() interface{}
	// Attribute SAN: Alternate certificate subject name.
	AttrSan() interface{}
	// Attribute SignatureAlgorithm: Certificate signature algorithm.
	AttrSignatureAlgorithm() interface{}
	// Attribute SiteId: Site Id.
	AttrSiteId() interface{}
	// Attribute SiteName: The website name.
	AttrSiteName() interface{}
	// Attribute Type: The certificate type.
	AttrType() interface{}
	// Attribute UpdateTime: Update time.
	AttrUpdateTime() interface{}
	Props() *ClientCaCertificateProps
}

// The jsii proxy for IClientCaCertificate
type jsiiProxy_IClientCaCertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IClientCaCertificate) AttrCertificate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrClientCaCertId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientCaCertId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrClientCaCertName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientCaCertName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrCommonName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrIssuer() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIssuer",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrNotAfter() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotAfter",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrNotBefore() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNotBefore",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrPubkeyAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPubkeyAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrSan() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSan",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrSignatureAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSignatureAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrSiteId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrSiteName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSiteName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IClientCaCertificate) Props() *ClientCaCertificateProps {
	var returns *ClientCaCertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

