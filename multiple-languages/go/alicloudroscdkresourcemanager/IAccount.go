package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `Account`.
type IAccount interface {
	alicloudroscdkcore.IResource
	// Attribute AccountId: This ID of Resource Manager Account.
	AttrAccountId() interface{}
	// Attribute DisplayName: Member name.
	AttrDisplayName() interface{}
	// Attribute FolderId: The ID of the parent folder.
	AttrFolderId() interface{}
	// Attribute JoinMethod: Ways for members to join the resource directory.
	//
	// Valid values: invited, created.
	AttrJoinMethod() interface{}
	// Attribute ResourceDirectoryId: Resource directory ID.
	AttrResourceDirectoryId() interface{}
	// Attribute Type: Member type.
	//
	// The value of ResourceAccount indicates the resource account.
	AttrType() interface{}
	Props() *AccountProps
}

// The jsii proxy for IAccount
type jsiiProxy_IAccount struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccount) AttrAccountId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrDisplayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisplayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrFolderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFolderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrJoinMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJoinMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrResourceDirectoryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceDirectoryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccount) Props() *AccountProps {
	var returns *AccountProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

