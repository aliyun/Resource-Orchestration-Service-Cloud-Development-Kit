package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `VpcFirewallConfigure`.
type IVpcFirewallConfigure interface {
	alicloudroscdkcore.IResource
	// Attribute VpcFirewallId: The instance ID of the VPC firewall.
	AttrVpcFirewallId() interface{}
	Props() *VpcFirewallConfigureProps
}

// The jsii proxy for IVpcFirewallConfigure
type jsiiProxy_IVpcFirewallConfigure struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcFirewallConfigure) AttrVpcFirewallId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcFirewallId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcFirewallConfigure) Props() *VpcFirewallConfigureProps {
	var returns *VpcFirewallConfigureProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

