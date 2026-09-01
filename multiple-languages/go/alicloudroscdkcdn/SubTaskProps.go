package alicloudroscdkcdn


// Properties for defining a `SubTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
type SubTaskProps struct {
	// Property reportIds: The IDs of the metrics that you want to include in the report.
	//
	// Separate multiple
	// IDs with commas (,). Valid values:
	// - 1: frequently requested URLs (ranked by the number of requests)
	// - 3: frequently requested URLs (ranked by the amount of network traffic)
	// - 5: frequently used Referer headers (ranked by the number of requests)
	// - 7: frequently used Referer headers (ranked by the amount of network traffic)
	// - 9: frequently requested URLs that are redirected to the origin (ranked by the
	// number of requests)
	// - 11: frequently requested URLs that are redirected to the origin (ranked by the
	// amount of network traffic)
	// - 13: top client IP addresses (ranked by the number of requests)
	// - 15: top client IP addresses (ranked by the amount of network traffic)
	// - 17: domain names ranked by the amount of network traffic
	// - 19: page views and unique visitors
	// - 21: regions from which requests are initiated
	// - 23: Internet service providers (ISPs).
	ReportIds interface{} `field:"required" json:"reportIds" yaml:"reportIds"`
	// Property domainName: The domain names to be tracked.
	//
	// Separate multiple domain names with commas (,).
	// You can specify up to 500 domain names. If you want to specify more than 500
	// domain names, submit a ticket.
	// > If you do not specify a domain name, the custom operations report is created
	// for all domain names that belong to your account.
	DomainName interface{} `field:"optional" json:"domainName" yaml:"domainName"`
}

