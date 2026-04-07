package alicloudroscdkfc3


// Properties for defining a `FunctionVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-functionversion
type FunctionVersionProps struct {
	// Property functionName: Function Name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property description: Description of the function version.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

