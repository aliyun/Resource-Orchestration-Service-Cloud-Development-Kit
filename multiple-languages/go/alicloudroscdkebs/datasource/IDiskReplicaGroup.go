package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkebs/datasource/internal"
)

// Represents a `DiskReplicaGroup`.
type IDiskReplicaGroup interface {
	alicloudroscdkcore.IResource
	// Attribute Description: The description of the consistent replication group.
	AttrDescription() interface{}
	// Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
	AttrDestinationRegionId() interface{}
	// Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
	AttrDestinationZoneId() interface{}
	// Attribute DiskReplicaGroupName: The name of the consistent replication group.
	AttrDiskReplicaGroupName() interface{}
	// Attribute LastRecoverPoint: The time when the last asynchronous replication operation of the consistent replication group completed.
	//
	// This parameter provides the return value as a timestamp. Unit: seconds.
	AttrLastRecoverPoint() interface{}
	// Attribute PairIds: List of replication pair IDs contained in a consistent replication group.
	AttrPairIds() interface{}
	// Attribute PairNumber: The number of replication pairs contained in a consistent replication group.
	AttrPairNumber() interface{}
	// Attribute PrimaryRegion: The initial source region of the replication group.
	AttrPrimaryRegion() interface{}
	// Attribute PrimaryZone: The initial source available area of the replication group.
	AttrPrimaryZone() interface{}
	// Attribute ReplicaGroupId: The ID of the consistent replication group.
	AttrReplicaGroupId() interface{}
	// Attribute ResourceGroupId: The ID of resource group.
	AttrResourceGroupId() interface{}
	// Attribute RPO: The RPO value set by the consistency group in seconds.
	//
	// Currently only 900 seconds are supported.
	AttrRpo() interface{}
	// Attribute Site: Site information sources for replication pairs and consistent replication groups.
	AttrSite() interface{}
	// Attribute SourceRegionId: The ID of the region to which the production site belongs.
	AttrSourceRegionId() interface{}
	// Attribute SourceZoneId: The ID of the zone to which the production site belongs.
	AttrSourceZoneId() interface{}
	// Attribute StandbyRegion: The initial destination region of the replication group.
	AttrStandbyRegion() interface{}
	// Attribute StandbyZone: The initial destination zone of the replication group.
	AttrStandbyZone() interface{}
	// Attribute Tags: The tags of the replication pair-consistent group.
	AttrTags() interface{}
	Props() *DiskReplicaGroupProps
}

// The jsii proxy for IDiskReplicaGroup
type jsiiProxy_IDiskReplicaGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrDestinationRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrDestinationZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrDiskReplicaGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskReplicaGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrLastRecoverPoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastRecoverPoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrPairIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPairIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrPairNumber() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPairNumber",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrPrimaryRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrimaryRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrPrimaryZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrimaryZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrReplicaGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicaGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrRpo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRpo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrSite() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSite",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrSourceRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrSourceZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrStandbyRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStandbyRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrStandbyZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStandbyZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskReplicaGroup) Props() *DiskReplicaGroupProps {
	var returns *DiskReplicaGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

