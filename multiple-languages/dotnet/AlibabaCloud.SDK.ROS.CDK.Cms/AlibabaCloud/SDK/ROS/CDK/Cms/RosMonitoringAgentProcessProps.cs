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
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: processName: The name of the process.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "processName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ProcessName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: processUser: The user who launched the process.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "processUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ProcessUser
        {
            get;
            set;
        }
    }
}
