using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Properties for defining a `RosLivyCompute`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-livycompute
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosLivyComputeProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosLivyComputeProps")]
    public interface IRosLivyComputeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: authType: The authentication method.
        /// </remarks>
        [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AuthType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cpuLimit: The number of CPU cores for the Livy server.
        /// </remarks>
        [JsiiProperty(name: "cpuLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CpuLimit
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: displayReleaseVersion: The version number of the Spark engine.
        /// </remarks>
        [JsiiProperty(name: "displayReleaseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayReleaseVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: livyVersion: The Livy version.
        /// </remarks>
        [JsiiProperty(name: "livyVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LivyVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: memoryLimit: The memory size of the Livy server.
        /// </remarks>
        [JsiiProperty(name: "memoryLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MemoryLimit
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the Livy Gateway.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: queueName: The name of the submission queue.
        /// </remarks>
        [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueueName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: workspaceBizId: The business ID of the workspace.
        /// </remarks>
        [JsiiProperty(name: "workspaceBizId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceBizId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoStartConfiguration: The automatic startup configuration.
        /// </remarks>
        [JsiiProperty(name: "autoStartConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosLivyCompute.AutoStartConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoStartConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoStopConfiguration: The automatic stop configuration.
        /// </remarks>
        [JsiiProperty(name: "autoStopConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosLivyCompute.AutoStopConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoStopConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enablePublic: Whether to enable the public endpoint.
        /// </remarks>
        [JsiiProperty(name: "enablePublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnablePublic
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: environmentId: The ID of the runtime environment.
        /// </remarks>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvironmentId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: fusion: Whether to enable acceleration with the Fusion engine.
        /// </remarks>
        [JsiiProperty(name: "fusion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Fusion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: livyServerConf: The Livy Gateway configuration. The value must be a JSON-formatted string that supports sparkDefaultsConf, sparkBlackListConf, livyConf, and livyClientConf.
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

        /// <remarks>
        /// <strong>Property</strong>: networkName: The name of the network connection.
        /// </remarks>
        [JsiiProperty(name: "networkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: releaseVersion: The deprecated Spark engine version. Use DisplayReleaseVersion instead.
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

        /// <summary>Properties for defining a `RosLivyCompute`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-livycompute
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosLivyComputeProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosLivyComputeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.IRosLivyComputeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: authType: The authentication method.
            /// </remarks>
            [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AuthType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpuLimit: The number of CPU cores for the Livy server.
            /// </remarks>
            [JsiiProperty(name: "cpuLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CpuLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayReleaseVersion: The version number of the Spark engine.
            /// </remarks>
            [JsiiProperty(name: "displayReleaseVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayReleaseVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: livyVersion: The Livy version.
            /// </remarks>
            [JsiiProperty(name: "livyVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LivyVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: memoryLimit: The memory size of the Livy server.
            /// </remarks>
            [JsiiProperty(name: "memoryLimit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MemoryLimit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the Livy Gateway.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: queueName: The name of the submission queue.
            /// </remarks>
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueueName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceBizId: The business ID of the workspace.
            /// </remarks>
            [JsiiProperty(name: "workspaceBizId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceBizId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoStartConfiguration: The automatic startup configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoStartConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosLivyCompute.AutoStartConfigurationProperty\"}]}}", isOptional: true)]
            public object? AutoStartConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoStopConfiguration: The automatic stop configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoStopConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosLivyCompute.AutoStopConfigurationProperty\"}]}}", isOptional: true)]
            public object? AutoStopConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enablePublic: Whether to enable the public endpoint.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enablePublic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnablePublic
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: environmentId: The ID of the runtime environment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnvironmentId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fusion: Whether to enable acceleration with the Fusion engine.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fusion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Fusion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: livyServerConf: The Livy Gateway configuration. The value must be a JSON-formatted string that supports sparkDefaultsConf, sparkBlackListConf, livyConf, and livyClientConf.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "livyServerConf", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LivyServerConf
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: networkName: The name of the network connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: releaseVersion: The deprecated Spark engine version. Use DisplayReleaseVersion instead.
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
