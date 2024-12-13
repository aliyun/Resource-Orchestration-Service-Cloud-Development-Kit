package com.aliyun.ros.cdk.apig;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::APIG::PluginAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:04.258Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosPluginAttachment")
public class RosPluginAttachment extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPluginAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPluginAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apig.RosPluginAttachment.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPluginAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RosPluginAttachmentProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAttachResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAttachResourceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAttachResourceNames() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAttachResourceParentIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceParentIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAttachResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrAttachResourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrEnvironmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginAttachmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginClassInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginClassInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPluginInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrPluginInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getPluginInfo() {
        return software.amazon.jsii.Kernel.get(this, "pluginInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPluginInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pluginInfo", java.util.Objects.requireNonNull(value, "pluginInfo is required"));
    }

    /**
     */
    public void setPluginInfo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RosPluginAttachment.PluginInfoProperty value) {
        software.amazon.jsii.Kernel.set(this, "pluginInfo", java.util.Objects.requireNonNull(value, "pluginInfo is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAttachResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attachResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAttachResourceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "attachResourceId", value);
    }

    /**
     */
    public void setAttachResourceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "attachResourceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAttachResourceIds() {
        return software.amazon.jsii.Kernel.get(this, "attachResourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAttachResourceIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "attachResourceIds", value);
    }

    /**
     */
    public void setAttachResourceIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "attachResourceIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAttachResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attachResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAttachResourceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "attachResourceType", value);
    }

    /**
     */
    public void setAttachResourceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "attachResourceType", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvironmentId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "environmentId", value);
    }

    /**
     */
    public void setEnvironmentId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "environmentId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosPluginAttachment.PluginInfoProperty")
    @software.amazon.jsii.Jsii.Proxy(PluginInfoProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PluginInfoProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getGatewayId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPluginId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPluginConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PluginInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PluginInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PluginInfoProperty> {
            java.lang.Object gatewayId;
            java.lang.Object pluginId;
            java.lang.Object pluginConfig;

            /**
             * Sets the value of {@link PluginInfoProperty#getGatewayId}
             * @param gatewayId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayId(java.lang.String gatewayId) {
                this.gatewayId = gatewayId;
                return this;
            }

            /**
             * Sets the value of {@link PluginInfoProperty#getGatewayId}
             * @param gatewayId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
                this.gatewayId = gatewayId;
                return this;
            }

            /**
             * Sets the value of {@link PluginInfoProperty#getPluginId}
             * @param pluginId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(java.lang.String pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link PluginInfoProperty#getPluginId}
             * @param pluginId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginId(com.aliyun.ros.cdk.core.IResolvable pluginId) {
                this.pluginId = pluginId;
                return this;
            }

            /**
             * Sets the value of {@link PluginInfoProperty#getPluginConfig}
             * @param pluginConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginConfig(java.lang.String pluginConfig) {
                this.pluginConfig = pluginConfig;
                return this;
            }

            /**
             * Sets the value of {@link PluginInfoProperty#getPluginConfig}
             * @param pluginConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pluginConfig(com.aliyun.ros.cdk.core.IResolvable pluginConfig) {
                this.pluginConfig = pluginConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PluginInfoProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PluginInfoProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PluginInfoProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PluginInfoProperty {
            private final java.lang.Object gatewayId;
            private final java.lang.Object pluginId;
            private final java.lang.Object pluginConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginId = software.amazon.jsii.Kernel.get(this, "pluginId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pluginConfig = software.amazon.jsii.Kernel.get(this, "pluginConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.gatewayId = java.util.Objects.requireNonNull(builder.gatewayId, "gatewayId is required");
                this.pluginId = java.util.Objects.requireNonNull(builder.pluginId, "pluginId is required");
                this.pluginConfig = builder.pluginConfig;
            }

            @Override
            public final java.lang.Object getGatewayId() {
                return this.gatewayId;
            }

            @Override
            public final java.lang.Object getPluginId() {
                return this.pluginId;
            }

            @Override
            public final java.lang.Object getPluginConfig() {
                return this.pluginConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("gatewayId", om.valueToTree(this.getGatewayId()));
                data.set("pluginId", om.valueToTree(this.getPluginId()));
                if (this.getPluginConfig() != null) {
                    data.set("pluginConfig", om.valueToTree(this.getPluginConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosPluginAttachment.PluginInfoProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PluginInfoProperty.Jsii$Proxy that = (PluginInfoProperty.Jsii$Proxy) o;

                if (!gatewayId.equals(that.gatewayId)) return false;
                if (!pluginId.equals(that.pluginId)) return false;
                return this.pluginConfig != null ? this.pluginConfig.equals(that.pluginConfig) : that.pluginConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.gatewayId.hashCode();
                result = 31 * result + (this.pluginId.hashCode());
                result = 31 * result + (this.pluginConfig != null ? this.pluginConfig.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.RosPluginAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.RosPluginAttachment> {
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
        private final com.aliyun.ros.cdk.apig.RosPluginAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.RosPluginAttachmentProps.Builder();
        }

        /**
         * @return {@code this}
         * @param pluginInfo This parameter is required.
         */
        public Builder pluginInfo(final com.aliyun.ros.cdk.core.IResolvable pluginInfo) {
            this.props.pluginInfo(pluginInfo);
            return this;
        }
        /**
         * @return {@code this}
         * @param pluginInfo This parameter is required.
         */
        public Builder pluginInfo(final com.aliyun.ros.cdk.apig.RosPluginAttachment.PluginInfoProperty pluginInfo) {
            this.props.pluginInfo(pluginInfo);
            return this;
        }

        /**
         * @return {@code this}
         * @param attachResourceId This parameter is required.
         */
        public Builder attachResourceId(final java.lang.String attachResourceId) {
            this.props.attachResourceId(attachResourceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param attachResourceId This parameter is required.
         */
        public Builder attachResourceId(final com.aliyun.ros.cdk.core.IResolvable attachResourceId) {
            this.props.attachResourceId(attachResourceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param attachResourceIds This parameter is required.
         */
        public Builder attachResourceIds(final com.aliyun.ros.cdk.core.IResolvable attachResourceIds) {
            this.props.attachResourceIds(attachResourceIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param attachResourceIds This parameter is required.
         */
        public Builder attachResourceIds(final java.util.List<? extends java.lang.Object> attachResourceIds) {
            this.props.attachResourceIds(attachResourceIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param attachResourceType This parameter is required.
         */
        public Builder attachResourceType(final java.lang.String attachResourceType) {
            this.props.attachResourceType(attachResourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param attachResourceType This parameter is required.
         */
        public Builder attachResourceType(final com.aliyun.ros.cdk.core.IResolvable attachResourceType) {
            this.props.attachResourceType(attachResourceType);
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
         * @param environmentId This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * @return {@code this}
         * @param environmentId This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.RosPluginAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.RosPluginAttachment build() {
            return new com.aliyun.ros.cdk.apig.RosPluginAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
