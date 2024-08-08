package alicloudroscdkcloudphone


// Properties for defining a `RosRunCommand`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
type RosRunCommandProps struct {
	Command interface{} `field:"required" json:"command" yaml:"command"`
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	RunAgainOn interface{} `field:"optional" json:"runAgainOn" yaml:"runAgainOn"`
}

