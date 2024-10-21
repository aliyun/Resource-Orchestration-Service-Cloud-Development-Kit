package com.aliyun.ros.cdk.computenest;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ComputeNest::ServiceInstance</code>, which is used to create and deploy a service instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.848Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.RosServiceInstance")
public class RosServiceInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosServiceInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosServiceInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.computenest.RosServiceInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosServiceInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.RosServiceInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrComponents() {
        return software.amazon.jsii.Kernel.get(this, "attrComponents", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableInstanceOps() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableInstanceOps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableUserPrometheus() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableUserPrometheus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsOperated() {
        return software.amazon.jsii.Kernel.get(this, "attrIsOperated", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLicenseEndTime() {
        return software.amazon.jsii.Kernel.get(this, "attrLicenseEndTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkConfig", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOutputs() {
        return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrParameters() {
        return software.amazon.jsii.Kernel.get(this, "attrParameters", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPredefinedParameterName() {
        return software.amazon.jsii.Kernel.get(this, "attrPredefinedParameterName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProgress() {
        return software.amazon.jsii.Kernel.get(this, "attrProgress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrService() {
        return software.amazon.jsii.Kernel.get(this, "attrService", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceType() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSource() {
        return software.amazon.jsii.Kernel.get(this, "attrSource", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatusDetail() {
        return software.amazon.jsii.Kernel.get(this, "attrStatusDetail", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSupplierUid() {
        return software.amazon.jsii.Kernel.get(this, "attrSupplierUid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

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
    public @org.jetbrains.annotations.NotNull java.lang.Object getService() {
        return software.amazon.jsii.Kernel.get(this, "service", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "service", java.util.Objects.requireNonNull(value, "service is required"));
    }

    /**
     */
    public void setService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.computenest.RosServiceInstance.ServiceProperty value) {
        software.amazon.jsii.Kernel.set(this, "service", java.util.Objects.requireNonNull(value, "service is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCommodity() {
        return software.amazon.jsii.Kernel.get(this, "commodity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCommodity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "commodity", value);
    }

    /**
     */
    public void setCommodity(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.computenest.RosServiceInstance.CommodityProperty value) {
        software.amazon.jsii.Kernel.set(this, "commodity", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContactGroup() {
        return software.amazon.jsii.Kernel.get(this, "contactGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContactGroup(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "contactGroup", value);
    }

    /**
     */
    public void setContactGroup(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "contactGroup", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableInstanceOps() {
        return software.amazon.jsii.Kernel.get(this, "enableInstanceOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableInstanceOps(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableInstanceOps", value);
    }

    /**
     */
    public void setEnableInstanceOps(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableInstanceOps", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableUserPrometheus() {
        return software.amazon.jsii.Kernel.get(this, "enableUserPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableUserPrometheus(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableUserPrometheus", value);
    }

    /**
     */
    public void setEnableUserPrometheus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableUserPrometheus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMarketInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "marketInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMarketInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "marketInstanceId", value);
    }

    /**
     */
    public void setMarketInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "marketInstanceId", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getOperationName() {
        return software.amazon.jsii.Kernel.get(this, "operationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOperationName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "operationName", value);
    }

    /**
     */
    public void setOperationName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "operationName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public void setParameters(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "parameters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPredefinedParameterName() {
        return software.amazon.jsii.Kernel.get(this, "predefinedParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPredefinedParameterName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "predefinedParameterName", value);
    }

    /**
     */
    public void setPredefinedParameterName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "predefinedParameterName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpecificationCode() {
        return software.amazon.jsii.Kernel.get(this, "specificationCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpecificationCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "specificationCode", value);
    }

    /**
     */
    public void setSpecificationCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "specificationCode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTemplateName() {
        return software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTemplateName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "templateName", value);
    }

    /**
     */
    public void setTemplateName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "templateName", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.RosServiceInstance.CommodityProperty")
    @software.amazon.jsii.Jsii.Proxy(CommodityProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CommodityProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPayPeriod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPayPeriodUnit() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CommodityProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CommodityProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CommodityProperty> {
            java.lang.Object payPeriod;
            java.lang.Object payPeriodUnit;

            /**
             * Sets the value of {@link CommodityProperty#getPayPeriod}
             * @param payPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payPeriod(java.lang.Number payPeriod) {
                this.payPeriod = payPeriod;
                return this;
            }

            /**
             * Sets the value of {@link CommodityProperty#getPayPeriod}
             * @param payPeriod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payPeriod(com.aliyun.ros.cdk.core.IResolvable payPeriod) {
                this.payPeriod = payPeriod;
                return this;
            }

            /**
             * Sets the value of {@link CommodityProperty#getPayPeriodUnit}
             * @param payPeriodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payPeriodUnit(java.lang.String payPeriodUnit) {
                this.payPeriodUnit = payPeriodUnit;
                return this;
            }

            /**
             * Sets the value of {@link CommodityProperty#getPayPeriodUnit}
             * @param payPeriodUnit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payPeriodUnit(com.aliyun.ros.cdk.core.IResolvable payPeriodUnit) {
                this.payPeriodUnit = payPeriodUnit;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CommodityProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CommodityProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CommodityProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CommodityProperty {
            private final java.lang.Object payPeriod;
            private final java.lang.Object payPeriodUnit;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.payPeriod = software.amazon.jsii.Kernel.get(this, "payPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.payPeriodUnit = software.amazon.jsii.Kernel.get(this, "payPeriodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.payPeriod = builder.payPeriod;
                this.payPeriodUnit = builder.payPeriodUnit;
            }

            @Override
            public final java.lang.Object getPayPeriod() {
                return this.payPeriod;
            }

            @Override
            public final java.lang.Object getPayPeriodUnit() {
                return this.payPeriodUnit;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPayPeriod() != null) {
                    data.set("payPeriod", om.valueToTree(this.getPayPeriod()));
                }
                if (this.getPayPeriodUnit() != null) {
                    data.set("payPeriodUnit", om.valueToTree(this.getPayPeriodUnit()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-computenest.RosServiceInstance.CommodityProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CommodityProperty.Jsii$Proxy that = (CommodityProperty.Jsii$Proxy) o;

                if (this.payPeriod != null ? !this.payPeriod.equals(that.payPeriod) : that.payPeriod != null) return false;
                return this.payPeriodUnit != null ? this.payPeriodUnit.equals(that.payPeriodUnit) : that.payPeriodUnit == null;
            }

            @Override
            public final int hashCode() {
                int result = this.payPeriod != null ? this.payPeriod.hashCode() : 0;
                result = 31 * result + (this.payPeriodUnit != null ? this.payPeriodUnit.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.RosServiceInstance.ServiceProperty")
    @software.amazon.jsii.Jsii.Proxy(ServiceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServiceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServiceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVersion() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServiceProperty> {
            java.lang.Object serviceId;
            java.lang.Object version;

            /**
             * Sets the value of {@link ServiceProperty#getServiceId}
             * @param serviceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(java.lang.String serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceProperty#getServiceId}
             * @param serviceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
                this.serviceId = serviceId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(java.lang.String version) {
                this.version = version;
                return this;
            }

            /**
             * Sets the value of {@link ServiceProperty#getVersion}
             * @param version the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder version(com.aliyun.ros.cdk.core.IResolvable version) {
                this.version = version;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServiceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServiceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServiceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceProperty {
            private final java.lang.Object serviceId;
            private final java.lang.Object version;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.version = software.amazon.jsii.Kernel.get(this, "version", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.serviceId = java.util.Objects.requireNonNull(builder.serviceId, "serviceId is required");
                this.version = builder.version;
            }

            @Override
            public final java.lang.Object getServiceId() {
                return this.serviceId;
            }

            @Override
            public final java.lang.Object getVersion() {
                return this.version;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("serviceId", om.valueToTree(this.getServiceId()));
                if (this.getVersion() != null) {
                    data.set("version", om.valueToTree(this.getVersion()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-computenest.RosServiceInstance.ServiceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServiceProperty.Jsii$Proxy that = (ServiceProperty.Jsii$Proxy) o;

                if (!serviceId.equals(that.serviceId)) return false;
                return this.version != null ? this.version.equals(that.version) : that.version == null;
            }

            @Override
            public final int hashCode() {
                int result = this.serviceId.hashCode();
                result = 31 * result + (this.version != null ? this.version.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.RosServiceInstance.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-computenest.RosServiceInstance.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.computenest.RosServiceInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.computenest.RosServiceInstance> {
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
        private final com.aliyun.ros.cdk.computenest.RosServiceInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.computenest.RosServiceInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param service This parameter is required.
         */
        public Builder service(final com.aliyun.ros.cdk.core.IResolvable service) {
            this.props.service(service);
            return this;
        }
        /**
         * @return {@code this}
         * @param service This parameter is required.
         */
        public Builder service(final com.aliyun.ros.cdk.computenest.RosServiceInstance.ServiceProperty service) {
            this.props.service(service);
            return this;
        }

        /**
         * @return {@code this}
         * @param commodity This parameter is required.
         */
        public Builder commodity(final com.aliyun.ros.cdk.core.IResolvable commodity) {
            this.props.commodity(commodity);
            return this;
        }
        /**
         * @return {@code this}
         * @param commodity This parameter is required.
         */
        public Builder commodity(final com.aliyun.ros.cdk.computenest.RosServiceInstance.CommodityProperty commodity) {
            this.props.commodity(commodity);
            return this;
        }

        /**
         * @return {@code this}
         * @param contactGroup This parameter is required.
         */
        public Builder contactGroup(final java.lang.String contactGroup) {
            this.props.contactGroup(contactGroup);
            return this;
        }
        /**
         * @return {@code this}
         * @param contactGroup This parameter is required.
         */
        public Builder contactGroup(final com.aliyun.ros.cdk.core.IResolvable contactGroup) {
            this.props.contactGroup(contactGroup);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableInstanceOps This parameter is required.
         */
        public Builder enableInstanceOps(final java.lang.Boolean enableInstanceOps) {
            this.props.enableInstanceOps(enableInstanceOps);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableInstanceOps This parameter is required.
         */
        public Builder enableInstanceOps(final com.aliyun.ros.cdk.core.IResolvable enableInstanceOps) {
            this.props.enableInstanceOps(enableInstanceOps);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableUserPrometheus This parameter is required.
         */
        public Builder enableUserPrometheus(final java.lang.Boolean enableUserPrometheus) {
            this.props.enableUserPrometheus(enableUserPrometheus);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableUserPrometheus This parameter is required.
         */
        public Builder enableUserPrometheus(final com.aliyun.ros.cdk.core.IResolvable enableUserPrometheus) {
            this.props.enableUserPrometheus(enableUserPrometheus);
            return this;
        }

        /**
         * @return {@code this}
         * @param marketInstanceId This parameter is required.
         */
        public Builder marketInstanceId(final java.lang.String marketInstanceId) {
            this.props.marketInstanceId(marketInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param marketInstanceId This parameter is required.
         */
        public Builder marketInstanceId(final com.aliyun.ros.cdk.core.IResolvable marketInstanceId) {
            this.props.marketInstanceId(marketInstanceId);
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
         * @param operationName This parameter is required.
         */
        public Builder operationName(final java.lang.String operationName) {
            this.props.operationName(operationName);
            return this;
        }
        /**
         * @return {@code this}
         * @param operationName This parameter is required.
         */
        public Builder operationName(final com.aliyun.ros.cdk.core.IResolvable operationName) {
            this.props.operationName(operationName);
            return this;
        }

        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param predefinedParameterName This parameter is required.
         */
        public Builder predefinedParameterName(final java.lang.String predefinedParameterName) {
            this.props.predefinedParameterName(predefinedParameterName);
            return this;
        }
        /**
         * @return {@code this}
         * @param predefinedParameterName This parameter is required.
         */
        public Builder predefinedParameterName(final com.aliyun.ros.cdk.core.IResolvable predefinedParameterName) {
            this.props.predefinedParameterName(predefinedParameterName);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param specificationCode This parameter is required.
         */
        public Builder specificationCode(final java.lang.String specificationCode) {
            this.props.specificationCode(specificationCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param specificationCode This parameter is required.
         */
        public Builder specificationCode(final com.aliyun.ros.cdk.core.IResolvable specificationCode) {
            this.props.specificationCode(specificationCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateName This parameter is required.
         */
        public Builder templateName(final java.lang.String templateName) {
            this.props.templateName(templateName);
            return this;
        }
        /**
         * @return {@code this}
         * @param templateName This parameter is required.
         */
        public Builder templateName(final com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.props.templateName(templateName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.computenest.RosServiceInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.computenest.RosServiceInstance build() {
            return new com.aliyun.ros.cdk.computenest.RosServiceInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
