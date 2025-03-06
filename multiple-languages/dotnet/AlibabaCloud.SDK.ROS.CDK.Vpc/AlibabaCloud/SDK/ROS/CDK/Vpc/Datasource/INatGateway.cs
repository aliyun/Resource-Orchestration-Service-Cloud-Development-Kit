using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Represents a `NatGateway`.</summary>
    [JsiiInterface(nativeType: typeof(INatGateway), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.INatGateway")]
    public interface INatGateway : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AutoPay: Indicates whether automatic payment is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// false: no
        /// true: yes
        /// </remarks>
        [JsiiProperty(name: "attrAutoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoPay
        {
            get;
        }

        /// <summary>Attribute BusinessStatus: The status of the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:
        /// Normal: normal
        /// FinancialLocked: locked due to overdue payments
        /// </remarks>
        [JsiiProperty(name: "attrBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBusinessStatus
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the NAT gateway was created.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// true: yes
        /// false: no
        /// </remarks>
        [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeletionProtection
        {
            get;
        }

        /// <summary>Attribute Description: The description of the NAT gateway.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP).</summary>
        /// <remarks>
        /// Valid values:
        /// MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
        /// </remarks>
        [JsiiProperty(name: "attrEipBindMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEipBindMode
        {
            get;
        }

        /// <summary>Attribute ExpiredTime: The time when the NAT gateway expires.</summary>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExpiredTime
        {
            get;
        }

        /// <summary>Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.</summary>
        [JsiiProperty(name: "attrForwardTableIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrForwardTableIds
        {
            get;
        }

        /// <summary>Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// true: yes
        /// false: no
        /// </remarks>
        [JsiiProperty(name: "attrIcmpReplyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIcmpReplyEnabled
        {
            get;
        }

        /// <summary>Attribute InternetChargeType: The metering method of the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:
        /// PayBySpec: pay-by-specification
        /// PayByLcu: pay-by-CU
        /// </remarks>
        [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInternetChargeType
        {
            get;
        }

        /// <summary>Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.</summary>
        [JsiiProperty(name: "attrIpLists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpLists
        {
            get;
        }

        /// <summary>Attribute NatGatewayId: The ID of the NAT gateway.</summary>
        [JsiiProperty(name: "attrNatGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatGatewayId
        {
            get;
        }

        /// <summary>Attribute NatGatewayName: The name of the NAT gateway.</summary>
        /// <remarks>
        /// The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
        /// </remarks>
        [JsiiProperty(name: "attrNatGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatGatewayName
        {
            get;
        }

        /// <summary>Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.</summary>
        [JsiiProperty(name: "attrNatGatewayPrivateInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatGatewayPrivateInfo
        {
            get;
        }

        /// <summary>Attribute NatType: The type of the NAT gateway.</summary>
        /// <remarks>
        /// The value is set to Enhanced (enhanced NAT gateway).
        /// </remarks>
        [JsiiProperty(name: "attrNatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNatType
        {
            get;
        }

        /// <summary>Attribute NetworkType: The type of NAT gateway.</summary>
        /// <remarks>
        /// Valid values:
        /// internet: an Internet NAT gateway
        /// intranet: a VPC NAT gateway
        /// </remarks>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkType
        {
            get;
        }

        /// <summary>Attribute PaymentType: The billing method of the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        /// </remarks>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// false: no
        /// true: yes
        /// </remarks>
        [JsiiProperty(name: "attrSecurityProtectionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityProtectionEnabled
        {
            get;
        }

        /// <summary>Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.</summary>
        [JsiiProperty(name: "attrSnatTableIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSnatTableIds
        {
            get;
        }

        /// <summary>Attribute Spec: The size of the NAT gateway.</summary>
        /// <remarks>
        /// An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
        /// </remarks>
        [JsiiProperty(name: "attrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpec
        {
            get;
        }

        /// <summary>Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.NatGatewayProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewayProps Props
        {
            get;
        }

        /// <summary>Represents a `NatGateway`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INatGateway), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.INatGateway")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGateway
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AutoPay: Indicates whether automatic payment is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// false: no
            /// true: yes
            /// </remarks>
            [JsiiProperty(name: "attrAutoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoPay
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BusinessStatus: The status of the NAT gateway.</summary>
            /// <remarks>
            /// Valid values:
            /// Normal: normal
            /// FinancialLocked: locked due to overdue payments
            /// </remarks>
            [JsiiProperty(name: "attrBusinessStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBusinessStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the NAT gateway was created.</summary>
            /// <remarks>
            /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
            /// </remarks>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// true: yes
            /// false: no
            /// </remarks>
            [JsiiProperty(name: "attrDeletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeletionProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the NAT gateway.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP).</summary>
            /// <remarks>
            /// Valid values:
            /// MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
            /// </remarks>
            [JsiiProperty(name: "attrEipBindMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEipBindMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExpiredTime: The time when the NAT gateway expires.</summary>
            [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExpiredTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.</summary>
            [JsiiProperty(name: "attrForwardTableIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrForwardTableIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// true: yes
            /// false: no
            /// </remarks>
            [JsiiProperty(name: "attrIcmpReplyEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIcmpReplyEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InternetChargeType: The metering method of the NAT gateway.</summary>
            /// <remarks>
            /// Valid values:
            /// PayBySpec: pay-by-specification
            /// PayByLcu: pay-by-CU
            /// </remarks>
            [JsiiProperty(name: "attrInternetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInternetChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.</summary>
            [JsiiProperty(name: "attrIpLists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpLists
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NatGatewayId: The ID of the NAT gateway.</summary>
            [JsiiProperty(name: "attrNatGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NatGatewayName: The name of the NAT gateway.</summary>
            /// <remarks>
            /// The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
            /// </remarks>
            [JsiiProperty(name: "attrNatGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatGatewayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.</summary>
            [JsiiProperty(name: "attrNatGatewayPrivateInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatGatewayPrivateInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NatType: The type of the NAT gateway.</summary>
            /// <remarks>
            /// The value is set to Enhanced (enhanced NAT gateway).
            /// </remarks>
            [JsiiProperty(name: "attrNatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNatType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkType: The type of NAT gateway.</summary>
            /// <remarks>
            /// Valid values:
            /// internet: an Internet NAT gateway
            /// intranet: a VPC NAT gateway
            /// </remarks>
            [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The billing method of the NAT gateway.</summary>
            /// <remarks>
            /// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
            /// </remarks>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// false: no
            /// true: yes
            /// </remarks>
            [JsiiProperty(name: "attrSecurityProtectionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityProtectionEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.</summary>
            [JsiiProperty(name: "attrSnatTableIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSnatTableIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Spec: The size of the NAT gateway.</summary>
            /// <remarks>
            /// An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
            /// </remarks>
            [JsiiProperty(name: "attrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.NatGatewayProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewayProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewayProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
