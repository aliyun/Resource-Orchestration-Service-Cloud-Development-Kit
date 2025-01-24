package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkram/datasource/internal"
)

// Represents a `Policies`.
type IPolicies interface {
	alicloudroscdkcore.IResource
	// Attribute Policies: The list of policies.
	AttrPolicies() interface{}
	// Attribute PolicyNames: The list of policy names.
	AttrPolicyNames() interface{}
	Props() *PoliciesProps
}

// The jsii proxy for IPolicies
type jsiiProxy_IPolicies struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPolicies) AttrPolicies() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicies",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicies) AttrPolicyNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolicyNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPolicies) Props() *PoliciesProps {
	var returns *PoliciesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

