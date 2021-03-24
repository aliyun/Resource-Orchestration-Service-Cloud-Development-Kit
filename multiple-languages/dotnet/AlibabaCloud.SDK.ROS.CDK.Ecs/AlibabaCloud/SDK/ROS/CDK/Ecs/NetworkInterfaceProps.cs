using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterface`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.NetworkInterfaceProps")]
    public class NetworkInterfaceProps : AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfaceProps
    {
        /// <summary>Property vSwitchId: VSwitch ID of the specified VPC.</summary>
        /// <remarks>
        /// Specifies the switch ID for the VPC.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property description: Description of your ENI.</summary>
        /// <remarks>
        /// It is a string of [2, 256] English or Chinese characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property networkInterfaceName: Name of your ENI.</summary>
        /// <remarks>
        /// It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NetworkInterfaceName
        {
            get;
            set;
        }

        /// <summary>Property primaryIpAddress: The primary private IP address of the ENI.</summary>
        /// <remarks>
        /// The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrimaryIpAddress
        {
            get;
            set;
        }

        /// <summary>Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.</summary>
        /// <remarks>
        /// This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? PrivateIpAddresses
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ResourceGroupId
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: The ID of the security group that the ENI joins.</summary>
        /// <remarks>
        /// The security group and the ENI must be in a same VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <summary>Property securityGroupIds: The IDs of the security groups that the ENI joins.</summary>
        /// <remarks>
        /// The security groups and the ENI must belong to the same VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? SecurityGroupIds
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
