package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SecurityGroupIngresses`.
type ISecurityGroupIngresses interface {
	alicloudroscdkcore.IResource
	Props() *SecurityGroupIngressesProps
}

// The jsii proxy for ISecurityGroupIngresses
type jsiiProxy_ISecurityGroupIngresses struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroupIngresses) Props() *SecurityGroupIngressesProps {
	var returns *SecurityGroupIngressesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

