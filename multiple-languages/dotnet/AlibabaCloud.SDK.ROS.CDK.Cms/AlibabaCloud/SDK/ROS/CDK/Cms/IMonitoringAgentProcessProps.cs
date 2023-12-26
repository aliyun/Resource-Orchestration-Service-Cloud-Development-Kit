using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `MonitoringAgentProcess`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagentprocess
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMonitoringAgentProcessProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitoringAgentProcessProps")]
    public interface IMonitoringAgentProcessProps
    {
        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property processName: The name of the process.</summary>
        [JsiiProperty(name: "processName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProcessName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property processUser: The user who launched the process.</summary>
        [JsiiProperty(name: "processUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProcessUser
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MonitoringAgentProcess`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagentprocess
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMonitoringAgentProcessProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitoringAgentProcessProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IMonitoringAgentProcessProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property processName: The name of the process.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "processName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProcessName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property processUser: The user who launched the process.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "processUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProcessUser
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
