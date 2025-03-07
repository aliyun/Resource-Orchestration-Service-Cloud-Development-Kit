package com.aliyun.ros.cdk.paiplugin;

/**
 * Properties for defining a <code>InferenceJob</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.870Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.paiplugin.$Module.class, fqn = "@alicloud/ros-cdk-paiplugin.InferenceJobProps")
@software.amazon.jsii.Jsii.Proxy(InferenceJobProps.Jsii$Proxy.class)
public interface InferenceJobProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property algorithm: The algorithm of inference job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAlgorithm();

    /**
     * Property campaignId: The campaign id of inference job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCampaignId();

    /**
     * Property dataPath: The input data path of inference job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDataPath();

    /**
     * Property name: The name of inference job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property targetPath: The output result path of inference job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetPath();

    /**
     * Property trainingJobId: The training job id of inference job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrainingJobId();

    /**
     * Property userConfig: The user config of inference job.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserConfig();

    /**
     * Property remark: The remark of inference job.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemark() {
        return null;
    }

    /**
     * Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWaitForInferenceFinish() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InferenceJobProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InferenceJobProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InferenceJobProps> {
        java.lang.Object algorithm;
        java.lang.Object campaignId;
        java.lang.Object dataPath;
        java.lang.Object name;
        java.lang.Object targetPath;
        java.lang.Object trainingJobId;
        java.lang.Object userConfig;
        java.lang.Object remark;
        java.lang.Object waitForInferenceFinish;

        /**
         * Sets the value of {@link InferenceJobProps#getAlgorithm}
         * @param algorithm Property algorithm: The algorithm of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder algorithm(java.lang.String algorithm) {
            this.algorithm = algorithm;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getAlgorithm}
         * @param algorithm Property algorithm: The algorithm of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder algorithm(com.aliyun.ros.cdk.core.IResolvable algorithm) {
            this.algorithm = algorithm;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getCampaignId}
         * @param campaignId Property campaignId: The campaign id of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder campaignId(java.lang.String campaignId) {
            this.campaignId = campaignId;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getCampaignId}
         * @param campaignId Property campaignId: The campaign id of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder campaignId(com.aliyun.ros.cdk.core.IResolvable campaignId) {
            this.campaignId = campaignId;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getDataPath}
         * @param dataPath Property dataPath: The input data path of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder dataPath(java.lang.String dataPath) {
            this.dataPath = dataPath;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getDataPath}
         * @param dataPath Property dataPath: The input data path of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder dataPath(com.aliyun.ros.cdk.core.IResolvable dataPath) {
            this.dataPath = dataPath;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getName}
         * @param name Property name: The name of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getName}
         * @param name Property name: The name of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getTargetPath}
         * @param targetPath Property targetPath: The output result path of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder targetPath(java.lang.String targetPath) {
            this.targetPath = targetPath;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getTargetPath}
         * @param targetPath Property targetPath: The output result path of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder targetPath(com.aliyun.ros.cdk.core.IResolvable targetPath) {
            this.targetPath = targetPath;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getTrainingJobId}
         * @param trainingJobId Property trainingJobId: The training job id of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder trainingJobId(java.lang.String trainingJobId) {
            this.trainingJobId = trainingJobId;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getTrainingJobId}
         * @param trainingJobId Property trainingJobId: The training job id of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder trainingJobId(com.aliyun.ros.cdk.core.IResolvable trainingJobId) {
            this.trainingJobId = trainingJobId;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getUserConfig}
         * @param userConfig Property userConfig: The user config of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder userConfig(com.aliyun.ros.cdk.core.IResolvable userConfig) {
            this.userConfig = userConfig;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getUserConfig}
         * @param userConfig Property userConfig: The user config of inference job. This parameter is required.
         * @return {@code this}
         */
        public Builder userConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> userConfig) {
            this.userConfig = userConfig;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getRemark}
         * @param remark Property remark: The remark of inference job.
         * @return {@code this}
         */
        public Builder remark(java.lang.String remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getRemark}
         * @param remark Property remark: The remark of inference job.
         * @return {@code this}
         */
        public Builder remark(com.aliyun.ros.cdk.core.IResolvable remark) {
            this.remark = remark;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getWaitForInferenceFinish}
         * @param waitForInferenceFinish Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes.
         * @return {@code this}
         */
        public Builder waitForInferenceFinish(java.lang.Boolean waitForInferenceFinish) {
            this.waitForInferenceFinish = waitForInferenceFinish;
            return this;
        }

        /**
         * Sets the value of {@link InferenceJobProps#getWaitForInferenceFinish}
         * @param waitForInferenceFinish Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes.
         * @return {@code this}
         */
        public Builder waitForInferenceFinish(com.aliyun.ros.cdk.core.IResolvable waitForInferenceFinish) {
            this.waitForInferenceFinish = waitForInferenceFinish;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InferenceJobProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InferenceJobProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InferenceJobProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InferenceJobProps {
        private final java.lang.Object algorithm;
        private final java.lang.Object campaignId;
        private final java.lang.Object dataPath;
        private final java.lang.Object name;
        private final java.lang.Object targetPath;
        private final java.lang.Object trainingJobId;
        private final java.lang.Object userConfig;
        private final java.lang.Object remark;
        private final java.lang.Object waitForInferenceFinish;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.algorithm = software.amazon.jsii.Kernel.get(this, "algorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.campaignId = software.amazon.jsii.Kernel.get(this, "campaignId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataPath = software.amazon.jsii.Kernel.get(this, "dataPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetPath = software.amazon.jsii.Kernel.get(this, "targetPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trainingJobId = software.amazon.jsii.Kernel.get(this, "trainingJobId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userConfig = software.amazon.jsii.Kernel.get(this, "userConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remark = software.amazon.jsii.Kernel.get(this, "remark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.waitForInferenceFinish = software.amazon.jsii.Kernel.get(this, "waitForInferenceFinish", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.algorithm = java.util.Objects.requireNonNull(builder.algorithm, "algorithm is required");
            this.campaignId = java.util.Objects.requireNonNull(builder.campaignId, "campaignId is required");
            this.dataPath = java.util.Objects.requireNonNull(builder.dataPath, "dataPath is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.targetPath = java.util.Objects.requireNonNull(builder.targetPath, "targetPath is required");
            this.trainingJobId = java.util.Objects.requireNonNull(builder.trainingJobId, "trainingJobId is required");
            this.userConfig = java.util.Objects.requireNonNull(builder.userConfig, "userConfig is required");
            this.remark = builder.remark;
            this.waitForInferenceFinish = builder.waitForInferenceFinish;
        }

        @Override
        public final java.lang.Object getAlgorithm() {
            return this.algorithm;
        }

        @Override
        public final java.lang.Object getCampaignId() {
            return this.campaignId;
        }

        @Override
        public final java.lang.Object getDataPath() {
            return this.dataPath;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getTargetPath() {
            return this.targetPath;
        }

        @Override
        public final java.lang.Object getTrainingJobId() {
            return this.trainingJobId;
        }

        @Override
        public final java.lang.Object getUserConfig() {
            return this.userConfig;
        }

        @Override
        public final java.lang.Object getRemark() {
            return this.remark;
        }

        @Override
        public final java.lang.Object getWaitForInferenceFinish() {
            return this.waitForInferenceFinish;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("algorithm", om.valueToTree(this.getAlgorithm()));
            data.set("campaignId", om.valueToTree(this.getCampaignId()));
            data.set("dataPath", om.valueToTree(this.getDataPath()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("targetPath", om.valueToTree(this.getTargetPath()));
            data.set("trainingJobId", om.valueToTree(this.getTrainingJobId()));
            data.set("userConfig", om.valueToTree(this.getUserConfig()));
            if (this.getRemark() != null) {
                data.set("remark", om.valueToTree(this.getRemark()));
            }
            if (this.getWaitForInferenceFinish() != null) {
                data.set("waitForInferenceFinish", om.valueToTree(this.getWaitForInferenceFinish()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-paiplugin.InferenceJobProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InferenceJobProps.Jsii$Proxy that = (InferenceJobProps.Jsii$Proxy) o;

            if (!algorithm.equals(that.algorithm)) return false;
            if (!campaignId.equals(that.campaignId)) return false;
            if (!dataPath.equals(that.dataPath)) return false;
            if (!name.equals(that.name)) return false;
            if (!targetPath.equals(that.targetPath)) return false;
            if (!trainingJobId.equals(that.trainingJobId)) return false;
            if (!userConfig.equals(that.userConfig)) return false;
            if (this.remark != null ? !this.remark.equals(that.remark) : that.remark != null) return false;
            return this.waitForInferenceFinish != null ? this.waitForInferenceFinish.equals(that.waitForInferenceFinish) : that.waitForInferenceFinish == null;
        }

        @Override
        public final int hashCode() {
            int result = this.algorithm.hashCode();
            result = 31 * result + (this.campaignId.hashCode());
            result = 31 * result + (this.dataPath.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.targetPath.hashCode());
            result = 31 * result + (this.trainingJobId.hashCode());
            result = 31 * result + (this.userConfig.hashCode());
            result = 31 * result + (this.remark != null ? this.remark.hashCode() : 0);
            result = 31 * result + (this.waitForInferenceFinish != null ? this.waitForInferenceFinish.hashCode() : 0);
            return result;
        }
    }
}
