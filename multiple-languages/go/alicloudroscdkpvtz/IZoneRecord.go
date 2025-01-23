package alicloudroscdkpvtz

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpvtz/internal"
)

// Represents a `ZoneRecord`.
type IZoneRecord interface {
	alicloudroscdkcore.IResource
	// Attribute Record: Record data.
	AttrRecord() interface{}
	// Attribute RecordId: Parsing record Id.
	AttrRecordId() interface{}
	// Attribute ZoneId: Zone ID.
	AttrZoneId() interface{}
	Props() *ZoneRecordProps
}

// The jsii proxy for IZoneRecord
type jsiiProxy_IZoneRecord struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IZoneRecord) AttrRecord() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecord",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZoneRecord) AttrRecordId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRecordId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZoneRecord) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IZoneRecord) Props() *ZoneRecordProps {
	var returns *ZoneRecordProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

