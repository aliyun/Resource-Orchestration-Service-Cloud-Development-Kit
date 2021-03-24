using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`.</summary>
    [JsiiInterface(nativeType: typeof(IMonitoringAgentProcessProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitoringAgentProcessProps")]
    public interface IMonitoringAgentProcessProps
    {
        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property processName: The name of the process.</summary>
        [JsiiProperty(name: "processName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProcessName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property processUser: The user who launched the process.</summary>
        [JsiiProperty(name: "processUser", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProcessUser
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMonitoringAgentProcessProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitoringAgentProcessProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IMonitoringAgentProcessProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property processName: The name of the process.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "processName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProcessName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property processUser: The user who launched the process.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "processUser", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProcessUser
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
