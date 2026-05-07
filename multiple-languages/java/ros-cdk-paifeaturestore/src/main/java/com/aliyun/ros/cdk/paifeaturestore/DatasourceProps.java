package com.aliyun.ros.cdk.paifeaturestore;

/**
 * Properties for defining a <code>Datasource</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paifeaturestore-datasource
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:52.628Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paifeaturestore.$Module.class, fqn = "@alicloud/ros-cdk-paifeaturestore.DatasourceProps")
@software.amazon.jsii.Jsii.Proxy(DatasourceProps.Jsii$Proxy.class)
public interface DatasourceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property datasourceName: The datasource name.
     * <p>
     * Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatasourceName();

    /**
     * Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property type: Data source type.
     * <p>
     * The value is as follows:
     * <p>
     * <ul>
     * <li>Hologres</li>
     * <li>GraphCompute</li>
     * <li>FeatureDB</li>
     * <li>MaxCompute.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property uri: The resource address of the datasource.
     * <p>
     * The maximum length cannot exceed 64.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUri();

    /**
     * Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     * Property config: Resource configuration information.
     * <p>
     * The string format is json.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DatasourceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DatasourceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DatasourceProps> {
        java.lang.Object datasourceName;
        java.lang.Object instanceId;
        java.lang.Object type;
        java.lang.Object uri;
        java.lang.Object workspaceId;
        java.lang.Object config;

        /**
         * Sets the value of {@link DatasourceProps#getDatasourceName}
         * @param datasourceName Property datasourceName: The datasource name. This parameter is required.
         *                       Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
         * @return {@code this}
         */
        public Builder datasourceName(java.lang.String datasourceName) {
            this.datasourceName = datasourceName;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getDatasourceName}
         * @param datasourceName Property datasourceName: The datasource name. This parameter is required.
         *                       Start with a letter or number and contain only letters, numbers, and underscores. The maximum length cannot exceed 63.
         * @return {@code this}
         */
        public Builder datasourceName(com.aliyun.ros.cdk.core.IResolvable datasourceName) {
            this.datasourceName = datasourceName;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of FeatureStore instance, which can be obtained through the ListInstances interface. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getType}
         * @param type Property type: Data source type. This parameter is required.
         *             The value is as follows:
         *             <p>
         *             <ul>
         *             <li>Hologres</li>
         *             <li>GraphCompute</li>
         *             <li>FeatureDB</li>
         *             <li>MaxCompute.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getType}
         * @param type Property type: Data source type. This parameter is required.
         *             The value is as follows:
         *             <p>
         *             <ul>
         *             <li>Hologres</li>
         *             <li>GraphCompute</li>
         *             <li>FeatureDB</li>
         *             <li>MaxCompute.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getUri}
         * @param uri Property uri: The resource address of the datasource. This parameter is required.
         *            The maximum length cannot exceed 64.
         * @return {@code this}
         */
        public Builder uri(java.lang.String uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getUri}
         * @param uri Property uri: The resource address of the datasource. This parameter is required.
         *            The maximum length cannot exceed 64.
         * @return {@code this}
         */
        public Builder uri(com.aliyun.ros.cdk.core.IResolvable uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: PAI workspace ID, which can be obtained through the ListWorkspaces interface. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getConfig}
         * @param config Property config: Resource configuration information.
         *               The string format is json.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link DatasourceProps#getConfig}
         * @param config Property config: Resource configuration information.
         *               The string format is json.
         * @return {@code this}
         */
        public Builder config(java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.config = config;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DatasourceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DatasourceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DatasourceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DatasourceProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paifeaturestore.DatasourceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DatasourceProps.Jsii$Proxy that = (DatasourceProps.Jsii$Proxy) o;

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
