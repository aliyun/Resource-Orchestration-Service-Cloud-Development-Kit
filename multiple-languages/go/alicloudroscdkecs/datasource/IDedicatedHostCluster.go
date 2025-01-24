package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `DedicatedHostCluster`.
type IDedicatedHostCluster interface {
	alicloudroscdkcore.IResource
	// Attribute DedicatedHostClusterId: Dedicated host cluster id.
	AttrDedicatedHostClusterId() interface{}
	// Attribute DedicatedHostClusterName: The name of the dedicated host cluster.
	AttrDedicatedHostClusterName() interface{}
	// Attribute Description: The description of the dedicated host cluster.
	AttrDescription() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tags of the dedicated host cluster.
	AttrTags() interface{}
	// Attribute ZoneId: The zone ID of the dedicated host cluster.
	AttrZoneId() interface{}
	Props() *DedicatedHostClusterProps
}

// The jsii proxy for IDedicatedHostCluster
type jsiiProxy_IDedicatedHostCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDedicatedHostCluster) AttrDedicatedHostClusterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostClusterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostCluster) AttrDedicatedHostClusterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostClusterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostCluster) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostCluster) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostCluster) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostCluster) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedHostCluster) Props() *DedicatedHostClusterProps {
	var returns *DedicatedHostClusterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

