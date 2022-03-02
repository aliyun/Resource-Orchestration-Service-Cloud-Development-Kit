using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CDN::DomainConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cdn.RosDomainConfigProps")]
    public class RosDomainConfigProps : AlibabaCloud.SDK.ROS.CDK.Cdn.IRosDomainConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainNames: Your accelerated domain name, separated by commas in English.
        /// </remarks>
        [JsiiProperty(name: "domainNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DomainNames
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: functions: function list, please refer to the CDN documentation for details.
        /// </remarks>
        [JsiiProperty(name: "functions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Functions
        {
            get;
            set;
        }
    }
}
