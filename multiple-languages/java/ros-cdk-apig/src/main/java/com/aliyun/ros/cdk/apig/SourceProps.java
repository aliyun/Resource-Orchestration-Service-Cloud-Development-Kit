package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>Source</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-source
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:45.497Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.SourceProps")
@software.amazon.jsii.Jsii.Proxy(SourceProps.Jsii$Proxy.class)
public interface SourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property gatewayId: The gateway ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayId() {
        return null;
    }

    /**
     * Property k8SSourceConfig: The K8s source configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getK8SSourceConfig() {
        return null;
    }

    /**
     * Property nacosSourceConfig: The Nacos source configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNacosSourceConfig() {
        return null;
    }

    /**
     * Property resourceGroupId: The resource group ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property type: The source type: - MSE_NACOS: MSE Nacos.
     * <p>
     * <ul>
     * <li>K8S: Container service.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SourceProps> {
        java.lang.Object gatewayId;
        java.lang.Object k8SSourceConfig;
        java.lang.Object nacosSourceConfig;
        java.lang.Object resourceGroupId;
        java.lang.Object type;

        /**
         * Sets the value of {@link SourceProps#getGatewayId}
         * @param gatewayId Property gatewayId: The gateway ID.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link SourceProps#getGatewayId}
         * @param gatewayId Property gatewayId: The gateway ID.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link SourceProps#getK8SSourceConfig}
         * @param k8SSourceConfig Property k8SSourceConfig: The K8s source configuration.
         * @return {@code this}
         */
        public Builder k8SSourceConfig(com.aliyun.ros.cdk.core.IResolvable k8SSourceConfig) {
            this.k8SSourceConfig = k8SSourceConfig;
            return this;
        }

        /**
         * Sets the value of {@link SourceProps#getK8SSourceConfig}
         * @param k8SSourceConfig Property k8SSourceConfig: The K8s source configuration.
         * @return {@code this}
         */
        public Builder k8SSourceConfig(com.aliyun.ros.cdk.apig.RosSource.K8sSourceConfigProperty k8SSourceConfig) {
            this.k8SSourceConfig = k8SSourceConfig;
            return this;
        }

        /**
         * Sets the value of {@link SourceProps#getNacosSourceConfig}
         * @param nacosSourceConfig Property nacosSourceConfig: The Nacos source configuration.
         * @return {@code this}
         */
        public Builder nacosSourceConfig(com.aliyun.ros.cdk.core.IResolvable nacosSourceConfig) {
            this.nacosSourceConfig = nacosSourceConfig;
            return this;
        }

        /**
         * Sets the value of {@link SourceProps#getNacosSourceConfig}
         * @param nacosSourceConfig Property nacosSourceConfig: The Nacos source configuration.
         * @return {@code this}
         */
        public Builder nacosSourceConfig(com.aliyun.ros.cdk.apig.RosSource.NacosSourceConfigProperty nacosSourceConfig) {
            this.nacosSourceConfig = nacosSourceConfig;
            return this;
        }

        /**
         * Sets the value of {@link SourceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SourceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link SourceProps#getType}
         * @param type Property type: The source type: - MSE_NACOS: MSE Nacos.
         *             <ul>
         *             <li>K8S: Container service.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link SourceProps#getType}
         * @param type Property type: The source type: - MSE_NACOS: MSE Nacos.
         *             <ul>
         *             <li>K8S: Container service.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceProps {
        private final java.lang.Object gatewayId;
        private final java.lang.Object k8SSourceConfig;
        private final java.lang.Object nacosSourceConfig;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.k8SSourceConfig = software.amazon.jsii.Kernel.get(this, "k8SSourceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nacosSourceConfig = software.amazon.jsii.Kernel.get(this, "nacosSourceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayId = builder.gatewayId;
            this.k8SSourceConfig = builder.k8SSourceConfig;
            this.nacosSourceConfig = builder.nacosSourceConfig;
            this.resourceGroupId = builder.resourceGroupId;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getK8SSourceConfig() {
            return this.k8SSourceConfig;
        }

        @Override
        public final java.lang.Object getNacosSourceConfig() {
            return this.nacosSourceConfig;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getGatewayId() != null) {
                data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            }
            if (this.getK8SSourceConfig() != null) {
                data.set("k8SSourceConfig", om.valueToTree(this.getK8SSourceConfig()));
            }
            if (this.getNacosSourceConfig() != null) {
                data.set("nacosSourceConfig", om.valueToTree(this.getNacosSourceConfig()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.SourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SourceProps.Jsii$Proxy that = (SourceProps.Jsii$Proxy) o;

            if (this.gatewayId != null ? !this.gatewayId.equals(that.gatewayId) : that.gatewayId != null) return false;
            if (this.k8SSourceConfig != null ? !this.k8SSourceConfig.equals(that.k8SSourceConfig) : that.k8SSourceConfig != null) return false;
            if (this.nacosSourceConfig != null ? !this.nacosSourceConfig.equals(that.nacosSourceConfig) : that.nacosSourceConfig != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayId != null ? this.gatewayId.hashCode() : 0;
            result = 31 * result + (this.k8SSourceConfig != null ? this.k8SSourceConfig.hashCode() : 0);
            result = 31 * result + (this.nacosSourceConfig != null ? this.nacosSourceConfig.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
