package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>VpcGatewayEndpoint</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpoint
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:51.462Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpcGatewayEndpointProps")
@software.amazon.jsii.Jsii.Proxy(VpcGatewayEndpointProps.Jsii$Proxy.class)
public interface VpcGatewayEndpointProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property serviceName: Terminal service name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     * Property vpcId: The VPC ID of the gateway endpoint is to be created.
     * <p>
     * The VPC must be in the same region as the gateway endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property endpointDescription: Description information of the gateway endpoint.
     * <p>
     * The length of the description information is between 1 and 255 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointDescription() {
        return null;
    }

    /**
     * Property endpointName: The name of the gateway endpoint.
     * <p>
     * The length of the name is between 1 and 128 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointName() {
        return null;
    }

    /**
     * Property policyDocument: Access policies for cloud services.
     * <p>
     * For the syntax and structure of access policies, see Permission Policy Syntax and Structure.
     * illustrate
     * This field is required when the selected endpoint service supports setting access policies;
     * This field must be empty when the selected endpoint service does not support setting access policies.
     * Whether the terminal node service supports setting access policies can be obtained through the ListVpcEndpointServicesByEndUser interface. SupportPolicy is true to indicate support, otherwise it is not supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyDocument() {
        return null;
    }

    /**
     * Property resourceGroupId: The resource group ID to which the gateway endpoint belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: The list of tags in the form of key/value pairs.
     * <p>
     * You can define a maximum of 20 tags.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.vpc.RosVpcGatewayEndpoint.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcGatewayEndpointProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcGatewayEndpointProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcGatewayEndpointProps> {
        java.lang.Object serviceName;
        java.lang.Object vpcId;
        java.lang.Object endpointDescription;
        java.lang.Object endpointName;
        java.lang.Object policyDocument;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.vpc.RosVpcGatewayEndpoint.TagsProperty> tags;

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getServiceName}
         * @param serviceName Property serviceName: Terminal service name. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getServiceName}
         * @param serviceName Property serviceName: Terminal service name. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID of the gateway endpoint is to be created. This parameter is required.
         *              The VPC must be in the same region as the gateway endpoint.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getVpcId}
         * @param vpcId Property vpcId: The VPC ID of the gateway endpoint is to be created. This parameter is required.
         *              The VPC must be in the same region as the gateway endpoint.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getEndpointDescription}
         * @param endpointDescription Property endpointDescription: Description information of the gateway endpoint.
         *                            The length of the description information is between 1 and 255 characters.
         * @return {@code this}
         */
        public Builder endpointDescription(java.lang.String endpointDescription) {
            this.endpointDescription = endpointDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getEndpointDescription}
         * @param endpointDescription Property endpointDescription: Description information of the gateway endpoint.
         *                            The length of the description information is between 1 and 255 characters.
         * @return {@code this}
         */
        public Builder endpointDescription(com.aliyun.ros.cdk.core.IResolvable endpointDescription) {
            this.endpointDescription = endpointDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getEndpointName}
         * @param endpointName Property endpointName: The name of the gateway endpoint.
         *                     The length of the name is between 1 and 128 characters.
         * @return {@code this}
         */
        public Builder endpointName(java.lang.String endpointName) {
            this.endpointName = endpointName;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getEndpointName}
         * @param endpointName Property endpointName: The name of the gateway endpoint.
         *                     The length of the name is between 1 and 128 characters.
         * @return {@code this}
         */
        public Builder endpointName(com.aliyun.ros.cdk.core.IResolvable endpointName) {
            this.endpointName = endpointName;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getPolicyDocument}
         * @param policyDocument Property policyDocument: Access policies for cloud services.
         *                       For the syntax and structure of access policies, see Permission Policy Syntax and Structure.
         *                       illustrate
         *                       This field is required when the selected endpoint service supports setting access policies;
         *                       This field must be empty when the selected endpoint service does not support setting access policies.
         *                       Whether the terminal node service supports setting access policies can be obtained through the ListVpcEndpointServicesByEndUser interface. SupportPolicy is true to indicate support, otherwise it is not supported.
         * @return {@code this}
         */
        public Builder policyDocument(java.lang.String policyDocument) {
            this.policyDocument = policyDocument;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getPolicyDocument}
         * @param policyDocument Property policyDocument: Access policies for cloud services.
         *                       For the syntax and structure of access policies, see Permission Policy Syntax and Structure.
         *                       illustrate
         *                       This field is required when the selected endpoint service supports setting access policies;
         *                       This field must be empty when the selected endpoint service does not support setting access policies.
         *                       Whether the terminal node service supports setting access policies can be obtained through the ListVpcEndpointServicesByEndUser interface. SupportPolicy is true to indicate support, otherwise it is not supported.
         * @return {@code this}
         */
        public Builder policyDocument(com.aliyun.ros.cdk.core.IResolvable policyDocument) {
            this.policyDocument = policyDocument;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID to which the gateway endpoint belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The resource group ID to which the gateway endpoint belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VpcGatewayEndpointProps#getTags}
         * @param tags Property tags: The list of tags in the form of key/value pairs.
         *             You can define a maximum of 20 tags.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.vpc.RosVpcGatewayEndpoint.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosVpcGatewayEndpoint.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcGatewayEndpointProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcGatewayEndpointProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcGatewayEndpointProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcGatewayEndpointProps {
        private final java.lang.Object serviceName;
        private final java.lang.Object vpcId;
        private final java.lang.Object endpointDescription;
        private final java.lang.Object endpointName;
        private final java.lang.Object policyDocument;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.vpc.RosVpcGatewayEndpoint.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointDescription = software.amazon.jsii.Kernel.get(this, "endpointDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointName = software.amazon.jsii.Kernel.get(this, "endpointName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyDocument = software.amazon.jsii.Kernel.get(this, "policyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.RosVpcGatewayEndpoint.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.endpointDescription = builder.endpointDescription;
            this.endpointName = builder.endpointName;
            this.policyDocument = builder.policyDocument;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.vpc.RosVpcGatewayEndpoint.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getEndpointDescription() {
            return this.endpointDescription;
        }

        @Override
        public final java.lang.Object getEndpointName() {
            return this.endpointName;
        }

        @Override
        public final java.lang.Object getPolicyDocument() {
            return this.policyDocument;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.vpc.RosVpcGatewayEndpoint.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("serviceName", om.valueToTree(this.getServiceName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getEndpointDescription() != null) {
                data.set("endpointDescription", om.valueToTree(this.getEndpointDescription()));
            }
            if (this.getEndpointName() != null) {
                data.set("endpointName", om.valueToTree(this.getEndpointName()));
            }
            if (this.getPolicyDocument() != null) {
                data.set("policyDocument", om.valueToTree(this.getPolicyDocument()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.VpcGatewayEndpointProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcGatewayEndpointProps.Jsii$Proxy that = (VpcGatewayEndpointProps.Jsii$Proxy) o;

            if (!serviceName.equals(that.serviceName)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.endpointDescription != null ? !this.endpointDescription.equals(that.endpointDescription) : that.endpointDescription != null) return false;
            if (this.endpointName != null ? !this.endpointName.equals(that.endpointName) : that.endpointName != null) return false;
            if (this.policyDocument != null ? !this.policyDocument.equals(that.policyDocument) : that.policyDocument != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.serviceName.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.endpointDescription != null ? this.endpointDescription.hashCode() : 0);
            result = 31 * result + (this.endpointName != null ? this.endpointName.hashCode() : 0);
            result = 31 * result + (this.policyDocument != null ? this.policyDocument.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
