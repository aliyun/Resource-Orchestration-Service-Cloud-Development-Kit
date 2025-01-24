package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `DomainExtension`.
type IDomainExtension interface {
	alicloudroscdkcore.IResource
	// Attribute Domain: The domain name.
	AttrDomain() interface{}
	// Attribute DomainExtensionId: The ID of the additional certificate.
	AttrDomainExtensionId() interface{}
	// Attribute ListenerPort: The frontend port of the HTTPS listener that is configured for the SLB instance.
	//
	// Valid values: 1 to 65535.
	AttrListenerPort() interface{}
	// Attribute LoadBalancerId: The ID of the SLB instance.
	AttrLoadBalancerId() interface{}
	// Attribute ServerCertificateId: The ID of the server certificate that is used by the domain name.
	AttrServerCertificateId() interface{}
	Props() *DomainExtensionProps
}

// The jsii proxy for IDomainExtension
type jsiiProxy_IDomainExtension struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomainExtension) AttrDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainExtension) AttrDomainExtensionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainExtensionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainExtension) AttrListenerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrListenerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainExtension) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainExtension) AttrServerCertificateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServerCertificateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDomainExtension) Props() *DomainExtensionProps {
	var returns *DomainExtensionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

