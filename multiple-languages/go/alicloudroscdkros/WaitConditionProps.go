package alicloudroscdkros


// Properties for defining a `WaitCondition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-waitcondition
type WaitConditionProps struct {
	// Property handle: A reference to the wait condition handle used to signal this wait condition.
	Handle interface{} `field:"required" json:"handle" yaml:"handle"`
	// Property timeout: The number of seconds to wait for the correct number of signals to arrive.
	Timeout interface{} `field:"required" json:"timeout" yaml:"timeout"`
	// Property count: The number of success signals that must be received before the stack creation process continues.
	Count interface{} `field:"optional" json:"count" yaml:"count"`
	// Property showProgressEvent: Whether to generate progress changed event.
	//
	// Default to Disabled.
	ShowProgressEvent interface{} `field:"optional" json:"showProgressEvent" yaml:"showProgressEvent"`
}

