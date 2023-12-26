using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RunCommand`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommand
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRunCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RunCommandProps")]
    public interface IRunCommandProps
    {
        /// <summary>Property commandContent: The plaintext content or the Base64-encoded content of the script.</summary>
        /// <remarks>
        /// The Base64-encoded script content cannot exceed 16 KB.
        /// You can enable the custom parameter function by setting EnableParameter=true in the script content:
        /// Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
        /// The number of custom parameters cannot exceed 20.
        /// A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
        /// Each custom parameter key cannot exceed 64 bytes.
        /// </remarks>
        [JsiiProperty(name: "commandContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CommandContent
        {
            get;
        }

        /// <summary>Property instanceIds: The instance id list.</summary>
        /// <remarks>
        /// Instances status must be running.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object InstanceIds
        {
            get;
        }

        /// <summary>Property type: The language type of the O&amp;M script.</summary>
        /// <remarks>
        /// Valid values:
        /// RunBatScript: batch scripts for Windows instances
        /// RunPowerShellScript: PowerShell scripts for Windows instances
        /// RunShellScript: shell scripts for Linux instances
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property containerId: The ID of the container.</summary>
        /// <remarks>
        /// Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker://, containerd://, or cri-o:// to specify container runtimes.
        /// Take note of the following items:
        ///
        /// <list type="bullet">
        /// <description>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</description>
        /// <description>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</description>
        /// <description>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "containerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContainerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property containerName: The name of the container.</summary>
        /// <remarks>
        /// Take note of the following items:
        ///
        /// <list type="bullet">
        /// <description>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</description>
        /// <description>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.</description>
        /// <description>If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</description>
        /// <description>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "containerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContainerName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property contentEncoding: The encoding mode of script content (CommandContent).</summary>
        /// <remarks>
        /// Valid values (case insensitive):
        /// PlainText: The script content is not encoded, and transmitted in plaintext.
        /// Base64: base64-encoded.
        /// Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
        /// </remarks>
        [JsiiProperty(name: "contentEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContentEncoding
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the script, which supports all character sets.</summary>
        /// <remarks>
        /// It can be up to 512 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableParameter: Specifies whether the script contains custom parameters.</summary>
        /// <remarks>
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "enableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableParameter
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property frequency: The execution period of recurring tasks.</summary>
        /// <remarks>
        /// If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
        /// The parameter value follows the cron expression. For more information, see Configure scheduled commands.
        /// </remarks>
        [JsiiProperty(name: "frequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Frequency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keepCommand: Specifies whether to retain the script after it is run.</summary>
        /// <remarks>
        /// Valid values:
        /// true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
        /// false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "keepCommand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeepCommand
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the script, which supports all character sets.</summary>
        /// <remarks>
        /// It can be up to 128 characters in length.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.</summary>
        /// <remarks>
        /// Number of custom parameters: 0 to 10.
        /// The key cannot be an empty string. It can be up to 64 characters in length.
        /// The value can be an empty string.
        /// After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
        /// The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
        /// Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
        /// </remarks>
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Parameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property repeatMode: Specifies how to run the command.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>Once</strong>: immediately runs the command.</description>
        /// <description><strong>Period</strong>: runs the command on a schedule. If you set this parameter to Period, you must specify <strong>Frequency</strong>.</description>
        /// <description><strong>NextRebootOnly</strong>: runs the command the next time the instance is started.</description>
        /// <description>*<em>EveryReboot</em>: runs the command every time the instance is started.
        /// Default value:</description>
        /// <description>If you do not specify Frequency, the default value is Once.</description>
        /// <description>If you specify <strong>Frequency</strong>, <strong>Period</strong> is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "repeatMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepeatMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which to assign the command executions.</summary>
        /// <remarks>
        /// The instances specified by InstanceIds must belong to the specified resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property runAgainOn: The stage of executing the command again.</summary>
        [JsiiProperty(name: "runAgainOn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RunAgainOn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sync: Whether to invoke synchronously.</summary>
        [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sync
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to run_command.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosRunCommand.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosRunCommand.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeout: The timeout period for script execution.</summary>
        /// <remarks>
        /// Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
        /// Default value: 60.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property username: The username to use to run the command on instances.</summary>
        /// <remarks>
        /// The username can be up to 255 characters in length.
        ///
        /// <list type="bullet">
        /// <description>For Linux instances, the root username is used by default.</description>
        /// <description>For Windows instances, the System username is used by default.
        /// You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Username
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property windowsPasswordName: The name of the password to use to run the command on Windows instances.</summary>
        /// <remarks>
        /// The name can be up to 255 characters in length.
        /// If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>Username</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
        /// </remarks>
        [JsiiProperty(name: "windowsPasswordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WindowsPasswordName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workingDir: The running directory of the script in the ECS instance.</summary>
        /// <remarks>
        /// Default value:
        /// Linux instances: under the home directory of the administrator (root user): /root.
        /// Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist$(version).
        /// </remarks>
        [JsiiProperty(name: "workingDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkingDir
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RunCommand`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-runcommand
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRunCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RunCommandProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRunCommandProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property commandContent: The plaintext content or the Base64-encoded content of the script.</summary>
            /// <remarks>
            /// The Base64-encoded script content cannot exceed 16 KB.
            /// You can enable the custom parameter function by setting EnableParameter=true in the script content:
            /// Define custom parameters in the {{}} format. Within {{}}, the spaces and line breaks before and after the name of the parameter are ignored.
            /// The number of custom parameters cannot exceed 20.
            /// A custom parameter name can contain only letters, digits, underscores (_), and hyphens (-). It is case insensitive.
            /// Each custom parameter key cannot exceed 64 bytes.
            /// </remarks>
            [JsiiProperty(name: "commandContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CommandContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceIds: The instance id list.</summary>
            /// <remarks>
            /// Instances status must be running.
            /// </remarks>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object InstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The language type of the O&amp;M script.</summary>
            /// <remarks>
            /// Valid values:
            /// RunBatScript: batch scripts for Windows instances
            /// RunPowerShellScript: PowerShell scripts for Windows instances
            /// RunShellScript: shell scripts for Linux instances
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property containerId: The ID of the container.</summary>
            /// <remarks>
            /// Only 64-bit hexadecimal strings are supported. You can use container IDs that are prefixed with docker://, containerd://, or cri-o:// to specify container runtimes.
            /// Take note of the following items:
            ///
            /// <list type="bullet">
            /// <description>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</description>
            /// <description>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.- If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</description>
            /// <description>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property containerName: The name of the container.</summary>
            /// <remarks>
            /// Take note of the following items:
            ///
            /// <list type="bullet">
            /// <description>If you specify this parameter, Cloud Assistant runs scripts in the specified container of the instance.</description>
            /// <description>If you specify this parameter, make sure that the version of Cloud Assistant Agent installed on Linux instances is 2.2.3.344 or later.</description>
            /// <description>If you specify this parameter, Username that is specified in a request to call this operation and WorkingDir that is specified in a request to call the CreateCommand operation do not take effect. You can run the command only in the default working directory of the container by using the default user of the container.</description>
            /// <description>If you specify this parameter, only shell scripts can be run in Linux containers. You cannot add a command in the format similar to #!/usr/bin/python at the beginning of a script to specify a script interpreter.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "containerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContainerName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property contentEncoding: The encoding mode of script content (CommandContent).</summary>
            /// <remarks>
            /// Valid values (case insensitive):
            /// PlainText: The script content is not encoded, and transmitted in plaintext.
            /// Base64: base64-encoded.
            /// Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contentEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContentEncoding
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the script, which supports all character sets.</summary>
            /// <remarks>
            /// It can be up to 512 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableParameter: Specifies whether the script contains custom parameters.</summary>
            /// <remarks>
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableParameter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property frequency: The execution period of recurring tasks.</summary>
            /// <remarks>
            /// If the Timed parameter is set to True, you must specify the Frequency parameter. The interval between two recurring tasks cannot be less than 10 seconds.
            /// The parameter value follows the cron expression. For more information, see Configure scheduled commands.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "frequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Frequency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keepCommand: Specifies whether to retain the script after it is run.</summary>
            /// <remarks>
            /// Valid values:
            /// true: The script is retained. You can call the InvokeCommand operation to run the script again, call the DescribeCommands operation to query the script, and call the DeleteCommands operation to delete the script. The retained script takes up the quota of Cloud Assistant scripts.
            /// false: The script is not retained. It is automatically deleted after running, without taking up the quota of Cloud Assistant scripts.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keepCommand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeepCommand
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the script, which supports all character sets.</summary>
            /// <remarks>
            /// It can be up to 128 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.</summary>
            /// <remarks>
            /// Number of custom parameters: 0 to 10.
            /// The key cannot be an empty string. It can be up to 64 characters in length.
            /// The value can be an empty string.
            /// After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
            /// The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
            /// Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repeatMode: Specifies how to run the command.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>Once</strong>: immediately runs the command.</description>
            /// <description><strong>Period</strong>: runs the command on a schedule. If you set this parameter to Period, you must specify <strong>Frequency</strong>.</description>
            /// <description><strong>NextRebootOnly</strong>: runs the command the next time the instance is started.</description>
            /// <description>*<em>EveryReboot</em>: runs the command every time the instance is started.
            /// Default value:</description>
            /// <description>If you do not specify Frequency, the default value is Once.</description>
            /// <description>If you specify <strong>Frequency</strong>, <strong>Period</strong> is used as the value of RepeatMode regardless of whether RepeatMode is set to Period.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repeatMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RepeatMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which to assign the command executions.</summary>
            /// <remarks>
            /// The instances specified by InstanceIds must belong to the specified resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property runAgainOn: The stage of executing the command again.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "runAgainOn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RunAgainOn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sync: Whether to invoke synchronously.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sync
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to run_command.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create run_command. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosRunCommand.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosRunCommand.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosRunCommand.ITagsProperty[]?>();
            }

            /// <summary>Property timeout: The timeout period for script execution.</summary>
            /// <remarks>
            /// Unit: seconds. A timeout error occurs when a script cannot be run because the process slows down, a specific module or the Cloud Assistant client does not exist. When the script times out, the script process is forcibly terminated.
            /// Default value: 60.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property username: The username to use to run the command on instances.</summary>
            /// <remarks>
            /// The username can be up to 255 characters in length.
            ///
            /// <list type="bullet">
            /// <description>For Linux instances, the root username is used by default.</description>
            /// <description>For Windows instances, the System username is used by default.
            /// You can also specify other usernames that already exist in the instances to run the command. For security purposes, we recommend that you run Cloud Assistant commands as a regular user.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Username
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property windowsPasswordName: The name of the password to use to run the command on Windows instances.</summary>
            /// <remarks>
            /// The name can be up to 255 characters in length.
            /// If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>Username</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "windowsPasswordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WindowsPasswordName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workingDir: The running directory of the script in the ECS instance.</summary>
            /// <remarks>
            /// Default value:
            /// Linux instances: under the home directory of the administrator (root user): /root.
            /// Windows instances: under the directory where the process of the Cloud Assistant client is located, such as C:\ProgramData\aliyun\assist$(version).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workingDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkingDir
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
