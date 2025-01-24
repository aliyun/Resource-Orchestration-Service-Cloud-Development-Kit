package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvod/datasource/internal"
)

// Represents a `Storages`.
type IStorages interface {
	alicloudroscdkcore.IResource
	// Attribute StorageLocations: The list of storage locations.
	AttrStorageLocations() interface{}
	// Attribute Storages: The list of storages.
	AttrStorages() interface{}
	Props() *StoragesProps
}

// The jsii proxy for IStorages
type jsiiProxy_IStorages struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStorages) AttrStorageLocations() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageLocations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorages) AttrStorages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorages) Props() *StoragesProps {
	var returns *StoragesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

