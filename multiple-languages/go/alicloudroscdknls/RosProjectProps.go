package alicloudroscdknls


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
type RosProjectProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	ProjectType interface{} `field:"optional" json:"projectType" yaml:"projectType"`
	SdkType interface{} `field:"optional" json:"sdkType" yaml:"sdkType"`
}

