package com.aliyun.ros.cdk.uis;

/**
 * Properties for defining a `ALIYUN::UIS::UisConnection`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:44.149Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.uis.$Module.class, fqn = "@alicloud/ros-cdk-uis.RosUisConnectionProps")
@software.amazon.jsii.Jsii.Proxy(RosUisConnectionProps.Jsii$Proxy.class)
public interface RosUisConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUisNodeId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUisProtocol();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGreConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSslConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosUisConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUisConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUisConnectionProps> {
        private java.lang.Object uisNodeId;
        private java.lang.Object uisProtocol;
        private java.lang.Object description;
        private java.lang.Object greConfig;
        private java.lang.Object name;
        private java.lang.Object sslConfig;

        /**
         * Sets the value of {@link RosUisConnectionProps#getUisNodeId}
         * @param uisNodeId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uisNodeId(java.lang.String uisNodeId) {
            this.uisNodeId = uisNodeId;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getUisNodeId}
         * @param uisNodeId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uisNodeId(com.aliyun.ros.cdk.core.IResolvable uisNodeId) {
            this.uisNodeId = uisNodeId;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getUisProtocol}
         * @param uisProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uisProtocol(java.lang.String uisProtocol) {
            this.uisProtocol = uisProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getUisProtocol}
         * @param uisProtocol the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uisProtocol(com.aliyun.ros.cdk.core.IResolvable uisProtocol) {
            this.uisProtocol = uisProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getGreConfig}
         * @param greConfig the value to be set.
         * @return {@code this}
         */
        public Builder greConfig(com.aliyun.ros.cdk.core.IResolvable greConfig) {
            this.greConfig = greConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getGreConfig}
         * @param greConfig the value to be set.
         * @return {@code this}
         */
        public Builder greConfig(java.util.List<? extends java.lang.Object> greConfig) {
            this.greConfig = greConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getSslConfig}
         * @param sslConfig the value to be set.
         * @return {@code this}
         */
        public Builder sslConfig(com.aliyun.ros.cdk.core.IResolvable sslConfig) {
            this.sslConfig = sslConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosUisConnectionProps#getSslConfig}
         * @param sslConfig the value to be set.
         * @return {@code this}
         */
        public Builder sslConfig(com.aliyun.ros.cdk.uis.RosUisConnection.SslConfigProperty sslConfig) {
            this.sslConfig = sslConfig;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUisConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUisConnectionProps build() {
            return new Jsii$Proxy(uisNodeId, uisProtocol, description, greConfig, name, sslConfig);
        }
    }

    /**
     * An implementation for {@link RosUisConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUisConnectionProps {
        private final java.lang.Object uisNodeId;
        private final java.lang.Object uisProtocol;
        private final java.lang.Object description;
        private final java.lang.Object greConfig;
        private final java.lang.Object name;
        private final java.lang.Object sslConfig;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.uisNodeId = software.amazon.jsii.Kernel.get(this, "uisNodeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uisProtocol = software.amazon.jsii.Kernel.get(this, "uisProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.greConfig = software.amazon.jsii.Kernel.get(this, "greConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sslConfig = software.amazon.jsii.Kernel.get(this, "sslConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object uisNodeId, final java.lang.Object uisProtocol, final java.lang.Object description, final java.lang.Object greConfig, final java.lang.Object name, final java.lang.Object sslConfig) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.uisNodeId = java.util.Objects.requireNonNull(uisNodeId, "uisNodeId is required");
            this.uisProtocol = java.util.Objects.requireNonNull(uisProtocol, "uisProtocol is required");
            this.description = description;
            this.greConfig = greConfig;
            this.name = name;
            this.sslConfig = sslConfig;
        }

        @Override
        public final java.lang.Object getUisNodeId() {
            return this.uisNodeId;
        }

        @Override
        public final java.lang.Object getUisProtocol() {
            return this.uisProtocol;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getGreConfig() {
            return this.greConfig;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getSslConfig() {
            return this.sslConfig;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("uisNodeId", om.valueToTree(this.getUisNodeId()));
            data.set("uisProtocol", om.valueToTree(this.getUisProtocol()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getGreConfig() != null) {
                data.set("greConfig", om.valueToTree(this.getGreConfig()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getSslConfig() != null) {
                data.set("sslConfig", om.valueToTree(this.getSslConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-uis.RosUisConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUisConnectionProps.Jsii$Proxy that = (RosUisConnectionProps.Jsii$Proxy) o;

            if (!uisNodeId.equals(that.uisNodeId)) return false;
            if (!uisProtocol.equals(that.uisProtocol)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.greConfig != null ? !this.greConfig.equals(that.greConfig) : that.greConfig != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.sslConfig != null ? this.sslConfig.equals(that.sslConfig) : that.sslConfig == null;
        }

        @Override
        public final int hashCode() {
            int result = this.uisNodeId.hashCode();
            result = 31 * result + (this.uisProtocol.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.greConfig != null ? this.greConfig.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.sslConfig != null ? this.sslConfig.hashCode() : 0);
            return result;
        }
    }
}
