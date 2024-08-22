package alicloudroscdkecs


// Properties for defining a `Invocation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-invocation
type InvocationProps struct {
	// Property instanceIds: The instance id list.
	//
	// Instances status must be running.
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	// Property commandId: The id of command.
	CommandId interface{} `field:"optional" json:"commandId" yaml:"commandId"`
	// Property commandName: The name of command.
	//
	// Only system commands whose provide is AlibabaCloud are supported.
	CommandName interface{} `field:"optional" json:"commandName" yaml:"commandName"`
	// Property containerId: The ID of the container.
	//
	// Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker:\/\/, containerd:\/\/, or cri-o:\/\/ to specify container runtimes.
	// Take note of the following items:
	// - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
	// - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
	// - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
	ContainerId interface{} `field:"optional" json:"containerId" yaml:"containerId"`
	// Property containerName: The name of the container.
	//
	// Take note of the following items:
	// - If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.
	// - If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.
	// - If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.
	// - If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!\/usr\/bin\/python at the beginning of a script to specify a script interpreter.
	ContainerName interface{} `field:"optional" json:"containerName" yaml:"containerName"`
	// Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute).
	//
	// It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
	Frequency interface{} `field:"optional" json:"frequency" yaml:"frequency"`
	// Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.
	//
	// Number of custom parameters: 0 to 10.
	// The key cannot be an empty string. It can be up to 64 characters in length.
	// The value can be an empty string.
	// After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
	// The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
	// Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property repeatMode: Specifies how to run the command.
	//
	// Valid values:
	// - **Once**: immediately runs the command.
	// - **Period**: runs the command on a schedule. If you set this parameter to Period, you must specify **Frequency**.
	// - **NextRebootOnly**: runs the command the next time the instance is started.
	// - **EveryReboot*: runs the command every time the instance is started.
	// Default value:
	// - If you do not specify Frequency, the default value is Once.
	// - If you specify **Frequency**, **Period** is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.
	RepeatMode interface{} `field:"optional" json:"repeatMode" yaml:"repeatMode"`
	// Property resourceGroupId: The ID of the resource group to which to assign the command executions.
	//
	// The instances specified by InstanceIds must belong to the specified resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property sync: Whether to invoke synchronously.
	Sync interface{} `field:"optional" json:"sync" yaml:"sync"`
	// Property tags: Tags to attach to invocation.
	//
	// Max support 20 tags to add during create invocation. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInvocation_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property timeout: The timeout period for the command execution.
	//
	// Unit: seconds.
	// - The timeout period cannot be less than 10 seconds.
	// - A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.
	// - If you do not specify this parameter, the timeout period that is specified when the command is created is used.
	// - This timeout period is applicable only to this execution. The timeout period of the command is not modified.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	// Property username: The username to use to run the command on instances.
	//
	// The username can be up to 255 characters in length.
	// - For Linux instances, the root username is used by default.
	// - For Windows instances, the System username is used by default.
	// You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.
	Username interface{} `field:"optional" json:"username" yaml:"username"`
	// Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
	//
	// The name can be up to 255 characters in length.
	// If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **Username**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
	WindowsPasswordName interface{} `field:"optional" json:"windowsPasswordName" yaml:"windowsPasswordName"`
}

