package alicloudroscdkcore

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Interface for the Resource construct.
type IResource interface {
	IConstruct
	// The environment this resource belongs to.
	//
	// For resources that are created and managed by the CDK
	// (generally, those created by creating new class instances like Role, Bucket, etc.),
	// this is always the same as the environment of the stack they belong to;
	// however, for imported resources
	// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
	// that might be different than the stack they were imported into.
	Env() IResourceEnvironment
	// The stack in which this resource is defined.
	Stack() Stack
}

// The jsii proxy for IResource
type jsiiProxy_IResource struct {
	jsiiProxy_IConstruct
}

func (j *jsiiProxy_IResource) Env() IResourceEnvironment {
	var returns IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResource) Stack() Stack {
	var returns Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}

