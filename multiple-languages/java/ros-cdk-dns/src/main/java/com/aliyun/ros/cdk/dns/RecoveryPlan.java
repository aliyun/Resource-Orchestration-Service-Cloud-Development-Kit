package com.aliyun.ros.cdk.dns;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DNS::RecoveryPlan</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.960Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.RecoveryPlan")
public class RecoveryPlan extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dns.IRecoveryPlan {

    protected RecoveryPlan(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RecoveryPlan(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RecoveryPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.RecoveryPlanProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RecoveryPlan(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.RecoveryPlanProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RecoveryPlanId: The ID of the recovery plan.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecoveryPlanId() {
        return software.amazon.jsii.Kernel.get(this, "attrRecoveryPlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.RecoveryPlanProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.RecoveryPlanProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.RecoveryPlan}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.RecoveryPlan> {
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
        private final com.aliyun.ros.cdk.dns.RecoveryPlanProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.RecoveryPlanProps.Builder();
        }

        /**
         * Property faultAddrPool: The fault address pool of the recovery plan.
         * <p>
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param faultAddrPool Property faultAddrPool: The fault address pool of the recovery plan. This parameter is required.
         */
        public Builder faultAddrPool(final com.aliyun.ros.cdk.core.IResolvable faultAddrPool) {
            this.props.faultAddrPool(faultAddrPool);
            return this;
        }
        /**
         * Property faultAddrPool: The fault address pool of the recovery plan.
         * <p>
         * The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param faultAddrPool Property faultAddrPool: The fault address pool of the recovery plan. This parameter is required.
         */
        public Builder faultAddrPool(final java.util.List<? extends java.lang.Object> faultAddrPool) {
            this.props.faultAddrPool(faultAddrPool);
            return this;
        }

        /**
         * Property name: The name of the recovery plan.
         * <p>
         * The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the recovery plan. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the recovery plan.
         * <p>
         * The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the recovery plan. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property lang: The language of the request.
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language of the request. This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props.lang(lang);
            return this;
        }
        /**
         * Property lang: The language of the request.
         * <p>
         * @return {@code this}
         * @param lang Property lang: The language of the request. This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props.lang(lang);
            return this;
        }

        /**
         * Property remark: The remark of the recovery plan.
         * <p>
         * The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remark of the recovery plan. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: The remark of the recovery plan.
         * <p>
         * The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remark of the recovery plan. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.RecoveryPlan}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.RecoveryPlan build() {
            return new com.aliyun.ros.cdk.dns.RecoveryPlan(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
