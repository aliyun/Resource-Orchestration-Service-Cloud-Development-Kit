package alicloudroscdknls


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
type ProjectProps struct {
	// Property name: Name of the project.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property description: Description of the project.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property projectType: Type of the project.
	ProjectType interface{} `field:"optional" json:"projectType" yaml:"projectType"`
	// Property sdkType: Type of the SDK.
	SdkType interface{} `field:"optional" json:"sdkType" yaml:"sdkType"`
}

