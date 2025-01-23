package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SecurityGroupClone`.
type ISecurityGroupClone interface {
	alicloudroscdkcore.IResource
	// Attribute SecurityGroupId: Generated security group id of new security group.
	AttrSecurityGroupId() interface{}
	Props() *SecurityGroupCloneProps
}

// The jsii proxy for ISecurityGroupClone
type jsiiProxy_ISecurityGroupClone struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroupClone) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISecurityGroupClone) Props() *SecurityGroupCloneProps {
	var returns *SecurityGroupCloneProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

