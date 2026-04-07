package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::ModelVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:28.394Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.ModelVersion")
public class ModelVersion extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IModelVersion {

    protected ModelVersion(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ModelVersion(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ModelVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ModelVersionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ModelVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ModelVersionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ApprovalStatus: Admission status, with values as follows:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovalStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrApprovalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExtraInfo: Other information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrExtraInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FormatType: Model format, possible values:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFormatType() {
        return software.amazon.jsii.Kernel.get(this, "attrFormatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FrameworkType: Model framework, possible values:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFrameworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrFrameworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrGmtCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInferenceSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrInferenceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Labels: List of model version labels.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
        return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Metrics: Model indicators.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetrics() {
        return software.amazon.jsii.Kernel.get(this, "attrMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Options: Extension field.
     * <p>
     * The JsonString type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
        return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OwnerId: The Alibaba Cloud account ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceId: Source ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceType: Model source type, possible values:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TrainingSpec: Training configuration.
     * <p>
     * Configuration for fine-tuning, incremental training.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrainingSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrTrainingSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Uri: Model version URI, that is, the location where the model is stored.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
        return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserId: The user ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VersionDescription: Model version description.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VersionName: Model version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionName() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ModelVersionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ModelVersionProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.ModelVersion}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.ModelVersion> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.pai.ModelVersionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.ModelVersionProps.Builder();
        }

        /**
         * Property modelId: Model ID.
         * <p>
         * For details about how to obtain the model ID.
         * <p>
         * @return {@code this}
         * @param modelId Property modelId: Model ID. This parameter is required.
         */
        public Builder modelId(final java.lang.String modelId) {
            this.props.modelId(modelId);
            return this;
        }
        /**
         * Property modelId: Model ID.
         * <p>
         * For details about how to obtain the model ID.
         * <p>
         * @return {@code this}
         * @param modelId Property modelId: Model ID. This parameter is required.
         */
        public Builder modelId(final com.aliyun.ros.cdk.core.IResolvable modelId) {
            this.props.modelId(modelId);
            return this;
        }

        /**
         * Property uri: Model version URI, that is, the location where the model is stored.
         * <p>
         * Possible values are:
         * <p>
         * <ul>
         * <li>The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.</li>
         * <li>If the model is stored in OSS, the format is 'oss://<bucket>.<endpoint>/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param uri Property uri: Model version URI, that is, the location where the model is stored. This parameter is required.
         */
        public Builder uri(final java.lang.String uri) {
            this.props.uri(uri);
            return this;
        }
        /**
         * Property uri: Model version URI, that is, the location where the model is stored.
         * <p>
         * Possible values are:
         * <p>
         * <ul>
         * <li>The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.</li>
         * <li>If the model is stored in OSS, the format is 'oss://<bucket>.<endpoint>/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param uri Property uri: Model version URI, that is, the location where the model is stored. This parameter is required.
         */
        public Builder uri(final com.aliyun.ros.cdk.core.IResolvable uri) {
            this.props.uri(uri);
            return this;
        }

        /**
         * Property approvalStatus: Admission status, with values as follows: - Pending: to be determined.
         * <p>
         * <ul>
         * <li>Approved: Allow to go online.</li>
         * <li>Rejected: Online is not allowed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param approvalStatus Property approvalStatus: Admission status, with values as follows: - Pending: to be determined. This parameter is required.
         */
        public Builder approvalStatus(final java.lang.String approvalStatus) {
            this.props.approvalStatus(approvalStatus);
            return this;
        }
        /**
         * Property approvalStatus: Admission status, with values as follows: - Pending: to be determined.
         * <p>
         * <ul>
         * <li>Approved: Allow to go online.</li>
         * <li>Rejected: Online is not allowed.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param approvalStatus Property approvalStatus: Admission status, with values as follows: - Pending: to be determined. This parameter is required.
         */
        public Builder approvalStatus(final com.aliyun.ros.cdk.core.IResolvable approvalStatus) {
            this.props.approvalStatus(approvalStatus);
            return this;
        }

        /**
         * Property extraInfo: The additional information.
         * <p>
         * @return {@code this}
         * @param extraInfo Property extraInfo: The additional information. This parameter is required.
         */
        public Builder extraInfo(final com.aliyun.ros.cdk.core.IResolvable extraInfo) {
            this.props.extraInfo(extraInfo);
            return this;
        }
        /**
         * Property extraInfo: The additional information.
         * <p>
         * @return {@code this}
         * @param extraInfo Property extraInfo: The additional information. This parameter is required.
         */
        public Builder extraInfo(final java.util.Map<java.lang.String, ? extends java.lang.Object> extraInfo) {
            this.props.extraInfo(extraInfo);
            return this;
        }

        /**
         * Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.
         * <p>
         * @return {@code this}
         * @param formatType Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX. This parameter is required.
         */
        public Builder formatType(final java.lang.String formatType) {
            this.props.formatType(formatType);
            return this;
        }
        /**
         * Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.
         * <p>
         * @return {@code this}
         * @param formatType Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX. This parameter is required.
         */
        public Builder formatType(final com.aliyun.ros.cdk.core.IResolvable formatType) {
            this.props.formatType(formatType);
            return this;
        }

        /**
         * Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.
         * <p>
         * @return {@code this}
         * @param frameworkType Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow. This parameter is required.
         */
        public Builder frameworkType(final java.lang.String frameworkType) {
            this.props.frameworkType(frameworkType);
            return this;
        }
        /**
         * Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.
         * <p>
         * @return {@code this}
         * @param frameworkType Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow. This parameter is required.
         */
        public Builder frameworkType(final com.aliyun.ros.cdk.core.IResolvable frameworkType) {
            this.props.frameworkType(frameworkType);
            return this;
        }

        /**
         * Property inferenceSpec: Describes how to apply to downstream inference services.
         * <p>
         * For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
         * <p>
         * @return {@code this}
         * @param inferenceSpec Property inferenceSpec: Describes how to apply to downstream inference services. This parameter is required.
         */
        public Builder inferenceSpec(final com.aliyun.ros.cdk.core.IResolvable inferenceSpec) {
            this.props.inferenceSpec(inferenceSpec);
            return this;
        }
        /**
         * Property inferenceSpec: Describes how to apply to downstream inference services.
         * <p>
         * For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
         * <p>
         * @return {@code this}
         * @param inferenceSpec Property inferenceSpec: Describes how to apply to downstream inference services. This parameter is required.
         */
        public Builder inferenceSpec(final java.util.Map<java.lang.String, ? extends java.lang.Object> inferenceSpec) {
            this.props.inferenceSpec(inferenceSpec);
            return this;
        }

        /**
         * Property labels: List of model version labels.
         * <p>
         * @return {@code this}
         * @param labels Property labels: List of model version labels. This parameter is required.
         */
        public Builder labels(final com.aliyun.ros.cdk.core.IResolvable labels) {
            this.props.labels(labels);
            return this;
        }
        /**
         * Property labels: List of model version labels.
         * <p>
         * @return {@code this}
         * @param labels Property labels: List of model version labels. This parameter is required.
         */
        public Builder labels(final java.util.List<? extends java.lang.Object> labels) {
            this.props.labels(labels);
            return this;
        }

        /**
         * Property metrics: The metrics for the model.
         * <p>
         * The length after serialization is limited to 8,192. Example:
         * { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
         * <p>
         * @return {@code this}
         * @param metrics Property metrics: The metrics for the model. This parameter is required.
         */
        public Builder metrics(final com.aliyun.ros.cdk.core.IResolvable metrics) {
            this.props.metrics(metrics);
            return this;
        }
        /**
         * Property metrics: The metrics for the model.
         * <p>
         * The length after serialization is limited to 8,192. Example:
         * { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
         * <p>
         * @return {@code this}
         * @param metrics Property metrics: The metrics for the model. This parameter is required.
         */
        public Builder metrics(final java.util.Map<java.lang.String, ? extends java.lang.Object> metrics) {
            this.props.metrics(metrics);
            return this;
        }

        /**
         * Property options: The extended field.
         * <p>
         * This is a JSON string.
         * <p>
         * @return {@code this}
         * @param options Property options: The extended field. This parameter is required.
         */
        public Builder options(final java.lang.String options) {
            this.props.options(options);
            return this;
        }
        /**
         * Property options: The extended field.
         * <p>
         * This is a JSON string.
         * <p>
         * @return {@code this}
         * @param options Property options: The extended field. This parameter is required.
         */
        public Builder options(final com.aliyun.ros.cdk.core.IResolvable options) {
            this.props.options(options);
            return this;
        }

        /**
         * Property sourceId: Source ID.
         * <p>
         * <ul>
         * <li>When the source type is Custom, this field is not restricted.</li>
         * <li>When the source is PAIFlow or TrainingService, the format is
         * '''
         * region=&lt;region_id&gt;,workspaceId=&lt;workspace_id&gt;,kind=<kind>,id=<id>
         * '''
         * Among them:</li>
         * <li>region is the Alibaba Cloud region ID.</li>
         * <li>workspaceId indicates the workspace ID.</li>
         * <li>kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).</li>
         * <li>id: is a unique identifier.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: Source ID. This parameter is required.
         */
        public Builder sourceId(final java.lang.String sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }
        /**
         * Property sourceId: Source ID.
         * <p>
         * <ul>
         * <li>When the source type is Custom, this field is not restricted.</li>
         * <li>When the source is PAIFlow or TrainingService, the format is
         * '''
         * region=&lt;region_id&gt;,workspaceId=&lt;workspace_id&gt;,kind=<kind>,id=<id>
         * '''
         * Among them:</li>
         * <li>region is the Alibaba Cloud region ID.</li>
         * <li>workspaceId indicates the workspace ID.</li>
         * <li>kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).</li>
         * <li>id: is a unique identifier.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: Source ID. This parameter is required.
         */
        public Builder sourceId(final com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }

        /**
         * Property sourceType: Model source type, possible values: - Custom: Custom.
         * <p>
         * <ul>
         * <li>PAIFlow:PAI workflow.</li>
         * <li>TrainingService:PAI training service.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Model source type, possible values: - Custom: Custom. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: Model source type, possible values: - Custom: Custom.
         * <p>
         * <ul>
         * <li>PAIFlow:PAI workflow.</li>
         * <li>TrainingService:PAI training service.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Model source type, possible values: - Custom: Custom. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property trainingSpec: Training configuration.
         * <p>
         * Configuration for fine-tuning, incremental training.
         * <p>
         * @return {@code this}
         * @param trainingSpec Property trainingSpec: Training configuration. This parameter is required.
         */
        public Builder trainingSpec(final com.aliyun.ros.cdk.core.IResolvable trainingSpec) {
            this.props.trainingSpec(trainingSpec);
            return this;
        }
        /**
         * Property trainingSpec: Training configuration.
         * <p>
         * Configuration for fine-tuning, incremental training.
         * <p>
         * @return {@code this}
         * @param trainingSpec Property trainingSpec: Training configuration. This parameter is required.
         */
        public Builder trainingSpec(final java.util.Map<java.lang.String, ? extends java.lang.Object> trainingSpec) {
            this.props.trainingSpec(trainingSpec);
            return this;
        }

        /**
         * Property versionDescription: Model version description.
         * <p>
         * @return {@code this}
         * @param versionDescription Property versionDescription: Model version description. This parameter is required.
         */
        public Builder versionDescription(final java.lang.String versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }
        /**
         * Property versionDescription: Model version description.
         * <p>
         * @return {@code this}
         * @param versionDescription Property versionDescription: Model version description. This parameter is required.
         */
        public Builder versionDescription(final com.aliyun.ros.cdk.core.IResolvable versionDescription) {
            this.props.versionDescription(versionDescription);
            return this;
        }

        /**
         * Property versionName: The model version, which is unique for each model.
         * <p>
         * If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
         * <p>
         * @return {@code this}
         * @param versionName Property versionName: The model version, which is unique for each model. This parameter is required.
         */
        public Builder versionName(final java.lang.String versionName) {
            this.props.versionName(versionName);
            return this;
        }
        /**
         * Property versionName: The model version, which is unique for each model.
         * <p>
         * If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
         * <p>
         * @return {@code this}
         * @param versionName Property versionName: The model version, which is unique for each model. This parameter is required.
         */
        public Builder versionName(final com.aliyun.ros.cdk.core.IResolvable versionName) {
            this.props.versionName(versionName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.ModelVersion}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.ModelVersion build() {
            return new com.aliyun.ros.cdk.pai.ModelVersion(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
