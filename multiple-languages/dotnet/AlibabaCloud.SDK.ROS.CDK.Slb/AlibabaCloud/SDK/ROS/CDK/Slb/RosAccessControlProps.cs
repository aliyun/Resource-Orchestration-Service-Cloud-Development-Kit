using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::AccessControl`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosAccessControlProps")]
    public class RosAccessControlProps : AlibabaCloud.SDK.ROS.CDK.Slb.IRosAccessControlProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aclName: The name of the access control list.
        /// </remarks>
        [JsiiProperty(name: "aclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AclName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: aclEntrys: A list of acl entrys. Each entry can be IP addresses or CIDR blocks. Max length: 50.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aclEntrys", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosAccessControl.AclEntrysProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? AclEntrys
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: addressIpVersion: IP version. Could be "ipv4" or "ipv6".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "addressIpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AddressIpVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosAccessControl.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Slb.RosAccessControl.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
