using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Properties for defining a `LivyCompute`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-livycompute
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILivyComputeProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.LivyComputeProps")]
    public interface ILivyComputeProps
    {
        /// <summary>Property authType: The authentication method.</summary>
        [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AuthType
        {
            get;
        }

        /// <summary>Property cpuLimit: The number of CPU cores for the Livy server.</summary>
        [JsiiProperty(name: "cpuLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CpuLimit
        {
            get;
        }

        /// <summary>Property displayReleaseVersion: The version number of the Spark engine.</summary>
        [JsiiProperty(name: "displayReleaseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayReleaseVersion
        {
            get;
        }

        /// <summary>Property livyVersion: The Livy version.</summary>
        [JsiiProperty(name: "livyVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LivyVersion
        {
            get;
        }

        /// <summary>Property memoryLimit: The memory size of the Livy server.</summary>
        [JsiiProperty(name: "memoryLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MemoryLimit
        {
            get;
        }

        /// <summary>Property name: The name of the Livy Gateway.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property queueName: The name of the submission queue.</summary>
        [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueueName
        {
            get;
        }

        /// <summary>Property workspaceBizId: The business ID of the workspace.</summary>
        [JsiiProperty(name: "workspaceBizId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceBizId
        {
            get;
        }

        /// <summary>Property autoStartConfiguration: The automatic startup configuration.</summary>
        [JsiiProperty(name: "autoStartConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosLivyCompute.AutoStartConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoStartConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoStopConfiguration: The automatic stop configuration.</summary>
        [JsiiProperty(name: "autoStopConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosLivyCompute.AutoStopConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoStopConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enablePublic: Whether to enable the public endpoint.</summary>
        [JsiiProperty(name: "enablePublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnablePublic
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property environmentId: The ID of the runtime environment.</summary>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvironmentId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fusion: Whether to enable acceleration with the Fusion engine.</summary>
        [JsiiProperty(name: "fusion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Fusion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property livyServerConf: The Livy Gateway configuration.</summary>
        /// <remarks>
        /// The value must be a JSON-formatted string that supports sparkDefaultsConf, sparkBlackListConf, livyConf, and livyClientConf.
        /// </remarks>
        [JsiiProperty(name: "livyServerConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LivyServerConf
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkName: The name of the network connection.</summary>
        [JsiiProperty(name: "networkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property releaseVersion: The deprecated Spark engine version.</summary>
        /// <remarks>
        /// Use DisplayReleaseVersion instead.
        /// </remarks>
        [JsiiProperty(name: "releaseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReleaseVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `LivyCompute`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-livycompute
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILivyComputeProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.LivyComputeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.ILivyComputeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property authType: The authentication method.</summary>
            [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AuthType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cpuLimit: The number of CPU cores for the Livy server.</summary>
            [JsiiProperty(name: "cpuLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CpuLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property displayReleaseVersion: The version number of the Spark engine.</summary>
            [JsiiProperty(name: "displayReleaseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayReleaseVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property livyVersion: The Livy version.</summary>
            [JsiiProperty(name: "livyVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LivyVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property memoryLimit: The memory size of the Livy server.</summary>
            [JsiiProperty(name: "memoryLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MemoryLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the Livy Gateway.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property queueName: The name of the submission queue.</summary>
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceBizId: The business ID of the workspace.</summary>
            [JsiiProperty(name: "workspaceBizId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceBizId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoStartConfiguration: The automatic startup configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoStartConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosLivyCompute.AutoStartConfigurationProperty\"}]}}", isOptional: true)]
            public object? AutoStartConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoStopConfiguration: The automatic stop configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoStopConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosLivyCompute.AutoStopConfigurationProperty\"}]}}", isOptional: true)]
            public object? AutoStopConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enablePublic: Whether to enable the public endpoint.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enablePublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnablePublic
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property environmentId: The ID of the runtime environment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnvironmentId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fusion: Whether to enable acceleration with the Fusion engine.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "fusion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Fusion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property livyServerConf: The Livy Gateway configuration.</summary>
            /// <remarks>
            /// The value must be a JSON-formatted string that supports sparkDefaultsConf, sparkBlackListConf, livyConf, and livyClientConf.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "livyServerConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LivyServerConf
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkName: The name of the network connection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "networkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property releaseVersion: The deprecated Spark engine version.</summary>
            /// <remarks>
            /// Use DisplayReleaseVersion instead.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "releaseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReleaseVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
