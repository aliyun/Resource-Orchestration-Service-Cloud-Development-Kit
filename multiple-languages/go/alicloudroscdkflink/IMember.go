package alicloudroscdkflink

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkflink/internal"
)

// Represents a `Member`.
type IMember interface {
	alicloudroscdkcore.IResource
	// Attribute MemberInfo: The detailed info of the flink member.
	AttrMemberInfo() interface{}
	Props() *MemberProps
}

// The jsii proxy for IMember
type jsiiProxy_IMember struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMember) AttrMemberInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMemberInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMember) Props() *MemberProps {
	var returns *MemberProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

