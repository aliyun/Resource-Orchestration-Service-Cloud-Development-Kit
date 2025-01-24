package alicloudroscdkactiontrail

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkactiontrail/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TrailLogging`.
type ITrailLogging interface {
	alicloudroscdkcore.IResource
	// Attribute IsLogging: Indicates whether the trail is logging API invocations.
	AttrIsLogging() interface{}
	// Attribute LatestDeliveryError: The last time an error occurred when the trail attempted to deliver log files.
	AttrLatestDeliveryError() interface{}
	// Attribute LatestDeliveryTime: The date and time of the last successful delivery of a log file.
	AttrLatestDeliveryTime() interface{}
	// Attribute StartLoggingTime: The most recent date and time when the user enables the trail.
	AttrStartLoggingTime() interface{}
	// Attribute StopLoggingTime: The most recent date and time when the user disables the trail.
	AttrStopLoggingTime() interface{}
	Props() *TrailLoggingProps
}

// The jsii proxy for ITrailLogging
type jsiiProxy_ITrailLogging struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITrailLogging) AttrIsLogging() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsLogging",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrailLogging) AttrLatestDeliveryError() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestDeliveryError",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrailLogging) AttrLatestDeliveryTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestDeliveryTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrailLogging) AttrStartLoggingTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStartLoggingTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrailLogging) AttrStopLoggingTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStopLoggingTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITrailLogging) Props() *TrailLoggingProps {
	var returns *TrailLoggingProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

