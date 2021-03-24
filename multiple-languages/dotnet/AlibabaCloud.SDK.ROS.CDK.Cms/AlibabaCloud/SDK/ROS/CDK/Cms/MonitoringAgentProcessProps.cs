using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.MonitoringAgentProcessProps")]
    public class MonitoringAgentProcessProps : AlibabaCloud.SDK.ROS.CDK.Cms.IMonitoringAgentProcessProps
    {
        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <summary>Property processName: The name of the process.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "processName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProcessName
        {
            get;
            set;
        }

        /// <summary>Property processUser: The user who launched the process.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "processUser", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProcessUser
        {
            get;
            set;
        }
    }
}
