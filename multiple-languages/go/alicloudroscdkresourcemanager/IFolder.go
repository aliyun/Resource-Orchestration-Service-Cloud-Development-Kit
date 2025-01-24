package alicloudroscdkresourcemanager

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkresourcemanager/internal"
)

// Represents a `Folder`.
type IFolder interface {
	alicloudroscdkcore.IResource
	// Attribute FolderId: The ID of the folder.
	AttrFolderId() interface{}
	// Attribute FolderName: The name of the folder.
	AttrFolderName() interface{}
	// Attribute ParentFolderId: The ID of the parent folder.
	//
	// If not set, the system default value will be used.
	AttrParentFolderId() interface{}
	Props() *FolderProps
}

// The jsii proxy for IFolder
type jsiiProxy_IFolder struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFolder) AttrFolderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFolderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFolder) AttrFolderName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFolderName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFolder) AttrParentFolderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParentFolderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFolder) Props() *FolderProps {
	var returns *FolderProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

