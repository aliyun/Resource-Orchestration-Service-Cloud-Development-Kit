package com.aliyun.ros.cdk.nlpautoml;

/**
 * Properties for defining a <code>RosModel</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-model
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:56.367Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlpautoml.$Module.class, fqn = "@alicloud/ros-cdk-nlpautoml.RosModelProps")
@software.amazon.jsii.Jsii.Proxy(RosModelProps.Jsii$Proxy.class)
public interface RosModelProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDatasetIdList();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getModelName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getModelType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProjectId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLr() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNepochs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTestDatasetIdList() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosModelProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosModelProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosModelProps> {
        java.lang.Object datasetIdList;
        java.lang.Object modelName;
        java.lang.Object modelType;
        java.lang.Object projectId;
        java.lang.Object lr;
        java.lang.Object nepochs;
        java.lang.Object testDatasetIdList;

        /**
         * Sets the value of {@link RosModelProps#getDatasetIdList}
         * @param datasetIdList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder datasetIdList(com.aliyun.ros.cdk.core.IResolvable datasetIdList) {
            this.datasetIdList = datasetIdList;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getDatasetIdList}
         * @param datasetIdList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder datasetIdList(java.util.List<? extends java.lang.Object> datasetIdList) {
            this.datasetIdList = datasetIdList;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getModelName}
         * @param modelName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder modelName(java.lang.String modelName) {
            this.modelName = modelName;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getModelName}
         * @param modelName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder modelName(com.aliyun.ros.cdk.core.IResolvable modelName) {
            this.modelName = modelName;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getModelType}
         * @param modelType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder modelType(java.lang.String modelType) {
            this.modelType = modelType;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getModelType}
         * @param modelType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder modelType(com.aliyun.ros.cdk.core.IResolvable modelType) {
            this.modelType = modelType;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getProjectId}
         * @param projectId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectId(java.lang.Number projectId) {
            this.projectId = projectId;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getProjectId}
         * @param projectId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder projectId(com.aliyun.ros.cdk.core.IResolvable projectId) {
            this.projectId = projectId;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getLr}
         * @param lr the value to be set.
         * @return {@code this}
         */
        public Builder lr(java.lang.String lr) {
            this.lr = lr;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getLr}
         * @param lr the value to be set.
         * @return {@code this}
         */
        public Builder lr(com.aliyun.ros.cdk.core.IResolvable lr) {
            this.lr = lr;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getNepochs}
         * @param nepochs the value to be set.
         * @return {@code this}
         */
        public Builder nepochs(java.lang.String nepochs) {
            this.nepochs = nepochs;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getNepochs}
         * @param nepochs the value to be set.
         * @return {@code this}
         */
        public Builder nepochs(com.aliyun.ros.cdk.core.IResolvable nepochs) {
            this.nepochs = nepochs;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getTestDatasetIdList}
         * @param testDatasetIdList the value to be set.
         * @return {@code this}
         */
        public Builder testDatasetIdList(com.aliyun.ros.cdk.core.IResolvable testDatasetIdList) {
            this.testDatasetIdList = testDatasetIdList;
            return this;
        }

        /**
         * Sets the value of {@link RosModelProps#getTestDatasetIdList}
         * @param testDatasetIdList the value to be set.
         * @return {@code this}
         */
        public Builder testDatasetIdList(java.util.List<? extends java.lang.Object> testDatasetIdList) {
            this.testDatasetIdList = testDatasetIdList;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosModelProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosModelProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosModelProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosModelProps {
        private final java.lang.Object datasetIdList;
        private final java.lang.Object modelName;
        private final java.lang.Object modelType;
        private final java.lang.Object projectId;
        private final java.lang.Object lr;
        private final java.lang.Object nepochs;
        private final java.lang.Object testDatasetIdList;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.datasetIdList = software.amazon.jsii.Kernel.get(this, "datasetIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modelName = software.amazon.jsii.Kernel.get(this, "modelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.modelType = software.amazon.jsii.Kernel.get(this, "modelType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.projectId = software.amazon.jsii.Kernel.get(this, "projectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lr = software.amazon.jsii.Kernel.get(this, "lr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nepochs = software.amazon.jsii.Kernel.get(this, "nepochs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.testDatasetIdList = software.amazon.jsii.Kernel.get(this, "testDatasetIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.datasetIdList = java.util.Objects.requireNonNull(builder.datasetIdList, "datasetIdList is required");
            this.modelName = java.util.Objects.requireNonNull(builder.modelName, "modelName is required");
            this.modelType = java.util.Objects.requireNonNull(builder.modelType, "modelType is required");
            this.projectId = java.util.Objects.requireNonNull(builder.projectId, "projectId is required");
            this.lr = builder.lr;
            this.nepochs = builder.nepochs;
            this.testDatasetIdList = builder.testDatasetIdList;
        }

        @Override
        public final java.lang.Object getDatasetIdList() {
            return this.datasetIdList;
        }

        @Override
        public final java.lang.Object getModelName() {
            return this.modelName;
        }

        @Override
        public final java.lang.Object getModelType() {
            return this.modelType;
        }

        @Override
        public final java.lang.Object getProjectId() {
            return this.projectId;
        }

        @Override
        public final java.lang.Object getLr() {
            return this.lr;
        }

        @Override
        public final java.lang.Object getNepochs() {
            return this.nepochs;
        }

        @Override
        public final java.lang.Object getTestDatasetIdList() {
            return this.testDatasetIdList;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("datasetIdList", om.valueToTree(this.getDatasetIdList()));
            data.set("modelName", om.valueToTree(this.getModelName()));
            data.set("modelType", om.valueToTree(this.getModelType()));
            data.set("projectId", om.valueToTree(this.getProjectId()));
            if (this.getLr() != null) {
                data.set("lr", om.valueToTree(this.getLr()));
            }
            if (this.getNepochs() != null) {
                data.set("nepochs", om.valueToTree(this.getNepochs()));
            }
            if (this.getTestDatasetIdList() != null) {
                data.set("testDatasetIdList", om.valueToTree(this.getTestDatasetIdList()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nlpautoml.RosModelProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosModelProps.Jsii$Proxy that = (RosModelProps.Jsii$Proxy) o;

            if (!datasetIdList.equals(that.datasetIdList)) return false;
            if (!modelName.equals(that.modelName)) return false;
            if (!modelType.equals(that.modelType)) return false;
            if (!projectId.equals(that.projectId)) return false;
            if (this.lr != null ? !this.lr.equals(that.lr) : that.lr != null) return false;
            if (this.nepochs != null ? !this.nepochs.equals(that.nepochs) : that.nepochs != null) return false;
            return this.testDatasetIdList != null ? this.testDatasetIdList.equals(that.testDatasetIdList) : that.testDatasetIdList == null;
        }

        @Override
        public final int hashCode() {
            int result = this.datasetIdList.hashCode();
            result = 31 * result + (this.modelName.hashCode());
            result = 31 * result + (this.modelType.hashCode());
            result = 31 * result + (this.projectId.hashCode());
            result = 31 * result + (this.lr != null ? this.lr.hashCode() : 0);
            result = 31 * result + (this.nepochs != null ? this.nepochs.hashCode() : 0);
            result = 31 * result + (this.testDatasetIdList != null ? this.testDatasetIdList.hashCode() : 0);
            return result;
        }
    }
}
