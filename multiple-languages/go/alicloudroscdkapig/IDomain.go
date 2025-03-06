// Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com
package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Domain`.
type IDomain interface {
	alicloudroscdkcore.IResource
	// Attribute CertIdentifier: The tls Certificate identification.
	AttrCertIdentifier() interface{}
	// Attribute DomainId: The ID of the Domain.
	AttrDomainId() interface{}
	// Attribute DomainName: The name of the Domain.
	AttrDomainName() interface{}
	// Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
	AttrForceHttps() interface{}
	// Attribute Http2Option: Whether to enable http2 settings.
	AttrHttp2Option() interface{}
	// Attribute Protocol: The types of protocols.
	AttrProtocol() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.
	AttrTlsCipherSuitesConfig() interface{}
	// Attribute TlsMax: The maximum version of the TLS protocol.
	//
	// The maximum version of the TLS protocol is 1.3.
	AttrTlsMax() interface{}
	// Attribute TlsMin: The minimum version of the TLS protocol.
	//
	// The minimum version of the TLS protocol is 1.0.
	AttrTlsMin() interface{}
	Props() *DomainProps
}

// The jsii proxy for IDomain
type jsiiProxy_IDomain struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomain) AttrCertIdentifier() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCertIdentifier",
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

func (j *jsiiProxy_IDomain) AttrForceHttps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrForceHttps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrHttp2Option() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttp2Option",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrProtocol() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocol",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrTlsCipherSuitesConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTlsCipherSuitesConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrTlsMax() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTlsMax",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomain) AttrTlsMin() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTlsMin",
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

