package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudstoragegateway/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `StorageBundle`.
type IStorageBundle interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The timestamp when the gateway cluster was created.
	//
	// Unit: seconds.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the gateway cluster.
	AttrDescription() interface{}
	// Attribute StorageBundleId: The ID of the gateway cluster.
	AttrStorageBundleId() interface{}
	// Attribute StorageBundleName: The name of the gateway cluster.
	AttrStorageBundleName() interface{}
	Props() *StorageBundleProps
}

// The jsii proxy for IStorageBundle
type jsiiProxy_IStorageBundle struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStorageBundle) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageBundle) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageBundle) AttrStorageBundleId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageBundleId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageBundle) AttrStorageBundleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageBundleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageBundle) Props() *StorageBundleProps {
	var returns *StorageBundleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

