package alicloudroscdkesa

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkesa/internal"
)

// Represents a `WaitingRoom`.
type IWaitingRoom interface {
	alicloudroscdkcore.IResource
	// Attribute CookieName: Custom Cookie name.
	AttrCookieName() interface{}
	// Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
	//
	// The incoming content needs to be base64 encoded.
	AttrCustomPageHtml() interface{}
	// Attribute Description: Waiting room description.
	AttrDescription() interface{}
	// Attribute DisableSessionRenewalEnable: Disable session renewal.
	AttrDisableSessionRenewalEnable() interface{}
	// Attribute HostNameAndPath: Host name and path.
	AttrHostNameAndPath() interface{}
	// Attribute JsonResponseEnable: The JSON response.
	//
	// If the accept request header contains "application/json", JSON data is returned.
	AttrJsonResponseEnable() interface{}
	// Attribute Language: The language of the waiting room page.
	//
	// When the waiting room type is the default type, it needs to be passed in.
	AttrLanguage() interface{}
	// Attribute NewUsersPerMinute: Number of new users per minute.
	AttrNewUsersPerMinute() interface{}
	// Attribute QueueAllEnable: All in line.
	AttrQueueAllEnable() interface{}
	// Attribute QueuingMethod: Way of queuing.
	AttrQueuingMethod() interface{}
	// Attribute QueuingStatusCode: Waiting room status code.
	AttrQueuingStatusCode() interface{}
	// Attribute SessionDuration: Session duration in minutes.
	AttrSessionDuration() interface{}
	// Attribute TotalActiveUsers: Total number of active users.
	AttrTotalActiveUsers() interface{}
	// Attribute WaitingRoomId: The waiting room ID.
	AttrWaitingRoomId() interface{}
	// Attribute WaitingRoomName: The name of the waiting room.
	AttrWaitingRoomName() interface{}
	// Attribute WaitingRoomType: Waiting room type, support:.
	AttrWaitingRoomType() interface{}
	Props() *WaitingRoomProps
}

// The jsii proxy for IWaitingRoom
type jsiiProxy_IWaitingRoom struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWaitingRoom) AttrCookieName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCookieName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrCustomPageHtml() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCustomPageHtml",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrDisableSessionRenewalEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisableSessionRenewalEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrHostNameAndPath() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHostNameAndPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrJsonResponseEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJsonResponseEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrLanguage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLanguage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrNewUsersPerMinute() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNewUsersPerMinute",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrQueueAllEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueueAllEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrQueuingMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueuingMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrQueuingStatusCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQueuingStatusCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrSessionDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSessionDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrTotalActiveUsers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTotalActiveUsers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrWaitingRoomId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitingRoomId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrWaitingRoomName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitingRoomName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) AttrWaitingRoomType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWaitingRoomType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWaitingRoom) Props() *WaitingRoomProps {
	var returns *WaitingRoomProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

