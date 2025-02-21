using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `PublicIpAddressPool`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-publicipaddresspool
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPublicIpAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PublicIpAddressPoolProps")]
    public interface IPublicIpAddressPoolProps
    {
        /// <summary>Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types.</summary>
        [JsiiProperty(name: "bizType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BizType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the address pool instance.</summary>
        /// <remarks>
        /// The length is 0-256 characters, and you cannot start with http:// or https: //.
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

        /// <summary>Property isp: The line type.</summary>
        /// <remarks>
        /// Valid values:
        /// BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
        /// BGP_PRO: BGP (Multi-ISP) Pro lines.
        /// Only the following regions support BGP (Multi-ISP) Pro lines:
        /// China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
        /// For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
        /// If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
        /// ChinaTelecom: China Telecom
        /// ChinaUnicom: China Unicom
        /// ChinaMobile: China Mobile
        /// ChinaTelecom_L2: China Telecom L2
        /// ChinaUnicom_L2: China Unicom L2
        /// ChinaMobile_L2: China Mobile L2
        /// If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
        /// </remarks>
        [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Isp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the address pool instance.</summary>
        /// <remarks>
        /// The length is 0-128 characters, and you cannot start with http: // or https: //.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group that the IP address pool belongs to.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityProtectionTypes: Safety protection level.</summary>
        /// <remarks>
        /// When configured as empty, the default is DDOS protection (basic version).
        /// When configured as Antiddos_enhanced, it means DDOS protection (enhanced version).
        /// </remarks>
        [JsiiProperty(name: "securityProtectionTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityProtectionTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The list of container group tags in the form of key\/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags for each container group.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosPublicIpAddressPool.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosPublicIpAddressPool.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zones: The available areas of the IP address pool.</summary>
        /// <remarks>
        /// The Biztype value is Cloudbox, that is, when the type of IP address pool is a cloud box, the parameter must be filled.
        /// </remarks>
        [JsiiProperty(name: "zones", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Zones
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PublicIpAddressPool`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-publicipaddresspool
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPublicIpAddressPoolProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.PublicIpAddressPoolProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IPublicIpAddressPoolProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bizType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BizType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of the address pool instance.</summary>
            /// <remarks>
            /// The length is 0-256 characters, and you cannot start with http:// or https: //.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isp: The line type.</summary>
            /// <remarks>
            /// Valid values:
            /// BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
            /// BGP_PRO: BGP (Multi-ISP) Pro lines.
            /// Only the following regions support BGP (Multi-ISP) Pro lines:
            /// China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
            /// For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
            /// If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
            /// ChinaTelecom: China Telecom
            /// ChinaUnicom: China Unicom
            /// ChinaMobile: China Mobile
            /// ChinaTelecom_L2: China Telecom L2
            /// ChinaUnicom_L2: China Unicom L2
            /// ChinaMobile_L2: China Mobile L2
            /// If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Isp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the address pool instance.</summary>
            /// <remarks>
            /// The length is 0-128 characters, and you cannot start with http: // or https: //.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group that the IP address pool belongs to.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityProtectionTypes: Safety protection level.</summary>
            /// <remarks>
            /// When configured as empty, the default is DDOS protection (basic version).
            /// When configured as Antiddos_enhanced, it means DDOS protection (enhanced version).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityProtectionTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityProtectionTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The list of container group tags in the form of key\/value pairs.</summary>
            /// <remarks>
            /// You can define a maximum of 20 tags for each container group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosPublicIpAddressPool.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosPublicIpAddressPool.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosPublicIpAddressPool.ITagsProperty[]?>();
            }

            /// <summary>Property zones: The available areas of the IP address pool.</summary>
            /// <remarks>
            /// The Biztype value is Cloudbox, that is, when the type of IP address pool is a cloud box, the parameter must be filled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zones", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Zones
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
