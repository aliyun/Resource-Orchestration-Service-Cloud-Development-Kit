package alicloudroscdkwaf

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkwaf/internal"
)

// Represents a `DomainConfig`.
type IDomainConfig interface {
	alicloudroscdkcore.IResource
	// Attribute Cname: CNAME assigned by WAF instance.
	AttrCname() interface{}
	// Attribute ProtocolType: agreement type:0: indicates that the HTTP protocol is supported.1: indicates that the HTTPS protocol is supported.2: indicates that both HTTP and HTTPS protocols are supported.
	AttrProtocolType() interface{}
	Props() *DomainConfigProps
}

// The jsii proxy for IDomainConfig
type jsiiProxy_IDomainConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomainConfig) AttrCname() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCname",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainConfig) AttrProtocolType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocolType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainConfig) Props() *DomainConfigProps {
	var returns *DomainConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

