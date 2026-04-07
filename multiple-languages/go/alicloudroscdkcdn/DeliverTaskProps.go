package alicloudroscdkcdn


// Properties for defining a `DeliverTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
type DeliverTaskProps struct {
	// Property deliver: The deliver of the CDN deliver task.
	Deliver interface{} `field:"required" json:"deliver" yaml:"deliver"`
	// Property name: The name of the CDN deliver task.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property reports: The reports of the CDN deliver task.
	Reports interface{} `field:"required" json:"reports" yaml:"reports"`
	// Property schedule: The schedule of the CDN deliver task.
	Schedule interface{} `field:"required" json:"schedule" yaml:"schedule"`
	// Property domainNames: The domain name of the CDN deliver task.
	DomainNames interface{} `field:"optional" json:"domainNames" yaml:"domainNames"`
}

