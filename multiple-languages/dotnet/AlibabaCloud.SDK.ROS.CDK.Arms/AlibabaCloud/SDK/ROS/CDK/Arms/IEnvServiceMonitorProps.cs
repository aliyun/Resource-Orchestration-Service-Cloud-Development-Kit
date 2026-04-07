using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `EnvServiceMonitor`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEnvServiceMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.EnvServiceMonitorProps")]
    public interface IEnvServiceMonitorProps
    {
        /// <summary>Property configYaml: The YAML configuration string of the ServiceMonitor.</summary>
        [JsiiProperty(name: "configYaml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConfigYaml
        {
            get;
        }

        /// <summary>Property environmentId: The ID of the environment instance.</summary>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentId
        {
            get;
        }

        /// <summary>Property aliyunLang: The language.</summary>
        /// <remarks>
        /// Valid values: zh and en. Default value: zh.
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

        /// <summary>Properties for defining a `EnvServiceMonitor`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-envservicemonitor
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEnvServiceMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.EnvServiceMonitorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IEnvServiceMonitorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property configYaml: The YAML configuration string of the ServiceMonitor.</summary>
            [JsiiProperty(name: "configYaml", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConfigYaml
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property environmentId: The ID of the environment instance.</summary>
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aliyunLang: The language.</summary>
            /// <remarks>
            /// Valid values: zh and en. Default value: zh.
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
