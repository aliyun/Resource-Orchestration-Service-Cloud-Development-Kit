package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RouterInterface</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routerinterface
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:14.869Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RouterInterfaceProps")
@software.amazon.jsii.Jsii.Proxy(RouterInterfaceProps.Jsii$Proxy.class)
public interface RouterInterfaceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property role: RouterInterface role.
     * <p>
     * Now support 'InitiatingSide|AcceptingSide'.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRole();

    /**
     * Property routerId: The router ID to create RouterInterface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouterId();

    /**
     * Property accessPointId: Access point ID.
     * <p>
     * If 'RouterType' is specified as 'VBR', the value is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessPointId() {
        return null;
    }

    /**
     * Property autoPay: Indicates whether automatic payment is enabled.
     * <p>
     * Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default: true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property description: Custom description of the RouterInterface, [2, 256] characters.
     * <p>
     * Don't fill or empty, the default is empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
     * <p>
     * It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckSourceIp() {
        return null;
    }

    /**
     * Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
     * <p>
     * It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckTargetIp() {
        return null;
    }

    /**
     * Property instanceChargeType: The billing method of the router interface.
     * <p>
     * Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.
     * <p>
     * If 'OppositeRouterType' is specified as 'VBR', the value is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOppositeAccessPointId() {
        return null;
    }

    /**
     * Property oppositeInterfaceId: The ID of the peer router interface.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOppositeInterfaceId() {
        return null;
    }

    /**
     * Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     * <p>
     * The default value is current user Id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOppositeInterfaceOwnerId() {
        return null;
    }

    /**
     * Property oppositeRegionId: The region where the connection peer RouterInterface locates.
     * <p>
     * The default value is region where stack is created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOppositeRegionId() {
        return null;
    }

    /**
     * Property oppositeRouterId: The router ID of the connection peer RouterInterface.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOppositeRouterId() {
        return null;
    }

    /**
     * Property oppositeRouterType: Router type of the connection peer router.
     * <p>
     * Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOppositeRouterType() {
        return null;
    }

    /**
     * Property period: Prepaid time period.
     * <p>
     * It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property pricingCycle: Unit of the payment cycle.
     * <p>
     * It could be Month (default) or Year.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property routerType: Router type.
     * <p>
     * Now support 'VRouter|VBR'
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouterType() {
        return null;
    }

    /**
     * Property spec: RouterInterface specification.
     * <p>
     * If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RouterInterfaceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RouterInterfaceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RouterInterfaceProps> {
        java.lang.Object role;
        java.lang.Object routerId;
        java.lang.Object accessPointId;
        java.lang.Object autoPay;
        java.lang.Object description;
        java.lang.Object healthCheckSourceIp;
        java.lang.Object healthCheckTargetIp;
        java.lang.Object instanceChargeType;
        java.lang.Object name;
        java.lang.Object oppositeAccessPointId;
        java.lang.Object oppositeInterfaceId;
        java.lang.Object oppositeInterfaceOwnerId;
        java.lang.Object oppositeRegionId;
        java.lang.Object oppositeRouterId;
        java.lang.Object oppositeRouterType;
        java.lang.Object period;
        java.lang.Object pricingCycle;
        java.lang.Object routerType;
        java.lang.Object spec;

        /**
         * Sets the value of {@link RouterInterfaceProps#getRole}
         * @param role Property role: RouterInterface role. This parameter is required.
         *             Now support 'InitiatingSide|AcceptingSide'.
         * @return {@code this}
         */
        public Builder role(java.lang.String role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getRole}
         * @param role Property role: RouterInterface role. This parameter is required.
         *             Now support 'InitiatingSide|AcceptingSide'.
         * @return {@code this}
         */
        public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
            this.role = role;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getRouterId}
         * @param routerId Property routerId: The router ID to create RouterInterface. This parameter is required.
         * @return {@code this}
         */
        public Builder routerId(java.lang.String routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getRouterId}
         * @param routerId Property routerId: The router ID to create RouterInterface. This parameter is required.
         * @return {@code this}
         */
        public Builder routerId(com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getAccessPointId}
         * @param accessPointId Property accessPointId: Access point ID.
         *                      If 'RouterType' is specified as 'VBR', the value is required.
         * @return {@code this}
         */
        public Builder accessPointId(java.lang.String accessPointId) {
            this.accessPointId = accessPointId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getAccessPointId}
         * @param accessPointId Property accessPointId: Access point ID.
         *                      If 'RouterType' is specified as 'VBR', the value is required.
         * @return {@code this}
         */
        public Builder accessPointId(com.aliyun.ros.cdk.core.IResolvable accessPointId) {
            this.accessPointId = accessPointId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getAutoPay}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled.
         *                Valid values:
         *                false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         *                true: Automatic payment is enabled. The payment is automatically made.
         *                Default: true.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getAutoPay}
         * @param autoPay Property autoPay: Indicates whether automatic payment is enabled.
         *                Valid values:
         *                false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
         *                true: Automatic payment is enabled. The payment is automatically made.
         *                Default: true.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getDescription}
         * @param description Property description: Custom description of the RouterInterface, [2, 256] characters.
         *                    Don't fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getDescription}
         * @param description Property description: Custom description of the RouterInterface, [2, 256] characters.
         *                    Don't fill or empty, the default is empty.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getHealthCheckSourceIp}
         * @param healthCheckSourceIp Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
         *                            It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
         * @return {@code this}
         */
        public Builder healthCheckSourceIp(java.lang.String healthCheckSourceIp) {
            this.healthCheckSourceIp = healthCheckSourceIp;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getHealthCheckSourceIp}
         * @param healthCheckSourceIp Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
         *                            It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
         * @return {@code this}
         */
        public Builder healthCheckSourceIp(com.aliyun.ros.cdk.core.IResolvable healthCheckSourceIp) {
            this.healthCheckSourceIp = healthCheckSourceIp;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getHealthCheckTargetIp}
         * @param healthCheckTargetIp Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
         *                            It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
         * @return {@code this}
         */
        public Builder healthCheckTargetIp(java.lang.String healthCheckTargetIp) {
            this.healthCheckTargetIp = healthCheckTargetIp;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getHealthCheckTargetIp}
         * @param healthCheckTargetIp Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios.
         *                            It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
         * @return {@code this}
         */
        public Builder healthCheckTargetIp(com.aliyun.ros.cdk.core.IResolvable healthCheckTargetIp) {
            this.healthCheckTargetIp = healthCheckTargetIp;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the router interface.
         *                           Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the router interface.
         *                           Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getName}
         * @param name Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getName}
         * @param name Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeAccessPointId}
         * @param oppositeAccessPointId Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.
         *                              If 'OppositeRouterType' is specified as 'VBR', the value is required.
         * @return {@code this}
         */
        public Builder oppositeAccessPointId(java.lang.String oppositeAccessPointId) {
            this.oppositeAccessPointId = oppositeAccessPointId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeAccessPointId}
         * @param oppositeAccessPointId Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface.
         *                              If 'OppositeRouterType' is specified as 'VBR', the value is required.
         * @return {@code this}
         */
        public Builder oppositeAccessPointId(com.aliyun.ros.cdk.core.IResolvable oppositeAccessPointId) {
            this.oppositeAccessPointId = oppositeAccessPointId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeInterfaceId}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The ID of the peer router interface.
         * @return {@code this}
         */
        public Builder oppositeInterfaceId(java.lang.String oppositeInterfaceId) {
            this.oppositeInterfaceId = oppositeInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeInterfaceId}
         * @param oppositeInterfaceId Property oppositeInterfaceId: The ID of the peer router interface.
         * @return {@code this}
         */
        public Builder oppositeInterfaceId(com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceId) {
            this.oppositeInterfaceId = oppositeInterfaceId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeInterfaceOwnerId}
         * @param oppositeInterfaceOwnerId Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
         *                                 The default value is current user Id.
         * @return {@code this}
         */
        public Builder oppositeInterfaceOwnerId(java.lang.String oppositeInterfaceOwnerId) {
            this.oppositeInterfaceOwnerId = oppositeInterfaceOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeInterfaceOwnerId}
         * @param oppositeInterfaceOwnerId Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
         *                                 The default value is current user Id.
         * @return {@code this}
         */
        public Builder oppositeInterfaceOwnerId(com.aliyun.ros.cdk.core.IResolvable oppositeInterfaceOwnerId) {
            this.oppositeInterfaceOwnerId = oppositeInterfaceOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeRegionId}
         * @param oppositeRegionId Property oppositeRegionId: The region where the connection peer RouterInterface locates.
         *                         The default value is region where stack is created.
         * @return {@code this}
         */
        public Builder oppositeRegionId(java.lang.String oppositeRegionId) {
            this.oppositeRegionId = oppositeRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeRegionId}
         * @param oppositeRegionId Property oppositeRegionId: The region where the connection peer RouterInterface locates.
         *                         The default value is region where stack is created.
         * @return {@code this}
         */
        public Builder oppositeRegionId(com.aliyun.ros.cdk.core.IResolvable oppositeRegionId) {
            this.oppositeRegionId = oppositeRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeRouterId}
         * @param oppositeRouterId Property oppositeRouterId: The router ID of the connection peer RouterInterface.
         * @return {@code this}
         */
        public Builder oppositeRouterId(java.lang.String oppositeRouterId) {
            this.oppositeRouterId = oppositeRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeRouterId}
         * @param oppositeRouterId Property oppositeRouterId: The router ID of the connection peer RouterInterface.
         * @return {@code this}
         */
        public Builder oppositeRouterId(com.aliyun.ros.cdk.core.IResolvable oppositeRouterId) {
            this.oppositeRouterId = oppositeRouterId;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeRouterType}
         * @param oppositeRouterType Property oppositeRouterType: Router type of the connection peer router.
         *                           Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
         * @return {@code this}
         */
        public Builder oppositeRouterType(java.lang.String oppositeRouterType) {
            this.oppositeRouterType = oppositeRouterType;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getOppositeRouterType}
         * @param oppositeRouterType Property oppositeRouterType: Router type of the connection peer router.
         *                           Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
         * @return {@code this}
         */
        public Builder oppositeRouterType(com.aliyun.ros.cdk.core.IResolvable oppositeRouterType) {
            this.oppositeRouterType = oppositeRouterType;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Unit of the payment cycle.
         *                     It could be Month (default) or Year.
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Unit of the payment cycle.
         *                     It could be Month (default) or Year.
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getRouterType}
         * @param routerType Property routerType: Router type.
         *                   Now support 'VRouter|VBR'
         * @return {@code this}
         */
        public Builder routerType(java.lang.String routerType) {
            this.routerType = routerType;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getRouterType}
         * @param routerType Property routerType: Router type.
         *                   Now support 'VRouter|VBR'
         * @return {@code this}
         */
        public Builder routerType(com.aliyun.ros.cdk.core.IResolvable routerType) {
            this.routerType = routerType;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getSpec}
         * @param spec Property spec: RouterInterface specification.
         *             If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
         * @return {@code this}
         */
        public Builder spec(java.lang.String spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Sets the value of {@link RouterInterfaceProps#getSpec}
         * @param spec Property spec: RouterInterface specification.
         *             If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
         * @return {@code this}
         */
        public Builder spec(com.aliyun.ros.cdk.core.IResolvable spec) {
            this.spec = spec;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RouterInterfaceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RouterInterfaceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RouterInterfaceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RouterInterfaceProps {
        private final java.lang.Object role;
        private final java.lang.Object routerId;
        private final java.lang.Object accessPointId;
        private final java.lang.Object autoPay;
        private final java.lang.Object description;
        private final java.lang.Object healthCheckSourceIp;
        private final java.lang.Object healthCheckTargetIp;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object name;
        private final java.lang.Object oppositeAccessPointId;
        private final java.lang.Object oppositeInterfaceId;
        private final java.lang.Object oppositeInterfaceOwnerId;
        private final java.lang.Object oppositeRegionId;
        private final java.lang.Object oppositeRouterId;
        private final java.lang.Object oppositeRouterType;
        private final java.lang.Object period;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object routerType;
        private final java.lang.Object spec;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerId = software.amazon.jsii.Kernel.get(this, "routerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessPointId = software.amazon.jsii.Kernel.get(this, "accessPointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckSourceIp = software.amazon.jsii.Kernel.get(this, "healthCheckSourceIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckTargetIp = software.amazon.jsii.Kernel.get(this, "healthCheckTargetIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oppositeAccessPointId = software.amazon.jsii.Kernel.get(this, "oppositeAccessPointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oppositeInterfaceId = software.amazon.jsii.Kernel.get(this, "oppositeInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oppositeInterfaceOwnerId = software.amazon.jsii.Kernel.get(this, "oppositeInterfaceOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oppositeRegionId = software.amazon.jsii.Kernel.get(this, "oppositeRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oppositeRouterId = software.amazon.jsii.Kernel.get(this, "oppositeRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oppositeRouterType = software.amazon.jsii.Kernel.get(this, "oppositeRouterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerType = software.amazon.jsii.Kernel.get(this, "routerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spec = software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.role = java.util.Objects.requireNonNull(builder.role, "role is required");
            this.routerId = java.util.Objects.requireNonNull(builder.routerId, "routerId is required");
            this.accessPointId = builder.accessPointId;
            this.autoPay = builder.autoPay;
            this.description = builder.description;
            this.healthCheckSourceIp = builder.healthCheckSourceIp;
            this.healthCheckTargetIp = builder.healthCheckTargetIp;
            this.instanceChargeType = builder.instanceChargeType;
            this.name = builder.name;
            this.oppositeAccessPointId = builder.oppositeAccessPointId;
            this.oppositeInterfaceId = builder.oppositeInterfaceId;
            this.oppositeInterfaceOwnerId = builder.oppositeInterfaceOwnerId;
            this.oppositeRegionId = builder.oppositeRegionId;
            this.oppositeRouterId = builder.oppositeRouterId;
            this.oppositeRouterType = builder.oppositeRouterType;
            this.period = builder.period;
            this.pricingCycle = builder.pricingCycle;
            this.routerType = builder.routerType;
            this.spec = builder.spec;
        }

        @Override
        public final java.lang.Object getRole() {
            return this.role;
        }

        @Override
        public final java.lang.Object getRouterId() {
            return this.routerId;
        }

        @Override
        public final java.lang.Object getAccessPointId() {
            return this.accessPointId;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getHealthCheckSourceIp() {
            return this.healthCheckSourceIp;
        }

        @Override
        public final java.lang.Object getHealthCheckTargetIp() {
            return this.healthCheckTargetIp;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOppositeAccessPointId() {
            return this.oppositeAccessPointId;
        }

        @Override
        public final java.lang.Object getOppositeInterfaceId() {
            return this.oppositeInterfaceId;
        }

        @Override
        public final java.lang.Object getOppositeInterfaceOwnerId() {
            return this.oppositeInterfaceOwnerId;
        }

        @Override
        public final java.lang.Object getOppositeRegionId() {
            return this.oppositeRegionId;
        }

        @Override
        public final java.lang.Object getOppositeRouterId() {
            return this.oppositeRouterId;
        }

        @Override
        public final java.lang.Object getOppositeRouterType() {
            return this.oppositeRouterType;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getRouterType() {
            return this.routerType;
        }

        @Override
        public final java.lang.Object getSpec() {
            return this.spec;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("role", om.valueToTree(this.getRole()));
            data.set("routerId", om.valueToTree(this.getRouterId()));
            if (this.getAccessPointId() != null) {
                data.set("accessPointId", om.valueToTree(this.getAccessPointId()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getHealthCheckSourceIp() != null) {
                data.set("healthCheckSourceIp", om.valueToTree(this.getHealthCheckSourceIp()));
            }
            if (this.getHealthCheckTargetIp() != null) {
                data.set("healthCheckTargetIp", om.valueToTree(this.getHealthCheckTargetIp()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getOppositeAccessPointId() != null) {
                data.set("oppositeAccessPointId", om.valueToTree(this.getOppositeAccessPointId()));
            }
            if (this.getOppositeInterfaceId() != null) {
                data.set("oppositeInterfaceId", om.valueToTree(this.getOppositeInterfaceId()));
            }
            if (this.getOppositeInterfaceOwnerId() != null) {
                data.set("oppositeInterfaceOwnerId", om.valueToTree(this.getOppositeInterfaceOwnerId()));
            }
            if (this.getOppositeRegionId() != null) {
                data.set("oppositeRegionId", om.valueToTree(this.getOppositeRegionId()));
            }
            if (this.getOppositeRouterId() != null) {
                data.set("oppositeRouterId", om.valueToTree(this.getOppositeRouterId()));
            }
            if (this.getOppositeRouterType() != null) {
                data.set("oppositeRouterType", om.valueToTree(this.getOppositeRouterType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getRouterType() != null) {
                data.set("routerType", om.valueToTree(this.getRouterType()));
            }
            if (this.getSpec() != null) {
                data.set("spec", om.valueToTree(this.getSpec()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RouterInterfaceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RouterInterfaceProps.Jsii$Proxy that = (RouterInterfaceProps.Jsii$Proxy) o;

            if (!role.equals(that.role)) return false;
            if (!routerId.equals(that.routerId)) return false;
            if (this.accessPointId != null ? !this.accessPointId.equals(that.accessPointId) : that.accessPointId != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.healthCheckSourceIp != null ? !this.healthCheckSourceIp.equals(that.healthCheckSourceIp) : that.healthCheckSourceIp != null) return false;
            if (this.healthCheckTargetIp != null ? !this.healthCheckTargetIp.equals(that.healthCheckTargetIp) : that.healthCheckTargetIp != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.oppositeAccessPointId != null ? !this.oppositeAccessPointId.equals(that.oppositeAccessPointId) : that.oppositeAccessPointId != null) return false;
            if (this.oppositeInterfaceId != null ? !this.oppositeInterfaceId.equals(that.oppositeInterfaceId) : that.oppositeInterfaceId != null) return false;
            if (this.oppositeInterfaceOwnerId != null ? !this.oppositeInterfaceOwnerId.equals(that.oppositeInterfaceOwnerId) : that.oppositeInterfaceOwnerId != null) return false;
            if (this.oppositeRegionId != null ? !this.oppositeRegionId.equals(that.oppositeRegionId) : that.oppositeRegionId != null) return false;
            if (this.oppositeRouterId != null ? !this.oppositeRouterId.equals(that.oppositeRouterId) : that.oppositeRouterId != null) return false;
            if (this.oppositeRouterType != null ? !this.oppositeRouterType.equals(that.oppositeRouterType) : that.oppositeRouterType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.routerType != null ? !this.routerType.equals(that.routerType) : that.routerType != null) return false;
            return this.spec != null ? this.spec.equals(that.spec) : that.spec == null;
        }

        @Override
        public final int hashCode() {
            int result = this.role.hashCode();
            result = 31 * result + (this.routerId.hashCode());
            result = 31 * result + (this.accessPointId != null ? this.accessPointId.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.healthCheckSourceIp != null ? this.healthCheckSourceIp.hashCode() : 0);
            result = 31 * result + (this.healthCheckTargetIp != null ? this.healthCheckTargetIp.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.oppositeAccessPointId != null ? this.oppositeAccessPointId.hashCode() : 0);
            result = 31 * result + (this.oppositeInterfaceId != null ? this.oppositeInterfaceId.hashCode() : 0);
            result = 31 * result + (this.oppositeInterfaceOwnerId != null ? this.oppositeInterfaceOwnerId.hashCode() : 0);
            result = 31 * result + (this.oppositeRegionId != null ? this.oppositeRegionId.hashCode() : 0);
            result = 31 * result + (this.oppositeRouterId != null ? this.oppositeRouterId.hashCode() : 0);
            result = 31 * result + (this.oppositeRouterType != null ? this.oppositeRouterType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.routerType != null ? this.routerType.hashCode() : 0);
            result = 31 * result + (this.spec != null ? this.spec.hashCode() : 0);
            return result;
        }
    }
}
