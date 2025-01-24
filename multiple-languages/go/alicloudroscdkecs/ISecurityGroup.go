package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SecurityGroup`.
type ISecurityGroup interface {
	alicloudroscdkcore.IResource
	// Attribute SecurityGroupId: generated security group id for security group.
	AttrSecurityGroupId() interface{}
	// Attribute SecurityGroupName: The name of security group.
	AttrSecurityGroupName() interface{}
	Props() *SecurityGroupProps
}

// The jsii proxy for ISecurityGroup
type jsiiProxy_ISecurityGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroup) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) AttrSecurityGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroup) Props() *SecurityGroupProps {
	var returns *SecurityGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

