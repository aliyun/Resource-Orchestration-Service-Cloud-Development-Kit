package com.aliyun.ros.cdk.pai;

/**
 * Properties for defining a <code>ModelVersion</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:20:13.809Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.ModelVersionProps")
@software.amazon.jsii.Jsii.Proxy(ModelVersionProps.Jsii$Proxy.class)
public interface ModelVersionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property modelId: Model ID.
     * <p>
     * For details about how to obtain the model ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getModelId();

    /**
     * Property uri: Model version URI, that is, the location where the model is stored.
     * <p>
     * Possible values are:
     * <p>
     * <ul>
     * <li>The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.</li>
     * <li>If the model is stored in OSS, the format is 'oss://<bucket>.<endpoint>/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUri();

    /**
     * Property approvalStatus: Admission status, with values as follows: - Pending: to be determined.
     * <p>
     * <ul>
     * <li>Approved: Allow to go online.</li>
     * <li>Rejected: Online is not allowed.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApprovalStatus() {
        return null;
    }

    /**
     * Property extraInfo: The additional information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExtraInfo() {
        return null;
    }

    /**
     * Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFormatType() {
        return null;
    }

    /**
     * Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFrameworkType() {
        return null;
    }

    /**
     * Property inferenceSpec: Describes how to apply to downstream inference services.
     * <p>
     * For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInferenceSpec() {
        return null;
    }

    /**
     * Property labels: List of model version labels.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
        return null;
    }

    /**
     * Property metrics: The metrics for the model.
     * <p>
     * The length after serialization is limited to 8,192. Example:
     * { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetrics() {
        return null;
    }

    /**
     * Property options: The extended field.
     * <p>
     * This is a JSON string.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptions() {
        return null;
    }

    /**
     * Property sourceId: Source ID.
     * <p>
     * <ul>
     * <li>When the source type is Custom, this field is not restricted.</li>
     * <li>When the source is PAIFlow or TrainingService, the format is:
     * region=&lt;region_id&gt;,workspaceId=&lt;workspace_id&gt;,kind=<kind>,id=<id>
     * Among them:</li>
     * <li>region is the Alibaba Cloud region ID.</li>
     * <li>workspaceId indicates the workspace ID.</li>
     * <li>kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).</li>
     * <li>id: is a unique identifier.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceId() {
        return null;
    }

    /**
     * Property sourceType: Model source type, possible values: - Custom: Custom.
     * <p>
     * <ul>
     * <li>PAIFlow:PAI workflow.</li>
     * <li>TrainingService:PAI training service.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceType() {
        return null;
    }

    /**
     * Property trainingSpec: Training configuration.
     * <p>
     * Configuration for fine-tuning, incremental training.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTrainingSpec() {
        return null;
    }

    /**
     * Property versionDescription: Model version description.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionDescription() {
        return null;
    }

    /**
     * Property versionName: The model version, which is unique for each model.
     * <p>
     * If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVersionName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ModelVersionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ModelVersionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ModelVersionProps> {
        java.lang.Object modelId;
        java.lang.Object uri;
        java.lang.Object approvalStatus;
        java.lang.Object extraInfo;
        java.lang.Object formatType;
        java.lang.Object frameworkType;
        java.lang.Object inferenceSpec;
        java.lang.Object labels;
        java.lang.Object metrics;
        java.lang.Object options;
        java.lang.Object sourceId;
        java.lang.Object sourceType;
        java.lang.Object trainingSpec;
        java.lang.Object versionDescription;
        java.lang.Object versionName;

        /**
         * Sets the value of {@link ModelVersionProps#getModelId}
         * @param modelId Property modelId: Model ID. This parameter is required.
         *                For details about how to obtain the model ID.
         * @return {@code this}
         */
        public Builder modelId(java.lang.String modelId) {
            this.modelId = modelId;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getModelId}
         * @param modelId Property modelId: Model ID. This parameter is required.
         *                For details about how to obtain the model ID.
         * @return {@code this}
         */
        public Builder modelId(com.aliyun.ros.cdk.core.IResolvable modelId) {
            this.modelId = modelId;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getUri}
         * @param uri Property uri: Model version URI, that is, the location where the model is stored. This parameter is required.
         *            Possible values are:
         *            <p>
         *            <ul>
         *            <li>The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.</li>
         *            <li>If the model is stored in OSS, the format is 'oss://<bucket>.<endpoint>/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.</li>
         *            </ul>
         * @return {@code this}
         */
        public Builder uri(java.lang.String uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getUri}
         * @param uri Property uri: Model version URI, that is, the location where the model is stored. This parameter is required.
         *            Possible values are:
         *            <p>
         *            <ul>
         *            <li>The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.</li>
         *            <li>If the model is stored in OSS, the format is 'oss://<bucket>.<endpoint>/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.</li>
         *            </ul>
         * @return {@code this}
         */
        public Builder uri(com.aliyun.ros.cdk.core.IResolvable uri) {
            this.uri = uri;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getApprovalStatus}
         * @param approvalStatus Property approvalStatus: Admission status, with values as follows: - Pending: to be determined.
         *                       <ul>
         *                       <li>Approved: Allow to go online.</li>
         *                       <li>Rejected: Online is not allowed.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder approvalStatus(java.lang.String approvalStatus) {
            this.approvalStatus = approvalStatus;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getApprovalStatus}
         * @param approvalStatus Property approvalStatus: Admission status, with values as follows: - Pending: to be determined.
         *                       <ul>
         *                       <li>Approved: Allow to go online.</li>
         *                       <li>Rejected: Online is not allowed.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder approvalStatus(com.aliyun.ros.cdk.core.IResolvable approvalStatus) {
            this.approvalStatus = approvalStatus;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getExtraInfo}
         * @param extraInfo Property extraInfo: The additional information.
         * @return {@code this}
         */
        public Builder extraInfo(com.aliyun.ros.cdk.core.IResolvable extraInfo) {
            this.extraInfo = extraInfo;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getExtraInfo}
         * @param extraInfo Property extraInfo: The additional information.
         * @return {@code this}
         */
        public Builder extraInfo(java.util.Map<java.lang.String, ? extends java.lang.Object> extraInfo) {
            this.extraInfo = extraInfo;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getFormatType}
         * @param formatType Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.
         * @return {@code this}
         */
        public Builder formatType(java.lang.String formatType) {
            this.formatType = formatType;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getFormatType}
         * @param formatType Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.
         * @return {@code this}
         */
        public Builder formatType(com.aliyun.ros.cdk.core.IResolvable formatType) {
            this.formatType = formatType;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getFrameworkType}
         * @param frameworkType Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.
         * @return {@code this}
         */
        public Builder frameworkType(java.lang.String frameworkType) {
            this.frameworkType = frameworkType;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getFrameworkType}
         * @param frameworkType Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.
         * @return {@code this}
         */
        public Builder frameworkType(com.aliyun.ros.cdk.core.IResolvable frameworkType) {
            this.frameworkType = frameworkType;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getInferenceSpec}
         * @param inferenceSpec Property inferenceSpec: Describes how to apply to downstream inference services.
         *                      For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
         * @return {@code this}
         */
        public Builder inferenceSpec(com.aliyun.ros.cdk.core.IResolvable inferenceSpec) {
            this.inferenceSpec = inferenceSpec;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getInferenceSpec}
         * @param inferenceSpec Property inferenceSpec: Describes how to apply to downstream inference services.
         *                      For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
         * @return {@code this}
         */
        public Builder inferenceSpec(java.util.Map<java.lang.String, ? extends java.lang.Object> inferenceSpec) {
            this.inferenceSpec = inferenceSpec;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getLabels}
         * @param labels Property labels: List of model version labels.
         * @return {@code this}
         */
        public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getLabels}
         * @param labels Property labels: List of model version labels.
         * @return {@code this}
         */
        public Builder labels(java.util.List<? extends java.lang.Object> labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getMetrics}
         * @param metrics Property metrics: The metrics for the model.
         *                The length after serialization is limited to 8,192. Example:
         *                { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
         * @return {@code this}
         */
        public Builder metrics(com.aliyun.ros.cdk.core.IResolvable metrics) {
            this.metrics = metrics;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getMetrics}
         * @param metrics Property metrics: The metrics for the model.
         *                The length after serialization is limited to 8,192. Example:
         *                { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
         * @return {@code this}
         */
        public Builder metrics(java.util.Map<java.lang.String, ? extends java.lang.Object> metrics) {
            this.metrics = metrics;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getOptions}
         * @param options Property options: The extended field.
         *                This is a JSON string.
         * @return {@code this}
         */
        public Builder options(java.lang.String options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getOptions}
         * @param options Property options: The extended field.
         *                This is a JSON string.
         * @return {@code this}
         */
        public Builder options(com.aliyun.ros.cdk.core.IResolvable options) {
            this.options = options;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getSourceId}
         * @param sourceId Property sourceId: Source ID.
         *                 <ul>
         *                 <li>When the source type is Custom, this field is not restricted.</li>
         *                 <li>When the source is PAIFlow or TrainingService, the format is:
         *                 region=&lt;region_id&gt;,workspaceId=&lt;workspace_id&gt;,kind=<kind>,id=<id>
         *                 Among them:</li>
         *                 <li>region is the Alibaba Cloud region ID.</li>
         *                 <li>workspaceId indicates the workspace ID.</li>
         *                 <li>kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).</li>
         *                 <li>id: is a unique identifier.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder sourceId(java.lang.String sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getSourceId}
         * @param sourceId Property sourceId: Source ID.
         *                 <ul>
         *                 <li>When the source type is Custom, this field is not restricted.</li>
         *                 <li>When the source is PAIFlow or TrainingService, the format is:
         *                 region=&lt;region_id&gt;,workspaceId=&lt;workspace_id&gt;,kind=<kind>,id=<id>
         *                 Among them:</li>
         *                 <li>region is the Alibaba Cloud region ID.</li>
         *                 <li>workspaceId indicates the workspace ID.</li>
         *                 <li>kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).</li>
         *                 <li>id: is a unique identifier.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder sourceId(com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.sourceId = sourceId;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getSourceType}
         * @param sourceType Property sourceType: Model source type, possible values: - Custom: Custom.
         *                   <ul>
         *                   <li>PAIFlow:PAI workflow.</li>
         *                   <li>TrainingService:PAI training service.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getSourceType}
         * @param sourceType Property sourceType: Model source type, possible values: - Custom: Custom.
         *                   <ul>
         *                   <li>PAIFlow:PAI workflow.</li>
         *                   <li>TrainingService:PAI training service.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getTrainingSpec}
         * @param trainingSpec Property trainingSpec: Training configuration.
         *                     Configuration for fine-tuning, incremental training.
         * @return {@code this}
         */
        public Builder trainingSpec(com.aliyun.ros.cdk.core.IResolvable trainingSpec) {
            this.trainingSpec = trainingSpec;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getTrainingSpec}
         * @param trainingSpec Property trainingSpec: Training configuration.
         *                     Configuration for fine-tuning, incremental training.
         * @return {@code this}
         */
        public Builder trainingSpec(java.util.Map<java.lang.String, ? extends java.lang.Object> trainingSpec) {
            this.trainingSpec = trainingSpec;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getVersionDescription}
         * @param versionDescription Property versionDescription: Model version description.
         * @return {@code this}
         */
        public Builder versionDescription(java.lang.String versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getVersionDescription}
         * @param versionDescription Property versionDescription: Model version description.
         * @return {@code this}
         */
        public Builder versionDescription(com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.versionDescription = versionDescription;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getVersionName}
         * @param versionName Property versionName: The model version, which is unique for each model.
         *                    If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
         * @return {@code this}
         */
        public Builder versionName(java.lang.String versionName) {
            this.versionName = versionName;
            return this;
        }

        /**
         * Sets the value of {@link ModelVersionProps#getVersionName}
         * @param versionName Property versionName: The model version, which is unique for each model.
         *                    If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
         * @return {@code this}
         */
        public Builder versionName(com.aliyun.ros.cdk.core.IResolvable versionName) {
            this.versionName = versionName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ModelVersionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ModelVersionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ModelVersionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ModelVersionProps {
        private final java.lang.Object modelId;
        private final java.lang.Object uri;
        private final java.lang.Object approvalStatus;
        private final java.lang.Object extraInfo;
        private final java.lang.Object formatType;
        private final java.lang.Object frameworkType;
        private final java.lang.Object inferenceSpec;
        private final java.lang.Object labels;
        private final java.lang.Object metrics;
        private final java.lang.Object options;
        private final java.lang.Object sourceId;
        private final java.lang.Object sourceType;
        private final java.lang.Object trainingSpec;
        private final java.lang.Object versionDescription;
        private final java.lang.Object versionName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.modelId = software.amazon.jsii.Kernel.get(this, "modelId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uri = software.amazon.jsii.Kernel.get(this, "uri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.approvalStatus = software.amazon.jsii.Kernel.get(this, "approvalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.extraInfo = software.amazon.jsii.Kernel.get(this, "extraInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.formatType = software.amazon.jsii.Kernel.get(this, "formatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.frameworkType = software.amazon.jsii.Kernel.get(this, "frameworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.inferenceSpec = software.amazon.jsii.Kernel.get(this, "inferenceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metrics = software.amazon.jsii.Kernel.get(this, "metrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.options = software.amazon.jsii.Kernel.get(this, "options", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceId = software.amazon.jsii.Kernel.get(this, "sourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trainingSpec = software.amazon.jsii.Kernel.get(this, "trainingSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionDescription = software.amazon.jsii.Kernel.get(this, "versionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.versionName = software.amazon.jsii.Kernel.get(this, "versionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.modelId = java.util.Objects.requireNonNull(builder.modelId, "modelId is required");
            this.uri = java.util.Objects.requireNonNull(builder.uri, "uri is required");
            this.approvalStatus = builder.approvalStatus;
            this.extraInfo = builder.extraInfo;
            this.formatType = builder.formatType;
            this.frameworkType = builder.frameworkType;
            this.inferenceSpec = builder.inferenceSpec;
            this.labels = builder.labels;
            this.metrics = builder.metrics;
            this.options = builder.options;
            this.sourceId = builder.sourceId;
            this.sourceType = builder.sourceType;
            this.trainingSpec = builder.trainingSpec;
            this.versionDescription = builder.versionDescription;
            this.versionName = builder.versionName;
        }

        @Override
        public final java.lang.Object getModelId() {
            return this.modelId;
        }

        @Override
        public final java.lang.Object getUri() {
            return this.uri;
        }

        @Override
        public final java.lang.Object getApprovalStatus() {
            return this.approvalStatus;
        }

        @Override
        public final java.lang.Object getExtraInfo() {
            return this.extraInfo;
        }

        @Override
        public final java.lang.Object getFormatType() {
            return this.formatType;
        }

        @Override
        public final java.lang.Object getFrameworkType() {
            return this.frameworkType;
        }

        @Override
        public final java.lang.Object getInferenceSpec() {
            return this.inferenceSpec;
        }

        @Override
        public final java.lang.Object getLabels() {
            return this.labels;
        }

        @Override
        public final java.lang.Object getMetrics() {
            return this.metrics;
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
        public final java.lang.Object getTrainingSpec() {
            return this.trainingSpec;
        }

        @Override
        public final java.lang.Object getVersionDescription() {
            return this.versionDescription;
        }

        @Override
        public final java.lang.Object getVersionName() {
            return this.versionName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("modelId", om.valueToTree(this.getModelId()));
            data.set("uri", om.valueToTree(this.getUri()));
            if (this.getApprovalStatus() != null) {
                data.set("approvalStatus", om.valueToTree(this.getApprovalStatus()));
            }
            if (this.getExtraInfo() != null) {
                data.set("extraInfo", om.valueToTree(this.getExtraInfo()));
            }
            if (this.getFormatType() != null) {
                data.set("formatType", om.valueToTree(this.getFormatType()));
            }
            if (this.getFrameworkType() != null) {
                data.set("frameworkType", om.valueToTree(this.getFrameworkType()));
            }
            if (this.getInferenceSpec() != null) {
                data.set("inferenceSpec", om.valueToTree(this.getInferenceSpec()));
            }
            if (this.getLabels() != null) {
                data.set("labels", om.valueToTree(this.getLabels()));
            }
            if (this.getMetrics() != null) {
                data.set("metrics", om.valueToTree(this.getMetrics()));
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
            if (this.getTrainingSpec() != null) {
                data.set("trainingSpec", om.valueToTree(this.getTrainingSpec()));
            }
            if (this.getVersionDescription() != null) {
                data.set("versionDescription", om.valueToTree(this.getVersionDescription()));
            }
            if (this.getVersionName() != null) {
                data.set("versionName", om.valueToTree(this.getVersionName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pai.ModelVersionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ModelVersionProps.Jsii$Proxy that = (ModelVersionProps.Jsii$Proxy) o;

            if (!modelId.equals(that.modelId)) return false;
            if (!uri.equals(that.uri)) return false;
            if (this.approvalStatus != null ? !this.approvalStatus.equals(that.approvalStatus) : that.approvalStatus != null) return false;
            if (this.extraInfo != null ? !this.extraInfo.equals(that.extraInfo) : that.extraInfo != null) return false;
            if (this.formatType != null ? !this.formatType.equals(that.formatType) : that.formatType != null) return false;
            if (this.frameworkType != null ? !this.frameworkType.equals(that.frameworkType) : that.frameworkType != null) return false;
            if (this.inferenceSpec != null ? !this.inferenceSpec.equals(that.inferenceSpec) : that.inferenceSpec != null) return false;
            if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
            if (this.metrics != null ? !this.metrics.equals(that.metrics) : that.metrics != null) return false;
            if (this.options != null ? !this.options.equals(that.options) : that.options != null) return false;
            if (this.sourceId != null ? !this.sourceId.equals(that.sourceId) : that.sourceId != null) return false;
            if (this.sourceType != null ? !this.sourceType.equals(that.sourceType) : that.sourceType != null) return false;
            if (this.trainingSpec != null ? !this.trainingSpec.equals(that.trainingSpec) : that.trainingSpec != null) return false;
            if (this.versionDescription != null ? !this.versionDescription.equals(that.versionDescription) : that.versionDescription != null) return false;
            return this.versionName != null ? this.versionName.equals(that.versionName) : that.versionName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.modelId.hashCode();
            result = 31 * result + (this.uri.hashCode());
            result = 31 * result + (this.approvalStatus != null ? this.approvalStatus.hashCode() : 0);
            result = 31 * result + (this.extraInfo != null ? this.extraInfo.hashCode() : 0);
            result = 31 * result + (this.formatType != null ? this.formatType.hashCode() : 0);
            result = 31 * result + (this.frameworkType != null ? this.frameworkType.hashCode() : 0);
            result = 31 * result + (this.inferenceSpec != null ? this.inferenceSpec.hashCode() : 0);
            result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
            result = 31 * result + (this.metrics != null ? this.metrics.hashCode() : 0);
            result = 31 * result + (this.options != null ? this.options.hashCode() : 0);
            result = 31 * result + (this.sourceId != null ? this.sourceId.hashCode() : 0);
            result = 31 * result + (this.sourceType != null ? this.sourceType.hashCode() : 0);
            result = 31 * result + (this.trainingSpec != null ? this.trainingSpec.hashCode() : 0);
            result = 31 * result + (this.versionDescription != null ? this.versionDescription.hashCode() : 0);
            result = 31 * result + (this.versionName != null ? this.versionName.hashCode() : 0);
            return result;
        }
    }
}
