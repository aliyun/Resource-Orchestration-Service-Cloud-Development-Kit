package com.aliyun.ros.cdk.privatelink;

/**
 * Properties for defining a `ALIYUN::PrivateLink::VpcEndpointServiceAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:43.801Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.VpcEndpointServiceAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(VpcEndpointServiceAttachmentProps.Jsii$Proxy.class)
public interface VpcEndpointServiceAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property resourceId: The resource id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceId();

    /**
     * Property resourceType: The resource type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceType();

    /**
     * Property serviceId: The endpoint service that is associated with the endpoint.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceId();

    /**
     * @return a {@link Builder} of {@link VpcEndpointServiceAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcEndpointServiceAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcEndpointServiceAttachmentProps> {
        private java.lang.Object resourceId;
        private java.lang.Object resourceType;
        private java.lang.Object serviceId;

        /**
         * Sets the value of {@link VpcEndpointServiceAttachmentProps#getResourceId}
         * @param resourceId Property resourceId: The resource id. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceId(java.lang.String resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceAttachmentProps#getResourceId}
         * @param resourceId Property resourceId: The resource id. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceId(com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.resourceId = resourceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceAttachmentProps#getResourceType}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceAttachmentProps#getResourceType}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceAttachmentProps#getServiceId}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceId(java.lang.String serviceId) {
            this.serviceId = serviceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceAttachmentProps#getServiceId}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
            this.serviceId = serviceId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcEndpointServiceAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcEndpointServiceAttachmentProps build() {
            return new Jsii$Proxy(resourceId, resourceType, serviceId);
        }
    }

    /**
     * An implementation for {@link VpcEndpointServiceAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcEndpointServiceAttachmentProps {
        private final java.lang.Object resourceId;
        private final java.lang.Object resourceType;
        private final java.lang.Object serviceId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resourceId = software.amazon.jsii.Kernel.get(this, "resourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object resourceId, final java.lang.Object resourceType, final java.lang.Object serviceId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resourceId = java.util.Objects.requireNonNull(resourceId, "resourceId is required");
            this.resourceType = java.util.Objects.requireNonNull(resourceType, "resourceType is required");
            this.serviceId = java.util.Objects.requireNonNull(serviceId, "serviceId is required");
        }

        @Override
        public final java.lang.Object getResourceId() {
            return this.resourceId;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.lang.Object getServiceId() {
            return this.serviceId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("resourceId", om.valueToTree(this.getResourceId()));
            data.set("resourceType", om.valueToTree(this.getResourceType()));
            data.set("serviceId", om.valueToTree(this.getServiceId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.VpcEndpointServiceAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcEndpointServiceAttachmentProps.Jsii$Proxy that = (VpcEndpointServiceAttachmentProps.Jsii$Proxy) o;

            if (!resourceId.equals(that.resourceId)) return false;
            if (!resourceType.equals(that.resourceType)) return false;
            return this.serviceId.equals(that.serviceId);
        }

        @Override
        public final int hashCode() {
            int result = this.resourceId.hashCode();
            result = 31 * result + (this.resourceType.hashCode());
            result = 31 * result + (this.serviceId.hashCode());
            return result;
        }
    }
}
