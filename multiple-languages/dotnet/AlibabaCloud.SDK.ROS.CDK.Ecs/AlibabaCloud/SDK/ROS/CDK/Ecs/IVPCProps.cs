using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::VPC`.</summary>
    [JsiiInterface(nativeType: typeof(IVPCProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.VPCProps")]
    public interface IVPCProps
    {
        /// <summary>Property cidrBlock: The IP address range of the VPC in the CIDR block form.</summary>
        /// <remarks>
        /// You can use the following IP address ranges and their subnets:
        /// 10.0.0.0/8
        /// 172.16.0.0/12 (Default)
        /// 192.168.0.0/16
        /// </remarks>
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CidrBlock
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the vpc, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.</summary>
        [JsiiProperty(name: "enableIpv6", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableIpv6
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6CidrBlock: IPv6 network cidr of the VPC.</summary>
        [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6CidrBlock
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC.</summary>
        /// <remarks>
        /// Valid values:
        /// BGP(default): Alibaba Cloud BGP IPv6
        /// ChinaMobile: China Mobile (single line)
        /// ChinaUnicom: China Unicom (single line)
        /// ChinaTelecom: China Telecom (single line)
        /// Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
        /// </remarks>
        [JsiiProperty(name: "ipv6Isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Isp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.</summary>
        [JsiiProperty(name: "secondaryCidrBlocks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryCidrBlocks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to vpc.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosVPC.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosVPC.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userCidr: The user CIDR block.</summary>
        /// <remarks>
        /// Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
        /// </remarks>
        [JsiiProperty(name: "userCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserCidr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "vpcName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::VPC`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVPCProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.VPCProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IVPCProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cidrBlock: The IP address range of the VPC in the CIDR block form.</summary>
            /// <remarks>
            /// You can use the following IP address ranges and their subnets:
            /// 10.0.0.0/8
            /// 172.16.0.0/12 (Default)
            /// 192.168.0.0/16
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of the vpc, [2, 256] characters.</summary>
            /// <remarks>
            /// Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableIpv6", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableIpv6
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6CidrBlock: IPv6 network cidr of the VPC.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6CidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC.</summary>
            /// <remarks>
            /// Valid values:
            /// BGP(default): Alibaba Cloud BGP IPv6
            /// ChinaMobile: China Mobile (single line)
            /// ChinaUnicom: China Unicom (single line)
            /// ChinaTelecom: China Telecom (single line)
            /// Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6Isp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryCidrBlocks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecondaryCidrBlocks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to vpc.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosVPC.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosVPC.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosVPC.ITagsProperty[]?>();
            }

            /// <summary>Property userCidr: The user CIDR block.</summary>
            /// <remarks>
            /// Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserCidr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
