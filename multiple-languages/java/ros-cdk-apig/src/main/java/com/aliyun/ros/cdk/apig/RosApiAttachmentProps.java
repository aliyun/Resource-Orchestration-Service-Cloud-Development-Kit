package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>RosApiAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.649Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosApiAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(RosApiAttachmentProps.Jsii$Proxy.class)
public interface RosApiAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBackendScene();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHttpApiId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceConfigs();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApiAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApiAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApiAttachmentProps> {
        java.lang.Object backendScene;
        java.lang.Object environmentId;
        java.lang.Object httpApiId;
        java.lang.Object serviceConfigs;
        java.lang.Object description;
        java.lang.Object domainIds;
        java.lang.Object routeId;

        /**
         * Sets the value of {@link RosApiAttachmentProps#getBackendScene}
         * @param backendScene the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backendScene(java.lang.String backendScene) {
            this.backendScene = backendScene;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getBackendScene}
         * @param backendScene the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder backendScene(com.aliyun.ros.cdk.core.IResolvable backendScene) {
            this.backendScene = backendScene;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getEnvironmentId}
         * @param environmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(java.lang.String environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getEnvironmentId}
         * @param environmentId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getHttpApiId}
         * @param httpApiId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiId(java.lang.String httpApiId) {
            this.httpApiId = httpApiId;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getHttpApiId}
         * @param httpApiId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder httpApiId(com.aliyun.ros.cdk.core.IResolvable httpApiId) {
            this.httpApiId = httpApiId;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getServiceConfigs}
         * @param serviceConfigs the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConfigs(com.aliyun.ros.cdk.core.IResolvable serviceConfigs) {
            this.serviceConfigs = serviceConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getServiceConfigs}
         * @param serviceConfigs the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceConfigs(java.util.List<? extends java.lang.Object> serviceConfigs) {
            this.serviceConfigs = serviceConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getDomainIds}
         * @param domainIds the value to be set.
         * @return {@code this}
         */
        public Builder domainIds(com.aliyun.ros.cdk.core.IResolvable domainIds) {
            this.domainIds = domainIds;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getDomainIds}
         * @param domainIds the value to be set.
         * @return {@code this}
         */
        public Builder domainIds(java.util.List<? extends java.lang.Object> domainIds) {
            this.domainIds = domainIds;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getRouteId}
         * @param routeId the value to be set.
         * @return {@code this}
         */
        public Builder routeId(java.lang.String routeId) {
            this.routeId = routeId;
            return this;
        }

        /**
         * Sets the value of {@link RosApiAttachmentProps#getRouteId}
         * @param routeId the value to be set.
         * @return {@code this}
         */
        public Builder routeId(com.aliyun.ros.cdk.core.IResolvable routeId) {
            this.routeId = routeId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApiAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApiAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosApiAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApiAttachmentProps {
        private final java.lang.Object backendScene;
        private final java.lang.Object environmentId;
        private final java.lang.Object httpApiId;
        private final java.lang.Object serviceConfigs;
        private final java.lang.Object description;
        private final java.lang.Object domainIds;
        private final java.lang.Object routeId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.backendScene = software.amazon.jsii.Kernel.get(this, "backendScene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.httpApiId = software.amazon.jsii.Kernel.get(this, "httpApiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceConfigs = software.amazon.jsii.Kernel.get(this, "serviceConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainIds = software.amazon.jsii.Kernel.get(this, "domainIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeId = software.amazon.jsii.Kernel.get(this, "routeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.backendScene = java.util.Objects.requireNonNull(builder.backendScene, "backendScene is required");
            this.environmentId = java.util.Objects.requireNonNull(builder.environmentId, "environmentId is required");
            this.httpApiId = java.util.Objects.requireNonNull(builder.httpApiId, "httpApiId is required");
            this.serviceConfigs = java.util.Objects.requireNonNull(builder.serviceConfigs, "serviceConfigs is required");
            this.description = builder.description;
            this.domainIds = builder.domainIds;
            this.routeId = builder.routeId;
        }

        @Override
        public final java.lang.Object getBackendScene() {
            return this.backendScene;
        }

        @Override
        public final java.lang.Object getEnvironmentId() {
            return this.environmentId;
        }

        @Override
        public final java.lang.Object getHttpApiId() {
            return this.httpApiId;
        }

        @Override
        public final java.lang.Object getServiceConfigs() {
            return this.serviceConfigs;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDomainIds() {
            return this.domainIds;
        }

        @Override
        public final java.lang.Object getRouteId() {
            return this.routeId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("backendScene", om.valueToTree(this.getBackendScene()));
            data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
            data.set("httpApiId", om.valueToTree(this.getHttpApiId()));
            data.set("serviceConfigs", om.valueToTree(this.getServiceConfigs()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDomainIds() != null) {
                data.set("domainIds", om.valueToTree(this.getDomainIds()));
            }
            if (this.getRouteId() != null) {
                data.set("routeId", om.valueToTree(this.getRouteId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosApiAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApiAttachmentProps.Jsii$Proxy that = (RosApiAttachmentProps.Jsii$Proxy) o;

            if (!backendScene.equals(that.backendScene)) return false;
            if (!environmentId.equals(that.environmentId)) return false;
            if (!httpApiId.equals(that.httpApiId)) return false;
            if (!serviceConfigs.equals(that.serviceConfigs)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.domainIds != null ? !this.domainIds.equals(that.domainIds) : that.domainIds != null) return false;
            return this.routeId != null ? this.routeId.equals(that.routeId) : that.routeId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.backendScene.hashCode();
            result = 31 * result + (this.environmentId.hashCode());
            result = 31 * result + (this.httpApiId.hashCode());
            result = 31 * result + (this.serviceConfigs.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.domainIds != null ? this.domainIds.hashCode() : 0);
            result = 31 * result + (this.routeId != null ? this.routeId.hashCode() : 0);
            return result;
        }
    }
}
