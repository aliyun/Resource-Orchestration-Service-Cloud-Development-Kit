package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/datasource/internal"
)

// Represents a `DedicatedBlockStorageCluster`.
type IDedicatedBlockStorageCluster interface {
	alicloudroscdkcore.IResource
	// Attribute AvailableCapacity: The available capacity of the dedicated block storage cluster.
	//
	// Unit: GiB.
	AttrAvailableCapacity() interface{}
	// Attribute Category: The category of disks that can be created in the dedicated block storage cluster.
	AttrCategory() interface{}
	// Attribute CreateTime: The time when the dedicated block storage cluster was created.
	//
	// The value is a UNIX timestamp. Unit: seconds.
	AttrCreateTime() interface{}
	// Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
	AttrDedicatedBlockStorageClusterId() interface{}
	// Attribute DedicatedBlockStorageClusterName: The name of the dedicated block storage cluster.
	AttrDedicatedBlockStorageClusterName() interface{}
	// Attribute DeliveryCapacity: The capacity to be delivered for the dedicated block storage cluster.
	//
	// Unit: GiB.
	AttrDeliveryCapacity() interface{}
	// Attribute Description: The description of the dedicated block storage cluster.
	AttrDescription() interface{}
	// Attribute ExpiredTime: The expiration time of the dedicated block storage cluster, in the Unix timestamp format, in seconds.
	AttrExpiredTime() interface{}
	// Attribute PerformanceLevel: The performance level of disks.
	AttrPerformanceLevel() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SupportedCategory: This parameter is not supported.
	AttrSupportedCategory() interface{}
	// Attribute Tags: The tags of the dedicated block storage cluster.
	AttrTags() interface{}
	// Attribute TotalCapacity: The total capacity of the dedicated block storage cluster.
	//
	// Unit: GiB.
	AttrTotalCapacity() interface{}
	// Attribute Type: The dedicated block storage cluster performance type.
	AttrType() interface{}
	// Attribute UsedCapacity: The used (created disk) capacity of the current cluster, in GB.
	AttrUsedCapacity() interface{}
	// Attribute ZoneId: The zone ID of the dedicated block storage cluster.
	AttrZoneId() interface{}
	Props() *DedicatedBlockStorageClusterProps
}

// The jsii proxy for IDedicatedBlockStorageCluster
type jsiiProxy_IDedicatedBlockStorageCluster struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrAvailableCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAvailableCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrDedicatedBlockStorageClusterName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedBlockStorageClusterName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrDeliveryCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeliveryCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrPerformanceLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPerformanceLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrSupportedCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSupportedCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrTotalCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTotalCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrUsedCapacity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsedCapacity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDedicatedBlockStorageCluster) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
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

