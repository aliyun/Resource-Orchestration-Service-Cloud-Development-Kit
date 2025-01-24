package alicloudroscdkcloudstoragegateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudstoragegateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `StorageBundle`.
type IStorageBundle interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Create a gateway cluster timestamp.
	AttrCreateTime() interface{}
	// Attribute Description: Gateway cluster description.
	AttrDescription() interface{}
	// Attribute StorageBundleId: The ID of the gateway cluster.
	AttrStorageBundleId() interface{}
	// Attribute StorageBundleName: Gateway cluster name.
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

