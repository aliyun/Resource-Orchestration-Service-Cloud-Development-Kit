package com.aliyun.ros.cdk.pai.datasource;

/**
 * Properties for defining a <code>Dataset</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-dataset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.799Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.datasource.DatasetProps")
@software.amazon.jsii.Jsii.Proxy(DatasetProps.Jsii$Proxy.class)
public interface DatasetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property datasetId: The first ID of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatasetId();

    /**
     * Property workspaceId: The ID of the workspace where the dataset is located.
     * <p>
     * For details about how to obtain the workspace ID, see [ListWorkspaces].
     * If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DatasetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DatasetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DatasetProps> {
        java.lang.Object datasetId;
        java.lang.Object workspaceId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link DatasetProps#getDatasetId}
         * @param datasetId Property datasetId: The first ID of the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder datasetId(java.lang.String datasetId) {
            this.datasetId = datasetId;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getDatasetId}
         * @param datasetId Property datasetId: The first ID of the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder datasetId(com.aliyun.ros.cdk.core.IResolvable datasetId) {
            this.datasetId = datasetId;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace where the dataset is located. This parameter is required.
         *                    For details about how to obtain the workspace ID, see [ListWorkspaces].
         *                    If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getWorkspaceId}
         * @param workspaceId Property workspaceId: The ID of the workspace where the dataset is located. This parameter is required.
         *                    For details about how to obtain the workspace ID, see [ListWorkspaces].
         *                    If this parameter is not configured, the default workspace is used. If the default workspace does not exist, an error is reported.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DatasetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DatasetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DatasetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DatasetProps {
        private final java.lang.Object datasetId;
        private final java.lang.Object workspaceId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.datasetId = software.amazon.jsii.Kernel.get(this, "datasetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.datasetId = java.util.Objects.requireNonNull(builder.datasetId, "datasetId is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getDatasetId() {
            return this.datasetId;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("datasetId", om.valueToTree(this.getDatasetId()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.datasource.DatasetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DatasetProps.Jsii$Proxy that = (DatasetProps.Jsii$Proxy) o;

            if (!datasetId.equals(that.datasetId)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.datasetId.hashCode();
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
