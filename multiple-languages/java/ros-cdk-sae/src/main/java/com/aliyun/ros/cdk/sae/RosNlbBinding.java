package com.aliyun.ros.cdk.sae;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SAE::NlbBinding</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:29.838Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosNlbBinding")
public class RosNlbBinding extends com.aliyun.ros.cdk.core.RosResource {

    protected RosNlbBinding(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosNlbBinding(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sae.RosNlbBinding.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosNlbBinding(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.RosNlbBindingProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNlbId() {
        return software.amazon.jsii.Kernel.get(this, "attrNlbId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppId() {
        return software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appId", java.util.Objects.requireNonNull(value, "appId is required"));
    }

    /**
     */
    public void setAppId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appId", java.util.Objects.requireNonNull(value, "appId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListeners() {
        return software.amazon.jsii.Kernel.get(this, "listeners", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListeners(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listeners", java.util.Objects.requireNonNull(value, "listeners is required"));
    }

    /**
     */
    public void setListeners(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.sae.RosNlbBinding.ListenersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.sae.RosNlbBinding.ListenersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "listeners", java.util.Objects.requireNonNull(value, "listeners is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNlbId() {
        return software.amazon.jsii.Kernel.get(this, "nlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNlbId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nlbId", java.util.Objects.requireNonNull(value, "nlbId is required"));
    }

    /**
     */
    public void setNlbId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nlbId", java.util.Objects.requireNonNull(value, "nlbId is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.RosNlbBinding.ListenersProperty")
    @software.amazon.jsii.Jsii.Proxy(ListenersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ListenersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTargetPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCertIds() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ListenersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ListenersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ListenersProperty> {
            java.lang.Object port;
            java.lang.Object protocol;
            java.lang.Object targetPort;
            java.lang.Object certIds;

            /**
             * Sets the value of {@link ListenersProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ListenersProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link ListenersProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link ListenersProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link ListenersProperty#getTargetPort}
             * @param targetPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetPort(java.lang.Number targetPort) {
                this.targetPort = targetPort;
                return this;
            }

            /**
             * Sets the value of {@link ListenersProperty#getTargetPort}
             * @param targetPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder targetPort(com.aliyun.ros.cdk.core.IResolvable targetPort) {
                this.targetPort = targetPort;
                return this;
            }

            /**
             * Sets the value of {@link ListenersProperty#getCertIds}
             * @param certIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certIds(java.lang.String certIds) {
                this.certIds = certIds;
                return this;
            }

            /**
             * Sets the value of {@link ListenersProperty#getCertIds}
             * @param certIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder certIds(com.aliyun.ros.cdk.core.IResolvable certIds) {
                this.certIds = certIds;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ListenersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ListenersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ListenersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ListenersProperty {
            private final java.lang.Object port;
            private final java.lang.Object protocol;
            private final java.lang.Object targetPort;
            private final java.lang.Object certIds;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.targetPort = software.amazon.jsii.Kernel.get(this, "targetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.certIds = software.amazon.jsii.Kernel.get(this, "certIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
                this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
                this.targetPort = java.util.Objects.requireNonNull(builder.targetPort, "targetPort is required");
                this.certIds = builder.certIds;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            public final java.lang.Object getTargetPort() {
                return this.targetPort;
            }

            @Override
            public final java.lang.Object getCertIds() {
                return this.certIds;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("port", om.valueToTree(this.getPort()));
                data.set("protocol", om.valueToTree(this.getProtocol()));
                data.set("targetPort", om.valueToTree(this.getTargetPort()));
                if (this.getCertIds() != null) {
                    data.set("certIds", om.valueToTree(this.getCertIds()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sae.RosNlbBinding.ListenersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ListenersProperty.Jsii$Proxy that = (ListenersProperty.Jsii$Proxy) o;

                if (!port.equals(that.port)) return false;
                if (!protocol.equals(that.protocol)) return false;
                if (!targetPort.equals(that.targetPort)) return false;
                return this.certIds != null ? this.certIds.equals(that.certIds) : that.certIds == null;
            }

            @Override
            public final int hashCode() {
                int result = this.port.hashCode();
                result = 31 * result + (this.protocol.hashCode());
                result = 31 * result + (this.targetPort.hashCode());
                result = 31 * result + (this.certIds != null ? this.certIds.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.RosNlbBinding}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.RosNlbBinding> {
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
        private final com.aliyun.ros.cdk.sae.RosNlbBindingProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.RosNlbBindingProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appId This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props.appId(appId);
            return this;
        }
        /**
         * @return {@code this}
         * @param appId This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props.appId(appId);
            return this;
        }

        /**
         * @return {@code this}
         * @param listeners This parameter is required.
         */
        public Builder listeners(final com.aliyun.ros.cdk.core.IResolvable listeners) {
            this.props.listeners(listeners);
            return this;
        }
        /**
         * @return {@code this}
         * @param listeners This parameter is required.
         */
        public Builder listeners(final java.util.List<? extends java.lang.Object> listeners) {
            this.props.listeners(listeners);
            return this;
        }

        /**
         * @return {@code this}
         * @param nlbId This parameter is required.
         */
        public Builder nlbId(final java.lang.String nlbId) {
            this.props.nlbId(nlbId);
            return this;
        }
        /**
         * @return {@code this}
         * @param nlbId This parameter is required.
         */
        public Builder nlbId(final com.aliyun.ros.cdk.core.IResolvable nlbId) {
            this.props.nlbId(nlbId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.RosNlbBinding}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.RosNlbBinding build() {
            return new com.aliyun.ros.cdk.sae.RosNlbBinding(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
