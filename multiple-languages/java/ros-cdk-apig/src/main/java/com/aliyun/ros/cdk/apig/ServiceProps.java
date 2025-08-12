package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>Service</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-service
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.595Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.ServiceProps")
@software.amazon.jsii.Jsii.Proxy(ServiceProps.Jsii$Proxy.class)
public interface ServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayId();

    /**
     * Property addresses: Service Address List.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddresses() {
        return null;
    }

    /**
     * Property aiServiceConfig: AI service configuration when SourceType equals AI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAiServiceConfig() {
        return null;
    }

    /**
     * Property groupName: The service group name.
     * <p>
     * Required when SourceType is MSE_NACOS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGroupName() {
        return null;
    }

    /**
     * Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service.
     * <p>
     * When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
     * When the SourceType is K8S and MSE_NACOS, it needs to be specified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespace() {
        return null;
    }

    /**
     * Property qualifier: The function version or alias.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQualifier() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceName() {
        return null;
    }

    /**
     * Property sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServiceProps> {
        java.lang.Object gatewayId;
        java.lang.Object addresses;
        java.lang.Object aiServiceConfig;
        java.lang.Object groupName;
        java.lang.Object namespace;
        java.lang.Object qualifier;
        java.lang.Object resourceGroupId;
        java.lang.Object serviceName;
        java.lang.Object sourceType;

        /**
         * Sets the value of {@link ServiceProps#getGatewayId}
         * @param gatewayId Property gatewayId: The ID of the Cloud Native API Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getGatewayId}
         * @param gatewayId Property gatewayId: The ID of the Cloud Native API Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getAddresses}
         * @param addresses Property addresses: Service Address List.
         * @return {@code this}
         */
        public Builder addresses(com.aliyun.ros.cdk.core.IResolvable addresses) {
            this.addresses = addresses;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getAddresses}
         * @param addresses Property addresses: Service Address List.
         * @return {@code this}
         */
        public Builder addresses(java.util.List<? extends java.lang.Object> addresses) {
            this.addresses = addresses;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getAiServiceConfig}
         * @param aiServiceConfig Property aiServiceConfig: AI service configuration when SourceType equals AI.
         * @return {@code this}
         */
        public Builder aiServiceConfig(com.aliyun.ros.cdk.core.IResolvable aiServiceConfig) {
            this.aiServiceConfig = aiServiceConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getAiServiceConfig}
         * @param aiServiceConfig Property aiServiceConfig: AI service configuration when SourceType equals AI.
         * @return {@code this}
         */
        public Builder aiServiceConfig(com.aliyun.ros.cdk.apig.RosService.AiServiceConfigProperty aiServiceConfig) {
            this.aiServiceConfig = aiServiceConfig;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getGroupName}
         * @param groupName Property groupName: The service group name.
         *                  Required when SourceType is MSE_NACOS.
         * @return {@code this}
         */
        public Builder groupName(java.lang.String groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getGroupName}
         * @param groupName Property groupName: The service group name.
         *                  Required when SourceType is MSE_NACOS.
         * @return {@code this}
         */
        public Builder groupName(com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.groupName = groupName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getNamespace}
         * @param namespace Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service.
         *                  When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
         *                  When the SourceType is K8S and MSE_NACOS, it needs to be specified.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getNamespace}
         * @param namespace Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service.
         *                  When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
         *                  When the SourceType is K8S and MSE_NACOS, it needs to be specified.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getQualifier}
         * @param qualifier Property qualifier: The function version or alias.
         * @return {@code this}
         */
        public Builder qualifier(java.lang.String qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getQualifier}
         * @param qualifier Property qualifier: The function version or alias.
         * @return {@code this}
         */
        public Builder qualifier(com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getServiceName}
         * @param serviceName Property serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getServiceName}
         * @param serviceName Property serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getSourceType}
         * @param sourceType Property sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link ServiceProps#getSourceType}
         * @param sourceType Property sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceProps {
        private final java.lang.Object gatewayId;
        private final java.lang.Object addresses;
        private final java.lang.Object aiServiceConfig;
        private final java.lang.Object groupName;
        private final java.lang.Object namespace;
        private final java.lang.Object qualifier;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object serviceName;
        private final java.lang.Object sourceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addresses = software.amazon.jsii.Kernel.get(this, "addresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aiServiceConfig = software.amazon.jsii.Kernel.get(this, "aiServiceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupName = software.amazon.jsii.Kernel.get(this, "groupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.gatewayId = java.util.Objects.requireNonNull(builder.gatewayId, "gatewayId is required");
            this.addresses = builder.addresses;
            this.aiServiceConfig = builder.aiServiceConfig;
            this.groupName = builder.groupName;
            this.namespace = builder.namespace;
            this.qualifier = builder.qualifier;
            this.resourceGroupId = builder.resourceGroupId;
            this.serviceName = builder.serviceName;
            this.sourceType = builder.sourceType;
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getAddresses() {
            return this.addresses;
        }

        @Override
        public final java.lang.Object getAiServiceConfig() {
            return this.aiServiceConfig;
        }

        @Override
        public final java.lang.Object getGroupName() {
            return this.groupName;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getQualifier() {
            return this.qualifier;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            if (this.getAddresses() != null) {
                data.set("addresses", om.valueToTree(this.getAddresses()));
            }
            if (this.getAiServiceConfig() != null) {
                data.set("aiServiceConfig", om.valueToTree(this.getAiServiceConfig()));
            }
            if (this.getGroupName() != null) {
                data.set("groupName", om.valueToTree(this.getGroupName()));
            }
            if (this.getNamespace() != null) {
                data.set("namespace", om.valueToTree(this.getNamespace()));
            }
            if (this.getQualifier() != null) {
                data.set("qualifier", om.valueToTree(this.getQualifier()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getServiceName() != null) {
                data.set("serviceName", om.valueToTree(this.getServiceName()));
            }
            if (this.getSourceType() != null) {
                data.set("sourceType", om.valueToTree(this.getSourceType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.ServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServiceProps.Jsii$Proxy that = (ServiceProps.Jsii$Proxy) o;

            if (!gatewayId.equals(that.gatewayId)) return false;
            if (this.addresses != null ? !this.addresses.equals(that.addresses) : that.addresses != null) return false;
            if (this.aiServiceConfig != null ? !this.aiServiceConfig.equals(that.aiServiceConfig) : that.aiServiceConfig != null) return false;
            if (this.groupName != null ? !this.groupName.equals(that.groupName) : that.groupName != null) return false;
            if (this.namespace != null ? !this.namespace.equals(that.namespace) : that.namespace != null) return false;
            if (this.qualifier != null ? !this.qualifier.equals(that.qualifier) : that.qualifier != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.serviceName != null ? !this.serviceName.equals(that.serviceName) : that.serviceName != null) return false;
            return this.sourceType != null ? this.sourceType.equals(that.sourceType) : that.sourceType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.gatewayId.hashCode();
            result = 31 * result + (this.addresses != null ? this.addresses.hashCode() : 0);
            result = 31 * result + (this.aiServiceConfig != null ? this.aiServiceConfig.hashCode() : 0);
            result = 31 * result + (this.groupName != null ? this.groupName.hashCode() : 0);
            result = 31 * result + (this.namespace != null ? this.namespace.hashCode() : 0);
            result = 31 * result + (this.qualifier != null ? this.qualifier.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceName != null ? this.serviceName.hashCode() : 0);
            result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
            return result;
        }
    }
}
