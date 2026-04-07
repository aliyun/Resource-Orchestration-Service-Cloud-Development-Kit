using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Swas
{
    /// <summary>Properties for defining a `RunCommand`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRunCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-swas.RunCommandProps")]
    public interface IRunCommandProps
    {
        /// <summary>Property commandContent: The plaintext content of the command to run.</summary>
        [JsiiProperty(name: "commandContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CommandContent
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the SWAS instance on which to run the command.</summary>
        /// <remarks>
        /// The instance must be in 'Running' status.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property name: The name of the command to run.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property type: The language type of the O&amp;M script.</summary>
        /// <remarks>
        /// Valid values:
        /// RunShellScript: shell scripts for Linux instances
        /// RunBatScript: batch scripts for Windows instances
        /// RunPowerShellScript: PowerShell scripts for Windows instances
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property contentEncoding: The encoding mode of command content (CommandContent).</summary>
        /// <remarks>
        /// Valid values (case insensitive):
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

        /// <summary>Property enableParameter: Specifies whether the command contains custom parameters.</summary>
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

        /// <summary>Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.</summary>
        /// <remarks>
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

        /// <summary>Property sync: Whether to run the command synchronously.</summary>
        [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sync
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeout: The timeout period for command execution.</summary>
        /// <remarks>
        /// Unit: seconds. Valid values: 10 to 86400. Default value: 60.
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

        /// <summary>Property windowsPasswordName: The name of the password to use to run the command on Windows instances.</summary>
        /// <remarks>
        /// The name can be up to 255 characters in length.
        /// If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>WorkingUser</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
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

        /// <summary>Property workingDir: The directory in which to run the command on the instance.</summary>
        /// <remarks>
        /// Default value:
        /// Linux instances: /root
        /// Windows instances: C:\ProgramData\aliyun\assist$(version)
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

        /// <summary>Property workingUser: The user with which to run the command on the instance.</summary>
        /// <remarks>
        /// Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
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

        /// <summary>Properties for defining a `RunCommand`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRunCommandProps), fullyQualifiedName: "@alicloud/ros-cdk-swas.RunCommandProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Swas.IRunCommandProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property commandContent: The plaintext content of the command to run.</summary>
            [JsiiProperty(name: "commandContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CommandContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the SWAS instance on which to run the command.</summary>
            /// <remarks>
            /// The instance must be in 'Running' status.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the command to run.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: The language type of the O&amp;M script.</summary>
            /// <remarks>
            /// Valid values:
            /// RunShellScript: shell scripts for Linux instances
            /// RunBatScript: batch scripts for Windows instances
            /// RunPowerShellScript: PowerShell scripts for Windows instances
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property contentEncoding: The encoding mode of command content (CommandContent).</summary>
            /// <remarks>
            /// Valid values (case insensitive):
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

            /// <summary>Property enableParameter: Specifies whether the command contains custom parameters.</summary>
            /// <remarks>
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableParameter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.</summary>
            /// <remarks>
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

            /// <summary>Property sync: Whether to run the command synchronously.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sync
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeout: The timeout period for command execution.</summary>
            /// <remarks>
            /// Unit: seconds. Valid values: 10 to 86400. Default value: 60.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property windowsPasswordName: The name of the password to use to run the command on Windows instances.</summary>
            /// <remarks>
            /// The name can be up to 255 characters in length.
            /// If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>WorkingUser</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "windowsPasswordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WindowsPasswordName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workingDir: The directory in which to run the command on the instance.</summary>
            /// <remarks>
            /// Default value:
            /// Linux instances: /root
            /// Windows instances: C:\ProgramData\aliyun\assist$(version)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workingDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkingDir
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property workingUser: The user with which to run the command on the instance.</summary>
            /// <remarks>
            /// Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
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
