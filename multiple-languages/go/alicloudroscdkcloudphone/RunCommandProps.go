package alicloudroscdkcloudphone


// Properties for defining a `RunCommand`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
type RunCommandProps struct {
	// Property command: The command to be executed.
	//
	// The maximum length of a command is 1024 bytes, and only supports lowercase letters, numbers, downline (_), points (.), Slanting (\/), colon (:), medium line (-).
	Command interface{} `field:"required" json:"command" yaml:"command"`
	// Property instanceIds: ID of the instance executing the command.
	//
	// Range of n: 1 ~ 10.
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	// Property runAgainOn: The stage of executing the command again.
	RunAgainOn interface{} `field:"optional" json:"runAgainOn" yaml:"runAgainOn"`
}

