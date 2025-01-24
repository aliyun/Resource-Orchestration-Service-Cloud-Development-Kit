package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudstoragegateway/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `StorageBundles`.
type IStorageBundles interface {
	alicloudroscdkcore.IResource
	// Attribute StorageBundleIds: The list of storage bundle IDs.
	AttrStorageBundleIds() interface{}
	// Attribute StorageBundles: The list of storage bundles.
	AttrStorageBundles() interface{}
	Props() *StorageBundlesProps
}

// The jsii proxy for IStorageBundles
type jsiiProxy_IStorageBundles struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStorageBundles) AttrStorageBundleIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageBundleIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageBundles) AttrStorageBundles() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageBundles",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStorageBundles) Props() *StorageBundlesProps {
	var returns *StorageBundlesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

