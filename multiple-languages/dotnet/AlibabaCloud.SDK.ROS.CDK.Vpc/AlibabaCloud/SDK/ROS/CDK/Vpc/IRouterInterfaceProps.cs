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
        /// Now support 'InitiatingSide|AcceptingSide'.
        /// </remarks>
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Role
        {
            get;
        }

        /// <summary>Property routerId: The router ID to create RouterInterface.</summary>
        [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RouterId
        {
            get;
        }

        /// <summary>Property accessPointId: Access point ID.</summary>
        /// <remarks>
        /// If 'RouterType' is specified as 'VBR', the value is required.
        /// </remarks>
        [JsiiProperty(name: "accessPointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccessPointId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPay: Indicates whether automatic payment is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
        /// true: Automatic payment is enabled. The payment is automatically made.
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
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
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
        [JsiiProperty(name: "healthCheckSourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckSourceIp
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
        [JsiiProperty(name: "healthCheckTargetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckTargetIp
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
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
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
        [JsiiProperty(name: "oppositeAccessPointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeAccessPointId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeInterfaceId: The ID of the peer router interface.</summary>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeInterfaceId
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
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeInterfaceOwnerId
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
        [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property oppositeRouterId: The router ID of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeRouterId
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
        [JsiiProperty(name: "oppositeRouterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OppositeRouterType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
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

        /// <summary>Property pricingCycle: Unit of the payment cycle.</summary>
        /// <remarks>
        /// It could be Month (default) or Year.
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

        /// <summary>Property routerType: Router type.</summary>
        /// <remarks>
        /// Now support 'VRouter|VBR'
        /// </remarks>
        [JsiiProperty(name: "routerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouterType
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
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Spec
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
            /// Now support 'InitiatingSide|AcceptingSide'.
            /// </remarks>
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Role
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property routerId: The router ID to create RouterInterface.</summary>
            [JsiiProperty(name: "routerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RouterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessPointId: Access point ID.</summary>
            /// <remarks>
            /// If 'RouterType' is specified as 'VBR', the value is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessPointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccessPointId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoPay: Indicates whether automatic payment is enabled.</summary>
            /// <remarks>
            /// Valid values:
            /// false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
            /// true: Automatic payment is enabled. The payment is automatically made.
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
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.</summary>
            /// <remarks>
            /// It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckSourceIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckSourceIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.</summary>
            /// <remarks>
            /// It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckTargetIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckTargetIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The billing method of the router interface.</summary>
            /// <remarks>
            /// Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.</summary>
            /// <remarks>
            /// If 'OppositeRouterType' is specified as 'VBR', the value is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeAccessPointId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeAccessPointId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property oppositeInterfaceId: The ID of the peer router interface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeInterfaceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
            /// <remarks>
            /// The default value is current user Id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeInterfaceOwnerId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property oppositeRegionId: The region where the connection peer RouterInterface locates.</summary>
            /// <remarks>
            /// The default value is region where stack is created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property oppositeRouterId: The router ID of the connection peer RouterInterface.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeRouterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property oppositeRouterType: Router type of the connection peer router.</summary>
            /// <remarks>
            /// Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oppositeRouterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OppositeRouterType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: Prepaid time period.</summary>
            /// <remarks>
            /// It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pricingCycle: Unit of the payment cycle.</summary>
            /// <remarks>
            /// It could be Month (default) or Year.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PricingCycle
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routerType: Router type.</summary>
            /// <remarks>
            /// Now support 'VRouter|VBR'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouterType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property spec: RouterInterface specification.</summary>
            /// <remarks>
            /// If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Spec
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
