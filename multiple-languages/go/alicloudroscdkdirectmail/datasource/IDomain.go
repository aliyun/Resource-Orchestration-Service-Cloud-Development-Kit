package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdirectmail/datasource/internal"
)

// Represents a `Domain`.
type IDomain interface {
	alicloudroscdkcore.IResource
	// Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
	AttrCnameAuthStatus() interface{}
	// Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
	AttrCnameConfirmStatus() interface{}
	// Attribute CnameRecord: Customized part of CNAME host record.
	AttrCnameRecord() interface{}
	// Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
	AttrCreateTime() interface{}
	// Attribute DefaultDomain: Is it the default domain name.
	AttrDefaultDomain() interface{}
	// Attribute DnsMx: MX record value resolved through public DNS.
	AttrDnsMx() interface{}
	// Attribute DnsSpf: SPF record value resolved through public DNS.
	AttrDnsSpf() interface{}
	// Attribute DnsTxt: TXT record value resolved through public DNS.
	AttrDnsTxt() interface{}
	// Attribute DomainId: The ID of the domain name.
	AttrDomainId() interface{}
	// Attribute DomainName: The domain name.
	AttrDomainName() interface{}
	// Attribute DomainType: TXT records provided by the Direct Mail console.
	AttrDomainType() interface{}
	// Attribute IcpStatus: The status of ICP filing.
	AttrIcpStatus() interface{}
	// Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
	AttrMxAuthStatus() interface{}
	// Attribute MxRecord: MX records provided by the Direct Mail console.
	AttrMxRecord() interface{}
	// Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
	AttrSpfAuthStatus() interface{}
	// Attribute SpfRecord: Spf records provided by the Direct Mail console.
	AttrSpfRecord() interface{}
	// Attribute TlDomainName: The primary domain name.
	AttrTlDomainName() interface{}
	// Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
	AttrTracefRecord() interface{}
	Props() *DomainProps
}

// The jsii proxy for IDomain
type jsiiProxy_IDomain struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomain) AttrCnameAuthStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCnameAuthStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrCnameConfirmStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCnameConfirmStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrCnameRecord() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCnameRecord",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrDefaultDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrDnsMx() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDnsMx",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrDnsSpf() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDnsSpf",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrDnsTxt() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDnsTxt",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrDomainId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrDomainName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrDomainType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrIcpStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIcpStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrMxAuthStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMxAuthStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrMxRecord() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMxRecord",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrSpfAuthStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpfAuthStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrSpfRecord() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpfRecord",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrTlDomainName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTlDomainName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrTracefRecord() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTracefRecord",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) Props() *DomainProps {
	var returns *DomainProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

