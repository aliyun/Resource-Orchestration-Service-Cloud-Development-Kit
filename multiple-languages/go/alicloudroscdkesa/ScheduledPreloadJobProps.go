package alicloudroscdkesa


// Properties for defining a `ScheduledPreloadJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
type ScheduledPreloadJobProps struct {
	// Property insertWay: The method to submit the URLs to be prefetched.
	InsertWay interface{} `field:"required" json:"insertWay" yaml:"insertWay"`
	// Property scheduledPreloadJobName: The name of the scheduled prefetch task.
	ScheduledPreloadJobName interface{} `field:"required" json:"scheduledPreloadJobName" yaml:"scheduledPreloadJobName"`
	// Property siteId: The site ID.
	SiteId interface{} `field:"required" json:"siteId" yaml:"siteId"`
	// Property ossUrl: Preheat OSS files regularly and fill in the OSS file address.
	//
	// Note: The OSS file contains the URL that you need to warm up.
	OssUrl interface{} `field:"optional" json:"ossUrl" yaml:"ossUrl"`
	// Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
	UrlList interface{} `field:"optional" json:"urlList" yaml:"urlList"`
}

