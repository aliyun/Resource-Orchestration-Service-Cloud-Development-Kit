package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `VpcFirewallCen`.
type IVpcFirewallCen interface {
	alicloudroscdkcore.IResource
	// Attribute VpcFirewallId: The instance ID of the VPC firewall.
	AttrVpcFirewallId() interface{}
	Props() *VpcFirewallCenProps
}

// The jsii proxy for IVpcFirewallCen
type jsiiProxy_IVpcFirewallCen struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcFirewallCen) AttrVpcFirewallId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcFirewallId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcFirewallCen) Props() *VpcFirewallCenProps {
	var returns *VpcFirewallCenProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

