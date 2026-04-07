package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `Ipv6EgressRule`.
type IIpv6EgressRule interface {
	alicloudroscdkcore.IResource
	// Attribute Description: The description of the egress-only rule.
	AttrDescription() interface{}
	// Attribute InstanceId: The ID of the IPv6 address for which you want to create an egress-only rule.
	AttrInstanceId() interface{}
	// Attribute InstanceType: The type of the instance to which you want to apply the egress-only rule.
	AttrInstanceType() interface{}
	// Attribute Ipv6EgressRuleId: The ID of the egress-only rule that you want to delete.
	AttrIpv6EgressRuleId() interface{}
	// Attribute Ipv6EgressRuleName: The name of the egress-only rule.
	AttrIpv6EgressRuleName() interface{}
	Props() *Ipv6EgressRuleProps
}

// The jsii proxy for IIpv6EgressRule
type jsiiProxy_IIpv6EgressRule struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpv6EgressRule) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv6EgressRule) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv6EgressRule) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv6EgressRule) AttrIpv6EgressRuleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6EgressRuleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv6EgressRule) AttrIpv6EgressRuleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6EgressRuleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv6EgressRule) Props() *Ipv6EgressRuleProps {
	var returns *Ipv6EgressRuleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

