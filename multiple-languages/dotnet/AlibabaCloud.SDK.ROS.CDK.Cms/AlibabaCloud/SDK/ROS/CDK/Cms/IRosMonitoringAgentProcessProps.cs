using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`.</summary>
    [JsiiInterface(nativeType: typeof(IRosMonitoringAgentProcessProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitoringAgentProcessProps")]
    public interface IRosMonitoringAgentProcessProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: processName: The name of the process.
        /// </remarks>
        [JsiiProperty(name: "processName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProcessName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: processUser: The user who launched the process.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosMonitoringAgentProcessProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitoringAgentProcessProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitoringAgentProcessProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: processName: The name of the process.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "processName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProcessName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: processUser: The user who launched the process.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "processUser", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProcessUser
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
