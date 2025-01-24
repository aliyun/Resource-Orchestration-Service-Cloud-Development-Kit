package alicloudroscdkalb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkalb/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `SecurityPolicy`.
type ISecurityPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute SecurityPolicyId: The ID of the security policy.
	AttrSecurityPolicyId() interface{}
	Props() *SecurityPolicyProps
}

// The jsii proxy for ISecurityPolicy
type jsiiProxy_ISecurityPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityPolicy) AttrSecurityPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityPolicy) Props() *SecurityPolicyProps {
	var returns *SecurityPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

