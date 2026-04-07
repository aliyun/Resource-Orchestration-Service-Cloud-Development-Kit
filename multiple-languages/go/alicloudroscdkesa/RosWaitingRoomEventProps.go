package alicloudroscdkesa


// Properties for defining a `RosWaitingRoomEvent`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
type RosWaitingRoomEventProps struct {
	EndTime interface{} `field:"required" json:"endTime" yaml:"endTime"`
	NewUsersPerMinute interface{} `field:"required" json:"newUsersPerMinute" yaml:"newUsersPerMinute"`
	QueuingMethod interface{} `field:"required" json:"queuingMethod" yaml:"queuingMethod"`
	QueuingStatusCode interface{} `field:"required" json:"queuingStatusCode" yaml:"queuingStatusCode"`
	SessionDuration interface{} `field:"required" json:"sessionDuration" yaml:"sessionDuration"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	StartTime interface{} `field:"required" json:"startTime" yaml:"startTime"`
	TotalActiveUsers interface{} `field:"required" json:"totalActiveUsers" yaml:"totalActiveUsers"`
	WaitingRoomEventName interface{} `field:"required" json:"waitingRoomEventName" yaml:"waitingRoomEventName"`
	WaitingRoomType interface{} `field:"required" json:"waitingRoomType" yaml:"waitingRoomType"`
	CustomPageHtml interface{} `field:"optional" json:"customPageHtml" yaml:"customPageHtml"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DisableSessionRenewalEnable interface{} `field:"optional" json:"disableSessionRenewalEnable" yaml:"disableSessionRenewalEnable"`
	JsonResponseEnable interface{} `field:"optional" json:"jsonResponseEnable" yaml:"jsonResponseEnable"`
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	PreQueueEnable interface{} `field:"optional" json:"preQueueEnable" yaml:"preQueueEnable"`
	PreQueueStartTime interface{} `field:"optional" json:"preQueueStartTime" yaml:"preQueueStartTime"`
	RandomPreQueueEnable interface{} `field:"optional" json:"randomPreQueueEnable" yaml:"randomPreQueueEnable"`
	WaitingRoomId interface{} `field:"optional" json:"waitingRoomId" yaml:"waitingRoomId"`
}

