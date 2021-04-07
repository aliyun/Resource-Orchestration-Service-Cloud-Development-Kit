using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroupInstances`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.MonitorGroupInstancesProps")]
    public class MonitorGroupInstancesProps : AlibabaCloud.SDK.ROS.CDK.Cms.IMonitorGroupInstancesProps
    {
        /// <summary>Property groupId: The ID of the application group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupId
        {
            get;
            set;
        }

        /// <summary>Property instances:.</summary>
        [JsiiProperty(name: "instances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object Instances
        {
            get;
            set;
        }
    }
}
