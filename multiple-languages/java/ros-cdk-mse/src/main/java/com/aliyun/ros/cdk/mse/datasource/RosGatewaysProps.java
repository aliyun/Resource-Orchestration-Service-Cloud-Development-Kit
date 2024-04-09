package com.aliyun.ros.cdk.mse.datasource;

/**
 * Properties for defining a <code>RosGateways</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:33.858Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.datasource.RosGatewaysProps")
@software.amazon.jsii.Jsii.Proxy(RosGatewaysProps.Jsii$Proxy.class)
public interface RosGatewaysProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpc() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosGatewaysProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosGatewaysProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosGatewaysProps> {
        java.lang.Object gatewayId;
        java.lang.Object gatewayType;
        java.lang.Object instanceId;
        java.lang.Object name;
        java.lang.Object vpc;

        /**
         * Sets the value of {@link RosGatewaysProps#getGatewayId}
         * @param gatewayId the value to be set.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getGatewayId}
         * @param gatewayId the value to be set.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getGatewayType}
         * @param gatewayType the value to be set.
         * @return {@code this}
         */
        public Builder gatewayType(java.lang.String gatewayType) {
            this.gatewayType = gatewayType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getGatewayType}
         * @param gatewayType the value to be set.
         * @return {@code this}
         */
        public Builder gatewayType(com.aliyun.ros.cdk.core.IResolvable gatewayType) {
            this.gatewayType = gatewayType;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getInstanceId}
         * @param instanceId the value to be set.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getVpc}
         * @param vpc the value to be set.
         * @return {@code this}
         */
        public Builder vpc(java.lang.String vpc) {
            this.vpc = vpc;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getVpc}
         * @param vpc the value to be set.
         * @return {@code this}
         */
        public Builder vpc(com.aliyun.ros.cdk.core.IResolvable vpc) {
            this.vpc = vpc;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosGatewaysProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosGatewaysProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosGatewaysProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosGatewaysProps {
        private final java.lang.Object gatewayId;
        private final java.lang.Object gatewayType;
        private final java.lang.Object instanceId;
        private final java.lang.Object name;
        private final java.lang.Object vpc;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayType = software.amazon.jsii.Kernel.get(this, "gatewayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpc = software.amazon.jsii.Kernel.get(this, "vpc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayId = builder.gatewayId;
            this.gatewayType = builder.gatewayType;
            this.instanceId = builder.instanceId;
            this.name = builder.name;
            this.vpc = builder.vpc;
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getGatewayType() {
            return this.gatewayType;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getVpc() {
            return this.vpc;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGatewayId() != null) {
                data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            }
            if (this.getGatewayType() != null) {
                data.set("gatewayType", om.valueToTree(this.getGatewayType()));
            }
            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getVpc() != null) {
                data.set("vpc", om.valueToTree(this.getVpc()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-mse.datasource.RosGatewaysProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosGatewaysProps.Jsii$Proxy that = (RosGatewaysProps.Jsii$Proxy) o;

            if (this.gatewayId != null ? !this.gatewayId.equals(that.gatewayId) : that.gatewayId != null) return false;
            if (this.gatewayType != null ? !this.gatewayType.equals(that.gatewayType) : that.gatewayType != null) return false;
            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            return this.vpc != null ? this.vpc.equals(that.vpc) : that.vpc == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayId != null ? this.gatewayId.hashCode() : 0;
            result = 31 * result + (this.gatewayType != null ? this.gatewayType.hashCode() : 0);
            result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.vpc != null ? this.vpc.hashCode() : 0);
            return result;
        }
    }
}
