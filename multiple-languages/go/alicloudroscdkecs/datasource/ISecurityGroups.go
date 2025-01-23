package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `SecurityGroups`.
type ISecurityGroups interface {
	alicloudroscdkcore.IResource
	// Attribute SecurityGroupIds: The list of security group ids.
	AttrSecurityGroupIds() interface{}
	// Attribute SecurityGroups: The list of security groups.
	AttrSecurityGroups() interface{}
	Props() *SecurityGroupsProps
}

// The jsii proxy for ISecurityGroups
type jsiiProxy_ISecurityGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroups) AttrSecurityGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroups) AttrSecurityGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroups) Props() *SecurityGroupsProps {
	var returns *SecurityGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

