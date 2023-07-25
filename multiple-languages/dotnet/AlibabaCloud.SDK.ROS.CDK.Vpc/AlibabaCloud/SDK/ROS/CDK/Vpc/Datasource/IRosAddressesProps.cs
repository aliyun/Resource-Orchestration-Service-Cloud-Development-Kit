using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::EIP::Addresses`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosAddressesProps")]
    public interface IRosAddressesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: addressName: The name of the EIP.
        /// </remarks>
        [JsiiProperty(name: "addressName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AddressName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: allocationId: The ID of the EIP that you want to query.
        /// </remarks>
        [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocationId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the cloud resource.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the current bound instance.
        /// - **EcsInstance**: an ECS instance of the VPC type.
        /// - **SlbInstance**: an SLB instance of the VPC type.
        /// - **Nat**:NAT gateway.
        /// - **HaVip**: a highly available virtual IP address.
        /// - **NetworkInterface**: Secondary ENI.
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

        /// <remarks>
        /// <strong>Property</strong>: ipAddress: The IP address pool to which the EIP that you want to query belongs.
        /// </remarks>
        [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IpAddress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: isp: The line type. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: paymentType: The billing method of the EIP. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the EIPs belong.
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
        /// <strong>Property</strong>: segmentInstanceId: The ID of the consecutive EIPs.
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
        [JsiiTypeProxy(nativeType: typeof(IRosAddressesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosAddressesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosAddressesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: addressName: The name of the EIP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "addressName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AddressName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: allocationId: The ID of the EIP that you want to query.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allocationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocationId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the cloud resource.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the current bound instance.
            /// - **EcsInstance**: an ECS instance of the VPC type.
            /// - **SlbInstance**: an SLB instance of the VPC type.
            /// - **Nat**:NAT gateway.
            /// - **HaVip**: a highly available virtual IP address.
            /// - **NetworkInterface**: Secondary ENI.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipAddress: The IP address pool to which the EIP that you want to query belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isp: The line type. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: paymentType: The billing method of the EIP. Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the EIPs belong.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: segmentInstanceId: The ID of the consecutive EIPs.
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
