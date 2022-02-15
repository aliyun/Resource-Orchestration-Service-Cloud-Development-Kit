using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DNS::Domain`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dns.RosDomainProps")]
    public class RosDomainProps : AlibabaCloud.SDK.ROS.CDK.Dns.IRosDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: Domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DomainName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: Domain name grouping, the default is the "default grouping" GroupId
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-dns.RosDomain.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Dns.RosDomain.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
