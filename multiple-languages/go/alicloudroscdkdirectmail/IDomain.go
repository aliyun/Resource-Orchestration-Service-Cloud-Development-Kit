// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkdirectmail

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdirectmail/internal"
)

// Represents a `Domain`.
type IDomain interface {
	alicloudroscdkcore.IResource
	// Attribute CnameAuthStatus: Cname auth status.
	AttrCnameAuthStatus() interface{}
	// Attribute CnameConfirmStatus: Cname confirm status.
	AttrCnameConfirmStatus() interface{}
	// Attribute CnameRecord: Cname record.
	AttrCnameRecord() interface{}
	// Attribute CreateTime: The creation time of the domain.
	AttrCreateTime() interface{}
	// Attribute DefaultDomain: Default domain.
	AttrDefaultDomain() interface{}
	// Attribute DnsMx: DNS MX.
	AttrDnsMx() interface{}
	// Attribute DnsSpf: DNS SPF.
	AttrDnsSpf() interface{}
	// Attribute DnsTxt: DNS txt.
	AttrDnsTxt() interface{}
	// Attribute DomainId: The ID of the domain.
	AttrDomainId() interface{}
	// Attribute DomainName: The name of the domain.
	AttrDomainName() interface{}
	// Attribute DomainType: The type of the domain.
	AttrDomainType() interface{}
	// Attribute IcpStatus: ICP status.
	AttrIcpStatus() interface{}
	// Attribute MxAuthStatus: MX auth status.
	AttrMxAuthStatus() interface{}
	// Attribute MxRecord: MX Record.
	AttrMxRecord() interface{}
	// Attribute SpfAuthStatus: SPF auth status.
	AttrSpfAuthStatus() interface{}
	// Attribute SpfRecord: SPF record.
	AttrSpfRecord() interface{}
	// Attribute TlDomainName: TL domain name.
	AttrTlDomainName() interface{}
	// Attribute TracefRecord: Tracef Record.
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

