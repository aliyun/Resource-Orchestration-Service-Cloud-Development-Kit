package alicloudroscdkcloudphone


// Properties for defining a `RunCommand`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudphone-runcommand
type RunCommandProps struct {
	// Property command: The command that you want to run.\ The name can be up to 1024 bytes in length and can contain only letters, digits, underscores (_), periods (.), slashes (\/), colons (:), and hyphens (-).
	Command interface{} `field:"required" json:"command" yaml:"command"`
	// Property instanceIds: ID of the instance executing the command.
	//
	// Range of n: 1 ~ 10.
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	// Property runAgainOn: The stage of executing the command again.
	RunAgainOn interface{} `field:"optional" json:"runAgainOn" yaml:"runAgainOn"`
}

