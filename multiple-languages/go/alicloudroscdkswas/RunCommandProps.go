package alicloudroscdkswas


// Properties for defining a `RunCommand`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
type RunCommandProps struct {
	// Property commandContent: The plaintext content of the command to run.
	CommandContent interface{} `field:"required" json:"commandContent" yaml:"commandContent"`
	// Property instanceId: The ID of the SWAS instance on which to run the command.
	//
	// The instance must be in 'Running' status.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property name: The name of the command to run.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property type: The language type of the O&M script.
	//
	// Valid values:
	// RunShellScript: shell scripts for Linux instances
	// RunBatScript: batch scripts for Windows instances
	// RunPowerShellScript: PowerShell scripts for Windows instances.
	Type interface{} `field:"required" json:"type" yaml:"type"`
	// Property contentEncoding: The encoding mode of command content (CommandContent).
	//
	// Valid values (case insensitive):
	// PlainText: The command content is not encoded, and transmitted in plaintext.
	// Base64: base64-encoded.
	// Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
	ContentEncoding interface{} `field:"optional" json:"contentEncoding" yaml:"contentEncoding"`
	// Property enableParameter: Specifies whether the command contains custom parameters.
	//
	// Default value: false.
	EnableParameter interface{} `field:"optional" json:"enableParameter" yaml:"enableParameter"`
	// Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
	//
	// Number of custom parameters: 0 to 20.
	// The key cannot be an empty string. It can be up to 64 characters in length.
	// The value can be an empty string.
	// After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
	// The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
	// Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property sync: Whether to run the command synchronously.
	Sync interface{} `field:"optional" json:"sync" yaml:"sync"`
	// Property timeout: The timeout period for command execution.
	//
	// Unit: seconds. Valid values: 10 to 86400. Default value: 60.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	// Property windowsPasswordName: The name of the password to use to run the command on Windows instances.
	//
	// The name can be up to 255 characters in length.
	// If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
	WindowsPasswordName interface{} `field:"optional" json:"windowsPasswordName" yaml:"windowsPasswordName"`
	// Property workingDir: The directory in which to run the command on the instance.
	//
	// Default value:
	// Linux instances: \/root
	// Windows instances: C:\ProgramData\aliyun\assist\$(version).
	WorkingDir interface{} `field:"optional" json:"workingDir" yaml:"workingDir"`
	// Property workingUser: The user with which to run the command on the instance.
	//
	// Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
	WorkingUser interface{} `field:"optional" json:"workingUser" yaml:"workingUser"`
}

