using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Actiontrail
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ACTIONTRAIL::TrailLogging`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-actiontrail.TrailLoggingProps")]
    public class TrailLoggingProps : AlibabaCloud.SDK.ROS.CDK.Actiontrail.ITrailLoggingProps
    {
        /// <summary>Property enable: Whether to enable the trail logging.</summary>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Enable
        {
            get;
            set;
        }

        /// <summary>Property name: The name of the trail to be enabled.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }
    }
}
