package com.aliyun.ros.cdk.bss;

/**
 * A ROS template type:  `ALIYUN::BSS::ResourcePackage`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:23.754Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bss.$Module.class, fqn = "@alicloud/ros-cdk-bss.RosResourcePackage")
public class RosResourcePackage extends com.aliyun.ros.cdk.core.RosResource {

    protected RosResourcePackage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosResourcePackage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.bss.RosResourcePackage.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::BSS::ResourcePackage`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosResourcePackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.RosResourcePackageProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDuration() {
        return software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDuration(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "duration", java.util.Objects.requireNonNull(value, "duration is required"));
    }

    /**
     */
    public void setDuration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "duration", java.util.Objects.requireNonNull(value, "duration is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPackageType() {
        return software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPackageType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "packageType", java.util.Objects.requireNonNull(value, "packageType is required"));
    }

    /**
     */
    public void setPackageType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "packageType", java.util.Objects.requireNonNull(value, "packageType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProductCode() {
        return software.amazon.jsii.Kernel.get(this, "productCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProductCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "productCode", java.util.Objects.requireNonNull(value, "productCode is required"));
    }

    /**
     */
    public void setProductCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "productCode", java.util.Objects.requireNonNull(value, "productCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSpecification() {
        return software.amazon.jsii.Kernel.get(this, "specification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpecification(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "specification", java.util.Objects.requireNonNull(value, "specification is required"));
    }

    /**
     */
    public void setSpecification(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "specification", java.util.Objects.requireNonNull(value, "specification is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEffectiveDate() {
        return software.amazon.jsii.Kernel.get(this, "effectiveDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEffectiveDate(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "effectiveDate", value);
    }

    /**
     */
    public void setEffectiveDate(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "effectiveDate", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPricingCycle(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pricingCycle", value);
    }

    /**
     */
    public void setPricingCycle(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pricingCycle", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bss.RosResourcePackage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bss.RosResourcePackage> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.bss.RosResourcePackageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bss.RosResourcePackageProps.Builder();
        }

        /**
         * @return {@code this}
         * @param duration This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * @return {@code this}
         * @param duration This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * @return {@code this}
         * @param packageType This parameter is required.
         */
        public Builder packageType(final java.lang.String packageType) {
            this.props.packageType(packageType);
            return this;
        }
        /**
         * @return {@code this}
         * @param packageType This parameter is required.
         */
        public Builder packageType(final com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.props.packageType(packageType);
            return this;
        }

        /**
         * @return {@code this}
         * @param productCode This parameter is required.
         */
        public Builder productCode(final java.lang.String productCode) {
            this.props.productCode(productCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param productCode This parameter is required.
         */
        public Builder productCode(final com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.props.productCode(productCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param specification This parameter is required.
         */
        public Builder specification(final java.lang.String specification) {
            this.props.specification(specification);
            return this;
        }
        /**
         * @return {@code this}
         * @param specification This parameter is required.
         */
        public Builder specification(final com.aliyun.ros.cdk.core.IResolvable specification) {
            this.props.specification(specification);
            return this;
        }

        /**
         * @return {@code this}
         * @param effectiveDate This parameter is required.
         */
        public Builder effectiveDate(final java.lang.String effectiveDate) {
            this.props.effectiveDate(effectiveDate);
            return this;
        }
        /**
         * @return {@code this}
         * @param effectiveDate This parameter is required.
         */
        public Builder effectiveDate(final com.aliyun.ros.cdk.core.IResolvable effectiveDate) {
            this.props.effectiveDate(effectiveDate);
            return this;
        }

        /**
         * @return {@code this}
         * @param pricingCycle This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * @return {@code this}
         * @param pricingCycle This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.bss.RosResourcePackage}.
         */
        @Override
        public com.aliyun.ros.cdk.bss.RosResourcePackage build() {
            return new com.aliyun.ros.cdk.bss.RosResourcePackage(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
