package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdts/datasource/internal"
)

// Represents a `SynchronizationJob`.
type ISynchronizationJob interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
	AttrCreateTime() interface{}
	// Attribute DestinationEndpointEngineName: The target database engine type.
	AttrDestinationEndpointEngineName() interface{}
	// Attribute DestinationEndpointRegion: Region of source instance.
	AttrDestinationEndpointRegion() interface{}
	// Attribute DtsInstanceId: Synchronization instance ID.
	AttrDtsInstanceId() interface{}
	// Attribute InstanceClass: The specification of the migration or synchronization instance.
	AttrInstanceClass() interface{}
	// Attribute PaymentType: The payment type of the resource.
	AttrPaymentType() interface{}
	// Attribute SourceEndpointEngineName: Source instance database engine type.
	AttrSourceEndpointEngineName() interface{}
	// Attribute SourceEndpointRegion: Region of source instance.
	AttrSourceEndpointRegion() interface{}
	Props() *SynchronizationJobProps
}

// The jsii proxy for ISynchronizationJob
type jsiiProxy_ISynchronizationJob struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISynchronizationJob) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob) AttrDestinationEndpointEngineName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationEndpointEngineName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob) AttrDestinationEndpointRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDestinationEndpointRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob) AttrDtsInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDtsInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob) AttrInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob) AttrSourceEndpointEngineName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointEngineName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob) AttrSourceEndpointRegion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceEndpointRegion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISynchronizationJob) Props() *SynchronizationJobProps {
	var returns *SynchronizationJobProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

