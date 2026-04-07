using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::NatGateway`, which is used to query the information about a NAT gateway.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatGateway`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.NatGateway), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.NatGateway", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.NatGatewayProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class NatGateway : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGateway
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public NatGateway(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewayProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewayProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected NatGateway(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected NatGateway(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AutoPay: Indicates whether automatic payment is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// false: no
        /// true: yes
        /// </remarks>
        [JsiiProperty(name: "attrAutoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAutoPay
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
        public virtual object AttrBusinessStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: The time when the NAT gateway was created.</summary>
        /// <remarks>
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
        /// </remarks>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
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
        public virtual object AttrDeletionProtection
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the NAT gateway.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP).</summary>
        /// <remarks>
        /// Valid values:
        /// MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
        /// </remarks>
        [JsiiProperty(name: "attrEipBindMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEipBindMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExpiredTime: The time when the NAT gateway expires.</summary>
        [JsiiProperty(name: "attrExpiredTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExpiredTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.</summary>
        [JsiiProperty(name: "attrForwardTableIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrForwardTableIds
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
        public virtual object AttrIcmpReplyEnabled
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
        public virtual object AttrInternetChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.</summary>
        [JsiiProperty(name: "attrIpLists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIpLists
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NatGatewayId: The ID of the NAT gateway.</summary>
        [JsiiProperty(name: "attrNatGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNatGatewayId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NatGatewayName: The name of the NAT gateway.</summary>
        /// <remarks>
        /// The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
        /// </remarks>
        [JsiiProperty(name: "attrNatGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNatGatewayName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.</summary>
        [JsiiProperty(name: "attrNatGatewayPrivateInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNatGatewayPrivateInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NatType: The type of the NAT gateway.</summary>
        /// <remarks>
        /// The value is set to Enhanced (enhanced NAT gateway).
        /// </remarks>
        [JsiiProperty(name: "attrNatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNatType
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
        public virtual object AttrNetworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: The billing method of the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
        /// </remarks>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
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
        public virtual object AttrSecurityProtectionEnabled
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.</summary>
        [JsiiProperty(name: "attrSnatTableIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSnatTableIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Spec: The size of the NAT gateway.</summary>
        /// <remarks>
        /// An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
        /// </remarks>
        [JsiiProperty(name: "attrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSpec
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.datasource.NatGatewayProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewayProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.INatGatewayProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
