package com.aliyun.ros.cdk.nlpautoml;

/**
 * Properties for defining a <code>Dataset</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-dataset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:28.888Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlpautoml.$Module.class, fqn = "@alicloud/ros-cdk-nlpautoml.DatasetProps")
@software.amazon.jsii.Jsii.Proxy(DatasetProps.Jsii$Proxy.class)
public interface DatasetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property datasetName: The name of dataset.
     * <p>
     * Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatasetName();

    /**
     * Property projectId: The ID of project.
     * <p>
     * To create a dataset under a certain project, fill in the target project ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectId();

    /**
     * Property datasetRecord: Upload labeled data to the dataset.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatasetRecord() {
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
        java.lang.Object datasetName;
        java.lang.Object projectId;
        java.lang.Object datasetRecord;

        /**
         * Sets the value of {@link DatasetProps#getDatasetName}
         * @param datasetName Property datasetName: The name of dataset. This parameter is required.
         *                    Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
         * @return {@code this}
         */
        public Builder datasetName(java.lang.String datasetName) {
            this.datasetName = datasetName;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getDatasetName}
         * @param datasetName Property datasetName: The name of dataset. This parameter is required.
         *                    Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
         * @return {@code this}
         */
        public Builder datasetName(com.aliyun.ros.cdk.core.IResolvable datasetName) {
            this.datasetName = datasetName;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getProjectId}
         * @param projectId Property projectId: The ID of project. This parameter is required.
         *                  To create a dataset under a certain project, fill in the target project ID.
         * @return {@code this}
         */
        public Builder projectId(java.lang.Number projectId) {
            this.projectId = projectId;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getProjectId}
         * @param projectId Property projectId: The ID of project. This parameter is required.
         *                  To create a dataset under a certain project, fill in the target project ID.
         * @return {@code this}
         */
        public Builder projectId(com.aliyun.ros.cdk.core.IResolvable projectId) {
            this.projectId = projectId;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getDatasetRecord}
         * @param datasetRecord Property datasetRecord: Upload labeled data to the dataset.
         * @return {@code this}
         */
        public Builder datasetRecord(com.aliyun.ros.cdk.core.IResolvable datasetRecord) {
            this.datasetRecord = datasetRecord;
            return this;
        }

        /**
         * Sets the value of {@link DatasetProps#getDatasetRecord}
         * @param datasetRecord Property datasetRecord: Upload labeled data to the dataset.
         * @return {@code this}
         */
        public Builder datasetRecord(java.util.List<? extends java.lang.Object> datasetRecord) {
            this.datasetRecord = datasetRecord;
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
        private final java.lang.Object datasetName;
        private final java.lang.Object projectId;
        private final java.lang.Object datasetRecord;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.datasetName = software.amazon.jsii.Kernel.get(this, "datasetName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectId = software.amazon.jsii.Kernel.get(this, "projectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.datasetRecord = software.amazon.jsii.Kernel.get(this, "datasetRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.datasetName = java.util.Objects.requireNonNull(builder.datasetName, "datasetName is required");
            this.projectId = java.util.Objects.requireNonNull(builder.projectId, "projectId is required");
            this.datasetRecord = builder.datasetRecord;
        }

        @Override
        public final java.lang.Object getDatasetName() {
            return this.datasetName;
        }

        @Override
        public final java.lang.Object getProjectId() {
            return this.projectId;
        }

        @Override
        public final java.lang.Object getDatasetRecord() {
            return this.datasetRecord;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("datasetName", om.valueToTree(this.getDatasetName()));
            data.set("projectId", om.valueToTree(this.getProjectId()));
            if (this.getDatasetRecord() != null) {
                data.set("datasetRecord", om.valueToTree(this.getDatasetRecord()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlpautoml.DatasetProps"));
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

            if (!datasetName.equals(that.datasetName)) return false;
            if (!projectId.equals(that.projectId)) return false;
            return this.datasetRecord != null ? this.datasetRecord.equals(that.datasetRecord) : that.datasetRecord == null;
        }

        @Override
        public final int hashCode() {
            int result = this.datasetName.hashCode();
            result = 31 * result + (this.projectId.hashCode());
            result = 31 * result + (this.datasetRecord != null ? this.datasetRecord.hashCode() : 0);
            return result;
        }
    }
}
