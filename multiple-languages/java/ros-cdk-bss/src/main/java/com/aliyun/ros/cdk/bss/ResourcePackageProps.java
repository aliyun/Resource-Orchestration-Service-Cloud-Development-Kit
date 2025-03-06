package com.aliyun.ros.cdk.bss;

/**
 * Properties for defining a <code>ResourcePackage</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-resourcepackage
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.185Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bss.$Module.class, fqn = "@alicloud/ros-cdk-bss.ResourcePackageProps")
@software.amazon.jsii.Jsii.Proxy(ResourcePackageProps.Jsii$Proxy.class)
public interface ResourcePackageProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property duration: The validity of the specified resource package.
     * <p>
     * The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDuration();

    /**
     * Property packageType: The type of the specified resource package.
     * <p>
     * The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPackageType();

    /**
     * Property productCode: The code of the specified product.
     * <p>
     * The value is the same as the value of ProductType returned by QueryProductList.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductCode();

    /**
     * Property specification: The size of the specified resource package.
     * <p>
     * The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSpecification();

    /**
     * Property autoRenew: Whether to automatically renew the resource package.
     * <p>
     * The value is true or false. Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: Duration of resource packs renewals.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>When AutoRenewPeriodUnit is Year: 1, 2, 3.</li>
     * <li>When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
     * Default is 1.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property autoRenewPeriodUnit: Unit of resource pack renewals.
     * <p>
     * Valid values: Month, Year. Default is Month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriodUnit() {
        return null;
    }

    /**
     * Property effectiveDate: The effective date of the specified resource package.
     * <p>
     * The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEffectiveDate() {
        return null;
    }

    /**
     * Property pricingCycle: The validity of the specified resource package.
     * <p>
     * Default value: Month. Valid values: Month, Year
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResourcePackageProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourcePackageProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourcePackageProps> {
        java.lang.Object duration;
        java.lang.Object packageType;
        java.lang.Object productCode;
        java.lang.Object specification;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object autoRenewPeriodUnit;
        java.lang.Object effectiveDate;
        java.lang.Object pricingCycle;

        /**
         * Sets the value of {@link ResourcePackageProps#getDuration}
         * @param duration Property duration: The validity of the specified resource package. This parameter is required.
         *                 The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getDuration}
         * @param duration Property duration: The validity of the specified resource package. This parameter is required.
         *                 The value is the same as the Value of AvailableDuration returned by DescribeResourcePackageProduct.
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getPackageType}
         * @param packageType Property packageType: The type of the specified resource package. This parameter is required.
         *                    The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
         * @return {@code this}
         */
        public Builder packageType(java.lang.String packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getPackageType}
         * @param packageType Property packageType: The type of the specified resource package. This parameter is required.
         *                    The value is the same as the value of the Code value of the ResourcePackage object returned by DescribeResourcePackageProduct.
         * @return {@code this}
         */
        public Builder packageType(com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getProductCode}
         * @param productCode Property productCode: The code of the specified product. This parameter is required.
         *                    The value is the same as the value of ProductType returned by QueryProductList.
         * @return {@code this}
         */
        public Builder productCode(java.lang.String productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getProductCode}
         * @param productCode Property productCode: The code of the specified product. This parameter is required.
         *                    The value is the same as the value of ProductType returned by QueryProductList.
         * @return {@code this}
         */
        public Builder productCode(com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getSpecification}
         * @param specification Property specification: The size of the specified resource package. This parameter is required.
         *                      The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
         * @return {@code this}
         */
        public Builder specification(java.lang.String specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getSpecification}
         * @param specification Property specification: The size of the specified resource package. This parameter is required.
         *                      The value is the same as the Value of Specification returned by DescribeResourcePackageProduct.
         * @return {@code this}
         */
        public Builder specification(com.aliyun.ros.cdk.core.IResolvable specification) {
            this.specification = specification;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to automatically renew the resource package.
         *                  The value is true or false. Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether to automatically renew the resource package.
         *                  The value is true or false. Default value: false.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Duration of resource packs renewals.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>When AutoRenewPeriodUnit is Year: 1, 2, 3.</li>
         *                        <li>When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
         *                        Default is 1.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Duration of resource packs renewals.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>When AutoRenewPeriodUnit is Year: 1, 2, 3.</li>
         *                        <li>When AutoRenewPeriodUnit is Month: 1, 2, 3, 6.
         *                        Default is 1.</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getAutoRenewPeriodUnit}
         * @param autoRenewPeriodUnit Property autoRenewPeriodUnit: Unit of resource pack renewals.
         *                            Valid values: Month, Year. Default is Month.
         * @return {@code this}
         */
        public Builder autoRenewPeriodUnit(java.lang.String autoRenewPeriodUnit) {
            this.autoRenewPeriodUnit = autoRenewPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getAutoRenewPeriodUnit}
         * @param autoRenewPeriodUnit Property autoRenewPeriodUnit: Unit of resource pack renewals.
         *                            Valid values: Month, Year. Default is Month.
         * @return {@code this}
         */
        public Builder autoRenewPeriodUnit(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriodUnit) {
            this.autoRenewPeriodUnit = autoRenewPeriodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getEffectiveDate}
         * @param effectiveDate Property effectiveDate: The effective date of the specified resource package.
         *                      The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
         * @return {@code this}
         */
        public Builder effectiveDate(java.lang.String effectiveDate) {
            this.effectiveDate = effectiveDate;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getEffectiveDate}
         * @param effectiveDate Property effectiveDate: The effective date of the specified resource package.
         *                      The resource package will take effect immediately if the effective date is unspecified. The date format follows the ISO8601 standard and uses UTC time. Format: yyyy-MM-ddTHH:mm:ssZ
         * @return {@code this}
         */
        public Builder effectiveDate(com.aliyun.ros.cdk.core.IResolvable effectiveDate) {
            this.effectiveDate = effectiveDate;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The validity of the specified resource package.
         *                     Default value: Month. Valid values: Month, Year
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link ResourcePackageProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: The validity of the specified resource package.
         *                     Default value: Month. Valid values: Month, Year
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourcePackageProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourcePackageProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourcePackageProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourcePackageProps {
        private final java.lang.Object duration;
        private final java.lang.Object packageType;
        private final java.lang.Object productCode;
        private final java.lang.Object specification;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object autoRenewPeriodUnit;
        private final java.lang.Object effectiveDate;
        private final java.lang.Object pricingCycle;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageType = software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productCode = software.amazon.jsii.Kernel.get(this, "productCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.specification = software.amazon.jsii.Kernel.get(this, "specification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriodUnit = software.amazon.jsii.Kernel.get(this, "autoRenewPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectiveDate = software.amazon.jsii.Kernel.get(this, "effectiveDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.duration = java.util.Objects.requireNonNull(builder.duration, "duration is required");
            this.packageType = java.util.Objects.requireNonNull(builder.packageType, "packageType is required");
            this.productCode = java.util.Objects.requireNonNull(builder.productCode, "productCode is required");
            this.specification = java.util.Objects.requireNonNull(builder.specification, "specification is required");
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.autoRenewPeriodUnit = builder.autoRenewPeriodUnit;
            this.effectiveDate = builder.effectiveDate;
            this.pricingCycle = builder.pricingCycle;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getPackageType() {
            return this.packageType;
        }

        @Override
        public final java.lang.Object getProductCode() {
            return this.productCode;
        }

        @Override
        public final java.lang.Object getSpecification() {
            return this.specification;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriodUnit() {
            return this.autoRenewPeriodUnit;
        }

        @Override
        public final java.lang.Object getEffectiveDate() {
            return this.effectiveDate;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("duration", om.valueToTree(this.getDuration()));
            data.set("packageType", om.valueToTree(this.getPackageType()));
            data.set("productCode", om.valueToTree(this.getProductCode()));
            data.set("specification", om.valueToTree(this.getSpecification()));
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getAutoRenewPeriodUnit() != null) {
                data.set("autoRenewPeriodUnit", om.valueToTree(this.getAutoRenewPeriodUnit()));
            }
            if (this.getEffectiveDate() != null) {
                data.set("effectiveDate", om.valueToTree(this.getEffectiveDate()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bss.ResourcePackageProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourcePackageProps.Jsii$Proxy that = (ResourcePackageProps.Jsii$Proxy) o;

            if (!duration.equals(that.duration)) return false;
            if (!packageType.equals(that.packageType)) return false;
            if (!productCode.equals(that.productCode)) return false;
            if (!specification.equals(that.specification)) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.autoRenewPeriodUnit != null ? !this.autoRenewPeriodUnit.equals(that.autoRenewPeriodUnit) : that.autoRenewPeriodUnit != null) return false;
            if (this.effectiveDate != null ? !this.effectiveDate.equals(that.effectiveDate) : that.effectiveDate != null) return false;
            return this.pricingCycle != null ? this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle == null;
        }

        @Override
        public final int hashCode() {
            int result = this.duration.hashCode();
            result = 31 * result + (this.packageType.hashCode());
            result = 31 * result + (this.productCode.hashCode());
            result = 31 * result + (this.specification.hashCode());
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriodUnit != null ? this.autoRenewPeriodUnit.hashCode() : 0);
            result = 31 * result + (this.effectiveDate != null ? this.effectiveDate.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            return result;
        }
    }
}
