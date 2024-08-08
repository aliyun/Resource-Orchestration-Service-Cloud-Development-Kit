package alicloudroscdkarms


// Properties for defining a `RosRetcodeApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-retcodeapp
type RosRetcodeAppProps struct {
	RegionId interface{} `field:"required" json:"regionId" yaml:"regionId"`
	RetcodeAppName interface{} `field:"required" json:"retcodeAppName" yaml:"retcodeAppName"`
	RetcodeAppType interface{} `field:"required" json:"retcodeAppType" yaml:"retcodeAppType"`
}

