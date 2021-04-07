package com.aliyun.ros.cdk.uis;

/**
 * A ROS template type:  `ALIYUN::UIS::UisConnection`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:43.131Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.uis.$Module.class, fqn = "@alicloud/ros-cdk-uis.RosUisConnection")
public class RosUisConnection extends com.aliyun.ros.cdk.core.RosResource {

    protected RosUisConnection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosUisConnection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.uis.RosUisConnection.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::UIS::UisConnection`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosUisConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.uis.RosUisConnectionProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUisConnectionId() {
        return software.amazon.jsii.Kernel.get(this, "attrUisConnectionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getUisNodeId() {
        return software.amazon.jsii.Kernel.get(this, "uisNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUisNodeId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "uisNodeId", java.util.Objects.requireNonNull(value, "uisNodeId is required"));
    }

    /**
     */
    public void setUisNodeId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "uisNodeId", java.util.Objects.requireNonNull(value, "uisNodeId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUisProtocol() {
        return software.amazon.jsii.Kernel.get(this, "uisProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUisProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "uisProtocol", java.util.Objects.requireNonNull(value, "uisProtocol is required"));
    }

    /**
     */
    public void setUisProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "uisProtocol", java.util.Objects.requireNonNull(value, "uisProtocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGreConfig() {
        return software.amazon.jsii.Kernel.get(this, "greConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGreConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "greConfig", value);
    }

    /**
     */
    public void setGreConfig(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "greConfig", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getSslConfig() {
        return software.amazon.jsii.Kernel.get(this, "sslConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSslConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sslConfig", value);
    }

    /**
     */
    public void setSslConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.uis.RosUisConnection.SslConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "sslConfig", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.uis.$Module.class, fqn = "@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(GreConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface GreConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCustomerIp();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCustomerSubnet();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCustomerTunnelIp();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLocalIp();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getLocalTunnelIp();

        /**
         * @return a {@link Builder} of {@link GreConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link GreConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<GreConfigProperty> {
            private java.lang.Object customerIp;
            private java.lang.Object customerSubnet;
            private java.lang.Object customerTunnelIp;
            private java.lang.Object localIp;
            private java.lang.Object localTunnelIp;

            /**
             * Sets the value of {@link GreConfigProperty#getCustomerIp}
             * @param customerIp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customerIp(java.lang.String customerIp) {
                this.customerIp = customerIp;
                return this;
            }

            /**
             * Sets the value of {@link GreConfigProperty#getCustomerIp}
             * @param customerIp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customerIp(com.aliyun.ros.cdk.core.IResolvable customerIp) {
                this.customerIp = customerIp;
                return this;
            }

            /**
             * Sets the value of {@link GreConfigProperty#getCustomerSubnet}
             * @param customerSubnet the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customerSubnet(java.lang.String customerSubnet) {
                this.customerSubnet = customerSubnet;
                return this;
            }

            /**
             * Sets the value of {@link GreConfigProperty#getCustomerSubnet}
             * @param customerSubnet the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customerSubnet(com.aliyun.ros.cdk.core.IResolvable customerSubnet) {
                this.customerSubnet = customerSubnet;
                return this;
            }

            /**
             * Sets the value of {@link GreConfigProperty#getCustomerTunnelIp}
             * @param customerTunnelIp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customerTunnelIp(java.lang.String customerTunnelIp) {
                this.customerTunnelIp = customerTunnelIp;
                return this;
            }

            /**
             * Sets the value of {@link GreConfigProperty#getCustomerTunnelIp}
             * @param customerTunnelIp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customerTunnelIp(com.aliyun.ros.cdk.core.IResolvable customerTunnelIp) {
                this.customerTunnelIp = customerTunnelIp;
                return this;
            }

            /**
             * Sets the value of {@link GreConfigProperty#getLocalIp}
             * @param localIp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localIp(java.lang.String localIp) {
                this.localIp = localIp;
                return this;
            }

            /**
             * Sets the value of {@link GreConfigProperty#getLocalIp}
             * @param localIp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localIp(com.aliyun.ros.cdk.core.IResolvable localIp) {
                this.localIp = localIp;
                return this;
            }

            /**
             * Sets the value of {@link GreConfigProperty#getLocalTunnelIp}
             * @param localTunnelIp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localTunnelIp(java.lang.String localTunnelIp) {
                this.localTunnelIp = localTunnelIp;
                return this;
            }

            /**
             * Sets the value of {@link GreConfigProperty#getLocalTunnelIp}
             * @param localTunnelIp the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder localTunnelIp(com.aliyun.ros.cdk.core.IResolvable localTunnelIp) {
                this.localTunnelIp = localTunnelIp;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link GreConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public GreConfigProperty build() {
                return new Jsii$Proxy(customerIp, customerSubnet, customerTunnelIp, localIp, localTunnelIp);
            }
        }

        /**
         * An implementation for {@link GreConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements GreConfigProperty {
            private final java.lang.Object customerIp;
            private final java.lang.Object customerSubnet;
            private final java.lang.Object customerTunnelIp;
            private final java.lang.Object localIp;
            private final java.lang.Object localTunnelIp;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.customerIp = software.amazon.jsii.Kernel.get(this, "customerIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.customerSubnet = software.amazon.jsii.Kernel.get(this, "customerSubnet", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.customerTunnelIp = software.amazon.jsii.Kernel.get(this, "customerTunnelIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localIp = software.amazon.jsii.Kernel.get(this, "localIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.localTunnelIp = software.amazon.jsii.Kernel.get(this, "localTunnelIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object customerIp, final java.lang.Object customerSubnet, final java.lang.Object customerTunnelIp, final java.lang.Object localIp, final java.lang.Object localTunnelIp) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.customerIp = java.util.Objects.requireNonNull(customerIp, "customerIp is required");
                this.customerSubnet = java.util.Objects.requireNonNull(customerSubnet, "customerSubnet is required");
                this.customerTunnelIp = java.util.Objects.requireNonNull(customerTunnelIp, "customerTunnelIp is required");
                this.localIp = java.util.Objects.requireNonNull(localIp, "localIp is required");
                this.localTunnelIp = java.util.Objects.requireNonNull(localTunnelIp, "localTunnelIp is required");
            }

            @Override
            public final java.lang.Object getCustomerIp() {
                return this.customerIp;
            }

            @Override
            public final java.lang.Object getCustomerSubnet() {
                return this.customerSubnet;
            }

            @Override
            public final java.lang.Object getCustomerTunnelIp() {
                return this.customerTunnelIp;
            }

            @Override
            public final java.lang.Object getLocalIp() {
                return this.localIp;
            }

            @Override
            public final java.lang.Object getLocalTunnelIp() {
                return this.localTunnelIp;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("customerIp", om.valueToTree(this.getCustomerIp()));
                data.set("customerSubnet", om.valueToTree(this.getCustomerSubnet()));
                data.set("customerTunnelIp", om.valueToTree(this.getCustomerTunnelIp()));
                data.set("localIp", om.valueToTree(this.getLocalIp()));
                data.set("localTunnelIp", om.valueToTree(this.getLocalTunnelIp()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-uis.RosUisConnection.GreConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                GreConfigProperty.Jsii$Proxy that = (GreConfigProperty.Jsii$Proxy) o;

                if (!customerIp.equals(that.customerIp)) return false;
                if (!customerSubnet.equals(that.customerSubnet)) return false;
                if (!customerTunnelIp.equals(that.customerTunnelIp)) return false;
                if (!localIp.equals(that.localIp)) return false;
                return this.localTunnelIp.equals(that.localTunnelIp);
            }

            @Override
            public final int hashCode() {
                int result = this.customerIp.hashCode();
                result = 31 * result + (this.customerSubnet.hashCode());
                result = 31 * result + (this.customerTunnelIp.hashCode());
                result = 31 * result + (this.localIp.hashCode());
                result = 31 * result + (this.localTunnelIp.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.uis.$Module.class, fqn = "@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(SslConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SslConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getCipher();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

        /**
         * @return a {@link Builder} of {@link SslConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SslConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SslConfigProperty> {
            private java.lang.Object cipher;
            private java.lang.Object port;
            private java.lang.Object protocol;

            /**
             * Sets the value of {@link SslConfigProperty#getCipher}
             * @param cipher the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cipher(java.lang.String cipher) {
                this.cipher = cipher;
                return this;
            }

            /**
             * Sets the value of {@link SslConfigProperty#getCipher}
             * @param cipher the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cipher(com.aliyun.ros.cdk.core.IResolvable cipher) {
                this.cipher = cipher;
                return this;
            }

            /**
             * Sets the value of {@link SslConfigProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link SslConfigProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link SslConfigProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link SslConfigProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SslConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SslConfigProperty build() {
                return new Jsii$Proxy(cipher, port, protocol);
            }
        }

        /**
         * An implementation for {@link SslConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SslConfigProperty {
            private final java.lang.Object cipher;
            private final java.lang.Object port;
            private final java.lang.Object protocol;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cipher = software.amazon.jsii.Kernel.get(this, "cipher", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object cipher, final java.lang.Object port, final java.lang.Object protocol) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cipher = java.util.Objects.requireNonNull(cipher, "cipher is required");
                this.port = java.util.Objects.requireNonNull(port, "port is required");
                this.protocol = java.util.Objects.requireNonNull(protocol, "protocol is required");
            }

            @Override
            public final java.lang.Object getCipher() {
                return this.cipher;
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
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("cipher", om.valueToTree(this.getCipher()));
                data.set("port", om.valueToTree(this.getPort()));
                data.set("protocol", om.valueToTree(this.getProtocol()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-uis.RosUisConnection.SslConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SslConfigProperty.Jsii$Proxy that = (SslConfigProperty.Jsii$Proxy) o;

                if (!cipher.equals(that.cipher)) return false;
                if (!port.equals(that.port)) return false;
                return this.protocol.equals(that.protocol);
            }

            @Override
            public final int hashCode() {
                int result = this.cipher.hashCode();
                result = 31 * result + (this.port.hashCode());
                result = 31 * result + (this.protocol.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.uis.RosUisConnection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.uis.RosUisConnection> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.uis.RosUisConnectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.uis.RosUisConnectionProps.Builder();
        }

        /**
         * @return {@code this}
         * @param uisNodeId This parameter is required.
         */
        public Builder uisNodeId(final java.lang.String uisNodeId) {
            this.props.uisNodeId(uisNodeId);
            return this;
        }
        /**
         * @return {@code this}
         * @param uisNodeId This parameter is required.
         */
        public Builder uisNodeId(final com.aliyun.ros.cdk.core.IResolvable uisNodeId) {
            this.props.uisNodeId(uisNodeId);
            return this;
        }

        /**
         * @return {@code this}
         * @param uisProtocol This parameter is required.
         */
        public Builder uisProtocol(final java.lang.String uisProtocol) {
            this.props.uisProtocol(uisProtocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param uisProtocol This parameter is required.
         */
        public Builder uisProtocol(final com.aliyun.ros.cdk.core.IResolvable uisProtocol) {
            this.props.uisProtocol(uisProtocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param greConfig This parameter is required.
         */
        public Builder greConfig(final com.aliyun.ros.cdk.core.IResolvable greConfig) {
            this.props.greConfig(greConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param greConfig This parameter is required.
         */
        public Builder greConfig(final java.util.List<? extends java.lang.Object> greConfig) {
            this.props.greConfig(greConfig);
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
         * @param sslConfig This parameter is required.
         */
        public Builder sslConfig(final com.aliyun.ros.cdk.core.IResolvable sslConfig) {
            this.props.sslConfig(sslConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param sslConfig This parameter is required.
         */
        public Builder sslConfig(final com.aliyun.ros.cdk.uis.RosUisConnection.SslConfigProperty sslConfig) {
            this.props.sslConfig(sslConfig);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.uis.RosUisConnection}.
         */
        @Override
        public com.aliyun.ros.cdk.uis.RosUisConnection build() {
            return new com.aliyun.ros.cdk.uis.RosUisConnection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
