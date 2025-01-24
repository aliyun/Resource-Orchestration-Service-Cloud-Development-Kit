package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/internal"
)

// Represents a `ManagedPolicy`.
type IManagedPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute PolicyName: When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.
	AttrPolicyName() interface{}
	Props() *ManagedPolicyProps
}

// The jsii proxy for IManagedPolicy
type jsiiProxy_IManagedPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IManagedPolicy) AttrPolicyName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedPolicy) Props() *ManagedPolicyProps {
	var returns *ManagedPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

