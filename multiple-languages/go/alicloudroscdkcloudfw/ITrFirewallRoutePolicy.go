package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TrFirewallRoutePolicy`.
type ITrFirewallRoutePolicy interface {
	alicloudroscdkcore.IResource
	// Attribute FirewallId: The instance ID of the VPC firewall.
	AttrFirewallId() interface{}
	// Attribute TrFirewallRoutePolicyId: The ID of the routing policy.
	AttrTrFirewallRoutePolicyId() interface{}
	Props() *TrFirewallRoutePolicyProps
}

// The jsii proxy for ITrFirewallRoutePolicy
type jsiiProxy_ITrFirewallRoutePolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrFirewallRoutePolicy) AttrFirewallId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFirewallId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrFirewallRoutePolicy) AttrTrFirewallRoutePolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrFirewallRoutePolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrFirewallRoutePolicy) Props() *TrFirewallRoutePolicyProps {
	var returns *TrFirewallRoutePolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

