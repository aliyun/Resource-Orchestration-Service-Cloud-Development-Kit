package alicloudroscdkesa


// Properties for defining a `RosWaitingRoom`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
type RosWaitingRoomProps struct {
	CookieName interface{} `field:"required" json:"cookieName" yaml:"cookieName"`
	HostNameAndPath interface{} `field:"required" json:"hostNameAndPath" yaml:"hostNameAndPath"`
	NewUsersPerMinute interface{} `field:"required" json:"newUsersPerMinute" yaml:"newUsersPerMinute"`
	QueuingMethod interface{} `field:"required" json:"queuingMethod" yaml:"queuingMethod"`
	QueuingStatusCode interface{} `field:"required" json:"queuingStatusCode" yaml:"queuingStatusCode"`
	SessionDuration interface{} `field:"required" json:"sessionDuration" yaml:"sessionDuration"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	Status interface{} `field:"required" json:"status" yaml:"status"`
	TotalActiveUsers interface{} `field:"required" json:"totalActiveUsers" yaml:"totalActiveUsers"`
	WaitingRoomName interface{} `field:"required" json:"waitingRoomName" yaml:"waitingRoomName"`
	WaitingRoomType interface{} `field:"required" json:"waitingRoomType" yaml:"waitingRoomType"`
	CustomPageHtml interface{} `field:"optional" json:"customPageHtml" yaml:"customPageHtml"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DisableSessionRenewalEnable interface{} `field:"optional" json:"disableSessionRenewalEnable" yaml:"disableSessionRenewalEnable"`
	JsonResponseEnable interface{} `field:"optional" json:"jsonResponseEnable" yaml:"jsonResponseEnable"`
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	QueueAllEnable interface{} `field:"optional" json:"queueAllEnable" yaml:"queueAllEnable"`
}

