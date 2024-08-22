package alicloudroscdknls


// Properties for defining a `RosProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
type RosProjectProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	ProjectType interface{} `field:"required" json:"projectType" yaml:"projectType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	SdkType interface{} `field:"optional" json:"sdkType" yaml:"sdkType"`
}

