package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/datasource/internal"
)

// Represents a `DiskReplicaPair`.
type IDiskReplicaPair interface {
	alicloudroscdkcore.IResource
	// Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.
	//
	// The unit is Kbps.
	AttrBandwidth() interface{}
	// Attribute CreateTime: The time when the replication pair was created.
	//
	// The value of this parameter is a timestamp. Unit: seconds.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the replication pair.
	AttrDescription() interface{}
	// Attribute DestinationDiskId: The ID of the secondary disk.
	AttrDestinationDiskId() interface{}
	// Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
	AttrDestinationRegionId() interface{}
	// Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
	AttrDestinationZoneId() interface{}
	// Attribute DiskId: The ID of the primary disk.
	AttrDiskId() interface{}
	// Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
	AttrDiskReplicaPairName() interface{}
	// Attribute PaymentType: The payment type of the replication pair.
	AttrPaymentType() interface{}
	// Attribute ReplicaPairId: The ID of the replication pair.
	AttrReplicaPairId() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute RPO: The recovery point objective (RPO) of the replication pair.
	//
	// Unit: seconds.
	AttrRpo() interface{}
	// Attribute SourceZoneId: The zone ID of the primary disk.
	AttrSourceZoneId() interface{}
	// Attribute Tags: The tags of the replication pair.
	AttrTags() interface{}
	Props() *DiskReplicaPairProps
}

// The jsii proxy for IDiskReplicaPair
type jsiiProxy_IDiskReplicaPair struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDiskReplicaPair) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrDestinationDiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrDestinationRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrDestinationZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrDiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrDiskReplicaPairName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskReplicaPairName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrReplicaPairId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicaPairId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrRpo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRpo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrSourceZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaPair) Props() *DiskReplicaPairProps {
	var returns *DiskReplicaPairProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

