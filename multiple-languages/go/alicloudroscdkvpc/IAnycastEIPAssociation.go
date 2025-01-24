package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `AnycastEIPAssociation`.
type IAnycastEIPAssociation interface {
	alicloudroscdkcore.IResource
	// Attribute AnycastId: Anycast EIP instance ID.
	AttrAnycastId() interface{}
	// Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
	AttrBindInstanceId() interface{}
	// Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
	AttrBindInstanceRegionId() interface{}
	// Attribute BindInstanceType: The cloud resource instance type to be bound.
	AttrBindInstanceType() interface{}
	Props() *AnycastEIPAssociationProps
}

// The jsii proxy for IAnycastEIPAssociation
type jsiiProxy_IAnycastEIPAssociation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAnycastEIPAssociation) AttrAnycastId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAnycastId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEIPAssociation) AttrBindInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBindInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEIPAssociation) AttrBindInstanceRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBindInstanceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEIPAssociation) AttrBindInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBindInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAnycastEIPAssociation) Props() *AnycastEIPAssociationProps {
	var returns *AnycastEIPAssociationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

