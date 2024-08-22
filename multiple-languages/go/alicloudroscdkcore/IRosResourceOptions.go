package alicloudroscdkcore

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

type IRosResourceOptions interface {
	// A condition to associate with this resource.
	//
	// This means that only if the condition evaluates to 'true' when the stack
	// is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
	// there is no need to use it in CDK projects.
	Condition() RosCondition
	SetCondition(c RosCondition)
	Count() interface{}
	SetCount(c interface{})
	// With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.
	//
	// You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
	// attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
	// that lead to resources being removed.
	DeletionPolicy() RosDeletionPolicy
	SetDeletionPolicy(d RosDeletionPolicy)
	Description() *string
	SetDescription(d *string)
	// Metadata associated with the ROS resource.
	//
	// This is not the same as the construct metadata which can be added
	// using construct.addMetadata(), but would not appear in the ROS template automatically.
	Metadata() *map[string]interface{}
	SetMetadata(m *map[string]interface{})
}

// The jsii proxy for IRosResourceOptions
type jsiiProxy_IRosResourceOptions struct {
	_ byte // padding
}

func (j *jsiiProxy_IRosResourceOptions) Condition() RosCondition {
	var returns RosCondition
	_jsii_.Get(
		j,
		"condition",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRosResourceOptions)SetCondition(val RosCondition) {
	_jsii_.Set(
		j,
		"condition",
		val,
	)
}

func (j *jsiiProxy_IRosResourceOptions) Count() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"count",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRosResourceOptions)SetCount(val interface{}) {
	if err := j.validateSetCountParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"count",
		val,
	)
}

func (j *jsiiProxy_IRosResourceOptions) DeletionPolicy() RosDeletionPolicy {
	var returns RosDeletionPolicy
	_jsii_.Get(
		j,
		"deletionPolicy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRosResourceOptions)SetDeletionPolicy(val RosDeletionPolicy) {
	_jsii_.Set(
		j,
		"deletionPolicy",
		val,
	)
}

func (j *jsiiProxy_IRosResourceOptions) Description() *string {
	var returns *string
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRosResourceOptions)SetDescription(val *string) {
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_IRosResourceOptions) Metadata() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"metadata",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IRosResourceOptions)SetMetadata(val *map[string]interface{}) {
	_jsii_.Set(
		j,
		"metadata",
		val,
	)
}

