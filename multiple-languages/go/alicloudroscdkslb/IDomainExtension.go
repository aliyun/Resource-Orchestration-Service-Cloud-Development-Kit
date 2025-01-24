package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `DomainExtension`.
type IDomainExtension interface {
	alicloudroscdkcore.IResource
	// Attribute DomainExtensionId: The ID of the created domain name extension.
	AttrDomainExtensionId() interface{}
	// Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance.
	//
	// Valid value:
	// 1-65535.
	AttrListenerPort() interface{}
	Props() *DomainExtensionProps
}

// The jsii proxy for IDomainExtension
type jsiiProxy_IDomainExtension struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_IDomainExtension) Props() *DomainExtensionProps {
	var returns *DomainExtensionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

