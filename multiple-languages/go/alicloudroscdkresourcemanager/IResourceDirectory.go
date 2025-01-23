package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `ResourceDirectory`.
type IResourceDirectory interface {
	alicloudroscdkcore.IResource
	// Attribute MasterAccountId: The ID of the master account.
	AttrMasterAccountId() interface{}
	// Attribute MasterAccountName: The name of the master account.
	AttrMasterAccountName() interface{}
	// Attribute ResourceDirectoryId: The ID of the resource directory.
	AttrResourceDirectoryId() interface{}
	// Attribute RootFolderId: The ID of the root folder.
	AttrRootFolderId() interface{}
	Props() *ResourceDirectoryProps
}

// The jsii proxy for IResourceDirectory
type jsiiProxy_IResourceDirectory struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceDirectory) AttrMasterAccountId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterAccountId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceDirectory) AttrMasterAccountName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterAccountName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceDirectory) AttrResourceDirectoryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceDirectoryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceDirectory) AttrRootFolderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRootFolderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IResourceDirectory) Props() *ResourceDirectoryProps {
	var returns *ResourceDirectoryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

