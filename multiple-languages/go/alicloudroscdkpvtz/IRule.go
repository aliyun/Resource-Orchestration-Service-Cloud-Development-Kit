package alicloudroscdkpvtz

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/internal"
)

// Represents a `Rule`.
type IRule interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The timestamp when the forwarding rule was created.
	AttrCreateTime() interface{}
	// Attribute EndpointId: The ID of the endpoint.
	AttrEndpointId() interface{}
	// Attribute EndpointName: The name of the endpoint.
	AttrEndpointName() interface{}
	// Attribute ForwardIp: The information about each destination external server.
	AttrForwardIp() interface{}
	// Attribute RuleName: The name of the forwarding rule.
	AttrRuleName() interface{}
	// Attribute Type: The type of the forwarding rule.
	AttrType() interface{}
	// Attribute Vpcs: The information about each virtual private cloud (VPC) that is associated with the forwarding rule.
	AttrVpcs() interface{}
	// Attribute ZoneName: The domain name that requires Domain Name System (DNS) traffic forwarding.
	AttrZoneName() interface{}
	Props() *RuleProps
}

// The jsii proxy for IRule
type jsiiProxy_IRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IRule) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrEndpointId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrEndpointName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndpointName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrForwardIp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrForwardIp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrVpcs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) AttrZoneName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRule) Props() *RuleProps {
	var returns *RuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

