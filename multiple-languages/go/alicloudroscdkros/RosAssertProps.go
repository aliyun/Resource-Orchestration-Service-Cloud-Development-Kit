package alicloudroscdkros


// Properties for defining a `RosAssert`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-assert
type RosAssertProps struct {
	Values interface{} `field:"required" json:"values" yaml:"values"`
	AbortCreation interface{} `field:"optional" json:"abortCreation" yaml:"abortCreation"`
	ErrorMessage interface{} `field:"optional" json:"errorMessage" yaml:"errorMessage"`
	Operation interface{} `field:"optional" json:"operation" yaml:"operation"`
}

