using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMonitorGroupProps")]
    public class RosMonitorGroupProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitorGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: The name of the application group.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactGroups: The alert contact group. Alert notifications for the application group are sent to
        /// the specified alert contact group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "contactGroups", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ContactGroups
        {
            get;
            set;
        }
    }
}
