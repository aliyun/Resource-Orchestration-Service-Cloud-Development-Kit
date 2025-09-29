package alicloudroscdkesa


// Properties for defining a `RosScheduledPreloadJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
type RosScheduledPreloadJobProps struct {
	InsertWay interface{} `field:"required" json:"insertWay" yaml:"insertWay"`
	ScheduledPreloadJobName interface{} `field:"required" json:"scheduledPreloadJobName" yaml:"scheduledPreloadJobName"`
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	OssUrl interface{} `field:"optional" json:"ossUrl" yaml:"ossUrl"`
	UrlList interface{} `field:"optional" json:"urlList" yaml:"urlList"`
}

