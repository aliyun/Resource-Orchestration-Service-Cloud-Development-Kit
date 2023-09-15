package com.aliyun.ros.cdk.computenest;

/**
 * Properties for defining a <code>ALIYUN::ComputeNest::ServiceInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:24.156Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.computenest.$Module.class, fqn = "@alicloud/ros-cdk-computenest.ServiceInstanceProps")
@software.amazon.jsii.Jsii.Proxy(ServiceInstanceProps.Jsii$Proxy.class)
public interface ServiceInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property service: Service details.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getService();

    /**
     * Property commodity: Cloud market commodity purchase parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCommodity() {
        return null;
    }

    /**
     * Property contactGroup: Alarm Contact Group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContactGroup() {
        return null;
    }

    /**
     * Property enableInstanceOps: Whether the service instance has the O &amp; M function.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li>true: The service instance has a generation O &amp; M function.</li>
     * <li>false: The service instance does not have the O &amp; M function.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableInstanceOps() {
        return null;
    }

    /**
     * Property enableUserPrometheus: Whether Prometheus monitoring is enabled.
     * <p>
     * Possible values:
     * <p>
     * <ul>
     * <li>true: enabled.</li>
     * <li>false: not enabled.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableUserPrometheus() {
        return null;
    }

    /**
     * Property marketInstanceId: The ID of the cloud marketplace instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMarketInstanceId() {
        return null;
    }

    /**
     * Property name: The name of the service instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * Property operationName: Change operation name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOperationName() {
        return null;
    }

    /**
     * Property parameters: The parameters entered by the deployment service instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     * Property predefinedParameterName: Package name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPredefinedParameterName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property specificationCode: Commodity specification Code.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpecificationCode() {
        return null;
    }

    /**
     * Property tags: Tags of service instance.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property templateName: Template name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ServiceInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ServiceInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ServiceInstanceProps> {
        java.lang.Object service;
        java.lang.Object commodity;
        java.lang.Object contactGroup;
        java.lang.Object enableInstanceOps;
        java.lang.Object enableUserPrometheus;
        java.lang.Object marketInstanceId;
        java.lang.Object name;
        java.lang.Object operationName;
        java.lang.Object parameters;
        java.lang.Object predefinedParameterName;
        java.lang.Object resourceGroupId;
        java.lang.Object specificationCode;
        java.util.List<com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty> tags;
        java.lang.Object templateName;

        /**
         * Sets the value of {@link ServiceInstanceProps#getService}
         * @param service Property service: Service details. This parameter is required.
         * @return {@code this}
         */
        public Builder service(com.aliyun.ros.cdk.computenest.RosServiceInstance.ServiceProperty service) {
            this.service = service;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getService}
         * @param service Property service: Service details. This parameter is required.
         * @return {@code this}
         */
        public Builder service(com.aliyun.ros.cdk.core.IResolvable service) {
            this.service = service;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getCommodity}
         * @param commodity Property commodity: Cloud market commodity purchase parameters.
         * @return {@code this}
         */
        public Builder commodity(com.aliyun.ros.cdk.core.IResolvable commodity) {
            this.commodity = commodity;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getCommodity}
         * @param commodity Property commodity: Cloud market commodity purchase parameters.
         * @return {@code this}
         */
        public Builder commodity(com.aliyun.ros.cdk.computenest.RosServiceInstance.CommodityProperty commodity) {
            this.commodity = commodity;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getContactGroup}
         * @param contactGroup Property contactGroup: Alarm Contact Group.
         * @return {@code this}
         */
        public Builder contactGroup(java.lang.String contactGroup) {
            this.contactGroup = contactGroup;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getContactGroup}
         * @param contactGroup Property contactGroup: Alarm Contact Group.
         * @return {@code this}
         */
        public Builder contactGroup(com.aliyun.ros.cdk.core.IResolvable contactGroup) {
            this.contactGroup = contactGroup;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getEnableInstanceOps}
         * @param enableInstanceOps Property enableInstanceOps: Whether the service instance has the O &amp; M function.
         *                          Possible values:
         *                          <p>
         *                          <ul>
         *                          <li>true: The service instance has a generation O &amp; M function.</li>
         *                          <li>false: The service instance does not have the O &amp; M function.</li>
         *                          </ul>
         * @return {@code this}
         */
        public Builder enableInstanceOps(java.lang.Boolean enableInstanceOps) {
            this.enableInstanceOps = enableInstanceOps;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getEnableInstanceOps}
         * @param enableInstanceOps Property enableInstanceOps: Whether the service instance has the O &amp; M function.
         *                          Possible values:
         *                          <p>
         *                          <ul>
         *                          <li>true: The service instance has a generation O &amp; M function.</li>
         *                          <li>false: The service instance does not have the O &amp; M function.</li>
         *                          </ul>
         * @return {@code this}
         */
        public Builder enableInstanceOps(com.aliyun.ros.cdk.core.IResolvable enableInstanceOps) {
            this.enableInstanceOps = enableInstanceOps;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getEnableUserPrometheus}
         * @param enableUserPrometheus Property enableUserPrometheus: Whether Prometheus monitoring is enabled.
         *                             Possible values:
         *                             <p>
         *                             <ul>
         *                             <li>true: enabled.</li>
         *                             <li>false: not enabled.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder enableUserPrometheus(java.lang.Boolean enableUserPrometheus) {
            this.enableUserPrometheus = enableUserPrometheus;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getEnableUserPrometheus}
         * @param enableUserPrometheus Property enableUserPrometheus: Whether Prometheus monitoring is enabled.
         *                             Possible values:
         *                             <p>
         *                             <ul>
         *                             <li>true: enabled.</li>
         *                             <li>false: not enabled.</li>
         *                             </ul>
         * @return {@code this}
         */
        public Builder enableUserPrometheus(com.aliyun.ros.cdk.core.IResolvable enableUserPrometheus) {
            this.enableUserPrometheus = enableUserPrometheus;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getMarketInstanceId}
         * @param marketInstanceId Property marketInstanceId: The ID of the cloud marketplace instance.
         * @return {@code this}
         */
        public Builder marketInstanceId(java.lang.String marketInstanceId) {
            this.marketInstanceId = marketInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getMarketInstanceId}
         * @param marketInstanceId Property marketInstanceId: The ID of the cloud marketplace instance.
         * @return {@code this}
         */
        public Builder marketInstanceId(com.aliyun.ros.cdk.core.IResolvable marketInstanceId) {
            this.marketInstanceId = marketInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getName}
         * @param name Property name: The name of the service instance.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getName}
         * @param name Property name: The name of the service instance.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getOperationName}
         * @param operationName Property operationName: Change operation name.
         * @return {@code this}
         */
        public Builder operationName(java.lang.String operationName) {
            this.operationName = operationName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getOperationName}
         * @param operationName Property operationName: Change operation name.
         * @return {@code this}
         */
        public Builder operationName(com.aliyun.ros.cdk.core.IResolvable operationName) {
            this.operationName = operationName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getParameters}
         * @param parameters Property parameters: The parameters entered by the deployment service instance.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getParameters}
         * @param parameters Property parameters: The parameters entered by the deployment service instance.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getPredefinedParameterName}
         * @param predefinedParameterName Property predefinedParameterName: Package name.
         * @return {@code this}
         */
        public Builder predefinedParameterName(java.lang.String predefinedParameterName) {
            this.predefinedParameterName = predefinedParameterName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getPredefinedParameterName}
         * @param predefinedParameterName Property predefinedParameterName: Package name.
         * @return {@code this}
         */
        public Builder predefinedParameterName(com.aliyun.ros.cdk.core.IResolvable predefinedParameterName) {
            this.predefinedParameterName = predefinedParameterName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getSpecificationCode}
         * @param specificationCode Property specificationCode: Commodity specification Code.
         * @return {@code this}
         */
        public Builder specificationCode(java.lang.String specificationCode) {
            this.specificationCode = specificationCode;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getSpecificationCode}
         * @param specificationCode Property specificationCode: Commodity specification Code.
         * @return {@code this}
         */
        public Builder specificationCode(com.aliyun.ros.cdk.core.IResolvable specificationCode) {
            this.specificationCode = specificationCode;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getTags}
         * @param tags Property tags: Tags of service instance.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getTemplateName}
         * @param templateName Property templateName: Template name.
         * @return {@code this}
         */
        public Builder templateName(java.lang.String templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Sets the value of {@link ServiceInstanceProps#getTemplateName}
         * @param templateName Property templateName: Template name.
         * @return {@code this}
         */
        public Builder templateName(com.aliyun.ros.cdk.core.IResolvable templateName) {
            this.templateName = templateName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ServiceInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ServiceInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ServiceInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceInstanceProps {
        private final java.lang.Object service;
        private final java.lang.Object commodity;
        private final java.lang.Object contactGroup;
        private final java.lang.Object enableInstanceOps;
        private final java.lang.Object enableUserPrometheus;
        private final java.lang.Object marketInstanceId;
        private final java.lang.Object name;
        private final java.lang.Object operationName;
        private final java.lang.Object parameters;
        private final java.lang.Object predefinedParameterName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object specificationCode;
        private final java.util.List<com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty> tags;
        private final java.lang.Object templateName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.service = software.amazon.jsii.Kernel.get(this, "service", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.commodity = software.amazon.jsii.Kernel.get(this, "commodity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contactGroup = software.amazon.jsii.Kernel.get(this, "contactGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableInstanceOps = software.amazon.jsii.Kernel.get(this, "enableInstanceOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableUserPrometheus = software.amazon.jsii.Kernel.get(this, "enableUserPrometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.marketInstanceId = software.amazon.jsii.Kernel.get(this, "marketInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operationName = software.amazon.jsii.Kernel.get(this, "operationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.predefinedParameterName = software.amazon.jsii.Kernel.get(this, "predefinedParameterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.specificationCode = software.amazon.jsii.Kernel.get(this, "specificationCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty.class)));
            this.templateName = software.amazon.jsii.Kernel.get(this, "templateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.service = java.util.Objects.requireNonNull(builder.service, "service is required");
            this.commodity = builder.commodity;
            this.contactGroup = builder.contactGroup;
            this.enableInstanceOps = builder.enableInstanceOps;
            this.enableUserPrometheus = builder.enableUserPrometheus;
            this.marketInstanceId = builder.marketInstanceId;
            this.name = builder.name;
            this.operationName = builder.operationName;
            this.parameters = builder.parameters;
            this.predefinedParameterName = builder.predefinedParameterName;
            this.resourceGroupId = builder.resourceGroupId;
            this.specificationCode = builder.specificationCode;
            this.tags = (java.util.List<com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty>)builder.tags;
            this.templateName = builder.templateName;
        }

        @Override
        public final java.lang.Object getService() {
            return this.service;
        }

        @Override
        public final java.lang.Object getCommodity() {
            return this.commodity;
        }

        @Override
        public final java.lang.Object getContactGroup() {
            return this.contactGroup;
        }

        @Override
        public final java.lang.Object getEnableInstanceOps() {
            return this.enableInstanceOps;
        }

        @Override
        public final java.lang.Object getEnableUserPrometheus() {
            return this.enableUserPrometheus;
        }

        @Override
        public final java.lang.Object getMarketInstanceId() {
            return this.marketInstanceId;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOperationName() {
            return this.operationName;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getPredefinedParameterName() {
            return this.predefinedParameterName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSpecificationCode() {
            return this.specificationCode;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.computenest.RosServiceInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTemplateName() {
            return this.templateName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("service", om.valueToTree(this.getService()));
            if (this.getCommodity() != null) {
                data.set("commodity", om.valueToTree(this.getCommodity()));
            }
            if (this.getContactGroup() != null) {
                data.set("contactGroup", om.valueToTree(this.getContactGroup()));
            }
            if (this.getEnableInstanceOps() != null) {
                data.set("enableInstanceOps", om.valueToTree(this.getEnableInstanceOps()));
            }
            if (this.getEnableUserPrometheus() != null) {
                data.set("enableUserPrometheus", om.valueToTree(this.getEnableUserPrometheus()));
            }
            if (this.getMarketInstanceId() != null) {
                data.set("marketInstanceId", om.valueToTree(this.getMarketInstanceId()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }
            if (this.getOperationName() != null) {
                data.set("operationName", om.valueToTree(this.getOperationName()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getPredefinedParameterName() != null) {
                data.set("predefinedParameterName", om.valueToTree(this.getPredefinedParameterName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSpecificationCode() != null) {
                data.set("specificationCode", om.valueToTree(this.getSpecificationCode()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTemplateName() != null) {
                data.set("templateName", om.valueToTree(this.getTemplateName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-computenest.ServiceInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ServiceInstanceProps.Jsii$Proxy that = (ServiceInstanceProps.Jsii$Proxy) o;

            if (!service.equals(that.service)) return false;
            if (this.commodity != null ? !this.commodity.equals(that.commodity) : that.commodity != null) return false;
            if (this.contactGroup != null ? !this.contactGroup.equals(that.contactGroup) : that.contactGroup != null) return false;
            if (this.enableInstanceOps != null ? !this.enableInstanceOps.equals(that.enableInstanceOps) : that.enableInstanceOps != null) return false;
            if (this.enableUserPrometheus != null ? !this.enableUserPrometheus.equals(that.enableUserPrometheus) : that.enableUserPrometheus != null) return false;
            if (this.marketInstanceId != null ? !this.marketInstanceId.equals(that.marketInstanceId) : that.marketInstanceId != null) return false;
            if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
            if (this.operationName != null ? !this.operationName.equals(that.operationName) : that.operationName != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.predefinedParameterName != null ? !this.predefinedParameterName.equals(that.predefinedParameterName) : that.predefinedParameterName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.specificationCode != null ? !this.specificationCode.equals(that.specificationCode) : that.specificationCode != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            return this.templateName != null ? this.templateName.equals(that.templateName) : that.templateName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.service.hashCode();
            result = 31 * result + (this.commodity != null ? this.commodity.hashCode() : 0);
            result = 31 * result + (this.contactGroup != null ? this.contactGroup.hashCode() : 0);
            result = 31 * result + (this.enableInstanceOps != null ? this.enableInstanceOps.hashCode() : 0);
            result = 31 * result + (this.enableUserPrometheus != null ? this.enableUserPrometheus.hashCode() : 0);
            result = 31 * result + (this.marketInstanceId != null ? this.marketInstanceId.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            result = 31 * result + (this.operationName != null ? this.operationName.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.predefinedParameterName != null ? this.predefinedParameterName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.specificationCode != null ? this.specificationCode.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.templateName != null ? this.templateName.hashCode() : 0);
            return result;
        }
    }
}
