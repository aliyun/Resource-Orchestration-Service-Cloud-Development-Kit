using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eflo
{
    /// <summary>Properties for defining a `RosVpd`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVpdProps), fullyQualifiedName: "@alicloud/ros-cdk-eflo.RosVpdProps")]
    public interface IRosVpdProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0\/8,172.16.0.0\/12,192.168.0.0\/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, or 169.254.0.0\/16 and their subnets as the primary IPv4 CIDR block of the VPD.
        /// </remarks>
        [JsiiProperty(name: "cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Cidr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpdName: Lingjun CIDR block instance name.
        /// </remarks>
        [JsiiProperty(name: "vpdName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpdName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: secondaryCidrBlocks: List of additional network segment information.
        /// </remarks>
        [JsiiProperty(name: "secondaryCidrBlocks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryCidrBlocks
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: subnets: Lingjun subnet information List.
        /// </remarks>
        [JsiiProperty(name: "subnets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eflo.RosVpd.SubnetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Subnets
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags of vpd.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-eflo.RosVpd.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Eflo.RosVpd.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVpd`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eflo-vpd
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVpdProps), fullyQualifiedName: "@alicloud/ros-cdk-eflo.RosVpdProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Eflo.IRosVpdProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cidr: The CIDR block of the VPD. * We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0\/8,172.16.0.0\/12,192.168.0.0\/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, or 169.254.0.0\/16 and their subnets as the primary IPv4 CIDR block of the VPD.
            /// </remarks>
            [JsiiProperty(name: "cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Cidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpdName: Lingjun CIDR block instance name.
            /// </remarks>
            [JsiiProperty(name: "vpdName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpdName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: System-defined parameter. Value: **ChangeResourceGroup**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secondaryCidrBlocks: List of additional network segment information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryCidrBlocks", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecondaryCidrBlocks
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: subnets: Lingjun subnet information List.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "subnets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eflo.RosVpd.SubnetsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Subnets
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags of vpd.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-eflo.RosVpd.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Eflo.RosVpd.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Eflo.RosVpd.ITagsProperty[]?>();
            }
        }
    }
}
