package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `TLSPolicy`.
type ITLSPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute Ciphers: The cipher suites supported by the TLS version.
	AttrCiphers() interface{}
	// Attribute CreateTime: The timestamp generated when the TLS policy is created.
	AttrCreateTime() interface{}
	// Attribute InstanceId: The ID of the TLS policy.
	AttrInstanceId() interface{}
	// Attribute TLSPolicyName: The name of the TLS policy.
	AttrTlsPolicyName() interface{}
	// Attribute TlsVersions: The version of the TLS protocol.
	AttrTlsVersions() interface{}
	Props() *TLSPolicyProps
}

// The jsii proxy for ITLSPolicy
type jsiiProxy_ITLSPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITLSPolicy) AttrCiphers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCiphers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITLSPolicy) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITLSPolicy) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITLSPolicy) AttrTlsPolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTlsPolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITLSPolicy) AttrTlsVersions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTlsVersions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITLSPolicy) Props() *TLSPolicyProps {
	var returns *TLSPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

