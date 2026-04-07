using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `RosModelVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosModelVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosModelVersionProps")]
    public interface IRosModelVersionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: modelId: Model ID. For details about how to obtain the model ID.
        /// </remarks>
        [JsiiProperty(name: "modelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ModelId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: uri: Model version URI, that is, the location where the model is stored. Possible values are:
        /// - The HTTP(S) address of the model, for example: 'https:\/\/myweb.com\/mymodel.tar.gz '.
        /// - If the model is stored in OSS, the format is 'oss:\/\/<bucket>.<endpoint>\/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:\/\/ mybucket\/'.
        /// </remarks>
        [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Uri
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: approvalStatus: Admission status, with values as follows:
        /// - Pending: to be determined.
        /// - Approved: Allow to go online.
        /// - Rejected: Online is not allowed.
        /// </remarks>
        [JsiiProperty(name: "approvalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApprovalStatus
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: extraInfo: The additional information.
        /// </remarks>
        [JsiiProperty(name: "extraInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExtraInfo
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: formatType: Model format, possible values:
        /// - OfflineModel
        /// - SavedModel
        /// - Keras H5
        /// - Frozen Pb
        /// - Caffe Prototxt
        /// - TorchScript
        /// - XGBoost
        /// - PMML
        /// - AlinkModel
        /// - ONNX.
        /// </remarks>
        [JsiiProperty(name: "formatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FormatType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: frameworkType: Model framework, possible values:
        /// - Pytorch
        /// - XGBoost
        /// - Keras
        /// - Caffe
        /// - Alink
        /// - Xflow
        /// - TensorFlow.
        /// </remarks>
        [JsiiProperty(name: "frameworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FrameworkType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: inferenceSpec: Describes how to apply to downstream inference services. For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
        /// </remarks>
        [JsiiProperty(name: "inferenceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InferenceSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: labels: List of model version labels.
        /// </remarks>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosModelVersion.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: metrics: The metrics for the model. The length after serialization is limited to 8,192. Example:
        /// { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss:\/\/xxxx\/" }, "Metrics": { "cer": 0.172 } }] }
        /// </remarks>
        [JsiiProperty(name: "metrics", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Metrics
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: options: The extended field. This is a JSON string.
        /// </remarks>
        [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Options
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceId: Source ID.
        /// * When the source type is Custom, this field is not restricted.
        /// * When the source is PAIFlow or TrainingService, the format is
        /// '''
        /// region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
        /// '''
        /// Among them:
        /// - region is the Alibaba Cloud region ID.
        /// - workspaceId indicates the workspace ID.
        /// - kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).
        /// - id: is a unique identifier.
        /// </remarks>
        [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceType: Model source type, possible values:
        /// - Custom: Custom.
        /// - PAIFlow:PAI workflow.
        /// - TrainingService:PAI training service.
        /// </remarks>
        [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: trainingSpec: Training configuration. Configuration for fine-tuning, incremental training.
        /// </remarks>
        [JsiiProperty(name: "trainingSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrainingSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: versionDescription: Model version description.
        /// </remarks>
        [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersionDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: versionName: The model version, which is unique for each model. If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
        /// </remarks>
        [JsiiProperty(name: "versionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersionName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosModelVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosModelVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosModelVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRosModelVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: modelId: Model ID. For details about how to obtain the model ID.
            /// </remarks>
            [JsiiProperty(name: "modelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ModelId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: uri: Model version URI, that is, the location where the model is stored. Possible values are:
            /// - The HTTP(S) address of the model, for example: 'https:\/\/myweb.com\/mymodel.tar.gz '.
            /// - If the model is stored in OSS, the format is 'oss:\/\/<bucket>.<endpoint>\/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:\/\/ mybucket\/'.
            /// </remarks>
            [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Uri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: approvalStatus: Admission status, with values as follows:
            /// - Pending: to be determined.
            /// - Approved: Allow to go online.
            /// - Rejected: Online is not allowed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "approvalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApprovalStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: extraInfo: The additional information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "extraInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ExtraInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: formatType: Model format, possible values:
            /// - OfflineModel
            /// - SavedModel
            /// - Keras H5
            /// - Frozen Pb
            /// - Caffe Prototxt
            /// - TorchScript
            /// - XGBoost
            /// - PMML
            /// - AlinkModel
            /// - ONNX.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "formatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FormatType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: frameworkType: Model framework, possible values:
            /// - Pytorch
            /// - XGBoost
            /// - Keras
            /// - Caffe
            /// - Alink
            /// - Xflow
            /// - TensorFlow.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "frameworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FrameworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: inferenceSpec: Describes how to apply to downstream inference services. For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "inferenceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? InferenceSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: labels: List of model version labels.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosModelVersion.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: metrics: The metrics for the model. The length after serialization is limited to 8,192. Example:
            /// { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss:\/\/xxxx\/" }, "Metrics": { "cer": 0.172 } }] }
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metrics", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Metrics
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: options: The extended field. This is a JSON string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceId: Source ID.
            /// * When the source type is Custom, this field is not restricted.
            /// * When the source is PAIFlow or TrainingService, the format is
            /// '''
            /// region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
            /// '''
            /// Among them:
            /// - region is the Alibaba Cloud region ID.
            /// - workspaceId indicates the workspace ID.
            /// - kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).
            /// - id: is a unique identifier.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceType: Model source type, possible values:
            /// - Custom: Custom.
            /// - PAIFlow:PAI workflow.
            /// - TrainingService:PAI training service.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: trainingSpec: Training configuration. Configuration for fine-tuning, incremental training.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trainingSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? TrainingSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: versionDescription: Model version description.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VersionDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: versionName: The model version, which is unique for each model. If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "versionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VersionName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
