using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMonitoringAgentProcessProps")]
    public class RosMonitoringAgentProcessProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitoringAgentProcessProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: processName: The name of the process.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "processName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProcessName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: processUser: The user who launched the process.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "processUser", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProcessUser
        {
            get;
            set;
        }
    }
}
