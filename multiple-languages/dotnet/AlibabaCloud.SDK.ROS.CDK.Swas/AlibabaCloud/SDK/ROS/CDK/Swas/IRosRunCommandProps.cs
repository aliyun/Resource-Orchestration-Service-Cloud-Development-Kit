using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Swas
{
    /// <summary>Properties for defining a `RosRunCommand`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRunCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-swas.RosRunCommandProps")]
    public interface IRosRunCommandProps
    {
        /// <remarks>
        /// <strong>Property</strong>: commandContent: The plaintext content of the command to run.
        /// </remarks>
        [JsiiProperty(name: "commandContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CommandContent
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the command to run.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The language type of the O&M script. Valid values:
        /// RunShellScript: shell scripts for Linux instances
        /// RunBatScript: batch scripts for Windows instances
        /// RunPowerShellScript: PowerShell scripts for Windows instances
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive):
        /// PlainText: The command content is not encoded, and transmitted in plaintext.
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

        /// <remarks>
        /// <strong>Property</strong>: enableParameter: Specifies whether the command contains custom parameters.
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

        /// <remarks>
        /// <strong>Property</strong>: parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
        /// Number of custom parameters: 0 to 20.
        /// The key cannot be an empty string. It can be up to 64 characters in length.
        /// The value can be an empty string.
        /// After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
        /// The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
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

        /// <remarks>
        /// <strong>Property</strong>: sync: Whether to run the command synchronously.
        /// </remarks>
        [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sync
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
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

        /// <remarks>
        /// <strong>Property</strong>: windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
        /// If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
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

        /// <remarks>
        /// <strong>Property</strong>: workingDir: The directory in which to run the command on the instance. Default value:
        /// Linux instances: \/root
        /// Windows instances: C:\ProgramData\aliyun\assist\$(version)
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

        /// <remarks>
        /// <strong>Property</strong>: workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
        /// </remarks>
        [JsiiProperty(name: "workingUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkingUser
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRunCommand`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRunCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-swas.RosRunCommandProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Swas.IRosRunCommandProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: commandContent: The plaintext content of the command to run.
            /// </remarks>
            [JsiiProperty(name: "commandContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CommandContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the command to run.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The language type of the O&M script. Valid values:
            /// RunShellScript: shell scripts for Linux instances
            /// RunBatScript: batch scripts for Windows instances
            /// RunPowerShellScript: PowerShell scripts for Windows instances
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive):
            /// PlainText: The command content is not encoded, and transmitted in plaintext.
            /// Base64: base64-encoded.
            /// Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contentEncoding", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContentEncoding
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableParameter: Specifies whether the command contains custom parameters.
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableParameter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
            /// Number of custom parameters: 0 to 20.
            /// The key cannot be an empty string. It can be up to 64 characters in length.
            /// The value can be an empty string.
            /// After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
            /// The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
            /// Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Parameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sync: Whether to run the command synchronously.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sync
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
            /// If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "windowsPasswordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WindowsPasswordName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: workingDir: The directory in which to run the command on the instance. Default value:
            /// Linux instances: \/root
            /// Windows instances: C:\ProgramData\aliyun\assist\$(version)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workingDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkingDir
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workingUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkingUser
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
