package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `VpcFirewallControlPolicy`.
type IVpcFirewallControlPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute AclUuid: The unique ID of the access control policy.
	AttrAclUuid() interface{}
	Props() *VpcFirewallControlPolicyProps
}

// The jsii proxy for IVpcFirewallControlPolicy
type jsiiProxy_IVpcFirewallControlPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpcFirewallControlPolicy) AttrAclUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpcFirewallControlPolicy) Props() *VpcFirewallControlPolicyProps {
	var returns *VpcFirewallControlPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

