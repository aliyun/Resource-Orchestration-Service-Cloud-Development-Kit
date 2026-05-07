package com.aliyun.ros.cdk.paifeaturestore;

/**
 * Properties for defining a <code>RosDatasource</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:52.632Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paifeaturestore.$Module.class, fqn = "@alicloud/ros-cdk-paifeaturestore.RosDatasourceProps")
@software.amazon.jsii.Jsii.Proxy(RosDatasourceProps.Jsii$Proxy.class)
public interface RosDatasourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatasourceName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUri();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDatasourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDatasourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDatasourceProps> {
        java.lang.Object datasourceName;
        java.lang.Object instanceId;
        java.lang.Object type;
        java.lang.Object uri;
        java.lang.Object workspaceId;
        java.lang.Object config;

        /**
         * Sets the value of {@link RosDatasourceProps#getDatasourceName}
         * @param datasourceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder datasourceName(java.lang.String datasourceName) {
            this.datasourceName = datasourceName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getDatasourceName}
         * @param datasourceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder datasourceName(com.aliyun.ros.cdk.core.IResolvable datasourceName) {
            this.datasourceName = datasourceName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getUri}
         * @param uri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uri(java.lang.String uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getUri}
         * @param uri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uri(com.aliyun.ros.cdk.core.IResolvable uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getConfig}
         * @param config the value to be set.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasourceProps#getConfig}
         * @param config the value to be set.
         * @return {@code this}
         */
        public Builder config(java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.config = config;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDatasourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDatasourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDatasourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDatasourceProps {
        private final java.lang.Object datasourceName;
        private final java.lang.Object instanceId;
        private final java.lang.Object type;
        private final java.lang.Object uri;
        private final java.lang.Object workspaceId;
        private final java.lang.Object config;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.datasourceName = software.amazon.jsii.Kernel.get(this, "datasourceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uri = software.amazon.jsii.Kernel.get(this, "uri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.datasourceName = java.util.Objects.requireNonNull(builder.datasourceName, "datasourceName is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.uri = java.util.Objects.requireNonNull(builder.uri, "uri is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.config = builder.config;
        }

        @Override
        public final java.lang.Object getDatasourceName() {
            return this.datasourceName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getUri() {
            return this.uri;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getConfig() {
            return this.config;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("datasourceName", om.valueToTree(this.getDatasourceName()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("type", om.valueToTree(this.getType()));
            data.set("uri", om.valueToTree(this.getUri()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            if (this.getConfig() != null) {
                data.set("config", om.valueToTree(this.getConfig()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paifeaturestore.RosDatasourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDatasourceProps.Jsii$Proxy that = (RosDatasourceProps.Jsii$Proxy) o;

            if (!datasourceName.equals(that.datasourceName)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!type.equals(that.type)) return false;
            if (!uri.equals(that.uri)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            return this.config != null ? this.config.equals(that.config) : that.config == null;
        }

        @Override
        public final int hashCode() {
            int result = this.datasourceName.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.uri.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
            return result;
        }
    }
}
