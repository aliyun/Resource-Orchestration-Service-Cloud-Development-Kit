using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::RouterInterface`.</summary>
    [JsiiInterface(nativeType: typeof(IRouterInterfaceProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouterInterfaceProps")]
    public interface IRouterInterfaceProps
    {
        /// <summary>Property role: RouterInterface role.</summary>
        /// <remarks>
        /// Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
        /// </remarks>
        [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}")]
        string Role
        {
            get;
        }

        /// <summary>Property routerId: The router ID to create RouterInterface.</summary>
        [JsiiProperty(name: "routerId", typeJson: "{\"primitive\":\"string\"}")]
        string RouterId
        {
            get;
        }

        /// <summary>Property accessPointId: Access point ID.</summary>
        /// <remarks>
        /// If 'RouterType' is specified as 'VBR', the value is required.
        /// </remarks>
        [JsiiProperty(name: "accessPointId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccessPointId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPay: Indicates whether automatic payment is enabled.</summary>
        /// <remarks>
        /// Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
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

        /// <summary>Property description: Custom description of the RouterInterface, [2, 256] characters.</summary>
        /// <remarks>
        /// Don't fill or empty, the default is empty.
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

        /// <summary>Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.</summary>
        /// <remarks>
        /// It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        /// </remarks>
        [JsiiProperty(name: "healthCheckSourceIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HealthCheckSourceIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.</summary>
        /// <remarks>
        /// It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
        /// </remarks>
        [JsiiProperty(name: "healthCheckTargetIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? HealthCheckTargetIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceChargeType: The billing method of the router interface.</summary>
        /// <remarks>
        /// Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.</summary>
        /// <remarks>
        /// If 'OppositeRouterType' is specified as 'VBR', the value is required.
        /// </remarks>
        [JsiiProperty(name: "oppositeAccessPointId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OppositeAccessPointId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeInterfaceId: The ID of the peer router interface.</summary>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OppositeInterfaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
        /// <remarks>
        /// The default value is current user Id.
        /// </remarks>
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OppositeInterfaceOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeRegionId: The region where the connection peer RouterInterface locates.</summary>
        /// <remarks>
        /// The default value is region where stack is created.
        /// </remarks>
        [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OppositeRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeRouterId: The router ID of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OppositeRouterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeRouterType: Router type of the connection peer router.</summary>
        /// <remarks>
        /// Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
        /// </remarks>
        [JsiiProperty(name: "oppositeRouterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? OppositeRouterType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pricingCycle: Unit of the payment cycle.</summary>
        /// <remarks>
        /// It could be Month (default) or Year.
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PricingCycle
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routerType: Router type.</summary>
        /// <remarks>
        /// Now support 'VRouter|VBR'
        /// </remarks>
        [JsiiProperty(name: "routerType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RouterType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property spec: RouterInterface specification.</summary>
        /// <remarks>
        /// If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
        /// </remarks>
        [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Spec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::RouterInterface`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRouterInterfaceProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RouterInterfaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRouterInterfaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property role: RouterInterface role.</summary>
            /// <remarks>
            /// Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
            /// </remarks>
            [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}")]
            public string Role
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property routerId: The router ID to create RouterInterface.</summary>
            [JsiiProperty(name: "routerId", typeJson: "{\"primitive\":\"string\"}")]
            public string RouterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accessPointId: Access point ID.</summary>
            /// <remarks>
            /// If 'RouterType' is specified as 'VBR', the value is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessPointId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccessPointId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property autoPay: Indicates whether automatic payment is enabled.</summary>
            /// <remarks>
            /// Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Custom description of the RouterInterface, [2, 256] characters.</summary>
            /// <remarks>
            /// Don't fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.</summary>
            /// <remarks>
            /// It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckSourceIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HealthCheckSourceIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.</summary>
            /// <remarks>
            /// It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckTargetIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? HealthCheckTargetIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property instanceChargeType: The billing method of the router interface.</summary>
            /// <remarks>
            /// Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.</summary>
            /// <remarks>
            /// If 'OppositeRouterType' is specified as 'VBR', the value is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeAccessPointId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeAccessPointId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property oppositeInterfaceId: The ID of the peer router interface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeInterfaceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
            /// <remarks>
            /// The default value is current user Id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeInterfaceOwnerId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property oppositeRegionId: The region where the connection peer RouterInterface locates.</summary>
            /// <remarks>
            /// The default value is region where stack is created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeRegionId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property oppositeRouterId: The router ID of the connection peer RouterInterface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeRouterId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property oppositeRouterType: Router type of the connection peer router.</summary>
            /// <remarks>
            /// Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRouterType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? OppositeRouterType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property period: Prepaid time period.</summary>
            /// <remarks>
            /// It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property pricingCycle: Unit of the payment cycle.</summary>
            /// <remarks>
            /// It could be Month (default) or Year.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PricingCycle
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property routerType: Router type.</summary>
            /// <remarks>
            /// Now support 'VRouter|VBR'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routerType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RouterType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property spec: RouterInterface specification.</summary>
            /// <remarks>
            /// If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Spec
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
