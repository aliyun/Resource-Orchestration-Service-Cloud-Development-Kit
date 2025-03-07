package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::VPC::NatGateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.780Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.NatGateway")
public class NatGateway extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.datasource.INatGateway {

    protected NatGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NatGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public NatGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public NatGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AutoPay: Indicates whether automatic payment is enabled.
     * <p>
     * Valid values:
     * false: no
     * true: yes
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "attrAutoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BusinessStatus: The status of the NAT gateway.
     * <p>
     * Valid values:
     * Normal: normal
     * FinancialLocked: locked due to overdue payments
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBusinessStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrBusinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the NAT gateway was created.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeletionProtection: Indicates whether the deletion protection feature is enabled.
     * <p>
     * Valid values:
     * true: yes
     * false: no
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeletionProtection() {
        return software.amazon.jsii.Kernel.get(this, "attrDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the NAT gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EipBindMode: The mode in which the NAT gateway is associated with an elastic IP address (EIP).
     * <p>
     * Valid values:
     * MULTI_BINDED: multi-EIP-to-ENI mode* NAT: NAT mode, which is compatible with IPv4 addresses.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEipBindMode() {
        return software.amazon.jsii.Kernel.get(this, "attrEipBindMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpiredTime: The time when the NAT gateway expires.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ForwardTableIds: The ID of the Destination Network Address Translation (DNAT) table.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrForwardTableIds() {
        return software.amazon.jsii.Kernel.get(this, "attrForwardTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IcmpReplyEnabled: Indicates whether the ICMP non-retrieval feature is enabled.
     * <p>
     * Valid values:
     * true: yes
     * false: no
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIcmpReplyEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrIcmpReplyEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetChargeType: The metering method of the NAT gateway.
     * <p>
     * Valid values:
     * PayBySpec: pay-by-specification
     * PayByLcu: pay-by-CU
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetChargeType() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpLists: The list of elastic IP addresses (EIPs) that are associated with the Internet NAT gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpLists() {
        return software.amazon.jsii.Kernel.get(this, "attrIpLists", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NatGatewayId: The ID of the NAT gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrNatGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NatGatewayName: The name of the NAT gateway.
     * <p>
     * The name must be 1 to 128 characters in length, and cannot start with http:// or https://. If this parameter is not set, the system automatically assigns a name to the NAT gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayName() {
        return software.amazon.jsii.Kernel.get(this, "attrNatGatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NatGatewayPrivateInfo: The private network information about the enhanced Internet NAT gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatGatewayPrivateInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrNatGatewayPrivateInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NatType: The type of the NAT gateway.
     * <p>
     * The value is set to Enhanced (enhanced NAT gateway).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNatType() {
        return software.amazon.jsii.Kernel.get(this, "attrNatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkType: The type of NAT gateway.
     * <p>
     * Valid values:
     * internet: an Internet NAT gateway
     * intranet: a VPC NAT gateway
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: The billing method of the NAT gateway.
     * <p>
     * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityProtectionEnabled: Indicates whether the firewall feature is enabled.
     * <p>
     * Valid values:
     * false: no
     * true: yes
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityProtectionEnabled() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityProtectionEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SnatTableIds: The ID of the SNAT table of the NAT gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSnatTableIds() {
        return software.amazon.jsii.Kernel.get(this, "attrSnatTableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Spec: The size of the NAT gateway.
     * <p>
     * An empty value is returned for the parameter. If InternetChargeType is set to PayByLcu, an empty value is returned.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The ID of the VPC where the NAT gateway is deployed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.NatGateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.NatGateway> {
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
        private final com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.datasource.NatGatewayProps.Builder();
        }

        /**
         * Property natGatewayId: The ID of the NAT gateway.
         * <p>
         * @return {@code this}
         * @param natGatewayId Property natGatewayId: The ID of the NAT gateway. This parameter is required.
         */
        public Builder natGatewayId(final java.lang.String natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }
        /**
         * Property natGatewayId: The ID of the NAT gateway.
         * <p>
         * @return {@code this}
         * @param natGatewayId Property natGatewayId: The ID of the NAT gateway. This parameter is required.
         */
        public Builder natGatewayId(final com.aliyun.ros.cdk.core.IResolvable natGatewayId) {
            this.props.natGatewayId(natGatewayId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.NatGateway}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.NatGateway build() {
            return new com.aliyun.ros.cdk.vpc.datasource.NatGateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
