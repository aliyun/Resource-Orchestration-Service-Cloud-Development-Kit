package alicloudroscdkcas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcas/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PcaCertificate`.
type IPcaCertificate interface {
	alicloudroscdkcore.IResource
	// Attribute Algorithm: The key algorithm type of the root CA certificate.
	//
	// The key algorithm is expressed using the '<encryption algorithm >_< key length>' format.
	AttrAlgorithm() interface{}
	// Attribute CertificateType: The type of CA.
	AttrCertificateType() interface{}
	// Attribute CommonName: The common name or abbreviation of the organization.
	//
	// Support the use of Chinese, English characters.
	AttrCommonName() interface{}
	// Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
	//
	// For example, **CN** represents China and **US** represents the United States.
	AttrCountryCode() interface{}
	// Attribute Identifier: Certificate Identifier.
	AttrIdentifier() interface{}
	// Attribute IssuerType: The institution issuing the CA.
	AttrIssuerType() interface{}
	// Attribute Locality: Name of the city where the organization is located.
	//
	// Support the use of Chinese, English characters.
	AttrLocality() interface{}
	// Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.
	//
	// Support the use of Chinese, English characters.
	AttrOrganization() interface{}
	// Attribute OrganizationUnit: The name of the department or branch under the organization.
	//
	// Support the use of Chinese, English characters.
	AttrOrganizationUnit() interface{}
	// Attribute State: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located.
	//
	// Support the use of Chinese, English characters.
	AttrState() interface{}
	// Attribute Years: The validity period of the root CA certificate, in years.
	AttrYears() interface{}
	Props() *PcaCertificateProps
}

// The jsii proxy for IPcaCertificate
type jsiiProxy_IPcaCertificate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPcaCertificate) AttrAlgorithm() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAlgorithm",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrCertificateType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertificateType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrCommonName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrCountryCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCountryCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrIdentifier() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIdentifier",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrIssuerType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIssuerType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrLocality() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLocality",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrOrganization() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrganization",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrOrganizationUnit() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrganizationUnit",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) AttrYears() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrYears",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPcaCertificate) Props() *PcaCertificateProps {
	var returns *PcaCertificateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

