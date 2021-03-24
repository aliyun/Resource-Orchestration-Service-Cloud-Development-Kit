using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::VPC`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosVPCProps")]
    public class RosVPCProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosVPCProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
        /// 10.0.0.0/8
        /// 172.16.0.0/12 (Default)
        /// 192.168.0.0/16
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CidrBlock
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableIpv6", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableIpv6
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6CidrBlock: IPv6 network cidr of the VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Ipv6CidrBlock
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcName
        {
            get;
            set;
        }
    }
}
