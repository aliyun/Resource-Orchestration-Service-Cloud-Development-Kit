package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>Consumer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumer
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:45.371Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.ConsumerProps")
@software.amazon.jsii.Jsii.Proxy(ConsumerProps.Jsii$Proxy.class)
public interface ConsumerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property akSkIdentityConfigs: List of AK/SK identity configurations.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAkSkIdentityConfigs() {
        return null;
    }

    /**
     * Property apikeyIdentityConfig: API key identity configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApikeyIdentityConfig() {
        return null;
    }

    /**
     * Property description: The description of the consumer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property enable: Whether to enable the consumer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return null;
    }

    /**
     * Property gatewayType: The type of the gateway.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayType() {
        return null;
    }

    /**
     * Property jwtIdentityConfig: JWT identity configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJwtIdentityConfig() {
        return null;
    }

    /**
     * Property name: The name of the consumer.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ConsumerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConsumerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConsumerProps> {
        java.lang.Object akSkIdentityConfigs;
        java.lang.Object apikeyIdentityConfig;
        java.lang.Object description;
        java.lang.Object enable;
        java.lang.Object gatewayType;
        java.lang.Object jwtIdentityConfig;
        java.lang.Object name;

        /**
         * Sets the value of {@link ConsumerProps#getAkSkIdentityConfigs}
         * @param akSkIdentityConfigs Property akSkIdentityConfigs: List of AK/SK identity configurations.
         * @return {@code this}
         */
        public Builder akSkIdentityConfigs(com.aliyun.ros.cdk.core.IResolvable akSkIdentityConfigs) {
            this.akSkIdentityConfigs = akSkIdentityConfigs;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getAkSkIdentityConfigs}
         * @param akSkIdentityConfigs Property akSkIdentityConfigs: List of AK/SK identity configurations.
         * @return {@code this}
         */
        public Builder akSkIdentityConfigs(java.util.List<? extends java.lang.Object> akSkIdentityConfigs) {
            this.akSkIdentityConfigs = akSkIdentityConfigs;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getApikeyIdentityConfig}
         * @param apikeyIdentityConfig Property apikeyIdentityConfig: API key identity configuration.
         * @return {@code this}
         */
        public Builder apikeyIdentityConfig(com.aliyun.ros.cdk.core.IResolvable apikeyIdentityConfig) {
            this.apikeyIdentityConfig = apikeyIdentityConfig;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getApikeyIdentityConfig}
         * @param apikeyIdentityConfig Property apikeyIdentityConfig: API key identity configuration.
         * @return {@code this}
         */
        public Builder apikeyIdentityConfig(com.aliyun.ros.cdk.apig.RosConsumer.ApikeyIdentityConfigProperty apikeyIdentityConfig) {
            this.apikeyIdentityConfig = apikeyIdentityConfig;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getDescription}
         * @param description Property description: The description of the consumer.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getDescription}
         * @param description Property description: The description of the consumer.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getEnable}
         * @param enable Property enable: Whether to enable the consumer.
         * @return {@code this}
         */
        public Builder enable(java.lang.Boolean enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getEnable}
         * @param enable Property enable: Whether to enable the consumer.
         * @return {@code this}
         */
        public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
            this.enable = enable;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getGatewayType}
         * @param gatewayType Property gatewayType: The type of the gateway.
         * @return {@code this}
         */
        public Builder gatewayType(java.lang.String gatewayType) {
            this.gatewayType = gatewayType;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getGatewayType}
         * @param gatewayType Property gatewayType: The type of the gateway.
         * @return {@code this}
         */
        public Builder gatewayType(com.aliyun.ros.cdk.core.IResolvable gatewayType) {
            this.gatewayType = gatewayType;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getJwtIdentityConfig}
         * @param jwtIdentityConfig Property jwtIdentityConfig: JWT identity configuration.
         * @return {@code this}
         */
        public Builder jwtIdentityConfig(com.aliyun.ros.cdk.core.IResolvable jwtIdentityConfig) {
            this.jwtIdentityConfig = jwtIdentityConfig;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getJwtIdentityConfig}
         * @param jwtIdentityConfig Property jwtIdentityConfig: JWT identity configuration.
         * @return {@code this}
         */
        public Builder jwtIdentityConfig(com.aliyun.ros.cdk.apig.RosConsumer.JwtIdentityConfigProperty jwtIdentityConfig) {
            this.jwtIdentityConfig = jwtIdentityConfig;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getName}
         * @param name Property name: The name of the consumer.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerProps#getName}
         * @param name Property name: The name of the consumer.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConsumerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConsumerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConsumerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerProps {
        private final java.lang.Object akSkIdentityConfigs;
        private final java.lang.Object apikeyIdentityConfig;
        private final java.lang.Object description;
        private final java.lang.Object enable;
        private final java.lang.Object gatewayType;
        private final java.lang.Object jwtIdentityConfig;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.akSkIdentityConfigs = software.amazon.jsii.Kernel.get(this, "akSkIdentityConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.apikeyIdentityConfig = software.amazon.jsii.Kernel.get(this, "apikeyIdentityConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayType = software.amazon.jsii.Kernel.get(this, "gatewayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jwtIdentityConfig = software.amazon.jsii.Kernel.get(this, "jwtIdentityConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.akSkIdentityConfigs = builder.akSkIdentityConfigs;
            this.apikeyIdentityConfig = builder.apikeyIdentityConfig;
            this.description = builder.description;
            this.enable = builder.enable;
            this.gatewayType = builder.gatewayType;
            this.jwtIdentityConfig = builder.jwtIdentityConfig;
            this.name = builder.name;
        }

        @Override
        public final java.lang.Object getAkSkIdentityConfigs() {
            return this.akSkIdentityConfigs;
        }

        @Override
        public final java.lang.Object getApikeyIdentityConfig() {
            return this.apikeyIdentityConfig;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEnable() {
            return this.enable;
        }

        @Override
        public final java.lang.Object getGatewayType() {
            return this.gatewayType;
        }

        @Override
        public final java.lang.Object getJwtIdentityConfig() {
            return this.jwtIdentityConfig;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAkSkIdentityConfigs() != null) {
                data.set("akSkIdentityConfigs", om.valueToTree(this.getAkSkIdentityConfigs()));
            }
            if (this.getApikeyIdentityConfig() != null) {
                data.set("apikeyIdentityConfig", om.valueToTree(this.getApikeyIdentityConfig()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEnable() != null) {
                data.set("enable", om.valueToTree(this.getEnable()));
            }
            if (this.getGatewayType() != null) {
                data.set("gatewayType", om.valueToTree(this.getGatewayType()));
            }
            if (this.getJwtIdentityConfig() != null) {
                data.set("jwtIdentityConfig", om.valueToTree(this.getJwtIdentityConfig()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.ConsumerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConsumerProps.Jsii$Proxy that = (ConsumerProps.Jsii$Proxy) o;

            if (this.akSkIdentityConfigs != null ? !this.akSkIdentityConfigs.equals(that.akSkIdentityConfigs) : that.akSkIdentityConfigs != null) return false;
            if (this.apikeyIdentityConfig != null ? !this.apikeyIdentityConfig.equals(that.apikeyIdentityConfig) : that.apikeyIdentityConfig != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.enable != null ? !this.enable.equals(that.enable) : that.enable != null) return false;
            if (this.gatewayType != null ? !this.gatewayType.equals(that.gatewayType) : that.gatewayType != null) return false;
            if (this.jwtIdentityConfig != null ? !this.jwtIdentityConfig.equals(that.jwtIdentityConfig) : that.jwtIdentityConfig != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.akSkIdentityConfigs != null ? this.akSkIdentityConfigs.hashCode() : 0;
            result = 31 * result + (this.apikeyIdentityConfig != null ? this.apikeyIdentityConfig.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.enable != null ? this.enable.hashCode() : 0);
            result = 31 * result + (this.gatewayType != null ? this.gatewayType.hashCode() : 0);
            result = 31 * result + (this.jwtIdentityConfig != null ? this.jwtIdentityConfig.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
