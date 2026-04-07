package alicloudroscdkesa


// Properties for defining a `WaitingRoomEvent`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
type WaitingRoomEventProps struct {
	// Property endTime: The timestamp of the end time of the event.
	EndTime interface{} `field:"required" json:"endTime" yaml:"endTime"`
	// Property newUsersPerMinute: Number of new users per minute.
	NewUsersPerMinute interface{} `field:"required" json:"newUsersPerMinute" yaml:"newUsersPerMinute"`
	// Property queuingMethod: Way of queuing.
	//
	// Value:
	// - `random`: random.
	// - `fifo`: first in, first out.
	// - `passthrough`: through.
	// - `reject-all`: reject all.
	QueuingMethod interface{} `field:"required" json:"queuingMethod" yaml:"queuingMethod"`
	// Property queuingStatusCode: Waiting room status code.
	//
	// Value:
	// - `200`
	// - `202`
	// - `429`.
	QueuingStatusCode interface{} `field:"required" json:"queuingStatusCode" yaml:"queuingStatusCode"`
	// Property sessionDuration: User session duration in minutes.
	SessionDuration interface{} `field:"required" json:"sessionDuration" yaml:"sessionDuration"`
	// Property siteId: The site ID, which can be obtained by calling the ListSites API.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property startTime: The timestamp of the event start time.
	StartTime interface{} `field:"required" json:"startTime" yaml:"startTime"`
	// Property totalActiveUsers: Total number of active users.
	TotalActiveUsers interface{} `field:"required" json:"totalActiveUsers" yaml:"totalActiveUsers"`
	// Property waitingRoomEventName: Event name, custom event description.
	WaitingRoomEventName interface{} `field:"required" json:"waitingRoomEventName" yaml:"waitingRoomEventName"`
	// Property waitingRoomType: Waiting room type.
	//
	// The following types are supported:
	// - `default`: the default type.
	// - `custom`: custom type.
	WaitingRoomType interface{} `field:"required" json:"waitingRoomType" yaml:"waitingRoomType"`
	// Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
	//
	// The incoming content needs to be base64 encoded.
	CustomPageHtml interface{} `field:"optional" json:"customPageHtml" yaml:"customPageHtml"`
	// Property description: Waiting room description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property disableSessionRenewalEnable: Disable session renewal.
	//
	// Value:
	// - `on`: open.
	// - `off`: closed.
	DisableSessionRenewalEnable interface{} `field:"optional" json:"disableSessionRenewalEnable" yaml:"disableSessionRenewalEnable"`
	// Property jsonResponseEnable: JSON response switch.
	//
	// Value:
	// - `on`: open.
	// - `off`: closed.
	JsonResponseEnable interface{} `field:"optional" json:"jsonResponseEnable" yaml:"jsonResponseEnable"`
	// Property language: Default language setting.
	//
	// Values include:
	// - `enus`: English.
	// - `zhcn`: Simplified Chinese.
	// - `zhhk`: Traditional Chinese.
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	// Property preQueueEnable: Pre-queue switch.
	//
	// - `on`: open.
	// - `off`: closed.
	PreQueueEnable interface{} `field:"optional" json:"preQueueEnable" yaml:"preQueueEnable"`
	// Property preQueueStartTime: Pre-queue start time.
	PreQueueStartTime interface{} `field:"optional" json:"preQueueStartTime" yaml:"preQueueStartTime"`
	// Property randomPreQueueEnable: Random queue switch.
	//
	// - `on`: open.
	// - `off`: closed.
	RandomPreQueueEnable interface{} `field:"optional" json:"randomPreQueueEnable" yaml:"randomPreQueueEnable"`
	// Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.
	//
	// It can be obtained by calling the [listwaitingroom](https:\/\/help.aliyun.com\/document_detail\/2850279.html) interface.
	WaitingRoomId interface{} `field:"optional" json:"waitingRoomId" yaml:"waitingRoomId"`
}

