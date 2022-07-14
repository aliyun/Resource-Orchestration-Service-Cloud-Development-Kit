package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a `ALIYUN::ApiGateway::Deployment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:19.278Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.DeploymentProps")
@software.amazon.jsii.Jsii.Proxy(DeploymentProps.Jsii$Proxy.class)
public interface DeploymentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property apiId: The id of the API.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiId();

    /**
     * Property groupId: The id of the Group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     * Property stageName: Bind traffic in this stage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStageName();

    /**
     * Property description: Description of the deployment, less than 180 characters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property historyVersion: The history version.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHistoryVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DeploymentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DeploymentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DeploymentProps> {
        java.lang.Object apiId;
        java.lang.Object groupId;
        java.lang.Object stageName;
        java.lang.Object description;
        java.lang.Object historyVersion;

        /**
         * Sets the value of {@link DeploymentProps#getApiId}
         * @param apiId Property apiId: The id of the API. This parameter is required.
         * @return {@code this}
         */
        public Builder apiId(java.lang.String apiId) {
            this.apiId = apiId;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getApiId}
         * @param apiId Property apiId: The id of the API. This parameter is required.
         * @return {@code this}
         */
        public Builder apiId(com.aliyun.ros.cdk.core.IResolvable apiId) {
            this.apiId = apiId;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getGroupId}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getGroupId}
         * @param groupId Property groupId: The id of the Group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getStageName}
         * @param stageName Property stageName: Bind traffic in this stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(java.lang.String stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getStageName}
         * @param stageName Property stageName: Bind traffic in this stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getDescription}
         * @param description Property description: Description of the deployment, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getDescription}
         * @param description Property description: Description of the deployment, less than 180 characters.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getHistoryVersion}
         * @param historyVersion Property historyVersion: The history version.
         * @return {@code this}
         */
        public Builder historyVersion(java.lang.String historyVersion) {
            this.historyVersion = historyVersion;
            return this;
        }

        /**
         * Sets the value of {@link DeploymentProps#getHistoryVersion}
         * @param historyVersion Property historyVersion: The history version.
         * @return {@code this}
         */
        public Builder historyVersion(com.aliyun.ros.cdk.core.IResolvable historyVersion) {
            this.historyVersion = historyVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DeploymentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DeploymentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DeploymentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DeploymentProps {
        private final java.lang.Object apiId;
        private final java.lang.Object groupId;
        private final java.lang.Object stageName;
        private final java.lang.Object description;
        private final java.lang.Object historyVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiId = software.amazon.jsii.Kernel.get(this, "apiId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stageName = software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.historyVersion = software.amazon.jsii.Kernel.get(this, "historyVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiId = java.util.Objects.requireNonNull(builder.apiId, "apiId is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.stageName = java.util.Objects.requireNonNull(builder.stageName, "stageName is required");
            this.description = builder.description;
            this.historyVersion = builder.historyVersion;
        }

        @Override
        public final java.lang.Object getApiId() {
            return this.apiId;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getStageName() {
            return this.stageName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getHistoryVersion() {
            return this.historyVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("apiId", om.valueToTree(this.getApiId()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("stageName", om.valueToTree(this.getStageName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getHistoryVersion() != null) {
                data.set("historyVersion", om.valueToTree(this.getHistoryVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.DeploymentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DeploymentProps.Jsii$Proxy that = (DeploymentProps.Jsii$Proxy) o;

            if (!apiId.equals(that.apiId)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!stageName.equals(that.stageName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.historyVersion != null ? this.historyVersion.equals(that.historyVersion) : that.historyVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.apiId.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.stageName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.historyVersion != null ? this.historyVersion.hashCode() : 0);
            return result;
        }
    }
}
