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
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CidrBlock
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
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
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
        [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Ipv6CidrBlock
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

        /// <summary>Property tags: Tags to attach to vpc.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "vpcName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcName
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
            [JsiiProperty(name: "cidrBlock", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CidrBlock
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: Description of the vpc, [2, 256] characters.</summary>
            /// <remarks>
            /// Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "ipv6CidrBlock", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Ipv6CidrBlock
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to vpc.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
