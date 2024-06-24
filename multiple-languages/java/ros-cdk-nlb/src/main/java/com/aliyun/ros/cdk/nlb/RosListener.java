package com.aliyun.ros.cdk.nlb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::NLB::Listener</code>, which is used to create a listener.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:07.832Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosListener")
public class RosListener extends com.aliyun.ros.cdk.core.RosResource {

    protected RosListener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosListener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.nlb.RosListener.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosListener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.RosListenerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerId() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerProtocol() {
        return software.amazon.jsii.Kernel.get(this, "listenerProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerProtocol", java.util.Objects.requireNonNull(value, "listenerProtocol is required"));
    }

    /**
     */
    public void setListenerProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerProtocol", java.util.Objects.requireNonNull(value, "listenerProtocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "serverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServerGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serverGroupId", java.util.Objects.requireNonNull(value, "serverGroupId is required"));
    }

    /**
     */
    public void setServerGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serverGroupId", java.util.Objects.requireNonNull(value, "serverGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlpnEnabled() {
        return software.amazon.jsii.Kernel.get(this, "alpnEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlpnEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "alpnEnabled", value);
    }

    /**
     */
    public void setAlpnEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alpnEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAlpnPolicy() {
        return software.amazon.jsii.Kernel.get(this, "alpnPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAlpnPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "alpnPolicy", value);
    }

    /**
     */
    public void setAlpnPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "alpnPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCaCertificateIds() {
        return software.amazon.jsii.Kernel.get(this, "caCertificateIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCaCertificateIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "caCertificateIds", value);
    }

    /**
     */
    public void setCaCertificateIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "caCertificateIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCaEnabled() {
        return software.amazon.jsii.Kernel.get(this, "caEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCaEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "caEnabled", value);
    }

    /**
     */
    public void setCaEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "caEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCertificateIds() {
        return software.amazon.jsii.Kernel.get(this, "certificateIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCertificateIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "certificateIds", value);
    }

    /**
     */
    public void setCertificateIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "certificateIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCps() {
        return software.amazon.jsii.Kernel.get(this, "cps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCps(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cps", value);
    }

    /**
     */
    public void setCps(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cps", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enable", value);
    }

    /**
     */
    public void setEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEndPort() {
        return software.amazon.jsii.Kernel.get(this, "endPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEndPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "endPort", value);
    }

    /**
     */
    public void setEndPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "endPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIdleTimeout() {
        return software.amazon.jsii.Kernel.get(this, "idleTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIdleTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "idleTimeout", value);
    }

    /**
     */
    public void setIdleTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "idleTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getListenerDescription() {
        return software.amazon.jsii.Kernel.get(this, "listenerDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "listenerDescription", value);
    }

    /**
     */
    public void setListenerDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", value);
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMss() {
        return software.amazon.jsii.Kernel.get(this, "mss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMss(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "mss", value);
    }

    /**
     */
    public void setMss(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mss", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProxyProtocolEnabled() {
        return software.amazon.jsii.Kernel.get(this, "proxyProtocolEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProxyProtocolEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "proxyProtocolEnabled", value);
    }

    /**
     */
    public void setProxyProtocolEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proxyProtocolEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecSensorEnabled() {
        return software.amazon.jsii.Kernel.get(this, "secSensorEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecSensorEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "secSensorEnabled", value);
    }

    /**
     */
    public void setSecSensorEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secSensorEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "securityPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityPolicyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityPolicyId", value);
    }

    /**
     */
    public void setSecurityPolicyId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityPolicyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStartPort() {
        return software.amazon.jsii.Kernel.get(this, "startPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStartPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "startPort", value);
    }

    /**
     */
    public void setStartPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "startPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nlb.RosListener.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.nlb.RosListener.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.RosListener.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.nlb.RosListener.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.RosListener.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlb.RosListener.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.nlb.RosListener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlb.RosListener> {
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
        private final com.aliyun.ros.cdk.nlb.RosListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlb.RosListenerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param listenerProtocol This parameter is required.
         */
        public Builder listenerProtocol(final java.lang.String listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerProtocol This parameter is required.
         */
        public Builder listenerProtocol(final com.aliyun.ros.cdk.core.IResolvable listenerProtocol) {
            this.props.listenerProtocol(listenerProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param serverGroupId This parameter is required.
         */
        public Builder serverGroupId(final java.lang.String serverGroupId) {
            this.props.serverGroupId(serverGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param serverGroupId This parameter is required.
         */
        public Builder serverGroupId(final com.aliyun.ros.cdk.core.IResolvable serverGroupId) {
            this.props.serverGroupId(serverGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param alpnEnabled This parameter is required.
         */
        public Builder alpnEnabled(final java.lang.Boolean alpnEnabled) {
            this.props.alpnEnabled(alpnEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param alpnEnabled This parameter is required.
         */
        public Builder alpnEnabled(final com.aliyun.ros.cdk.core.IResolvable alpnEnabled) {
            this.props.alpnEnabled(alpnEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param alpnPolicy This parameter is required.
         */
        public Builder alpnPolicy(final java.lang.String alpnPolicy) {
            this.props.alpnPolicy(alpnPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param alpnPolicy This parameter is required.
         */
        public Builder alpnPolicy(final com.aliyun.ros.cdk.core.IResolvable alpnPolicy) {
            this.props.alpnPolicy(alpnPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param caCertificateIds This parameter is required.
         */
        public Builder caCertificateIds(final com.aliyun.ros.cdk.core.IResolvable caCertificateIds) {
            this.props.caCertificateIds(caCertificateIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param caCertificateIds This parameter is required.
         */
        public Builder caCertificateIds(final java.util.List<? extends java.lang.Object> caCertificateIds) {
            this.props.caCertificateIds(caCertificateIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param caEnabled This parameter is required.
         */
        public Builder caEnabled(final java.lang.Boolean caEnabled) {
            this.props.caEnabled(caEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param caEnabled This parameter is required.
         */
        public Builder caEnabled(final com.aliyun.ros.cdk.core.IResolvable caEnabled) {
            this.props.caEnabled(caEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param certificateIds This parameter is required.
         */
        public Builder certificateIds(final com.aliyun.ros.cdk.core.IResolvable certificateIds) {
            this.props.certificateIds(certificateIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param certificateIds This parameter is required.
         */
        public Builder certificateIds(final java.util.List<? extends java.lang.Object> certificateIds) {
            this.props.certificateIds(certificateIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param cps This parameter is required.
         */
        public Builder cps(final java.lang.Number cps) {
            this.props.cps(cps);
            return this;
        }
        /**
         * @return {@code this}
         * @param cps This parameter is required.
         */
        public Builder cps(final com.aliyun.ros.cdk.core.IResolvable cps) {
            this.props.cps(cps);
            return this;
        }

        /**
         * @return {@code this}
         * @param enable This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * @return {@code this}
         * @param enable This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * @return {@code this}
         * @param endPort This parameter is required.
         */
        public Builder endPort(final java.lang.Number endPort) {
            this.props.endPort(endPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param endPort This parameter is required.
         */
        public Builder endPort(final com.aliyun.ros.cdk.core.IResolvable endPort) {
            this.props.endPort(endPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param idleTimeout This parameter is required.
         */
        public Builder idleTimeout(final java.lang.Number idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param idleTimeout This parameter is required.
         */
        public Builder idleTimeout(final com.aliyun.ros.cdk.core.IResolvable idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerDescription This parameter is required.
         */
        public Builder listenerDescription(final java.lang.String listenerDescription) {
            this.props.listenerDescription(listenerDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerDescription This parameter is required.
         */
        public Builder listenerDescription(final com.aliyun.ros.cdk.core.IResolvable listenerDescription) {
            this.props.listenerDescription(listenerDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param mss This parameter is required.
         */
        public Builder mss(final java.lang.Number mss) {
            this.props.mss(mss);
            return this;
        }
        /**
         * @return {@code this}
         * @param mss This parameter is required.
         */
        public Builder mss(final com.aliyun.ros.cdk.core.IResolvable mss) {
            this.props.mss(mss);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxyProtocolEnabled This parameter is required.
         */
        public Builder proxyProtocolEnabled(final java.lang.Boolean proxyProtocolEnabled) {
            this.props.proxyProtocolEnabled(proxyProtocolEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param proxyProtocolEnabled This parameter is required.
         */
        public Builder proxyProtocolEnabled(final com.aliyun.ros.cdk.core.IResolvable proxyProtocolEnabled) {
            this.props.proxyProtocolEnabled(proxyProtocolEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param secSensorEnabled This parameter is required.
         */
        public Builder secSensorEnabled(final java.lang.Boolean secSensorEnabled) {
            this.props.secSensorEnabled(secSensorEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param secSensorEnabled This parameter is required.
         */
        public Builder secSensorEnabled(final com.aliyun.ros.cdk.core.IResolvable secSensorEnabled) {
            this.props.secSensorEnabled(secSensorEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityPolicyId This parameter is required.
         */
        public Builder securityPolicyId(final java.lang.String securityPolicyId) {
            this.props.securityPolicyId(securityPolicyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityPolicyId This parameter is required.
         */
        public Builder securityPolicyId(final com.aliyun.ros.cdk.core.IResolvable securityPolicyId) {
            this.props.securityPolicyId(securityPolicyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param startPort This parameter is required.
         */
        public Builder startPort(final java.lang.Number startPort) {
            this.props.startPort(startPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param startPort This parameter is required.
         */
        public Builder startPort(final com.aliyun.ros.cdk.core.IResolvable startPort) {
            this.props.startPort(startPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.nlb.RosListener.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlb.RosListener}.
         */
        @Override
        public com.aliyun.ros.cdk.nlb.RosListener build() {
            return new com.aliyun.ros.cdk.nlb.RosListener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
