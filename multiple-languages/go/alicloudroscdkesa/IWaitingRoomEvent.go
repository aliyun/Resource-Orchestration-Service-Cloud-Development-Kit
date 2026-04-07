package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `WaitingRoomEvent`.
type IWaitingRoomEvent interface {
	alicloudroscdkcore.IResource
	// Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
	//
	// The incoming content needs to be base64 encoded.
	AttrCustomPageHtml() interface{}
	// Attribute Description: Waiting room description.
	AttrDescription() interface{}
	// Attribute DisableSessionRenewalEnable: Disable session renewal.
	AttrDisableSessionRenewalEnable() interface{}
	// Attribute EndTime: The timestamp of the end time of the event.
	AttrEndTime() interface{}
	// Attribute JsonResponseEnable: JSON response switch.
	AttrJsonResponseEnable() interface{}
	// Attribute Language: Default language setting.
	AttrLanguage() interface{}
	// Attribute NewUsersPerMinute: Number of new users per minute.
	AttrNewUsersPerMinute() interface{}
	// Attribute PreQueueEnable: Pre-queue switch.
	AttrPreQueueEnable() interface{}
	// Attribute PreQueueStartTime: Pre-queue start time.
	AttrPreQueueStartTime() interface{}
	// Attribute QueuingMethod: Way of queuing.
	AttrQueuingMethod() interface{}
	// Attribute QueuingStatusCode: Waiting room status code.
	AttrQueuingStatusCode() interface{}
	// Attribute RandomPreQueueEnable: Random queue switch.
	AttrRandomPreQueueEnable() interface{}
	// Attribute SessionDuration: User session duration in minutes.
	AttrSessionDuration() interface{}
	// Attribute StartTime: The timestamp of the event start time.
	AttrStartTime() interface{}
	// Attribute TotalActiveUsers: Total number of active users.
	AttrTotalActiveUsers() interface{}
	// Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the [ListWaitingRoomEvents](https://help.aliyun.com/document_detail/2850279.html) operation.
	AttrWaitingRoomEventId() interface{}
	// Attribute WaitingRoomEventName: Event name, custom event description.
	AttrWaitingRoomEventName() interface{}
	// Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room.
	//
	// It can be obtained by calling the [listwaitingroom](https://help.aliyun.com/document_detail/2850279.html) interface.
	AttrWaitingRoomId() interface{}
	// Attribute WaitingRoomType: Waiting room type.
	AttrWaitingRoomType() interface{}
	Props() *WaitingRoomEventProps
}

// The jsii proxy for IWaitingRoomEvent
type jsiiProxy_IWaitingRoomEvent struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrCustomPageHtml() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomPageHtml",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrDisableSessionRenewalEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisableSessionRenewalEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrJsonResponseEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJsonResponseEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrLanguage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrNewUsersPerMinute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNewUsersPerMinute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrPreQueueEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPreQueueEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrPreQueueStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPreQueueStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrQueuingMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueuingMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrQueuingStatusCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueuingStatusCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrRandomPreQueueEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRandomPreQueueEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrSessionDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSessionDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrTotalActiveUsers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTotalActiveUsers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrWaitingRoomEventId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitingRoomEventId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrWaitingRoomEventName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitingRoomEventName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrWaitingRoomId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitingRoomId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) AttrWaitingRoomType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitingRoomType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoomEvent) Props() *WaitingRoomEventProps {
	var returns *WaitingRoomEventProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

