package alicloudroscdkcms2

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms2/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `IntegrationPolicy`.
type IIntegrationPolicy interface {
	alicloudroscdkcore.IResource
	// Attribute PolicyId: The ID of the integration policy.
	AttrPolicyId() interface{}
	Props() *IntegrationPolicyProps
}

// The jsii proxy for IIntegrationPolicy
type jsiiProxy_IIntegrationPolicy struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIntegrationPolicy) AttrPolicyId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIntegrationPolicy) Props() *IntegrationPolicyProps {
	var returns *IntegrationPolicyProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

