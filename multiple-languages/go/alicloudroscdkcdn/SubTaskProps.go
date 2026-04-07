package alicloudroscdkcdn


// Properties for defining a `SubTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
type SubTaskProps struct {
	// Property reportIds: The report IDs.
	//
	// The value can be up to 128 bytes in length.
	ReportIds interface{} `field:"required" json:"reportIds" yaml:"reportIds"`
	// Property domainName: The domain name.
	DomainName interface{} `field:"optional" json:"domainName" yaml:"domainName"`
}

