using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroupInstances`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMonitorGroupInstancesProps")]
    public class RosMonitorGroupInstancesProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitorGroupInstancesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupId: The ID of the application group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instances:
        /// </remarks>
        [JsiiProperty(name: "instances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object Instances
        {
            get;
            set;
        }
    }
}
