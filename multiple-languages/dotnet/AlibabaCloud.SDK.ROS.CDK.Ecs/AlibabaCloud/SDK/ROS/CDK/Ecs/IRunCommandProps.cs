using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::RunCommand`.</summary>
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
        /// Select up to 20 instances at a time.Instances status must be running.
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

        /// <summary>Property timed: Specifies whether to periodically run the script.</summary>
        /// <remarks>
        /// Valid values:
        /// true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
        /// false: runs once only.
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "timed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timed
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

        /// <summary>Properties for defining a `ALIYUN::ECS::RunCommand`.</summary>
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
            /// Select up to 20 instances at a time.Instances status must be running.
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

            /// <summary>Property timed: Specifies whether to periodically run the script.</summary>
            /// <remarks>
            /// Valid values:
            /// true: runs the script on a regular basis based on the value set for the Frequency parameter. The result of the previous execution task does not affect the next execution task.
            /// false: runs once only.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timed
            {
                get => GetInstanceProperty<object?>();
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
