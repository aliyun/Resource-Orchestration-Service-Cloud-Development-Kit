package alicloudroscdkram

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Represents a logical RAM principal.
//
// An IPrincipal describes a logical entity that can perform ACS API calls
// against sets of resources, optionally under certain conditions.
//
// Examples of principals are RAM objects that you create, such
// as Users, Roles or Groups.
type IPrincipal interface {
	IGrantable
	// Add to the policy of this principal.
	AddToPolicy(policyDocument *RosManagedPolicy_PolicyDocumentProperty) ManagedPolicy
	// The principal to grant permissions to.
	PrincipalName() interface{}
	// The principal type, such as 'Group', 'Role', 'User'.
	PrincipalType() *string
}

// The jsii proxy for IPrincipal
type jsiiProxy_IPrincipal struct {
	jsiiProxy_IGrantable
}

func (i *jsiiProxy_IPrincipal) AddToPolicy(policyDocument *RosManagedPolicy_PolicyDocumentProperty) ManagedPolicy {
	if err := i.validateAddToPolicyParameters(policyDocument); err != nil {
		panic(err)
	}
	var returns ManagedPolicy

	_jsii_.Invoke(
		i,
		"addToPolicy",
		[]interface{}{policyDocument},
		&returns,
	)

	return returns
}

func (j *jsiiProxy_IPrincipal) PrincipalName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"principalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IPrincipal) PrincipalType() *string {
	var returns *string
	_jsii_.Get(
		j,
		"principalType",
		&returns,
	)
	return returns
}

