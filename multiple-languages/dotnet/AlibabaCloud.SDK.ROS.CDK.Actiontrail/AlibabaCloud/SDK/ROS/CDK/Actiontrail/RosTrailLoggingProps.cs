using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ACTIONTRAIL::TrailLogging`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-actiontrail.RosTrailLoggingProps")]
    public class RosTrailLoggingProps : AlibabaCloud.SDK.ROS.CDK.Actiontrail.IRosTrailLoggingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: enable: Whether to enable the trail logging.
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Enable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the trail to be enabled.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Name
        {
            get;
            set;
        }
    }
}
