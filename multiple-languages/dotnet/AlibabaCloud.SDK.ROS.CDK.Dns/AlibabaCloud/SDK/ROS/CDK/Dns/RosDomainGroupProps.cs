using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DNS::DomainGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dns.RosDomainGroupProps")]
    public class RosDomainGroupProps : AlibabaCloud.SDK.ROS.CDK.Dns.IRosDomainGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: Domain name group name
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupName
        {
            get;
            set;
        }
    }
}
