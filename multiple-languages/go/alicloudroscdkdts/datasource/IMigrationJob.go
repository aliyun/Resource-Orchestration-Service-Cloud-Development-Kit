package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/datasource/internal"
)

// Represents a `MigrationJob`.
type IMigrationJob interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
	AttrCreateTime() interface{}
	// Attribute DestinationEndpointEngineName: The target database engine type.
	AttrDestinationEndpointEngineName() interface{}
	// Attribute DestinationSourceEndpointRegion: The target database engine type.
	AttrDestinationSourceEndpointRegion() interface{}
	// Attribute DtsInstanceId: The ID of the synchronization instance.
	AttrDtsInstanceId() interface{}
	// Attribute InstanceClass: The specification of the migration or synchronization instance.
	AttrInstanceClass() interface{}
	// Attribute PaymentType: The payment type of the resource.
	AttrPaymentType() interface{}
	// Attribute SourceEndpointEngineName: The type of the source instance database engine.
	AttrSourceEndpointEngineName() interface{}
	// Attribute SourceEndpointRegion: The type of the source instance database engine.
	AttrSourceEndpointRegion() interface{}
	Props() *MigrationJobProps
}

// The jsii proxy for IMigrationJob
type jsiiProxy_IMigrationJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMigrationJob) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJob) AttrDestinationEndpointEngineName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationEndpointEngineName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJob) AttrDestinationSourceEndpointRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationSourceEndpointRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJob) AttrDtsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJob) AttrInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJob) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJob) AttrSourceEndpointEngineName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointEngineName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJob) AttrSourceEndpointRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMigrationJob) Props() *MigrationJobProps {
	var returns *MigrationJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

