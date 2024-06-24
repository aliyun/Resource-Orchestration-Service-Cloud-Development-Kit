package com.aliyun.ros.cdk.eci;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ECI::ImageCache</code>, which is used to create an image cache.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:06.033Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosImageCache")
public class RosImageCache extends com.aliyun.ros.cdk.core.RosResource {

    protected RosImageCache(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosImageCache(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.eci.RosImageCache.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosImageCache(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eci.RosImageCacheProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageCacheId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageCacheId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getImage() {
        return software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImage(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "image", java.util.Objects.requireNonNull(value, "image is required"));
    }

    /**
     */
    public void setImage(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "image", java.util.Objects.requireNonNull(value, "image is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getImageCacheName() {
        return software.amazon.jsii.Kernel.get(this, "imageCacheName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageCacheName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageCacheName", java.util.Objects.requireNonNull(value, "imageCacheName is required"));
    }

    /**
     */
    public void setImageCacheName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageCacheName", java.util.Objects.requireNonNull(value, "imageCacheName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", java.util.Objects.requireNonNull(value, "vSwitchId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAcrRegistryInfo() {
        return software.amazon.jsii.Kernel.get(this, "acrRegistryInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcrRegistryInfo(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acrRegistryInfo", value);
    }

    /**
     */
    public void setAcrRegistryInfo(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.eci.RosImageCache.AcrRegistryInfoProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.eci.RosImageCache.AcrRegistryInfoProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "acrRegistryInfo", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoMatchImageCache() {
        return software.amazon.jsii.Kernel.get(this, "autoMatchImageCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoMatchImageCache(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoMatchImageCache", value);
    }

    /**
     */
    public void setAutoMatchImageCache(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoMatchImageCache", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEipInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "eipInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEipInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eipInstanceId", value);
    }

    /**
     */
    public void setEipInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eipInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageCacheSize() {
        return software.amazon.jsii.Kernel.get(this, "imageCacheSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageCacheSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "imageCacheSize", value);
    }

    /**
     */
    public void setImageCacheSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageCacheSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredential() {
        return software.amazon.jsii.Kernel.get(this, "imageRegistryCredential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageRegistryCredential(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageRegistryCredential", value);
    }

    /**
     */
    public void setImageRegistryCredential(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "imageRegistryCredential", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRetentionDays() {
        return software.amazon.jsii.Kernel.get(this, "retentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRetentionDays(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "retentionDays", value);
    }

    /**
     */
    public void setRetentionDays(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "retentionDays", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosImageCache.AcrRegistryInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(AcrRegistryInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AcrRegistryInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDomain() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AcrRegistryInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AcrRegistryInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AcrRegistryInfoProperty> {
            java.lang.Object instanceId;
            java.lang.Object domain;
            java.lang.Object instanceName;
            java.lang.Object regionId;

            /**
             * Sets the value of {@link AcrRegistryInfoProperty#getInstanceId}
             * @param instanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfoProperty#getInstanceId}
             * @param instanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfoProperty#getDomain}
             * @param domain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfoProperty#getDomain}
             * @param domain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(java.util.List<? extends java.lang.Object> domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfoProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(java.lang.String instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfoProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfoProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(java.lang.String regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfoProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AcrRegistryInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AcrRegistryInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AcrRegistryInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AcrRegistryInfoProperty {
            private final java.lang.Object instanceId;
            private final java.lang.Object domain;
            private final java.lang.Object instanceName;
            private final java.lang.Object regionId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
                this.domain = builder.domain;
                this.instanceName = builder.instanceName;
                this.regionId = builder.regionId;
            }

            @Override
            public final java.lang.Object getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Object getDomain() {
                return this.domain;
            }

            @Override
            public final java.lang.Object getInstanceName() {
                return this.instanceName;
            }

            @Override
            public final java.lang.Object getRegionId() {
                return this.regionId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceId", om.valueToTree(this.getInstanceId()));
                if (this.getDomain() != null) {
                    data.set("domain", om.valueToTree(this.getDomain()));
                }
                if (this.getInstanceName() != null) {
                    data.set("instanceName", om.valueToTree(this.getInstanceName()));
                }
                if (this.getRegionId() != null) {
                    data.set("regionId", om.valueToTree(this.getRegionId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosImageCache.AcrRegistryInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AcrRegistryInfoProperty.Jsii$Proxy that = (AcrRegistryInfoProperty.Jsii$Proxy) o;

                if (!instanceId.equals(that.instanceId)) return false;
                if (this.domain != null ? !this.domain.equals(that.domain) : that.domain != null) return false;
                if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
                return this.regionId != null ? this.regionId.equals(that.regionId) : that.regionId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceId.hashCode();
                result = 31 * result + (this.domain != null ? this.domain.hashCode() : 0);
                result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
                result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.eci.RosImageCache}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eci.RosImageCache> {
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
        private final com.aliyun.ros.cdk.eci.RosImageCacheProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eci.RosImageCacheProps.Builder();
        }

        /**
         * @return {@code this}
         * @param image This parameter is required.
         */
        public Builder image(final com.aliyun.ros.cdk.core.IResolvable image) {
            this.props.image(image);
            return this;
        }
        /**
         * @return {@code this}
         * @param image This parameter is required.
         */
        public Builder image(final java.util.List<? extends java.lang.Object> image) {
            this.props.image(image);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageCacheName This parameter is required.
         */
        public Builder imageCacheName(final java.lang.String imageCacheName) {
            this.props.imageCacheName(imageCacheName);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageCacheName This parameter is required.
         */
        public Builder imageCacheName(final com.aliyun.ros.cdk.core.IResolvable imageCacheName) {
            this.props.imageCacheName(imageCacheName);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param acrRegistryInfo This parameter is required.
         */
        public Builder acrRegistryInfo(final com.aliyun.ros.cdk.core.IResolvable acrRegistryInfo) {
            this.props.acrRegistryInfo(acrRegistryInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param acrRegistryInfo This parameter is required.
         */
        public Builder acrRegistryInfo(final java.util.List<? extends java.lang.Object> acrRegistryInfo) {
            this.props.acrRegistryInfo(acrRegistryInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoMatchImageCache This parameter is required.
         */
        public Builder autoMatchImageCache(final java.lang.Boolean autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoMatchImageCache This parameter is required.
         */
        public Builder autoMatchImageCache(final com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }

        /**
         * @return {@code this}
         * @param eipInstanceId This parameter is required.
         */
        public Builder eipInstanceId(final java.lang.String eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param eipInstanceId This parameter is required.
         */
        public Builder eipInstanceId(final com.aliyun.ros.cdk.core.IResolvable eipInstanceId) {
            this.props.eipInstanceId(eipInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageCacheSize This parameter is required.
         */
        public Builder imageCacheSize(final java.lang.Number imageCacheSize) {
            this.props.imageCacheSize(imageCacheSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageCacheSize This parameter is required.
         */
        public Builder imageCacheSize(final com.aliyun.ros.cdk.core.IResolvable imageCacheSize) {
            this.props.imageCacheSize(imageCacheSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageRegistryCredential This parameter is required.
         */
        public Builder imageRegistryCredential(final com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageRegistryCredential This parameter is required.
         */
        public Builder imageRegistryCredential(final java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.props.imageRegistryCredential(imageRegistryCredential);
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
         * @param retentionDays This parameter is required.
         */
        public Builder retentionDays(final java.lang.Number retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }
        /**
         * @return {@code this}
         * @param retentionDays This parameter is required.
         */
        public Builder retentionDays(final com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.eci.RosImageCache}.
         */
        @Override
        public com.aliyun.ros.cdk.eci.RosImageCache build() {
            return new com.aliyun.ros.cdk.eci.RosImageCache(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
