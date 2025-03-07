package com.aliyun.ros.cdk.privatelink;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::PrivateLink::VpcEndpointService</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.181Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.RosVpcEndpointService")
public class RosVpcEndpointService extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVpcEndpointService(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVpcEndpointService(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVpcEndpointService(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.RosVpcEndpointServiceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMaxBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrMaxBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMinBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrMinBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoAcceptEnabled() {
        return software.amazon.jsii.Kernel.get(this, "autoAcceptEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoAcceptEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoAcceptEnabled", value);
    }

    /**
     */
    public void setAutoAcceptEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoAcceptEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "connectBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "connectBandwidth", value);
    }

    /**
     */
    public void setConnectBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectBandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPayer() {
        return software.amazon.jsii.Kernel.get(this, "payer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayer(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payer", value);
    }

    /**
     */
    public void setPayer(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payer", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResource() {
        return software.amazon.jsii.Kernel.get(this, "resource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resource", value);
    }

    /**
     */
    public void setResource(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.ResourceProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.ResourceProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "resource", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceDescription() {
        return software.amazon.jsii.Kernel.get(this, "serviceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceDescription", value);
    }

    /**
     */
    public void setServiceDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceResourceType() {
        return software.amazon.jsii.Kernel.get(this, "serviceResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceResourceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceResourceType", value);
    }

    /**
     */
    public void setServiceResourceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceResourceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUser() {
        return software.amazon.jsii.Kernel.get(this, "user", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUser(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "user", value);
    }

    /**
     */
    public void setUser(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "user", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneAffinityEnabled() {
        return software.amazon.jsii.Kernel.get(this, "zoneAffinityEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneAffinityEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "zoneAffinityEnabled", value);
    }

    /**
     */
    public void setZoneAffinityEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneAffinityEnabled", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.RosVpcEndpointService.ResourceProperty")
    @software.amazon.jsii.Jsii.Proxy(ResourceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ResourceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getResourceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getResourceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

        /**
         * @return a {@link Builder} of {@link ResourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ResourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ResourceProperty> {
            java.lang.Object resourceId;
            java.lang.Object resourceType;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link ResourceProperty#getResourceId}
             * @param resourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceId(java.lang.String resourceId) {
                this.resourceId = resourceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourceProperty#getResourceId}
             * @param resourceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
                this.resourceId = resourceId;
                return this;
            }

            /**
             * Sets the value of {@link ResourceProperty#getResourceType}
             * @param resourceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceType(java.lang.String resourceType) {
                this.resourceType = resourceType;
                return this;
            }

            /**
             * Sets the value of {@link ResourceProperty#getResourceType}
             * @param resourceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
                this.resourceType = resourceType;
                return this;
            }

            /**
             * Sets the value of {@link ResourceProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link ResourceProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ResourceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ResourceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ResourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceProperty {
            private final java.lang.Object resourceId;
            private final java.lang.Object resourceType;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.resourceId = java.util.Objects.requireNonNull(builder.resourceId, "resourceId is required");
                this.resourceType = java.util.Objects.requireNonNull(builder.resourceType, "resourceType is required");
                this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
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
            public final java.lang.Object getZoneId() {
                return this.zoneId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("resourceId", om.valueToTree(this.getResourceId()));
                data.set("resourceType", om.valueToTree(this.getResourceType()));
                data.set("zoneId", om.valueToTree(this.getZoneId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.RosVpcEndpointService.ResourceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ResourceProperty.Jsii$Proxy that = (ResourceProperty.Jsii$Proxy) o;

                if (!resourceId.equals(that.resourceId)) return false;
                if (!resourceType.equals(that.resourceType)) return false;
                return this.zoneId.equals(that.zoneId);
            }

            @Override
            public final int hashCode() {
                int result = this.resourceId.hashCode();
                result = 31 * result + (this.resourceType.hashCode());
                result = 31 * result + (this.zoneId.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.RosVpcEndpointService.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.RosVpcEndpointService.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.privatelink.RosVpcEndpointService}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService> {
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
        private final com.aliyun.ros.cdk.privatelink.RosVpcEndpointServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.privatelink.RosVpcEndpointServiceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param autoAcceptEnabled This parameter is required.
         */
        public Builder autoAcceptEnabled(final java.lang.Boolean autoAcceptEnabled) {
            this.props.autoAcceptEnabled(autoAcceptEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoAcceptEnabled This parameter is required.
         */
        public Builder autoAcceptEnabled(final com.aliyun.ros.cdk.core.IResolvable autoAcceptEnabled) {
            this.props.autoAcceptEnabled(autoAcceptEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectBandwidth This parameter is required.
         */
        public Builder connectBandwidth(final java.lang.Number connectBandwidth) {
            this.props.connectBandwidth(connectBandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectBandwidth This parameter is required.
         */
        public Builder connectBandwidth(final com.aliyun.ros.cdk.core.IResolvable connectBandwidth) {
            this.props.connectBandwidth(connectBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * @return {@code this}
         * @param payer This parameter is required.
         */
        public Builder payer(final java.lang.String payer) {
            this.props.payer(payer);
            return this;
        }
        /**
         * @return {@code this}
         * @param payer This parameter is required.
         */
        public Builder payer(final com.aliyun.ros.cdk.core.IResolvable payer) {
            this.props.payer(payer);
            return this;
        }

        /**
         * @return {@code this}
         * @param resource This parameter is required.
         */
        public Builder resource(final com.aliyun.ros.cdk.core.IResolvable resource) {
            this.props.resource(resource);
            return this;
        }
        /**
         * @return {@code this}
         * @param resource This parameter is required.
         */
        public Builder resource(final java.util.List<? extends java.lang.Object> resource) {
            this.props.resource(resource);
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
         * @param serviceDescription This parameter is required.
         */
        public Builder serviceDescription(final java.lang.String serviceDescription) {
            this.props.serviceDescription(serviceDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceDescription This parameter is required.
         */
        public Builder serviceDescription(final com.aliyun.ros.cdk.core.IResolvable serviceDescription) {
            this.props.serviceDescription(serviceDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceResourceType This parameter is required.
         */
        public Builder serviceResourceType(final java.lang.String serviceResourceType) {
            this.props.serviceResourceType(serviceResourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceResourceType This parameter is required.
         */
        public Builder serviceResourceType(final com.aliyun.ros.cdk.core.IResolvable serviceResourceType) {
            this.props.serviceResourceType(serviceResourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param user This parameter is required.
         */
        public Builder user(final com.aliyun.ros.cdk.core.IResolvable user) {
            this.props.user(user);
            return this;
        }
        /**
         * @return {@code this}
         * @param user This parameter is required.
         */
        public Builder user(final java.util.List<? extends java.lang.Object> user) {
            this.props.user(user);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneAffinityEnabled This parameter is required.
         */
        public Builder zoneAffinityEnabled(final java.lang.Boolean zoneAffinityEnabled) {
            this.props.zoneAffinityEnabled(zoneAffinityEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneAffinityEnabled This parameter is required.
         */
        public Builder zoneAffinityEnabled(final com.aliyun.ros.cdk.core.IResolvable zoneAffinityEnabled) {
            this.props.zoneAffinityEnabled(zoneAffinityEnabled);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.privatelink.RosVpcEndpointService}.
         */
        @Override
        public com.aliyun.ros.cdk.privatelink.RosVpcEndpointService build() {
            return new com.aliyun.ros.cdk.privatelink.RosVpcEndpointService(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
