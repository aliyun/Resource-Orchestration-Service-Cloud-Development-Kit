package com.aliyun.ros.cdk.hbr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::HBR::CrossAccount</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:27.259Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosCrossAccount")
public class RosCrossAccount extends com.aliyun.ros.cdk.core.RosResource {

    protected RosCrossAccount(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCrossAccount(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.hbr.RosCrossAccount.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosCrossAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.RosCrossAccountProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlias() {
        return software.amazon.jsii.Kernel.get(this, "alias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlias(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "alias", value);
    }

    /**
     */
    public void setAlias(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alias", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountRoleName() {
        return software.amazon.jsii.Kernel.get(this, "crossAccountRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossAccountRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountRoleName", value);
    }

    /**
     */
    public void setCrossAccountRoleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountType() {
        return software.amazon.jsii.Kernel.get(this, "crossAccountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossAccountType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountType", value);
    }

    /**
     */
    public void setCrossAccountType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCrossAccountUserId() {
        return software.amazon.jsii.Kernel.get(this, "crossAccountUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCrossAccountUserId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountUserId", value);
    }

    /**
     */
    public void setCrossAccountUserId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "crossAccountUserId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.RosCrossAccount}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.RosCrossAccount> {
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
        private final com.aliyun.ros.cdk.hbr.RosCrossAccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.RosCrossAccountProps.Builder();
        }

        /**
         * @return {@code this}
         * @param alias This parameter is required.
         */
        public Builder alias(final java.lang.String alias) {
            this.props.alias(alias);
            return this;
        }
        /**
         * @return {@code this}
         * @param alias This parameter is required.
         */
        public Builder alias(final com.aliyun.ros.cdk.core.IResolvable alias) {
            this.props.alias(alias);
            return this;
        }

        /**
         * @return {@code this}
         * @param crossAccountRoleName This parameter is required.
         */
        public Builder crossAccountRoleName(final java.lang.String crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossAccountRoleName This parameter is required.
         */
        public Builder crossAccountRoleName(final com.aliyun.ros.cdk.core.IResolvable crossAccountRoleName) {
            this.props.crossAccountRoleName(crossAccountRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param crossAccountType This parameter is required.
         */
        public Builder crossAccountType(final java.lang.String crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossAccountType This parameter is required.
         */
        public Builder crossAccountType(final com.aliyun.ros.cdk.core.IResolvable crossAccountType) {
            this.props.crossAccountType(crossAccountType);
            return this;
        }

        /**
         * @return {@code this}
         * @param crossAccountUserId This parameter is required.
         */
        public Builder crossAccountUserId(final java.lang.Number crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }
        /**
         * @return {@code this}
         * @param crossAccountUserId This parameter is required.
         */
        public Builder crossAccountUserId(final com.aliyun.ros.cdk.core.IResolvable crossAccountUserId) {
            this.props.crossAccountUserId(crossAccountUserId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.RosCrossAccount}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.RosCrossAccount build() {
            return new com.aliyun.ros.cdk.hbr.RosCrossAccount(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
