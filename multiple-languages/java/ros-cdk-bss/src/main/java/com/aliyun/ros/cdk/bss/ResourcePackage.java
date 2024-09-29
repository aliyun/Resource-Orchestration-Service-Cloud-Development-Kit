package com.aliyun.ros.cdk.bss;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::BSS::ResourcePackage</code>, which is used to create a resource plan.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:36.469Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bss.$Module.class, fqn = "@alicloud/ros-cdk-bss.ResourcePackage")
public class ResourcePackage extends com.aliyun.ros.cdk.core.Resource {

    protected ResourcePackage(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ResourcePackage(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ResourcePackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.ResourcePackageProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ResourcePackage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.ResourcePackageProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The ID of the specified instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The ID of the specified order.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.ResourcePackageProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bss.ResourcePackageProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bss.ResourcePackageProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bss.ResourcePackage}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bss.ResourcePackage> {
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
        private final com.aliyun.ros.cdk.bss.ResourcePackageProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bss.ResourcePackageProps.Builder();
        }

        /**
         * Property duration: The validity of the specified resource package.
         * <p>
         * The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The validity of the specified resource package. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: The validity of the specified resource package.
         * <p>
         * The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The validity of the specified resource package. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property packageType: The type of the specified resource package.
         * <p>
         * The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
         * <p>
         * @return {@code this}
         * @param packageType Property packageType: The type of the specified resource package. This parameter is required.
         */
        public Builder packageType(final java.lang.String packageType) {
            this.props.packageType(packageType);
            return this;
        }
        /**
         * Property packageType: The type of the specified resource package.
         * <p>
         * The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
         * <p>
         * @return {@code this}
         * @param packageType Property packageType: The type of the specified resource package. This parameter is required.
         */
        public Builder packageType(final com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.props.packageType(packageType);
            return this;
        }

        /**
         * Property productCode: The code of the specified product.
         * <p>
         * The value is the same as the value of ProductType returned by QueryProductList.
         * <p>
         * @return {@code this}
         * @param productCode Property productCode: The code of the specified product. This parameter is required.
         */
        public Builder productCode(final java.lang.String productCode) {
            this.props.productCode(productCode);
            return this;
        }
        /**
         * Property productCode: The code of the specified product.
         * <p>
         * The value is the same as the value of ProductType returned by QueryProductList.
         * <p>
         * @return {@code this}
         * @param productCode Property productCode: The code of the specified product. This parameter is required.
         */
        public Builder productCode(final com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.props.productCode(productCode);
            return this;
        }

        /**
         * Property specification: The size of the specified resource package.
         * <p>
         * The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
         * <p>
         * @return {@code this}
         * @param specification Property specification: The size of the specified resource package. This parameter is required.
         */
        public Builder specification(final java.lang.String specification) {
            this.props.specification(specification);
            return this;
        }
        /**
         * Property specification: The size of the specified resource package.
         * <p>
         * The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
         * <p>
         * @return {@code this}
         * @param specification Property specification: The size of the specified resource package. This parameter is required.
         */
        public Builder specification(final com.aliyun.ros.cdk.core.IResolvable specification) {
            this.props.specification(specification);
            return this;
        }

        /**
         * Property effectiveDate: The effective date of the specified resource package.
         * <p>
         * The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
         * <p>
         * @return {@code this}
         * @param effectiveDate Property effectiveDate: The effective date of the specified resource package. This parameter is required.
         */
        public Builder effectiveDate(final java.lang.String effectiveDate) {
            this.props.effectiveDate(effectiveDate);
            return this;
        }
        /**
         * Property effectiveDate: The effective date of the specified resource package.
         * <p>
         * The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
         * <p>
         * @return {@code this}
         * @param effectiveDate Property effectiveDate: The effective date of the specified resource package. This parameter is required.
         */
        public Builder effectiveDate(final com.aliyun.ros.cdk.core.IResolvable effectiveDate) {
            this.props.effectiveDate(effectiveDate);
            return this;
        }

        /**
         * Property pricingCycle: The validity of the specified resource package.
         * <p>
         * Default value: Month. Valid values: Month, Year
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The validity of the specified resource package. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: The validity of the specified resource package.
         * <p>
         * Default value: Month. Valid values: Month, Year
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The validity of the specified resource package. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bss.ResourcePackage}.
         */
        @Override
        public com.aliyun.ros.cdk.bss.ResourcePackage build() {
            return new com.aliyun.ros.cdk.bss.ResourcePackage(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
