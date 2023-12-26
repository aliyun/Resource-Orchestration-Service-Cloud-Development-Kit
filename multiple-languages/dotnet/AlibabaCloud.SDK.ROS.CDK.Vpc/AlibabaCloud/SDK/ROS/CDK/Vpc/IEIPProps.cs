using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `EIP`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eip
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEIPProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.EIPProps")]
    public interface IEIPProps
    {
        /// <summary>Property autoPay: Automatic Payment.</summary>
        /// <remarks>
        /// Default is true.
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property bandwidth: Bandwidth for the output network.</summary>
        /// <remarks>
        /// Default is 5MB.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
        /// <remarks>
        /// Default to False.
        /// </remarks>
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Optional.</summary>
        /// <remarks>
        /// The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
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

        /// <summary>Property instanceChargeType: The resource charge type.</summary>
        /// <remarks>
        /// Default value is Postpaid
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: The network charge type.</summary>
        /// <remarks>
        /// Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isp: The line type.</summary>
        /// <remarks>
        /// You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
        /// BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
        /// BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
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

        /// <summary>Property name: The name of the EIP.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
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

        /// <summary>Property netmode: The network type.</summary>
        /// <remarks>
        /// Valid value: public (public network).
        /// </remarks>
        [JsiiProperty(name: "netmode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Netmode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
        /// While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: Price cycle of the resource.</summary>
        /// <remarks>
        /// This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property publicIpAddressPoolId: The ID of the IP address pool.</summary>
        /// <remarks>
        /// The EIP is allocated from the IP address pool.
        /// </remarks>
        [JsiiProperty(name: "publicIpAddressPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PublicIpAddressPoolId
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

        /// <summary>Property securityProtectionTypes: The edition of Anti-DDoS.</summary>
        /// <remarks>
        /// If you do not set this parameter, Anti-DDoS Origin Basic is used.
        /// If you set the value to AntiDDoS_Enhanced, Anti-DDoS Pro/Premium is used.
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

        /// <summary>Property tags: Tags to attach to eip.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosEIP.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Vpc.RosEIP.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zone: Availability zone of the elastic public network IP.</summary>
        [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Zone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EIP`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eip
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEIPProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.EIPProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IEIPProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property autoPay: Automatic Payment.</summary>
            /// <remarks>
            /// Default is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property bandwidth: Bandwidth for the output network.</summary>
            /// <remarks>
            /// Default is 5MB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
            /// <remarks>
            /// Default to False.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Optional.</summary>
            /// <remarks>
            /// The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The resource charge type.</summary>
            /// <remarks>
            /// Default value is Postpaid
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: The network charge type.</summary>
            /// <remarks>
            /// Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isp: The line type.</summary>
            /// <remarks>
            /// You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
            /// BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
            /// BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Isp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the EIP.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property netmode: The network type.</summary>
            /// <remarks>
            /// Valid value: public (public network).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "netmode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Netmode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: Prepaid time period.</summary>
            /// <remarks>
            /// While choose by pay by month, it could be from 1 to 9 or 12, 24, 36.
            /// While choose pay by year, it could be from 1 to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: Price cycle of the resource.</summary>
            /// <remarks>
            /// This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property publicIpAddressPoolId: The ID of the IP address pool.</summary>
            /// <remarks>
            /// The EIP is allocated from the IP address pool.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicIpAddressPoolId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PublicIpAddressPoolId
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

            /// <summary>Property securityProtectionTypes: The edition of Anti-DDoS.</summary>
            /// <remarks>
            /// If you do not set this parameter, Anti-DDoS Origin Basic is used.
            /// If you set the value to AntiDDoS_Enhanced, Anti-DDoS Pro/Premium is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityProtectionTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityProtectionTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to eip.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosEIP.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.RosEIP.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.RosEIP.ITagsProperty[]?>();
            }

            /// <summary>Property zone: Availability zone of the elastic public network IP.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Zone
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
