package com.aliyun.ros.cdk.privatelink;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::PrivateLink::VpcEndpoint</code>, which is used to create an endpoint.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.336Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.RosVpcEndpoint")
public class RosVpcEndpoint extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVpcEndpoint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVpcEndpoint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVpcEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.privatelink.RosVpcEndpointProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointDomain() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointDomain", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointName() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneDomains() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneDomains", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointDescription() {
        return software.amazon.jsii.Kernel.get(this, "endpointDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointDescription", value);
    }

    /**
     */
    public void setEndpointDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointName() {
        return software.amazon.jsii.Kernel.get(this, "endpointName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointName", value);
    }

    /**
     */
    public void setEndpointName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndpointType() {
        return software.amazon.jsii.Kernel.get(this, "endpointType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndpointType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "endpointType", value);
    }

    /**
     */
    public void setEndpointType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endpointType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProtectedEnabled() {
        return software.amazon.jsii.Kernel.get(this, "protectedEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtectedEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "protectedEnabled", value);
    }

    /**
     */
    public void setProtectedEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protectedEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
        return software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceId", value);
    }

    /**
     */
    public void setServiceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServiceName() {
        return software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serviceName", value);
    }

    /**
     */
    public void setServiceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZone() {
        return software.amazon.jsii.Kernel.get(this, "zone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZone(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zone", value);
    }

    /**
     */
    public void setZone(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.ZoneProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.ZoneProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "zone", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZonePrivateIpAddressCount() {
        return software.amazon.jsii.Kernel.get(this, "zonePrivateIpAddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZonePrivateIpAddressCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "zonePrivateIpAddressCount", value);
    }

    /**
     */
    public void setZonePrivateIpAddressCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zonePrivateIpAddressCount", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.RosVpcEndpoint.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.RosVpcEndpoint.TagsProperty"));
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
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty")
    @software.amazon.jsii.Jsii.Proxy(ZoneProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ZoneProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ZoneProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ZoneProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ZoneProperty> {
            java.lang.Object ip;
            java.lang.Object vSwitchId;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link ZoneProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(java.lang.String ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link ZoneProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(com.aliyun.ros.cdk.core.IResolvable ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link ZoneProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneProperty#getVSwitchId}
             * @param vSwitchId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneProperty#getZoneId}
             * @param zoneId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ZoneProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ZoneProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ZoneProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZoneProperty {
            private final java.lang.Object ip;
            private final java.lang.Object vSwitchId;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ip = software.amazon.jsii.Kernel.get(this, "ip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ip = builder.ip;
                this.vSwitchId = builder.vSwitchId;
                this.zoneId = builder.zoneId;
            }

            @Override
            public final java.lang.Object getIp() {
                return this.ip;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
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

                if (this.getIp() != null) {
                    data.set("ip", om.valueToTree(this.getIp()));
                }
                if (this.getVSwitchId() != null) {
                    data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                }
                if (this.getZoneId() != null) {
                    data.set("zoneId", om.valueToTree(this.getZoneId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.RosVpcEndpoint.ZoneProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ZoneProperty.Jsii$Proxy that = (ZoneProperty.Jsii$Proxy) o;

                if (this.ip != null ? !this.ip.equals(that.ip) : that.ip != null) return false;
                if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
                return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ip != null ? this.ip.hashCode() : 0;
                result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
                result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.privatelink.RosVpcEndpoint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint> {
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
        private final com.aliyun.ros.cdk.privatelink.RosVpcEndpointProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.privatelink.RosVpcEndpointProps.Builder();
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
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.util.List<? extends java.lang.Object> securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointDescription This parameter is required.
         */
        public Builder endpointDescription(final java.lang.String endpointDescription) {
            this.props.endpointDescription(endpointDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointDescription This parameter is required.
         */
        public Builder endpointDescription(final com.aliyun.ros.cdk.core.IResolvable endpointDescription) {
            this.props.endpointDescription(endpointDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointName This parameter is required.
         */
        public Builder endpointName(final java.lang.String endpointName) {
            this.props.endpointName(endpointName);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointName This parameter is required.
         */
        public Builder endpointName(final com.aliyun.ros.cdk.core.IResolvable endpointName) {
            this.props.endpointName(endpointName);
            return this;
        }

        /**
         * @return {@code this}
         * @param endpointType This parameter is required.
         */
        public Builder endpointType(final java.lang.String endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }
        /**
         * @return {@code this}
         * @param endpointType This parameter is required.
         */
        public Builder endpointType(final com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.props.endpointType(endpointType);
            return this;
        }

        /**
         * @return {@code this}
         * @param protectedEnabled This parameter is required.
         */
        public Builder protectedEnabled(final java.lang.Boolean protectedEnabled) {
            this.props.protectedEnabled(protectedEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param protectedEnabled This parameter is required.
         */
        public Builder protectedEnabled(final com.aliyun.ros.cdk.core.IResolvable protectedEnabled) {
            this.props.protectedEnabled(protectedEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceId This parameter is required.
         */
        public Builder serviceId(final java.lang.String serviceId) {
            this.props.serviceId(serviceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceId This parameter is required.
         */
        public Builder serviceId(final com.aliyun.ros.cdk.core.IResolvable serviceId) {
            this.props.serviceId(serviceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceName This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceName This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param zone This parameter is required.
         */
        public Builder zone(final com.aliyun.ros.cdk.core.IResolvable zone) {
            this.props.zone(zone);
            return this;
        }
        /**
         * @return {@code this}
         * @param zone This parameter is required.
         */
        public Builder zone(final java.util.List<? extends java.lang.Object> zone) {
            this.props.zone(zone);
            return this;
        }

        /**
         * @return {@code this}
         * @param zonePrivateIpAddressCount This parameter is required.
         */
        public Builder zonePrivateIpAddressCount(final java.lang.Number zonePrivateIpAddressCount) {
            this.props.zonePrivateIpAddressCount(zonePrivateIpAddressCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param zonePrivateIpAddressCount This parameter is required.
         */
        public Builder zonePrivateIpAddressCount(final com.aliyun.ros.cdk.core.IResolvable zonePrivateIpAddressCount) {
            this.props.zonePrivateIpAddressCount(zonePrivateIpAddressCount);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.privatelink.RosVpcEndpoint}.
         */
        @Override
        public com.aliyun.ros.cdk.privatelink.RosVpcEndpoint build() {
            return new com.aliyun.ros.cdk.privatelink.RosVpcEndpoint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
