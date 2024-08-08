package alicloudroscdkros


// Properties for defining a `RosWaitCondition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-waitcondition
type RosWaitConditionProps struct {
	Handle interface{} `field:"required" json:"handle" yaml:"handle"`
	Timeout interface{} `field:"required" json:"timeout" yaml:"timeout"`
	Count interface{} `field:"optional" json:"count" yaml:"count"`
	ShowProgressEvent interface{} `field:"optional" json:"showProgressEvent" yaml:"showProgressEvent"`
}

