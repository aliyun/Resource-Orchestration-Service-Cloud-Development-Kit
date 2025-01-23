package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/datasource/internal"
)

// Represents a `Zone`.
type IZone interface {
	alicloudroscdkcore.IResource
	// Attribute BindVpcs: The VPCs associated with the zone.
	AttrBindVpcs() interface{}
	// Attribute CreateTime: The time when the zone was created.
	//
	// The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
	AttrCreateTime() interface{}
	// Attribute CreateTimestamp: The time when the zone was created.
	//
	// This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
	AttrCreateTimestamp() interface{}
	// Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
	AttrIsPtr() interface{}
	// Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
	AttrProxyPattern() interface{}
	// Attribute RecordCount: The total number of DNS records added in the zone.
	AttrRecordCount() interface{}
	// Attribute Remark: The description of the zone.
	AttrRemark() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
	AttrResourceGroupId() interface{}
	// Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
	AttrSlaveDns() interface{}
	// Attribute Tags: The tags of the zone.
	AttrTags() interface{}
	// Attribute UpdateTime: The time when the zone was last updated.
	//
	// The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
	AttrUpdateTime() interface{}
	// Attribute UpdateTimestamp: The time when the zone was last updated.
	//
	// This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
	AttrUpdateTimestamp() interface{}
	// Attribute ZoneId: The zone ID.
	AttrZoneId() interface{}
	// Attribute ZoneName: The zone name.
	AttrZoneName() interface{}
	// Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
	AttrZoneTag() interface{}
	// Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
	AttrZoneType() interface{}
	Props() *ZoneProps
}

// The jsii proxy for IZone
type jsiiProxy_IZone struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IZone) AttrBindVpcs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBindVpcs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrCreateTimestamp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTimestamp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrIsPtr() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsPtr",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrProxyPattern() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProxyPattern",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrRecordCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrRemark() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemark",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrSlaveDns() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlaveDns",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrUpdateTimestamp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdateTimestamp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrZoneName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrZoneTag() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneTag",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) AttrZoneType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZone) Props() *ZoneProps {
	var returns *ZoneProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

