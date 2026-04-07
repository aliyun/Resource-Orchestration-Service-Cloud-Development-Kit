using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `RosEnvPodMonitor`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosEnvPodMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosEnvPodMonitorProps")]
    public interface IRosEnvPodMonitorProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configYaml: The YAML configuration string of the PodMonitor.
        /// </remarks>
        [JsiiProperty(name: "configYaml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConfigYaml
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: environmentId: The ID of the environment instance.
        /// </remarks>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: aliyunLang: The language. Valid values: zh and en. Default value: zh.
        /// </remarks>
        [JsiiProperty(name: "aliyunLang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AliyunLang
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosEnvPodMonitor`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envpodmonitor
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosEnvPodMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosEnvPodMonitorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosEnvPodMonitorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: configYaml: The YAML configuration string of the PodMonitor.
            /// </remarks>
            [JsiiProperty(name: "configYaml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConfigYaml
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: environmentId: The ID of the environment instance.
            /// </remarks>
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: aliyunLang: The language. Valid values: zh and en. Default value: zh.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aliyunLang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AliyunLang
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
