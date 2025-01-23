package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SecurityGroupEgresses`.
type ISecurityGroupEgresses interface {
	alicloudroscdkcore.IResource
	Props() *SecurityGroupEgressesProps
}

// The jsii proxy for ISecurityGroupEgresses
type jsiiProxy_ISecurityGroupEgresses struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroupEgresses) Props() *SecurityGroupEgressesProps {
	var returns *SecurityGroupEgressesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

