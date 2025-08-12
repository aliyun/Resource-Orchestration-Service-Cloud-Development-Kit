package com.aliyun.ros.cdk.apig.datasource;

/**
 * Properties for defining a <code>RosGateways</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateways
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.686Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.datasource.RosGatewaysProps")
@software.amazon.jsii.Jsii.Proxy(RosGatewaysProps.Jsii$Proxy.class)
public interface RosGatewaysProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
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
        java.lang.Object gatewayName;
        java.lang.Object refreshOptions;
        java.lang.Object resourceGroupId;

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
         * Sets the value of {@link RosGatewaysProps#getGatewayName}
         * @param gatewayName the value to be set.
         * @return {@code this}
         */
        public Builder gatewayName(java.lang.String gatewayName) {
            this.gatewayName = gatewayName;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getGatewayName}
         * @param gatewayName the value to be set.
         * @return {@code this}
         */
        public Builder gatewayName(com.aliyun.ros.cdk.core.IResolvable gatewayName) {
            this.gatewayName = gatewayName;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosGatewaysProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
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
        private final java.lang.Object gatewayName;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayName = software.amazon.jsii.Kernel.get(this, "gatewayName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayId = builder.gatewayId;
            this.gatewayName = builder.gatewayName;
            this.refreshOptions = builder.refreshOptions;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getGatewayName() {
            return this.gatewayName;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGatewayId() != null) {
                data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            }
            if (this.getGatewayName() != null) {
                data.set("gatewayName", om.valueToTree(this.getGatewayName()));
            }
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.datasource.RosGatewaysProps"));
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
            if (this.gatewayName != null ? !this.gatewayName.equals(that.gatewayName) : that.gatewayName != null) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayId != null ? this.gatewayId.hashCode() : 0;
            result = 31 * result + (this.gatewayName != null ? this.gatewayName.hashCode() : 0);
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
