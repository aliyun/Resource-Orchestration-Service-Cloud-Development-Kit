package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/datasource/internal"
)

// Represents a `TLSPolicies`.
type ITLSPolicies interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceIds: The list of instance IDs.
	AttrInstanceIds() interface{}
	// Attribute TLSPolicies: The list of tls policies.
	AttrTlsPolicies() interface{}
	Props() *TLSPoliciesProps
}

// The jsii proxy for ITLSPolicies
type jsiiProxy_ITLSPolicies struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITLSPolicies) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITLSPolicies) AttrTlsPolicies() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTlsPolicies",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITLSPolicies) Props() *TLSPoliciesProps {
	var returns *TLSPoliciesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

