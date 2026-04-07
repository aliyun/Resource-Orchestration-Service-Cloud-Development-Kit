package alicloudroscdkcdn


// Properties for defining a `RosSubTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
type RosSubTaskProps struct {
	ReportIds interface{} `field:"required" json:"reportIds" yaml:"reportIds"`
	DomainName interface{} `field:"optional" json:"domainName" yaml:"domainName"`
}

