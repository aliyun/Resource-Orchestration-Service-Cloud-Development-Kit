package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::RouterInterface`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:05.930Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RouterInterface")
public class RouterInterface extends com.aliyun.ros.cdk.core.Resource {

    protected RouterInterface(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RouterInterface(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::RouterInterface`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public RouterInterface(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RouterInterfaceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::RouterInterface`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public RouterInterface(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RouterInterfaceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RouterInterfaceId: The ID of created RouterInterface.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouterInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouterInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RouterInterface}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RouterInterface> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.vpc.RouterInterfaceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RouterInterfaceProps.Builder();
        }

        /**
         * Property role: RouterInterface role.
         * <p>
         * Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
         * <p>
         * @return {@code this}
         * @param role Property role: RouterInterface role. This parameter is required.
         */
        public Builder role(final java.lang.String role) {
            this.props.role(role);
            return this;
        }
        /**
         * Property role: RouterInterface role.
         * <p>
         * Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
         * <p>
         * @return {@code this}
         * @param role Property role: RouterInterface role. This parameter is required.
         */
        public Builder role(final com.aliyun.ros.cdk.core.IResolvable role) {
            this.props.role(role);
            return this;
        }

        /**
         * Property routerId: The router ID to create RouterInterface.
         * <p>
         * @return {@code this}
         * @param routerId Property routerId: The router ID to create RouterInterface. This parameter is required.
         */
        public Builder routerId(final java.lang.String routerId) {
            this.props.routerId(routerId);
            return this;
        }
        /**
         * Property routerId: The router ID to create RouterInterface.
         * <p>
         * @return {@code this}
         * @param routerId Property routerId: The router ID to create RouterInterface. This parameter is required.
         */
        public Builder routerId(final com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.props.routerId(routerId);
            return this;
        }

        /**
         * Property accessPointId: Access point ID.
         * <p>
         * If 'RouterType' is specified as 'VBR', the value is required.
         * <p>
         * @return {@code this}
         * @param accessPointId Property accessPointId: Access point ID. This parameter is required.
         */
        public Builder accessPointId(final java.lang.String accessPointId) {
            this.props.accessPointId(accessPointId);
            return this;
        }
        /**
         * Property accessPointId: Access point ID.
         * <p>
         * If 'RouterType' is specified as 'VBR', the value is required.
         * <p>
         * @return {@code this}
         * @param accessPointId Property accessPointId: Access point ID. This parameter is required.
         */
        public Builder accessPointId(final com.aliyun.ros.cdk.core.IResolvable accessPointId) {
            this.props.accessPointId(accessPointId);
            return this;
        }

        /**
         * Property autoPay: Indicates whether automatic payment is enabled.
         * <p>
         * Valid values:
         * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         * true: Automatic payment is enabled. The payment is automatically made.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Indicates whether automatic payment is enabled.
         * <p>
         * Valid values:
         * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         * true: Automatic payment is enabled. The payment is automatically made.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property description: Custom description of the RouterInterface, [2, 256] characters.
         * <p>
         * Don't fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Custom description of the RouterInterface, [2, 256] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Custom description of the RouterInterface, [2, 256] characters.
         * <p>
         * Don't fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Custom description of the RouterInterface, [2, 256] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
         * <p>
         * It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
         * <p>
         * @return {@code this}
         * @param healthCheckSourceIp Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. This parameter is required.
         */
        public Builder healthCheckSourceIp(final java.lang.String healthCheckSourceIp) {
            this.props.healthCheckSourceIp(healthCheckSourceIp);
            return this;
        }
        /**
         * Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
         * <p>
         * It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
         * <p>
         * @return {@code this}
         * @param healthCheckSourceIp Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. This parameter is required.
         */
        public Builder healthCheckSourceIp(final com.aliyun.ros.cdk.core.IResolvable healthCheckSourceIp) {
            this.props.healthCheckSourceIp(healthCheckSourceIp);
            return this;
        }

        /**
         * Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
         * <p>
         * It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
         * <p>
         * @return {@code this}
         * @param healthCheckTargetIp Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. This parameter is required.
         */
        public Builder healthCheckTargetIp(final java.lang.String healthCheckTargetIp) {
            this.props.healthCheckTargetIp(healthCheckTargetIp);
            return this;
        }
        /**
         * Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
         * <p>
         * It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
         * <p>
         * @return {@code this}
         * @param healthCheckTargetIp Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. This parameter is required.
         */
        public Builder healthCheckTargetIp(final com.aliyun.ros.cdk.core.IResolvable healthCheckTargetIp) {
            this.props.healthCheckTargetIp(healthCheckTargetIp);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method of the router interface.
         * <p>
         * Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the router interface. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method of the router interface.
         * <p>
         * Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the router interface. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param name Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param name Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.
         * <p>
         * If 'OppositeRouterType' is specified as 'VBR', the value is required.
         * <p>
         * @return {@code this}
         * @param oppositeAccessPointId Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeAccessPointId(final java.lang.String oppositeAccessPointId) {
            this.props.oppositeAccessPointId(oppositeAccessPointId);
            return this;
        }
        /**
         * Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.
         * <p>
         * If 'OppositeRouterType' is specified as 'VBR', the value is required.
         * <p>
         * @return {@code this}
         * @param oppositeAccessPointId Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeAccessPointId(final com.aliyun.ros.cdk.core.IResolvable oppositeAccessPointId) {
            this.props.oppositeAccessPointId(oppositeAccessPointId);
            return this;
        }

        /**
         * Property oppositeInterfaceId: The ID of the peer router interface.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The ID of the peer router interface. This parameter is required.
         */
        public Builder oppositeInterfaceId(final java.lang.String oppositeInterfaceId) {
            this.props.oppositeInterfaceId(oppositeInterfaceId);
            return this;
        }
        /**
         * Property oppositeInterfaceId: The ID of the peer router interface.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The ID of the peer router interface. This parameter is required.
         */
        public Builder oppositeInterfaceId(final com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceId) {
            this.props.oppositeInterfaceId(oppositeInterfaceId);
            return this;
        }

        /**
         * Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
         * <p>
         * The default value is current user Id.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceOwnerId Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeInterfaceOwnerId(final java.lang.String oppositeInterfaceOwnerId) {
            this.props.oppositeInterfaceOwnerId(oppositeInterfaceOwnerId);
            return this;
        }
        /**
         * Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
         * <p>
         * The default value is current user Id.
         * <p>
         * @return {@code this}
         * @param oppositeInterfaceOwnerId Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeInterfaceOwnerId(final com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceOwnerId) {
            this.props.oppositeInterfaceOwnerId(oppositeInterfaceOwnerId);
            return this;
        }

        /**
         * Property oppositeRegionId: The region where the connection peer RouterInterface locates.
         * <p>
         * The default value is region where stack is created.
         * <p>
         * @return {@code this}
         * @param oppositeRegionId Property oppositeRegionId: The region where the connection peer RouterInterface locates. This parameter is required.
         */
        public Builder oppositeRegionId(final java.lang.String oppositeRegionId) {
            this.props.oppositeRegionId(oppositeRegionId);
            return this;
        }
        /**
         * Property oppositeRegionId: The region where the connection peer RouterInterface locates.
         * <p>
         * The default value is region where stack is created.
         * <p>
         * @return {@code this}
         * @param oppositeRegionId Property oppositeRegionId: The region where the connection peer RouterInterface locates. This parameter is required.
         */
        public Builder oppositeRegionId(final com.aliyun.ros.cdk.core.IResolvable oppositeRegionId) {
            this.props.oppositeRegionId(oppositeRegionId);
            return this;
        }

        /**
         * Property oppositeRouterId: The router ID of the connection peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param oppositeRouterId Property oppositeRouterId: The router ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeRouterId(final java.lang.String oppositeRouterId) {
            this.props.oppositeRouterId(oppositeRouterId);
            return this;
        }
        /**
         * Property oppositeRouterId: The router ID of the connection peer RouterInterface.
         * <p>
         * @return {@code this}
         * @param oppositeRouterId Property oppositeRouterId: The router ID of the connection peer RouterInterface. This parameter is required.
         */
        public Builder oppositeRouterId(final com.aliyun.ros.cdk.core.IResolvable oppositeRouterId) {
            this.props.oppositeRouterId(oppositeRouterId);
            return this;
        }

        /**
         * Property oppositeRouterType: Router type of the connection peer router.
         * <p>
         * Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
         * <p>
         * @return {@code this}
         * @param oppositeRouterType Property oppositeRouterType: Router type of the connection peer router. This parameter is required.
         */
        public Builder oppositeRouterType(final java.lang.String oppositeRouterType) {
            this.props.oppositeRouterType(oppositeRouterType);
            return this;
        }
        /**
         * Property oppositeRouterType: Router type of the connection peer router.
         * <p>
         * Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
         * <p>
         * @return {@code this}
         * @param oppositeRouterType Property oppositeRouterType: Router type of the connection peer router. This parameter is required.
         */
        public Builder oppositeRouterType(final com.aliyun.ros.cdk.core.IResolvable oppositeRouterType) {
            this.props.oppositeRouterType(oppositeRouterType);
            return this;
        }

        /**
         * Property period: Prepaid time period.
         * <p>
         * It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: Prepaid time period.
         * <p>
         * It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
         * <p>
         * @return {@code this}
         * @param period Property period: Prepaid time period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property pricingCycle: Unit of the payment cycle.
         * <p>
         * It could be Month (default) or Year.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Unit of the payment cycle. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: Unit of the payment cycle.
         * <p>
         * It could be Month (default) or Year.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: Unit of the payment cycle. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property routerType: Router type.
         * <p>
         * Now support 'VRouter|VBR'
         * <p>
         * @return {@code this}
         * @param routerType Property routerType: Router type. This parameter is required.
         */
        public Builder routerType(final java.lang.String routerType) {
            this.props.routerType(routerType);
            return this;
        }
        /**
         * Property routerType: Router type.
         * <p>
         * Now support 'VRouter|VBR'
         * <p>
         * @return {@code this}
         * @param routerType Property routerType: Router type. This parameter is required.
         */
        public Builder routerType(final com.aliyun.ros.cdk.core.IResolvable routerType) {
            this.props.routerType(routerType);
            return this;
        }

        /**
         * Property spec: RouterInterface specification.
         * <p>
         * If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
         * <p>
         * @return {@code this}
         * @param spec Property spec: RouterInterface specification. This parameter is required.
         */
        public Builder spec(final java.lang.String spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * Property spec: RouterInterface specification.
         * <p>
         * If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
         * <p>
         * @return {@code this}
         * @param spec Property spec: RouterInterface specification. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.RouterInterface}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RouterInterface build() {
            return new com.aliyun.ros.cdk.vpc.RouterInterface(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
