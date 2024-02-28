package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>RosDataset</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-dataset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:29.909Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.RosDatasetProps")
@software.amazon.jsii.Jsii.Proxy(RosDatasetProps.Jsii$Proxy.class)
public interface RosDatasetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatasetName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataSourceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProperty();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUri();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccessibility() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDatasetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDatasetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDatasetProps> {
        java.lang.Object datasetName;
        java.lang.Object dataSourceType;
        java.lang.Object property;
        java.lang.Object uri;
        java.lang.Object workspaceId;
        java.lang.Object accessibility;
        java.lang.Object dataType;
        java.lang.Object description;
        java.lang.Object options;
        java.lang.Object sourceId;
        java.lang.Object sourceType;

        /**
         * Sets the value of {@link RosDatasetProps#getDatasetName}
         * @param datasetName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder datasetName(java.lang.String datasetName) {
            this.datasetName = datasetName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getDatasetName}
         * @param datasetName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder datasetName(com.aliyun.ros.cdk.core.IResolvable datasetName) {
            this.datasetName = datasetName;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getDataSourceType}
         * @param dataSourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataSourceType(java.lang.String dataSourceType) {
            this.dataSourceType = dataSourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getDataSourceType}
         * @param dataSourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dataSourceType(com.aliyun.ros.cdk.core.IResolvable dataSourceType) {
            this.dataSourceType = dataSourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getProperty}
         * @param property the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder property(java.lang.String property) {
            this.property = property;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getProperty}
         * @param property the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder property(com.aliyun.ros.cdk.core.IResolvable property) {
            this.property = property;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getUri}
         * @param uri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uri(java.lang.String uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getUri}
         * @param uri the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uri(com.aliyun.ros.cdk.core.IResolvable uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getAccessibility}
         * @param accessibility the value to be set.
         * @return {@code this}
         */
        public Builder accessibility(java.lang.String accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getAccessibility}
         * @param accessibility the value to be set.
         * @return {@code this}
         */
        public Builder accessibility(com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.accessibility = accessibility;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getDataType}
         * @param dataType the value to be set.
         * @return {@code this}
         */
        public Builder dataType(java.lang.String dataType) {
            this.dataType = dataType;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getDataType}
         * @param dataType the value to be set.
         * @return {@code this}
         */
        public Builder dataType(com.aliyun.ros.cdk.core.IResolvable dataType) {
            this.dataType = dataType;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(java.lang.String options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getOptions}
         * @param options the value to be set.
         * @return {@code this}
         */
        public Builder options(com.aliyun.ros.cdk.core.IResolvable options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getSourceId}
         * @param sourceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceId(java.lang.String sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getSourceId}
         * @param sourceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceId(com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getSourceType}
         * @param sourceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosDatasetProps#getSourceType}
         * @param sourceType the value to be set.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDatasetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDatasetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDatasetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDatasetProps {
        private final java.lang.Object datasetName;
        private final java.lang.Object dataSourceType;
        private final java.lang.Object property;
        private final java.lang.Object uri;
        private final java.lang.Object workspaceId;
        private final java.lang.Object accessibility;
        private final java.lang.Object dataType;
        private final java.lang.Object description;
        private final java.lang.Object options;
        private final java.lang.Object sourceId;
        private final java.lang.Object sourceType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.datasetName = software.amazon.jsii.Kernel.get(this, "datasetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataSourceType = software.amazon.jsii.Kernel.get(this, "dataSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.property = software.amazon.jsii.Kernel.get(this, "property", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uri = software.amazon.jsii.Kernel.get(this, "uri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accessibility = software.amazon.jsii.Kernel.get(this, "accessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataType = software.amazon.jsii.Kernel.get(this, "dataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.options = software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceId = software.amazon.jsii.Kernel.get(this, "sourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.datasetName = java.util.Objects.requireNonNull(builder.datasetName, "datasetName is required");
            this.dataSourceType = java.util.Objects.requireNonNull(builder.dataSourceType, "dataSourceType is required");
            this.property = java.util.Objects.requireNonNull(builder.property, "property is required");
            this.uri = java.util.Objects.requireNonNull(builder.uri, "uri is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.accessibility = builder.accessibility;
            this.dataType = builder.dataType;
            this.description = builder.description;
            this.options = builder.options;
            this.sourceId = builder.sourceId;
            this.sourceType = builder.sourceType;
        }

        @Override
        public final java.lang.Object getDatasetName() {
            return this.datasetName;
        }

        @Override
        public final java.lang.Object getDataSourceType() {
            return this.dataSourceType;
        }

        @Override
        public final java.lang.Object getProperty() {
            return this.property;
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
        public final java.lang.Object getAccessibility() {
            return this.accessibility;
        }

        @Override
        public final java.lang.Object getDataType() {
            return this.dataType;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getOptions() {
            return this.options;
        }

        @Override
        public final java.lang.Object getSourceId() {
            return this.sourceId;
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

            data.set("datasetName", om.valueToTree(this.getDatasetName()));
            data.set("dataSourceType", om.valueToTree(this.getDataSourceType()));
            data.set("property", om.valueToTree(this.getProperty()));
            data.set("uri", om.valueToTree(this.getUri()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            if (this.getAccessibility() != null) {
                data.set("accessibility", om.valueToTree(this.getAccessibility()));
            }
            if (this.getDataType() != null) {
                data.set("dataType", om.valueToTree(this.getDataType()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getOptions() != null) {
                data.set("options", om.valueToTree(this.getOptions()));
            }
            if (this.getSourceId() != null) {
                data.set("sourceId", om.valueToTree(this.getSourceId()));
            }
            if (this.getSourceType() != null) {
                data.set("sourceType", om.valueToTree(this.getSourceType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.RosDatasetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDatasetProps.Jsii$Proxy that = (RosDatasetProps.Jsii$Proxy) o;

            if (!datasetName.equals(that.datasetName)) return false;
            if (!dataSourceType.equals(that.dataSourceType)) return false;
            if (!property.equals(that.property)) return false;
            if (!uri.equals(that.uri)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            if (this.accessibility != null ? !this.accessibility.equals(that.accessibility) : that.accessibility != null) return false;
            if (this.dataType != null ? !this.dataType.equals(that.dataType) : that.dataType != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.options != null ? !this.options.equals(that.options) : that.options != null) return false;
            if (this.sourceId != null ? !this.sourceId.equals(that.sourceId) : that.sourceId != null) return false;
            return this.sourceType != null ? this.sourceType.equals(that.sourceType) : that.sourceType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.datasetName.hashCode();
            result = 31 * result + (this.dataSourceType.hashCode());
            result = 31 * result + (this.property.hashCode());
            result = 31 * result + (this.uri.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.accessibility != null ? this.accessibility.hashCode() : 0);
            result = 31 * result + (this.dataType != null ? this.dataType.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.options != null ? this.options.hashCode() : 0);
            result = 31 * result + (this.sourceId != null ? this.sourceId.hashCode() : 0);
            result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
            return result;
        }
    }
}
