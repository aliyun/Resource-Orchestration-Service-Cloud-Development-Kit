package alicloudroscdkhbr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/internal"
)

// Represents a `Policy`.
type IPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute PolicyId: The ID of the policy.
	AttrPolicyId() interface{}
	Props() *PolicyProps
}

// The jsii proxy for IPolicy
type jsiiProxy_IPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPolicy) AttrPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicy) Props() *PolicyProps {
	var returns *PolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

