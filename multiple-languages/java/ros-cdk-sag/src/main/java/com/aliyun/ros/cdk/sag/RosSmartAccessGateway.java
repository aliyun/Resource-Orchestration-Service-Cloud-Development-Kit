package com.aliyun.ros.cdk.sag;

/**
 * A ROS template type:  <code>ALIYUN::SAG::SmartAccessGateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.170Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosSmartAccessGateway")
public class RosSmartAccessGateway extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSmartAccessGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSmartAccessGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sag.RosSmartAccessGateway.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::SAG::SmartAccessGateway</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSmartAccessGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sag.RosSmartAccessGatewayProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSmartAgId() {
        return software.amazon.jsii.Kernel.get(this, "attrSmartAgId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBuyerMessage() {
        return software.amazon.jsii.Kernel.get(this, "buyerMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBuyerMessage(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "buyerMessage", java.util.Objects.requireNonNull(value, "buyerMessage is required"));
    }

    /**
     */
    public void setBuyerMessage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "buyerMessage", java.util.Objects.requireNonNull(value, "buyerMessage is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChargeType() {
        return software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", java.util.Objects.requireNonNull(value, "chargeType is required"));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", java.util.Objects.requireNonNull(value, "chargeType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHardWareSpec() {
        return software.amazon.jsii.Kernel.get(this, "hardWareSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHardWareSpec(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hardWareSpec", java.util.Objects.requireNonNull(value, "hardWareSpec is required"));
    }

    /**
     */
    public void setHardWareSpec(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hardWareSpec", java.util.Objects.requireNonNull(value, "hardWareSpec is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHaType() {
        return software.amazon.jsii.Kernel.get(this, "haType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHaType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "haType", java.util.Objects.requireNonNull(value, "haType is required"));
    }

    /**
     */
    public void setHaType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "haType", java.util.Objects.requireNonNull(value, "haType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMaxBandWidth() {
        return software.amazon.jsii.Kernel.get(this, "maxBandWidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxBandWidth(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxBandWidth", java.util.Objects.requireNonNull(value, "maxBandWidth is required"));
    }

    /**
     */
    public void setMaxBandWidth(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxBandWidth", java.util.Objects.requireNonNull(value, "maxBandWidth is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", java.util.Objects.requireNonNull(value, "period is required"));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", java.util.Objects.requireNonNull(value, "period is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverAddress() {
        return software.amazon.jsii.Kernel.get(this, "receiverAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverAddress(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverAddress", java.util.Objects.requireNonNull(value, "receiverAddress is required"));
    }

    /**
     */
    public void setReceiverAddress(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverAddress", java.util.Objects.requireNonNull(value, "receiverAddress is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverCity() {
        return software.amazon.jsii.Kernel.get(this, "receiverCity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverCity(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverCity", java.util.Objects.requireNonNull(value, "receiverCity is required"));
    }

    /**
     */
    public void setReceiverCity(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverCity", java.util.Objects.requireNonNull(value, "receiverCity is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverCountry() {
        return software.amazon.jsii.Kernel.get(this, "receiverCountry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverCountry(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverCountry", java.util.Objects.requireNonNull(value, "receiverCountry is required"));
    }

    /**
     */
    public void setReceiverCountry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverCountry", java.util.Objects.requireNonNull(value, "receiverCountry is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverDistrict() {
        return software.amazon.jsii.Kernel.get(this, "receiverDistrict", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverDistrict(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverDistrict", java.util.Objects.requireNonNull(value, "receiverDistrict is required"));
    }

    /**
     */
    public void setReceiverDistrict(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverDistrict", java.util.Objects.requireNonNull(value, "receiverDistrict is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverEmail() {
        return software.amazon.jsii.Kernel.get(this, "receiverEmail", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverEmail(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverEmail", java.util.Objects.requireNonNull(value, "receiverEmail is required"));
    }

    /**
     */
    public void setReceiverEmail(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverEmail", java.util.Objects.requireNonNull(value, "receiverEmail is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverMobile() {
        return software.amazon.jsii.Kernel.get(this, "receiverMobile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverMobile(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverMobile", java.util.Objects.requireNonNull(value, "receiverMobile is required"));
    }

    /**
     */
    public void setReceiverMobile(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverMobile", java.util.Objects.requireNonNull(value, "receiverMobile is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverName() {
        return software.amazon.jsii.Kernel.get(this, "receiverName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverName", java.util.Objects.requireNonNull(value, "receiverName is required"));
    }

    /**
     */
    public void setReceiverName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverName", java.util.Objects.requireNonNull(value, "receiverName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverState() {
        return software.amazon.jsii.Kernel.get(this, "receiverState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverState(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverState", java.util.Objects.requireNonNull(value, "receiverState is required"));
    }

    /**
     */
    public void setReceiverState(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverState", java.util.Objects.requireNonNull(value, "receiverState is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverTown() {
        return software.amazon.jsii.Kernel.get(this, "receiverTown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverTown(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverTown", java.util.Objects.requireNonNull(value, "receiverTown is required"));
    }

    /**
     */
    public void setReceiverTown(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverTown", java.util.Objects.requireNonNull(value, "receiverTown is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReceiverZip() {
        return software.amazon.jsii.Kernel.get(this, "receiverZip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverZip(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverZip", java.util.Objects.requireNonNull(value, "receiverZip is required"));
    }

    /**
     */
    public void setReceiverZip(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverZip", java.util.Objects.requireNonNull(value, "receiverZip is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getActivate() {
        return software.amazon.jsii.Kernel.get(this, "activate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setActivate(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "activate", value);
    }

    /**
     */
    public void setActivate(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "activate", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlreadyHaveSag() {
        return software.amazon.jsii.Kernel.get(this, "alreadyHaveSag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlreadyHaveSag(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "alreadyHaveSag", value);
    }

    /**
     */
    public void setAlreadyHaveSag(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alreadyHaveSag", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCidrBlock(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cidrBlock", value);
    }

    /**
     */
    public void setCidrBlock(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cidrBlock", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReceiverPhone() {
        return software.amazon.jsii.Kernel.get(this, "receiverPhone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReceiverPhone(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "receiverPhone", value);
    }

    /**
     */
    public void setReceiverPhone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "receiverPhone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRoutingStrategy() {
        return software.amazon.jsii.Kernel.get(this, "routingStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRoutingStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "routingStrategy", value);
    }

    /**
     */
    public void setRoutingStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routingStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityLockThreshold() {
        return software.amazon.jsii.Kernel.get(this, "securityLockThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityLockThreshold(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "securityLockThreshold", value);
    }

    /**
     */
    public void setSecurityLockThreshold(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityLockThreshold", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sag.RosSmartAccessGateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sag.RosSmartAccessGateway> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sag.RosSmartAccessGatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sag.RosSmartAccessGatewayProps.Builder();
        }

        /**
         * @return {@code this}
         * @param buyerMessage This parameter is required.
         */
        public Builder buyerMessage(final java.lang.String buyerMessage) {
            this.props.buyerMessage(buyerMessage);
            return this;
        }
        /**
         * @return {@code this}
         * @param buyerMessage This parameter is required.
         */
        public Builder buyerMessage(final com.aliyun.ros.cdk.core.IResolvable buyerMessage) {
            this.props.buyerMessage(buyerMessage);
            return this;
        }

        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param hardWareSpec This parameter is required.
         */
        public Builder hardWareSpec(final java.lang.String hardWareSpec) {
            this.props.hardWareSpec(hardWareSpec);
            return this;
        }
        /**
         * @return {@code this}
         * @param hardWareSpec This parameter is required.
         */
        public Builder hardWareSpec(final com.aliyun.ros.cdk.core.IResolvable hardWareSpec) {
            this.props.hardWareSpec(hardWareSpec);
            return this;
        }

        /**
         * @return {@code this}
         * @param haType This parameter is required.
         */
        public Builder haType(final java.lang.String haType) {
            this.props.haType(haType);
            return this;
        }
        /**
         * @return {@code this}
         * @param haType This parameter is required.
         */
        public Builder haType(final com.aliyun.ros.cdk.core.IResolvable haType) {
            this.props.haType(haType);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxBandWidth This parameter is required.
         */
        public Builder maxBandWidth(final java.lang.Number maxBandWidth) {
            this.props.maxBandWidth(maxBandWidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxBandWidth This parameter is required.
         */
        public Builder maxBandWidth(final com.aliyun.ros.cdk.core.IResolvable maxBandWidth) {
            this.props.maxBandWidth(maxBandWidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverAddress This parameter is required.
         */
        public Builder receiverAddress(final java.lang.String receiverAddress) {
            this.props.receiverAddress(receiverAddress);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverAddress This parameter is required.
         */
        public Builder receiverAddress(final com.aliyun.ros.cdk.core.IResolvable receiverAddress) {
            this.props.receiverAddress(receiverAddress);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverCity This parameter is required.
         */
        public Builder receiverCity(final java.lang.String receiverCity) {
            this.props.receiverCity(receiverCity);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverCity This parameter is required.
         */
        public Builder receiverCity(final com.aliyun.ros.cdk.core.IResolvable receiverCity) {
            this.props.receiverCity(receiverCity);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverCountry This parameter is required.
         */
        public Builder receiverCountry(final java.lang.String receiverCountry) {
            this.props.receiverCountry(receiverCountry);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverCountry This parameter is required.
         */
        public Builder receiverCountry(final com.aliyun.ros.cdk.core.IResolvable receiverCountry) {
            this.props.receiverCountry(receiverCountry);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverDistrict This parameter is required.
         */
        public Builder receiverDistrict(final java.lang.String receiverDistrict) {
            this.props.receiverDistrict(receiverDistrict);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverDistrict This parameter is required.
         */
        public Builder receiverDistrict(final com.aliyun.ros.cdk.core.IResolvable receiverDistrict) {
            this.props.receiverDistrict(receiverDistrict);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverEmail This parameter is required.
         */
        public Builder receiverEmail(final java.lang.String receiverEmail) {
            this.props.receiverEmail(receiverEmail);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverEmail This parameter is required.
         */
        public Builder receiverEmail(final com.aliyun.ros.cdk.core.IResolvable receiverEmail) {
            this.props.receiverEmail(receiverEmail);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverMobile This parameter is required.
         */
        public Builder receiverMobile(final java.lang.String receiverMobile) {
            this.props.receiverMobile(receiverMobile);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverMobile This parameter is required.
         */
        public Builder receiverMobile(final com.aliyun.ros.cdk.core.IResolvable receiverMobile) {
            this.props.receiverMobile(receiverMobile);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverName This parameter is required.
         */
        public Builder receiverName(final java.lang.String receiverName) {
            this.props.receiverName(receiverName);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverName This parameter is required.
         */
        public Builder receiverName(final com.aliyun.ros.cdk.core.IResolvable receiverName) {
            this.props.receiverName(receiverName);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverState This parameter is required.
         */
        public Builder receiverState(final java.lang.String receiverState) {
            this.props.receiverState(receiverState);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverState This parameter is required.
         */
        public Builder receiverState(final com.aliyun.ros.cdk.core.IResolvable receiverState) {
            this.props.receiverState(receiverState);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverTown This parameter is required.
         */
        public Builder receiverTown(final java.lang.String receiverTown) {
            this.props.receiverTown(receiverTown);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverTown This parameter is required.
         */
        public Builder receiverTown(final com.aliyun.ros.cdk.core.IResolvable receiverTown) {
            this.props.receiverTown(receiverTown);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverZip This parameter is required.
         */
        public Builder receiverZip(final java.lang.String receiverZip) {
            this.props.receiverZip(receiverZip);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverZip This parameter is required.
         */
        public Builder receiverZip(final com.aliyun.ros.cdk.core.IResolvable receiverZip) {
            this.props.receiverZip(receiverZip);
            return this;
        }

        /**
         * @return {@code this}
         * @param activate This parameter is required.
         */
        public Builder activate(final java.lang.Boolean activate) {
            this.props.activate(activate);
            return this;
        }
        /**
         * @return {@code this}
         * @param activate This parameter is required.
         */
        public Builder activate(final com.aliyun.ros.cdk.core.IResolvable activate) {
            this.props.activate(activate);
            return this;
        }

        /**
         * @return {@code this}
         * @param alreadyHaveSag This parameter is required.
         */
        public Builder alreadyHaveSag(final java.lang.Boolean alreadyHaveSag) {
            this.props.alreadyHaveSag(alreadyHaveSag);
            return this;
        }
        /**
         * @return {@code this}
         * @param alreadyHaveSag This parameter is required.
         */
        public Builder alreadyHaveSag(final com.aliyun.ros.cdk.core.IResolvable alreadyHaveSag) {
            this.props.alreadyHaveSag(alreadyHaveSag);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * @return {@code this}
         * @param cidrBlock This parameter is required.
         */
        public Builder cidrBlock(final java.lang.String cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }
        /**
         * @return {@code this}
         * @param cidrBlock This parameter is required.
         */
        public Builder cidrBlock(final com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param receiverPhone This parameter is required.
         */
        public Builder receiverPhone(final java.lang.String receiverPhone) {
            this.props.receiverPhone(receiverPhone);
            return this;
        }
        /**
         * @return {@code this}
         * @param receiverPhone This parameter is required.
         */
        public Builder receiverPhone(final com.aliyun.ros.cdk.core.IResolvable receiverPhone) {
            this.props.receiverPhone(receiverPhone);
            return this;
        }

        /**
         * @return {@code this}
         * @param routingStrategy This parameter is required.
         */
        public Builder routingStrategy(final java.lang.String routingStrategy) {
            this.props.routingStrategy(routingStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param routingStrategy This parameter is required.
         */
        public Builder routingStrategy(final com.aliyun.ros.cdk.core.IResolvable routingStrategy) {
            this.props.routingStrategy(routingStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityLockThreshold This parameter is required.
         */
        public Builder securityLockThreshold(final java.lang.Number securityLockThreshold) {
            this.props.securityLockThreshold(securityLockThreshold);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityLockThreshold This parameter is required.
         */
        public Builder securityLockThreshold(final com.aliyun.ros.cdk.core.IResolvable securityLockThreshold) {
            this.props.securityLockThreshold(securityLockThreshold);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sag.RosSmartAccessGateway}.
         */
        @Override
        public com.aliyun.ros.cdk.sag.RosSmartAccessGateway build() {
            return new com.aliyun.ros.cdk.sag.RosSmartAccessGateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
