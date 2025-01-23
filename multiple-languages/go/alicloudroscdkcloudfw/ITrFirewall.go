package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TrFirewall`.
type ITrFirewall interface {
	alicloudroscdkcore.IResource
	// Attribute FirewallId: The instance ID of the VPC firewall.
	AttrFirewallId() interface{}
	Props() *TrFirewallProps
}

// The jsii proxy for ITrFirewall
type jsiiProxy_ITrFirewall struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrFirewall) AttrFirewallId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFirewallId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrFirewall) Props() *TrFirewallProps {
	var returns *TrFirewallProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

