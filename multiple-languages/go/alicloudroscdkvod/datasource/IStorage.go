package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvod/datasource/internal"
)

// Represents a `Storage`.
type IStorage interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the Storage.
	AttrCreateTime() interface{}
	// Attribute DefaultUpload: Whether to upload by default.
	AttrDefaultUpload() interface{}
	// Attribute GmtModified: Modification time.
	AttrGmtModified() interface{}
	// Attribute GroupId: Storage Group Id.
	AttrGroupId() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute StorageAcl: Storage ACL.
	AttrStorageAcl() interface{}
	// Attribute StorageLocation: The ID of the Storage.
	AttrStorageLocation() interface{}
	// Attribute StorageUsage: Storage Use.
	AttrStorageUsage() interface{}
	// Attribute Type: The storage class.
	AttrType() interface{}
	Props() *StorageProps
}

// The jsii proxy for IStorage
type jsiiProxy_IStorage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStorage) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorage) AttrDefaultUpload() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDefaultUpload",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorage) AttrGmtModified() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModified",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorage) AttrGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorage) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorage) AttrStorageAcl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageAcl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorage) AttrStorageLocation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageLocation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorage) AttrStorageUsage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageUsage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorage) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorage) Props() *StorageProps {
	var returns *StorageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

