package com.aliyun.ros.cdk.ros;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ROS::ResourceCleaner</code>, which is used to create a resource cleaner.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.270Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosResourceCleaner")
public class RosResourceCleaner extends com.aliyun.ros.cdk.core.RosResource {

    protected RosResourceCleaner(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosResourceCleaner(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ros.RosResourceCleaner.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosResourceCleaner(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.RosResourceCleanerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCleanResult() {
        return software.amazon.jsii.Kernel.get(this, "attrCleanResult", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNoCleanupResourceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrNoCleanupResourceDetails", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNoCleanupResourcePartialDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrNoCleanupResourcePartialDetails", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceDetails", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourcePartialDetails() {
        return software.amazon.jsii.Kernel.get(this, "attrResourcePartialDetails", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceSummary() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceSummary", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScanErrors() {
        return software.amazon.jsii.Kernel.get(this, "attrScanErrors", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAction() {
        return software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAction(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "action", java.util.Objects.requireNonNull(value, "action is required"));
    }

    /**
     */
    public void setAction(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "action", java.util.Objects.requireNonNull(value, "action is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCleanUpAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "cleanUpAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCleanUpAlgorithm(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cleanUpAlgorithm", value);
    }

    /**
     */
    public void setCleanUpAlgorithm(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cleanUpAlgorithm", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCleanUpRetryCount() {
        return software.amazon.jsii.Kernel.get(this, "cleanUpRetryCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCleanUpRetryCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cleanUpRetryCount", value);
    }

    /**
     */
    public void setCleanUpRetryCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cleanUpRetryCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCleanUpTimeout() {
        return software.amazon.jsii.Kernel.get(this, "cleanUpTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCleanUpTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cleanUpTimeout", value);
    }

    /**
     */
    public void setCleanUpTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cleanUpTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDisabledSideEffects() {
        return software.amazon.jsii.Kernel.get(this, "disabledSideEffects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisabledSideEffects(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "disabledSideEffects", value);
    }

    /**
     */
    public void setDisabledSideEffects(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "disabledSideEffects", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExcludedResources() {
        return software.amazon.jsii.Kernel.get(this, "excludedResources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExcludedResources(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "excludedResources", value);
    }

    /**
     */
    public void setExcludedResources(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ros.RosResourceCleaner.ExcludedResourcesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ros.RosResourceCleaner.ExcludedResourcesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "excludedResources", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFailureOption() {
        return software.amazon.jsii.Kernel.get(this, "failureOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFailureOption(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "failureOption", value);
    }

    /**
     */
    public void setFailureOption(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "failureOption", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mode", value);
    }

    /**
     */
    public void setMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceFilters() {
        return software.amazon.jsii.Kernel.get(this, "resourceFilters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceFilters(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceFilters", value);
    }

    /**
     */
    public void setResourceFilters(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ros.RosResourceCleaner.ResourceFiltersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ros.RosResourceCleaner.ResourceFiltersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "resourceFilters", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResources() {
        return software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResources(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resources", value);
    }

    /**
     */
    public void setResources(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ros.RosResourceCleaner.ResourcesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ros.RosResourceCleaner.ResourcesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "resources", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceTypeOrder() {
        return software.amazon.jsii.Kernel.get(this, "resourceTypeOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceTypeOrder(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceTypeOrder", value);
    }

    /**
     */
    public void setResourceTypeOrder(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "resourceTypeOrder", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty")
    @software.amazon.jsii.Jsii.Proxy(ExcludedResourcesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ExcludedResourcesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getResourceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ExcludedResourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ExcludedResourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ExcludedResourcesProperty> {
            java.lang.Object resourceId;
            java.lang.Object regionId;
            java.lang.Object resourceType;

            /**
             * Sets the value of {@link ExcludedResourcesProperty#getResourceId}
             * @param resourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceId(java.lang.String resourceId) {
                this.resourceId = resourceId;
                return this;
            }

            /**
             * Sets the value of {@link ExcludedResourcesProperty#getResourceId}
             * @param resourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
                this.resourceId = resourceId;
                return this;
            }

            /**
             * Sets the value of {@link ExcludedResourcesProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(java.lang.String regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link ExcludedResourcesProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link ExcludedResourcesProperty#getResourceType}
             * @param resourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceType(java.lang.String resourceType) {
                this.resourceType = resourceType;
                return this;
            }

            /**
             * Sets the value of {@link ExcludedResourcesProperty#getResourceType}
             * @param resourceType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
                this.resourceType = resourceType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ExcludedResourcesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ExcludedResourcesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ExcludedResourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ExcludedResourcesProperty {
            private final java.lang.Object resourceId;
            private final java.lang.Object regionId;
            private final java.lang.Object resourceType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.resourceId = java.util.Objects.requireNonNull(builder.resourceId, "resourceId is required");
                this.regionId = builder.regionId;
                this.resourceType = builder.resourceType;
            }

            @Override
            public final java.lang.Object getResourceId() {
                return this.resourceId;
            }

            @Override
            public final java.lang.Object getRegionId() {
                return this.regionId;
            }

            @Override
            public final java.lang.Object getResourceType() {
                return this.resourceType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("resourceId", om.valueToTree(this.getResourceId()));
                if (this.getRegionId() != null) {
                    data.set("regionId", om.valueToTree(this.getRegionId()));
                }
                if (this.getResourceType() != null) {
                    data.set("resourceType", om.valueToTree(this.getResourceType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosResourceCleaner.ExcludedResourcesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ExcludedResourcesProperty.Jsii$Proxy that = (ExcludedResourcesProperty.Jsii$Proxy) o;

                if (!resourceId.equals(that.resourceId)) return false;
                if (this.regionId != null ? !this.regionId.equals(that.regionId) : that.regionId != null) return false;
                return this.resourceType != null ? this.resourceType.equals(that.resourceType) : that.resourceType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.resourceId.hashCode();
                result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
                result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosResourceCleaner.ResourceFiltersProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourceFiltersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourceFiltersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEffect() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIncludeDeletionProtection() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceNamePatterns() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceTypePatterns() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ros.RosResourceCleaner.TagsProperty> getTags() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ResourceFiltersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourceFiltersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourceFiltersProperty> {
            java.lang.Object effect;
            java.lang.Object includeDeletionProtection;
            java.lang.Object regionIds;
            java.lang.Object resourceGroupIds;
            java.lang.Object resourceIds;
            java.lang.Object resourceNamePatterns;
            java.lang.Object resourceTypePatterns;
            java.util.List<com.aliyun.ros.cdk.ros.RosResourceCleaner.TagsProperty> tags;

            /**
             * Sets the value of {@link ResourceFiltersProperty#getEffect}
             * @param effect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(java.lang.String effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getEffect}
             * @param effect the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder effect(com.aliyun.ros.cdk.core.IResolvable effect) {
                this.effect = effect;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getIncludeDeletionProtection}
             * @param includeDeletionProtection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeDeletionProtection(java.lang.Boolean includeDeletionProtection) {
                this.includeDeletionProtection = includeDeletionProtection;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getIncludeDeletionProtection}
             * @param includeDeletionProtection the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder includeDeletionProtection(com.aliyun.ros.cdk.core.IResolvable includeDeletionProtection) {
                this.includeDeletionProtection = includeDeletionProtection;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getRegionIds}
             * @param regionIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionIds(com.aliyun.ros.cdk.core.IResolvable regionIds) {
                this.regionIds = regionIds;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getRegionIds}
             * @param regionIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionIds(java.util.List<? extends java.lang.Object> regionIds) {
                this.regionIds = regionIds;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getResourceGroupIds}
             * @param resourceGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupIds(com.aliyun.ros.cdk.core.IResolvable resourceGroupIds) {
                this.resourceGroupIds = resourceGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getResourceGroupIds}
             * @param resourceGroupIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupIds(java.util.List<? extends java.lang.Object> resourceGroupIds) {
                this.resourceGroupIds = resourceGroupIds;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getResourceIds}
             * @param resourceIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceIds(com.aliyun.ros.cdk.core.IResolvable resourceIds) {
                this.resourceIds = resourceIds;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getResourceIds}
             * @param resourceIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceIds(java.util.List<? extends java.lang.Object> resourceIds) {
                this.resourceIds = resourceIds;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getResourceNamePatterns}
             * @param resourceNamePatterns the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceNamePatterns(com.aliyun.ros.cdk.core.IResolvable resourceNamePatterns) {
                this.resourceNamePatterns = resourceNamePatterns;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getResourceNamePatterns}
             * @param resourceNamePatterns the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceNamePatterns(java.util.List<? extends java.lang.Object> resourceNamePatterns) {
                this.resourceNamePatterns = resourceNamePatterns;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getResourceTypePatterns}
             * @param resourceTypePatterns the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceTypePatterns(com.aliyun.ros.cdk.core.IResolvable resourceTypePatterns) {
                this.resourceTypePatterns = resourceTypePatterns;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getResourceTypePatterns}
             * @param resourceTypePatterns the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceTypePatterns(java.util.List<? extends java.lang.Object> resourceTypePatterns) {
                this.resourceTypePatterns = resourceTypePatterns;
                return this;
            }

            /**
             * Sets the value of {@link ResourceFiltersProperty#getTags}
             * @param tags the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @SuppressWarnings("unchecked")
            public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ros.RosResourceCleaner.TagsProperty> tags) {
                this.tags = (java.util.List<com.aliyun.ros.cdk.ros.RosResourceCleaner.TagsProperty>)tags;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResourceFiltersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourceFiltersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourceFiltersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceFiltersProperty {
            private final java.lang.Object effect;
            private final java.lang.Object includeDeletionProtection;
            private final java.lang.Object regionIds;
            private final java.lang.Object resourceGroupIds;
            private final java.lang.Object resourceIds;
            private final java.lang.Object resourceNamePatterns;
            private final java.lang.Object resourceTypePatterns;
            private final java.util.List<com.aliyun.ros.cdk.ros.RosResourceCleaner.TagsProperty> tags;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.effect = software.amazon.jsii.Kernel.get(this, "effect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.includeDeletionProtection = software.amazon.jsii.Kernel.get(this, "includeDeletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionIds = software.amazon.jsii.Kernel.get(this, "regionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceGroupIds = software.amazon.jsii.Kernel.get(this, "resourceGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceIds = software.amazon.jsii.Kernel.get(this, "resourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceNamePatterns = software.amazon.jsii.Kernel.get(this, "resourceNamePatterns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceTypePatterns = software.amazon.jsii.Kernel.get(this, "resourceTypePatterns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.RosResourceCleaner.TagsProperty.class)));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            @SuppressWarnings("unchecked")
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.effect = builder.effect;
                this.includeDeletionProtection = builder.includeDeletionProtection;
                this.regionIds = builder.regionIds;
                this.resourceGroupIds = builder.resourceGroupIds;
                this.resourceIds = builder.resourceIds;
                this.resourceNamePatterns = builder.resourceNamePatterns;
                this.resourceTypePatterns = builder.resourceTypePatterns;
                this.tags = (java.util.List<com.aliyun.ros.cdk.ros.RosResourceCleaner.TagsProperty>)builder.tags;
            }

            @Override
            public final java.lang.Object getEffect() {
                return this.effect;
            }

            @Override
            public final java.lang.Object getIncludeDeletionProtection() {
                return this.includeDeletionProtection;
            }

            @Override
            public final java.lang.Object getRegionIds() {
                return this.regionIds;
            }

            @Override
            public final java.lang.Object getResourceGroupIds() {
                return this.resourceGroupIds;
            }

            @Override
            public final java.lang.Object getResourceIds() {
                return this.resourceIds;
            }

            @Override
            public final java.lang.Object getResourceNamePatterns() {
                return this.resourceNamePatterns;
            }

            @Override
            public final java.lang.Object getResourceTypePatterns() {
                return this.resourceTypePatterns;
            }

            @Override
            public final java.util.List<com.aliyun.ros.cdk.ros.RosResourceCleaner.TagsProperty> getTags() {
                return this.tags;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getEffect() != null) {
                    data.set("effect", om.valueToTree(this.getEffect()));
                }
                if (this.getIncludeDeletionProtection() != null) {
                    data.set("includeDeletionProtection", om.valueToTree(this.getIncludeDeletionProtection()));
                }
                if (this.getRegionIds() != null) {
                    data.set("regionIds", om.valueToTree(this.getRegionIds()));
                }
                if (this.getResourceGroupIds() != null) {
                    data.set("resourceGroupIds", om.valueToTree(this.getResourceGroupIds()));
                }
                if (this.getResourceIds() != null) {
                    data.set("resourceIds", om.valueToTree(this.getResourceIds()));
                }
                if (this.getResourceNamePatterns() != null) {
                    data.set("resourceNamePatterns", om.valueToTree(this.getResourceNamePatterns()));
                }
                if (this.getResourceTypePatterns() != null) {
                    data.set("resourceTypePatterns", om.valueToTree(this.getResourceTypePatterns()));
                }
                if (this.getTags() != null) {
                    data.set("tags", om.valueToTree(this.getTags()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosResourceCleaner.ResourceFiltersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourceFiltersProperty.Jsii$Proxy that = (ResourceFiltersProperty.Jsii$Proxy) o;

                if (this.effect != null ? !this.effect.equals(that.effect) : that.effect != null) return false;
                if (this.includeDeletionProtection != null ? !this.includeDeletionProtection.equals(that.includeDeletionProtection) : that.includeDeletionProtection != null) return false;
                if (this.regionIds != null ? !this.regionIds.equals(that.regionIds) : that.regionIds != null) return false;
                if (this.resourceGroupIds != null ? !this.resourceGroupIds.equals(that.resourceGroupIds) : that.resourceGroupIds != null) return false;
                if (this.resourceIds != null ? !this.resourceIds.equals(that.resourceIds) : that.resourceIds != null) return false;
                if (this.resourceNamePatterns != null ? !this.resourceNamePatterns.equals(that.resourceNamePatterns) : that.resourceNamePatterns != null) return false;
                if (this.resourceTypePatterns != null ? !this.resourceTypePatterns.equals(that.resourceTypePatterns) : that.resourceTypePatterns != null) return false;
                return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
            }

            @Override
            public final int hashCode() {
                int result = this.effect != null ? this.effect.hashCode() : 0;
                result = 31 * result + (this.includeDeletionProtection != null ? this.includeDeletionProtection.hashCode() : 0);
                result = 31 * result + (this.regionIds != null ? this.regionIds.hashCode() : 0);
                result = 31 * result + (this.resourceGroupIds != null ? this.resourceGroupIds.hashCode() : 0);
                result = 31 * result + (this.resourceIds != null ? this.resourceIds.hashCode() : 0);
                result = 31 * result + (this.resourceNamePatterns != null ? this.resourceNamePatterns.hashCode() : 0);
                result = 31 * result + (this.resourceTypePatterns != null ? this.resourceTypePatterns.hashCode() : 0);
                result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosResourceCleaner.ResourcesProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourcesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourcesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getRegionId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getResourceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getResourceType();

        /**
         * @return a {@link Builder} of {@link ResourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourcesProperty> {
            java.lang.Object regionId;
            java.lang.Object resourceId;
            java.lang.Object resourceType;

            /**
             * Sets the value of {@link ResourcesProperty#getRegionId}
             * @param regionId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(java.lang.String regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getRegionId}
             * @param regionId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getResourceId}
             * @param resourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceId(java.lang.String resourceId) {
                this.resourceId = resourceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getResourceId}
             * @param resourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
                this.resourceId = resourceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getResourceType}
             * @param resourceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceType(java.lang.String resourceType) {
                this.resourceType = resourceType;
                return this;
            }

            /**
             * Sets the value of {@link ResourcesProperty#getResourceType}
             * @param resourceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
                this.resourceType = resourceType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResourcesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourcesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourcesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourcesProperty {
            private final java.lang.Object regionId;
            private final java.lang.Object resourceId;
            private final java.lang.Object resourceType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.regionId = java.util.Objects.requireNonNull(builder.regionId, "regionId is required");
                this.resourceId = java.util.Objects.requireNonNull(builder.resourceId, "resourceId is required");
                this.resourceType = java.util.Objects.requireNonNull(builder.resourceType, "resourceType is required");
            }

            @Override
            public final java.lang.Object getRegionId() {
                return this.regionId;
            }

            @Override
            public final java.lang.Object getResourceId() {
                return this.resourceId;
            }

            @Override
            public final java.lang.Object getResourceType() {
                return this.resourceType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("regionId", om.valueToTree(this.getRegionId()));
                data.set("resourceId", om.valueToTree(this.getResourceId()));
                data.set("resourceType", om.valueToTree(this.getResourceType()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosResourceCleaner.ResourcesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourcesProperty.Jsii$Proxy that = (ResourcesProperty.Jsii$Proxy) o;

                if (!regionId.equals(that.regionId)) return false;
                if (!resourceId.equals(that.resourceId)) return false;
                return this.resourceType.equals(that.resourceType);
            }

            @Override
            public final int hashCode() {
                int result = this.regionId.hashCode();
                result = 31 * result + (this.resourceId.hashCode());
                result = 31 * result + (this.resourceType.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosResourceCleaner.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosResourceCleaner.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.RosResourceCleaner}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.RosResourceCleaner> {
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
        private final com.aliyun.ros.cdk.ros.RosResourceCleanerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.RosResourceCleanerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param action This parameter is required.
         */
        public Builder action(final java.lang.String action) {
            this.props.action(action);
            return this;
        }
        /**
         * @return {@code this}
         * @param action This parameter is required.
         */
        public Builder action(final com.aliyun.ros.cdk.core.IResolvable action) {
            this.props.action(action);
            return this;
        }

        /**
         * @return {@code this}
         * @param cleanUpAlgorithm This parameter is required.
         */
        public Builder cleanUpAlgorithm(final java.lang.String cleanUpAlgorithm) {
            this.props.cleanUpAlgorithm(cleanUpAlgorithm);
            return this;
        }
        /**
         * @return {@code this}
         * @param cleanUpAlgorithm This parameter is required.
         */
        public Builder cleanUpAlgorithm(final com.aliyun.ros.cdk.core.IResolvable cleanUpAlgorithm) {
            this.props.cleanUpAlgorithm(cleanUpAlgorithm);
            return this;
        }

        /**
         * @return {@code this}
         * @param cleanUpRetryCount This parameter is required.
         */
        public Builder cleanUpRetryCount(final java.lang.Number cleanUpRetryCount) {
            this.props.cleanUpRetryCount(cleanUpRetryCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param cleanUpRetryCount This parameter is required.
         */
        public Builder cleanUpRetryCount(final com.aliyun.ros.cdk.core.IResolvable cleanUpRetryCount) {
            this.props.cleanUpRetryCount(cleanUpRetryCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param cleanUpTimeout This parameter is required.
         */
        public Builder cleanUpTimeout(final java.lang.Number cleanUpTimeout) {
            this.props.cleanUpTimeout(cleanUpTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param cleanUpTimeout This parameter is required.
         */
        public Builder cleanUpTimeout(final com.aliyun.ros.cdk.core.IResolvable cleanUpTimeout) {
            this.props.cleanUpTimeout(cleanUpTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param disabledSideEffects This parameter is required.
         */
        public Builder disabledSideEffects(final com.aliyun.ros.cdk.core.IResolvable disabledSideEffects) {
            this.props.disabledSideEffects(disabledSideEffects);
            return this;
        }
        /**
         * @return {@code this}
         * @param disabledSideEffects This parameter is required.
         */
        public Builder disabledSideEffects(final java.util.List<? extends java.lang.Object> disabledSideEffects) {
            this.props.disabledSideEffects(disabledSideEffects);
            return this;
        }

        /**
         * @return {@code this}
         * @param excludedResources This parameter is required.
         */
        public Builder excludedResources(final com.aliyun.ros.cdk.core.IResolvable excludedResources) {
            this.props.excludedResources(excludedResources);
            return this;
        }
        /**
         * @return {@code this}
         * @param excludedResources This parameter is required.
         */
        public Builder excludedResources(final java.util.List<? extends java.lang.Object> excludedResources) {
            this.props.excludedResources(excludedResources);
            return this;
        }

        /**
         * @return {@code this}
         * @param failureOption This parameter is required.
         */
        public Builder failureOption(final java.lang.String failureOption) {
            this.props.failureOption(failureOption);
            return this;
        }
        /**
         * @return {@code this}
         * @param failureOption This parameter is required.
         */
        public Builder failureOption(final com.aliyun.ros.cdk.core.IResolvable failureOption) {
            this.props.failureOption(failureOption);
            return this;
        }

        /**
         * @return {@code this}
         * @param mode This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props.mode(mode);
            return this;
        }
        /**
         * @return {@code this}
         * @param mode This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props.mode(mode);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceFilters This parameter is required.
         */
        public Builder resourceFilters(final com.aliyun.ros.cdk.core.IResolvable resourceFilters) {
            this.props.resourceFilters(resourceFilters);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceFilters This parameter is required.
         */
        public Builder resourceFilters(final java.util.List<? extends java.lang.Object> resourceFilters) {
            this.props.resourceFilters(resourceFilters);
            return this;
        }

        /**
         * @return {@code this}
         * @param resources This parameter is required.
         */
        public Builder resources(final com.aliyun.ros.cdk.core.IResolvable resources) {
            this.props.resources(resources);
            return this;
        }
        /**
         * @return {@code this}
         * @param resources This parameter is required.
         */
        public Builder resources(final java.util.List<? extends java.lang.Object> resources) {
            this.props.resources(resources);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceTypeOrder This parameter is required.
         */
        public Builder resourceTypeOrder(final com.aliyun.ros.cdk.core.IResolvable resourceTypeOrder) {
            this.props.resourceTypeOrder(resourceTypeOrder);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceTypeOrder This parameter is required.
         */
        public Builder resourceTypeOrder(final java.util.List<? extends java.lang.Object> resourceTypeOrder) {
            this.props.resourceTypeOrder(resourceTypeOrder);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.RosResourceCleaner}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.RosResourceCleaner build() {
            return new com.aliyun.ros.cdk.ros.RosResourceCleaner(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
