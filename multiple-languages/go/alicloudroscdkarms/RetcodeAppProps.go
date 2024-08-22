package alicloudroscdkarms


// Properties for defining a `RetcodeApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
type RetcodeAppProps struct {
	// Property regionId: Region ID.
	//
	// Allowed values: cn-hangzhou, ap-southeast-1. Default to cn-hangzhou.
	RegionId interface{} `field:"required" json:"regionId" yaml:"regionId"`
	// Property retcodeAppName: The name of the application for which you want to create the browser monitoring job.
	RetcodeAppName interface{} `field:"required" json:"retcodeAppName" yaml:"retcodeAppName"`
	// Property retcodeAppType: The type of the application for which you want to create the browser monitoring job.
	//
	// Allowed values: web, weex, mini_dd, mini_alipay, mini_wx, mini_common.
	RetcodeAppType interface{} `field:"required" json:"retcodeAppType" yaml:"retcodeAppType"`
}

