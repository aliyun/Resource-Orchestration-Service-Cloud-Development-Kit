package alicloudroscdkesa


// Properties for defining a `WaitingRoom`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
type WaitingRoomProps struct {
	// Property cookieName: The name of the custom cookie.
	CookieName interface{} `field:"required" json:"cookieName" yaml:"cookieName"`
	// Property hostNameAndPath: The hostname and path.
	HostNameAndPath interface{} `field:"required" json:"hostNameAndPath" yaml:"hostNameAndPath"`
	// Property newUsersPerMinute: The maximum number of new users per minute.
	NewUsersPerMinute interface{} `field:"required" json:"newUsersPerMinute" yaml:"newUsersPerMinute"`
	// Property queuingMethod: The queuing method.
	//
	// Value:
	// - `random`: Users gain access to the origin randomly, regardless of the arrival time.
	// - `fifo`: Users gain access to the origin in order of arrival.
	// - `Passthrough`: Users pass through the waiting room and go straight to the origin.
	// - `Reject-all`: Users are blocked from reaching the origin.
	QueuingMethod interface{} `field:"required" json:"queuingMethod" yaml:"queuingMethod"`
	// Property queuingStatusCode: Waiting room status code.
	//
	// Value:
	// - `200`
	// - `202`
	// - `429`.
	QueuingStatusCode interface{} `field:"required" json:"queuingStatusCode" yaml:"queuingStatusCode"`
	// Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin.
	//
	// Unit: minutes.
	SessionDuration interface{} `field:"required" json:"sessionDuration" yaml:"sessionDuration"`
	// Property siteId: The site ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property status: Waiting room enabled status.
	//
	// Value:
	// - 'on': Enable waiting room
	// - 'off': Disabled waiting room.
	Status interface{} `field:"required" json:"status" yaml:"status"`
	// Property totalActiveUsers: The maximum number of active users.
	TotalActiveUsers interface{} `field:"required" json:"totalActiveUsers" yaml:"totalActiveUsers"`
	// Property waitingRoomName: The name of the waiting room.
	WaitingRoomName interface{} `field:"required" json:"waitingRoomName" yaml:"waitingRoomName"`
	// Property waitingRoomType: The type of the waiting room, support: - `default`: Indicates the default type.
	//
	// - `custom`: indicates a custom type.
	WaitingRoomType interface{} `field:"required" json:"waitingRoomType" yaml:"waitingRoomType"`
	// Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter.
	//
	// The incoming content needs to be base64 encoded.
	CustomPageHtml interface{} `field:"optional" json:"customPageHtml" yaml:"customPageHtml"`
	// Property description: Waiting room description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property disableSessionRenewalEnable: Specifies whether to disable session renewal.
	//
	// Value:
	// - `on`: open.
	// - `off`: closed.
	DisableSessionRenewalEnable interface{} `field:"optional" json:"disableSessionRenewalEnable" yaml:"disableSessionRenewalEnable"`
	// Property jsonResponseEnable: The JSON response.
	//
	// If the accept request header contains "application\/json", JSON data is returned. Value:
	// - `on`: open.
	// - `off`: closed.
	JsonResponseEnable interface{} `field:"optional" json:"jsonResponseEnable" yaml:"jsonResponseEnable"`
	// Property language: The language of the waiting room page.
	//
	// When the waiting room type is the default type, it needs to be passed in. The following types are supported:
	// - `enus`: English.
	// - `zhcn`: Simplified Chinese.
	// - `zhhk`: Traditional Chinese.
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	// Property queueAllEnable: Specifies whether to queue all requests.
	//
	// Value:
	// - `on`: open.
	// - `off`: closed.
	QueueAllEnable interface{} `field:"optional" json:"queueAllEnable" yaml:"queueAllEnable"`
}

