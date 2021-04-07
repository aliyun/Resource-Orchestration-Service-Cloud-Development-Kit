using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.MonitorGroupProps")]
    public class MonitorGroupProps : AlibabaCloud.SDK.ROS.CDK.Cms.IMonitorGroupProps
    {
        /// <summary>Property groupName: The name of the application group.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupName
        {
            get;
            set;
        }

        /// <summary>Property contactGroups: The alert contact group.</summary>
        /// <remarks>
        /// Alert notifications for the application group are sent to
        /// the specified alert contact group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "contactGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ContactGroups
        {
            get;
            set;
        }
    }
}
