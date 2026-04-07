package alicloudroscdkservicecatalog

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkservicecatalog/internal"
)

// Represents a `Constraint`.
type IConstraint interface {
	alicloudroscdkcore.IResource
	// Attribute ConstraintId: The ID of the constraint.
	AttrConstraintId() interface{}
	Props() *ConstraintProps
}

// The jsii proxy for IConstraint
type jsiiProxy_IConstraint struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConstraint) AttrConstraintId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConstraintId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConstraint) Props() *ConstraintProps {
	var returns *ConstraintProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

