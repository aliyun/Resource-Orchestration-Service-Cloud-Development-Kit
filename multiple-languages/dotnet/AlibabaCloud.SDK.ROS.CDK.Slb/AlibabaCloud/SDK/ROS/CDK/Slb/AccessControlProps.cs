using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::AccessControl`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.AccessControlProps")]
    public class AccessControlProps : AlibabaCloud.SDK.ROS.CDK.Slb.IAccessControlProps
    {
        /// <summary>Property aclName: The name of the access control list.</summary>
        [JsiiProperty(name: "aclName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AclName
        {
            get;
            set;
        }

        /// <summary>Property aclEntrys: A list of acl entrys.</summary>
        /// <remarks>
        /// Each entry can be IP addresses or CIDR blocks. Max length: 50.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aclEntrys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosAccessControl.AclEntrysProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? AclEntrys
        {
            get;
            set;
        }

        /// <summary>Property addressIpVersion: IP version.</summary>
        /// <remarks>
        /// Could be "ipv4" or "ipv6".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addressIpVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AddressIpVersion
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }
    }
}
