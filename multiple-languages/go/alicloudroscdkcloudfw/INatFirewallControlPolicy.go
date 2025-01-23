package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `NatFirewallControlPolicy`.
type INatFirewallControlPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute AclUuid: The unique ID of the access control policy.
	AttrAclUuid() interface{}
	// Attribute Direction: The direction of the traffic to which the access control policy applies.
	AttrDirection() interface{}
	// Attribute NatGatewayId: The ID of the NAT gateway.
	AttrNatGatewayId() interface{}
	Props() *NatFirewallControlPolicyProps
}

// The jsii proxy for INatFirewallControlPolicy
type jsiiProxy_INatFirewallControlPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INatFirewallControlPolicy) AttrAclUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatFirewallControlPolicy) AttrDirection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDirection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatFirewallControlPolicy) AttrNatGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatFirewallControlPolicy) Props() *NatFirewallControlPolicyProps {
	var returns *NatFirewallControlPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

