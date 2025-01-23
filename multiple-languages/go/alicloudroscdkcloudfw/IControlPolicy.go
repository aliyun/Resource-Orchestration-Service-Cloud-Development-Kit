package alicloudroscdkcloudfw

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudfw/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ControlPolicy`.
type IControlPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute AclUuid: Security access control ID that uniquely identifies the policy.
	AttrAclUuid() interface{}
	Props() *ControlPolicyProps
}

// The jsii proxy for IControlPolicy
type jsiiProxy_IControlPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IControlPolicy) AttrAclUuid() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAclUuid",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IControlPolicy) Props() *ControlPolicyProps {
	var returns *ControlPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

