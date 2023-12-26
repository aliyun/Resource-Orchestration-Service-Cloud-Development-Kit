using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `Invocation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-invocation
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.InvocationProps")]
    public class InvocationProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IInvocationProps
    {
        private object _instanceIds;

        /// <summary>Property instanceIds: The instance id list.</summary>
        /// <remarks>
        /// Instances status must be running.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceIds
        {
            get => _instanceIds;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case object[] cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _instanceIds = value;
            }
        }

        private object? _commandId;

        /// <summary>Property commandId: The id of command.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "commandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CommandId
        {
            get => _commandId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _commandId = value;
            }
        }

        private object? _commandName;

        /// <summary>Property commandName: The name of command.</summary>
        /// <remarks>
        /// Only system commands whose provide is AlibabaCloud are supported
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "commandName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CommandName
        {
            get => _commandName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _commandName = value;
            }
        }

        private object? _containerId;

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
            get => _containerId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _containerId = value;
            }
        }

        private object? _containerName;

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
            get => _containerName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _containerName = value;
            }
        }

        private object? _frequency;

        /// <summary>Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute).</summary>
        /// <remarks>
        /// It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "frequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Frequency
        {
            get => _frequency;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _frequency = value;
            }
        }

        private object? _parameters;

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
            get => _parameters;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _parameters = value;
            }
        }

        private object? _repeatMode;

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
            get => _repeatMode;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _repeatMode = value;
            }
        }

        private object? _resourceGroupId;

        /// <summary>Property resourceGroupId: The ID of the resource group to which to assign the command executions.</summary>
        /// <remarks>
        /// The instances specified by InstanceIds must belong to the specified resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get => _resourceGroupId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceGroupId = value;
            }
        }

        private object? _sync;

        /// <summary>Property sync: Whether to invoke synchronously.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Sync
        {
            get => _sync;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _sync = value;
            }
        }

        /// <summary>Property tags: Tags to attach to invocation.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create invocation. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosInvocation.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Ecs.RosInvocation.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        private object? _timeout;

        /// <summary>Property timeout: The timeout period for the command execution.</summary>
        /// <remarks>
        /// Unit: seconds.
        ///
        /// <list type="bullet">
        /// <description>The timeout period cannot be less than 10 seconds.</description>
        /// <description>A timeout error occurs if the command cannot be run because the process slows down or because a specific module or Cloud Assistant Agent does not exist. When the specified timeout period ends, the command process is forcefully terminated.</description>
        /// <description>If you do not specify this parameter, the timeout period that is specified when the command is created is used.</description>
        /// <description>This timeout period is applicable only to this execution. The timeout period of the command is not modified.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Timeout
        {
            get => _timeout;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _timeout = value;
            }
        }

        private object? _username;

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
            get => _username;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _username = value;
            }
        }

        private object? _windowsPasswordName;

        /// <summary>Property windowsPasswordName: The name of the password to use to run the command on Windows instances.</summary>
        /// <remarks>
        /// The name can be up to 255 characters in length.
        /// If you do not want to use the default System user to run the command on Windows instances, specify both <strong>WindowsPasswordName</strong> and <strong>Username</strong>. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "windowsPasswordName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WindowsPasswordName
        {
            get => _windowsPasswordName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _windowsPasswordName = value;
            }
        }
    }
}
