using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterface`.</summary>
    [JsiiInterface(nativeType: typeof(INetworkInterfaceProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfaceProps")]
    public interface INetworkInterfaceProps
    {
        /// <summary>Property vSwitchId: VSwitch ID of the specified VPC.</summary>
        /// <remarks>
        /// Specifies the switch ID for the VPC.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
        string VSwitchId
        {
            get;
        }

        /// <summary>Property description: Description of your ENI.</summary>
        /// <remarks>
        /// It is a string of [2, 256] English or Chinese characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkInterfaceName: Name of your ENI.</summary>
        /// <remarks>
        /// It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NetworkInterfaceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property primaryIpAddress: The primary private IP address of the ENI.</summary>
        /// <remarks>
        /// The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
        /// </remarks>
        [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PrimaryIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.</summary>
        /// <remarks>
        /// This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? PrivateIpAddresses
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: The ID of the security group that the ENI joins.</summary>
        /// <remarks>
        /// The security group and the ENI must be in a same VPC.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupIds: The IDs of the security groups that the ENI joins.</summary>
        /// <remarks>
        /// The security groups and the ENI must belong to the same VPC.
        /// </remarks>
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? SecurityGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterface`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INetworkInterfaceProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vSwitchId: VSwitch ID of the specified VPC.</summary>
            /// <remarks>
            /// Specifies the switch ID for the VPC.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}")]
            public string VSwitchId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Description of your ENI.</summary>
            /// <remarks>
            /// It is a string of [2, 256] English or Chinese characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property networkInterfaceName: Name of your ENI.</summary>
            /// <remarks>
            /// It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkInterfaceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NetworkInterfaceName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property primaryIpAddress: The primary private IP address of the ENI.</summary>
            /// <remarks>
            /// The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "primaryIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PrimaryIpAddress
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.</summary>
            /// <remarks>
            /// This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddresses", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? PrivateIpAddresses
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupId: The ID of the security group that the ENI joins.</summary>
            /// <remarks>
            /// The security group and the ENI must be in a same VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityGroupIds: The IDs of the security groups that the ENI joins.</summary>
            /// <remarks>
            /// The security groups and the ENI must belong to the same VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? SecurityGroupIds
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}
