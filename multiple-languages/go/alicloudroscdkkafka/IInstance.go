package alicloudroscdkkafka

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkafka/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute DomainEndpoint: The default endpoints of the instance in domain name mode.
	AttrDomainEndpoint() interface{}
	// Attribute Endpoint: The SSL endpoints of the instance in IP address mode.
	AttrEndpoint() interface{}
	// Attribute InstanceId: Id of the instance.
	AttrInstanceId() interface{}
	// Attribute Name: Name of the instance.
	AttrName() interface{}
	// Attribute OrderId: Id of the order.
	AttrOrderId() interface{}
	// Attribute SaslDomainEndpoint: The Simple Authentication and Security Layer (SASL) endpoints of the instance in domain name mode.
	AttrSaslDomainEndpoint() interface{}
	// Attribute SslDomainEndpoint: The SSL endpoints of the instance in domain name mode.
	AttrSslDomainEndpoint() interface{}
	// Attribute SslEndpoint: The SSL endpoints of the instance in IP address mode.
	AttrSslEndpoint() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDomainEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDomainEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSaslDomainEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSaslDomainEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSslDomainEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslDomainEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSslEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

