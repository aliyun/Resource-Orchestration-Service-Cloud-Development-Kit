package alicloudroscdkcdn


// Properties for defining a `DeliverTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
type DeliverTaskProps struct {
	// Property deliver: The method that is used to send operations reports.
	//
	// Operations reports are sent
	// to you only by email. The settings must be escaped in JSON.
	Deliver interface{} `field:"required" json:"deliver" yaml:"deliver"`
	// Property name: The name of the CDN deliver task.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property reports: The operations reports that are tracked by the task.
	//
	// The data must be escaped in
	// JSON.
	Reports interface{} `field:"required" json:"reports" yaml:"reports"`
	// Property schedule: The parameters that specify the time interval at which the tracking task sends operations reports.
	//
	// The settings must be escaped in JSON.
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	// Property domainNames: The domain name of the CDN deliver task.
	DomainNames interface{} `field:"optional" json:"domainNames" yaml:"domainNames"`
}

