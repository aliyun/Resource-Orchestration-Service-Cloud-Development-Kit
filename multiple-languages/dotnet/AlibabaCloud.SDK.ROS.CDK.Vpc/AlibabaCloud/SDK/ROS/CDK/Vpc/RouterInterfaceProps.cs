using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::RouterInterface`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RouterInterfaceProps")]
    public class RouterInterfaceProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRouterInterfaceProps
    {
        /// <summary>Property role: RouterInterface role.</summary>
        /// <remarks>
        /// Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
        /// </remarks>
        [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Role
        {
            get;
            set;
        }

        /// <summary>Property routerId: The router ID to create RouterInterface.</summary>
        [JsiiProperty(name: "routerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RouterId
        {
            get;
            set;
        }

        /// <summary>Property accessPointId: Access point ID.</summary>
        /// <remarks>
        /// If 'RouterType' is specified as 'VBR', the value is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accessPointId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AccessPointId
        {
            get;
            set;
        }

        /// <summary>Property autoPay: Indicates whether automatic payment is enabled.</summary>
        /// <remarks>
        /// Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <summary>Property description: Custom description of the RouterInterface, [2, 256] characters.</summary>
        /// <remarks>
        /// Don't fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.</summary>
        /// <remarks>
        /// It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckSourceIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HealthCheckSourceIp
        {
            get;
            set;
        }

        /// <summary>Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.</summary>
        /// <remarks>
        /// It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheckTargetIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HealthCheckTargetIp
        {
            get;
            set;
        }

        /// <summary>Property instanceChargeType: The billing method of the router interface.</summary>
        /// <remarks>
        /// Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceChargeType
        {
            get;
            set;
        }

        /// <summary>Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.</summary>
        /// <remarks>
        /// If 'OppositeRouterType' is specified as 'VBR', the value is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeAccessPointId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeAccessPointId
        {
            get;
            set;
        }

        /// <summary>Property oppositeInterfaceId: The ID of the peer router interface.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
        /// <remarks>
        /// The default value is current user Id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeInterfaceOwnerId
        {
            get;
            set;
        }

        /// <summary>Property oppositeRegionId: The region where the connection peer RouterInterface locates.</summary>
        /// <remarks>
        /// The default value is region where stack is created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeRegionId
        {
            get;
            set;
        }

        /// <summary>Property oppositeRouterId: The router ID of the connection peer RouterInterface.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeRouterId
        {
            get;
            set;
        }

        /// <summary>Property oppositeRouterType: Router type of the connection peer router.</summary>
        /// <remarks>
        /// Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeRouterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeRouterType
        {
            get;
            set;
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <summary>Property pricingCycle: Unit of the payment cycle.</summary>
        /// <remarks>
        /// It could be Month (default) or Year.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PricingCycle
        {
            get;
            set;
        }

        /// <summary>Property routerType: Router type.</summary>
        /// <remarks>
        /// Now support 'VRouter|VBR'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "routerType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RouterType
        {
            get;
            set;
        }

        /// <summary>Property spec: RouterInterface specification.</summary>
        /// <remarks>
        /// If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Spec
        {
            get;
            set;
        }
    }
}
