package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::Gateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:04.218Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.Gateway")
public class Gateway extends com.aliyun.ros.cdk.core.Resource {

    protected Gateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Gateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Gateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.GatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Gateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.GatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation timestamp.
     * <p>
     * Unit: milliseconds.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Environments: The list of environments associated with the Gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnvironments() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironments", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ExpireTime: Package year and package month expiration timestamp.
     * <p>
     * Unit: milliseconds.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExpireTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GatewayName: The name of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayName() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancers() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancers", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: The payment type of the gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SecurityGroup: The Security Group of the Gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroup() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroup", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Spec: Gateway instance specifications.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute UpdateTime: Update the timestamp.
     * <p>
     * Unit: milliseconds.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Version: The gateway version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Vpc: The VPC associated with the Gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpc() {
        return software.amazon.jsii.Kernel.get(this, "attrVpc", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitch() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitch", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Zones: The List of zones associated with the Gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZones() {
        return software.amazon.jsii.Kernel.get(this, "attrZones", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.GatewayProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.GatewayProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.GatewayProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.Gateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.Gateway> {
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
        private final com.aliyun.ros.cdk.apig.GatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.GatewayProps.Builder();
        }

        /**
         * Property paymentType: The payment type of the gateway.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>PayAsYouGo</li>
         * <li>Subscription</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the gateway. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The payment type of the gateway.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>PayAsYouGo</li>
         * <li>Subscription</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the gateway. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property spec: Gateway instance specifications.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Gateway instance specifications. This parameter is required.
         */
        public Builder spec(final java.lang.String spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * Property spec: Gateway instance specifications.
         * <p>
         * @return {@code this}
         * @param spec Property spec: Gateway instance specifications. This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * Property zoneConfig: Availability Zone Configuration.
         * <p>
         * @return {@code this}
         * @param zoneConfig Property zoneConfig: Availability Zone Configuration. This parameter is required.
         */
        public Builder zoneConfig(final com.aliyun.ros.cdk.core.IResolvable zoneConfig) {
            this.props.zoneConfig(zoneConfig);
            return this;
        }
        /**
         * Property zoneConfig: Availability Zone Configuration.
         * <p>
         * @return {@code this}
         * @param zoneConfig Property zoneConfig: Availability Zone Configuration. This parameter is required.
         */
        public Builder zoneConfig(final com.aliyun.ros.cdk.apig.RosGateway.ZoneConfigProperty zoneConfig) {
            this.props.zoneConfig(zoneConfig);
            return this;
        }

        /**
         * Property gatewayName: The name of the Gateway.
         * <p>
         * @return {@code this}
         * @param gatewayName Property gatewayName: The name of the Gateway. This parameter is required.
         */
        public Builder gatewayName(final java.lang.String gatewayName) {
            this.props.gatewayName(gatewayName);
            return this;
        }
        /**
         * Property gatewayName: The name of the Gateway.
         * <p>
         * @return {@code this}
         * @param gatewayName Property gatewayName: The name of the Gateway. This parameter is required.
         */
        public Builder gatewayName(final com.aliyun.ros.cdk.core.IResolvable gatewayName) {
            this.props.gatewayName(gatewayName);
            return this;
        }

        /**
         * Property logConfig: Log Configuration.
         * <p>
         * @return {@code this}
         * @param logConfig Property logConfig: Log Configuration. This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.core.IResolvable logConfig) {
            this.props.logConfig(logConfig);
            return this;
        }
        /**
         * Property logConfig: Log Configuration.
         * <p>
         * @return {@code this}
         * @param logConfig Property logConfig: Log Configuration. This parameter is required.
         */
        public Builder logConfig(final com.aliyun.ros.cdk.apig.RosGateway.LogConfigProperty logConfig) {
            this.props.logConfig(logConfig);
            return this;
        }

        /**
         * Property networkAccessConfig: Network Access Configuration.
         * <p>
         * @return {@code this}
         * @param networkAccessConfig Property networkAccessConfig: Network Access Configuration. This parameter is required.
         */
        public Builder networkAccessConfig(final com.aliyun.ros.cdk.core.IResolvable networkAccessConfig) {
            this.props.networkAccessConfig(networkAccessConfig);
            return this;
        }
        /**
         * Property networkAccessConfig: Network Access Configuration.
         * <p>
         * @return {@code this}
         * @param networkAccessConfig Property networkAccessConfig: Network Access Configuration. This parameter is required.
         */
        public Builder networkAccessConfig(final com.aliyun.ros.cdk.apig.RosGateway.NetworkAccessConfigProperty networkAccessConfig) {
            this.props.networkAccessConfig(networkAccessConfig);
            return this;
        }

        /**
         * Property vpc: The VPC associated with the Gateway.
         * <p>
         * @return {@code this}
         * @param vpc Property vpc: The VPC associated with the Gateway. This parameter is required.
         */
        public Builder vpc(final com.aliyun.ros.cdk.core.IResolvable vpc) {
            this.props.vpc(vpc);
            return this;
        }
        /**
         * Property vpc: The VPC associated with the Gateway.
         * <p>
         * @return {@code this}
         * @param vpc Property vpc: The VPC associated with the Gateway. This parameter is required.
         */
        public Builder vpc(final com.aliyun.ros.cdk.apig.RosGateway.VpcProperty vpc) {
            this.props.vpc(vpc);
            return this;
        }

        /**
         * Property vSwitch: The virtual switch associated with the Gateway.
         * <p>
         * @return {@code this}
         * @param vSwitch Property vSwitch: The virtual switch associated with the Gateway. This parameter is required.
         */
        public Builder vSwitch(final com.aliyun.ros.cdk.core.IResolvable vSwitch) {
            this.props.vSwitch(vSwitch);
            return this;
        }
        /**
         * Property vSwitch: The virtual switch associated with the Gateway.
         * <p>
         * @return {@code this}
         * @param vSwitch Property vSwitch: The virtual switch associated with the Gateway. This parameter is required.
         */
        public Builder vSwitch(final com.aliyun.ros.cdk.apig.RosGateway.VSwitchProperty vSwitch) {
            this.props.vSwitch(vSwitch);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.Gateway}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.Gateway build() {
            return new com.aliyun.ros.cdk.apig.Gateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
