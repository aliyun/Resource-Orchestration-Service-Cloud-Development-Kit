package alicloudroscdkecd

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecd/internal"
)

// Represents a `UserDesktopGroupAddition`.
type IUserDesktopGroupAddition interface {
	alicloudroscdkcore.IResource
	// Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.
	AttrDesktopGroupId() interface{}
	// Attribute EndUserIds: The regular users to whom you want to assign the desktop group.
	AttrEndUserIds() interface{}
	Props() *UserDesktopGroupAdditionProps
}

// The jsii proxy for IUserDesktopGroupAddition
type jsiiProxy_IUserDesktopGroupAddition struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IUserDesktopGroupAddition) AttrDesktopGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDesktopGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserDesktopGroupAddition) AttrEndUserIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndUserIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IUserDesktopGroupAddition) Props() *UserDesktopGroupAdditionProps {
	var returns *UserDesktopGroupAdditionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

