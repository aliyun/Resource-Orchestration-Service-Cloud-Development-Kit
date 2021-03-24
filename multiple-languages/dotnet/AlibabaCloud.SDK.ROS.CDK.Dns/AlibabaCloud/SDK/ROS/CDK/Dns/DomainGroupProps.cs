using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DNS::DomainGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dns.DomainGroupProps")]
    public class DomainGroupProps : AlibabaCloud.SDK.ROS.CDK.Dns.IDomainGroupProps
    {
        /// <summary>Property groupName: Domain name group name.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GroupName
        {
            get;
            set;
        }
    }
}
