using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::EIP::Addresses`.</summary>
    [JsiiInterface(nativeType: typeof(IAddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.AddressesProps")]
    public interface IAddressesProps
    {
        /// <summary>Property addressName: The name of the EIP.</summary>
        [JsiiProperty(name: "addressName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property allocationId: The ID of the EIP that you want to query.</summary>
        [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocationId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceId: The ID of the cloud resource.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: The type of the current bound instance.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><strong>EcsInstance</strong>: an ECS instance of the VPC type.</description>
        /// <description><strong>SlbInstance</strong>: an SLB instance of the VPC type.</description>
        /// <description><strong>Nat</strong>:NAT gateway.</description>
        /// <description><strong>HaVip</strong>: a highly available virtual IP address.</description>
        /// <description><strong>NetworkInterface</strong>: Secondary ENI.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipAddress: The IP address pool to which the EIP that you want to query belongs.</summary>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpAddress
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

        /// <summary>Property paymentType: The billing method of the EIP.</summary>
        /// <remarks>
        /// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        /// </remarks>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PaymentType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the EIPs belong.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property segmentInstanceId: The ID of the consecutive EIPs.</summary>
        /// <remarks>
        /// This parameter value is returned only if the EIP is a continuous EIP.
        /// </remarks>
        [JsiiProperty(name: "segmentInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SegmentInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::EIP::Addresses`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.AddressesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IAddressesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addressName: The name of the EIP.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "addressName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property allocationId: The ID of the EIP that you want to query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocationId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: The ID of the cloud resource.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: The type of the current bound instance.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><strong>EcsInstance</strong>: an ECS instance of the VPC type.</description>
            /// <description><strong>SlbInstance</strong>: an SLB instance of the VPC type.</description>
            /// <description><strong>Nat</strong>:NAT gateway.</description>
            /// <description><strong>HaVip</strong>: a highly available virtual IP address.</description>
            /// <description><strong>NetworkInterface</strong>: Secondary ENI.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipAddress: The IP address pool to which the EIP that you want to query belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpAddress
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

            /// <summary>Property paymentType: The billing method of the EIP.</summary>
            /// <remarks>
            /// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the EIPs belong.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property segmentInstanceId: The ID of the consecutive EIPs.</summary>
            /// <remarks>
            /// This parameter value is returned only if the EIP is a continuous EIP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "segmentInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SegmentInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
