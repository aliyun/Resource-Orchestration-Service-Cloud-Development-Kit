package alicloudroscdkebs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/internal"
)

// Represents a `DedicatedBlockStorageCluster`.
type IDedicatedBlockStorageCluster interface {
	alicloudroscdkcore.IResource
	// Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
	AttrDedicatedBlockStorageClusterId() interface{}
	Props() *DedicatedBlockStorageClusterProps
}

// The jsii proxy for IDedicatedBlockStorageCluster
type jsiiProxy_IDedicatedBlockStorageCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrDedicatedBlockStorageClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedBlockStorageClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) Props() *DedicatedBlockStorageClusterProps {
	var returns *DedicatedBlockStorageClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

