package alicloudroscdkecs


// Properties for defining a `RunCommand`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommand
type RunCommandProps struct {
	// Property commandContent: The plaintext content or the Base64-encoded content of the script.
	//
	// The Base64-encoded script content cannot exceed 16 KB.
	// You can enable the custom parameter function by setting EnableParameter=true in the script content:
	// Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
	// The number of custom parameters cannot exceed 20.
	// A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
	// Each custom parameter key cannot exceed 64 bytes.
	CommandContent interface{} `field:"required" json:"commandContent" yaml:"commandContent"`
	// Property instanceIds: The instance id list.
	//
	// Instances status must be running.
	InstanceIds interface{} `field:"required" json:"instanceIds" yaml:"instanceIds"`
	// Property type: The language type of the O&M script.
	//
	// Valid values:
	// RunBatScript: batch scripts for Windows instances
	// RunPowerShellScript: PowerShell scripts for Windows instances
	// RunShellScript: shell scripts for Linux instances.
	Type interface{} `field:"required" json:"type" yaml:"type"`
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
	// Property contentEncoding: The encoding mode of script content (CommandContent).
	//
	// Valid values (case insensitive):
	// PlainText: The script content is not encoded, and transmitted in plaintext.
	// Base64: base64-encoded.
	// Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
	ContentEncoding interface{} `field:"optional" json:"contentEncoding" yaml:"contentEncoding"`
	// Property description: The description of the script, which supports all character sets.
	//
	// It can be up to 512 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enableParameter: Specifies whether the script contains custom parameters.
	//
	// Default value: false.
	EnableParameter interface{} `field:"optional" json:"enableParameter" yaml:"enableParameter"`
	// Property frequency: The execution period of recurring tasks.
	//
	// If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
	// The parameter value follows the cron expression. For more information, see Configure scheduled commands.
	Frequency interface{} `field:"optional" json:"frequency" yaml:"frequency"`
	// Property keepCommand: Specifies whether to retain the script after it is run.
	//
	// Valid values:
	// true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
	// false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
	// Default value: false.
	KeepCommand interface{} `field:"optional" json:"keepCommand" yaml:"keepCommand"`
	// Property name: The name of the script, which supports all character sets.
	//
	// It can be up to 128 characters in length.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
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
	// Property runAgainOn: The stage of executing the command again.
	RunAgainOn interface{} `field:"optional" json:"runAgainOn" yaml:"runAgainOn"`
	// Property sync: Whether to invoke synchronously.
	Sync interface{} `field:"optional" json:"sync" yaml:"sync"`
	// Property tags: Tags to attach to run_command.
	//
	// Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosRunCommand_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property timeout: The timeout period for script execution.
	//
	// Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
	// Default value: 60.
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
	// Property workingDir: The running directory of the script in the ECS instance.
	//
	// Default value:
	// Linux instances: under the home directory of the administrator (root user): \/root.
	// Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist\$(version).
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
}

