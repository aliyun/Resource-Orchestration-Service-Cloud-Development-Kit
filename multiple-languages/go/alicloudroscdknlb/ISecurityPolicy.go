package alicloudroscdknlb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/internal"
)

// Represents a `SecurityPolicy`.
type ISecurityPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute SecurityPolicyId: The ID of the security policy.
	AttrSecurityPolicyId() interface{}
	Props() *SecurityPolicyProps
}

// The jsii proxy for ISecurityPolicy
type jsiiProxy_ISecurityPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityPolicy) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
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

