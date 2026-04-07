using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `ModelVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IModelVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.ModelVersionProps")]
    public interface IModelVersionProps
    {
        /// <summary>Property modelId: Model ID.</summary>
        /// <remarks>
        /// For details about how to obtain the model ID.
        /// </remarks>
        [JsiiProperty(name: "modelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ModelId
        {
            get;
        }

        /// <summary>Property uri: Model version URI, that is, the location where the model is stored.</summary>
        /// <remarks>
        /// Possible values are:
        ///
        /// <list type="bullet">
        /// <description>The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.</description>
        /// <description>If the model is stored in OSS, the format is 'oss://<bucket xmlns="http://www.w3.org/1999/xhtml"></bucket>.<endpoint xmlns="http://www.w3.org/1999/xhtml"></endpoint>/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Uri
        {
            get;
        }

        /// <summary>Property approvalStatus: Admission status, with values as follows: - Pending: to be determined.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Approved: Allow to go online.</description>
        /// <description>Rejected: Online is not allowed.</description>
        /// </list>
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

        /// <summary>Property extraInfo: The additional information.</summary>
        [JsiiProperty(name: "extraInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExtraInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.</summary>
        [JsiiProperty(name: "formatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FormatType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.</summary>
        [JsiiProperty(name: "frameworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FrameworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property inferenceSpec: Describes how to apply to downstream inference services.</summary>
        /// <remarks>
        /// For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
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

        /// <summary>Property labels: List of model version labels.</summary>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosModelVersion.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property metrics: The metrics for the model.</summary>
        /// <remarks>
        /// The length after serialization is limited to 8,192. Example:
        /// { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
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

        /// <summary>Property options: The extended field.</summary>
        /// <remarks>
        /// This is a JSON string.
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

        /// <summary>Property sourceId: Source ID.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>When the source type is Custom, this field is not restricted.</description>
        /// <description>When the source is PAIFlow or TrainingService, the format is
        /// '''
        /// region=&lt;region_id&gt;,workspaceId=&lt;workspace_id&gt;,kind=<kind xmlns="http://www.w3.org/1999/xhtml"></kind>,id=<id xmlns="http://www.w3.org/1999/xhtml"></id>
        /// '''
        /// Among them:</description>
        /// <description>region is the Alibaba Cloud region ID.</description>
        /// <description>workspaceId indicates the workspace ID.</description>
        /// <description>kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).</description>
        /// <description>id: is a unique identifier.</description>
        /// </list>
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

        /// <summary>Property sourceType: Model source type, possible values: - Custom: Custom.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>PAIFlow:PAI workflow.</description>
        /// <description>TrainingService:PAI training service.</description>
        /// </list>
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

        /// <summary>Property trainingSpec: Training configuration.</summary>
        /// <remarks>
        /// Configuration for fine-tuning, incremental training.
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

        /// <summary>Property versionDescription: Model version description.</summary>
        [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersionDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property versionName: The model version, which is unique for each model.</summary>
        /// <remarks>
        /// If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
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

        /// <summary>Properties for defining a `ModelVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IModelVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.ModelVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property modelId: Model ID.</summary>
            /// <remarks>
            /// For details about how to obtain the model ID.
            /// </remarks>
            [JsiiProperty(name: "modelId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ModelId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property uri: Model version URI, that is, the location where the model is stored.</summary>
            /// <remarks>
            /// Possible values are:
            ///
            /// <list type="bullet">
            /// <description>The HTTP(S) address of the model, for example: 'https://myweb.com/mymodel.tar.gz '.</description>
            /// <description>If the model is stored in OSS, the format is 'oss://<bucket xmlns="http://www.w3.org/1999/xhtml"></bucket>.<endpoint xmlns="http://www.w3.org/1999/xhtml"></endpoint>/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:// mybucket/'.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "uri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Uri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property approvalStatus: Admission status, with values as follows: - Pending: to be determined.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Approved: Allow to go online.</description>
            /// <description>Rejected: Online is not allowed.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "approvalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApprovalStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property extraInfo: The additional information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "extraInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ExtraInfo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "formatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FormatType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "frameworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FrameworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property inferenceSpec: Describes how to apply to downstream inference services.</summary>
            /// <remarks>
            /// For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "inferenceSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? InferenceSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property labels: List of model version labels.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosModelVersion.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property metrics: The metrics for the model.</summary>
            /// <remarks>
            /// The length after serialization is limited to 8,192. Example:
            /// { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss://xxxx/" }, "Metrics": { "cer": 0.172 } }] }
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metrics", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Metrics
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property options: The extended field.</summary>
            /// <remarks>
            /// This is a JSON string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "options", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Options
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceId: Source ID.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>When the source type is Custom, this field is not restricted.</description>
            /// <description>When the source is PAIFlow or TrainingService, the format is
            /// '''
            /// region=&lt;region_id&gt;,workspaceId=&lt;workspace_id&gt;,kind=<kind xmlns="http://www.w3.org/1999/xhtml"></kind>,id=<id xmlns="http://www.w3.org/1999/xhtml"></id>
            /// '''
            /// Among them:</description>
            /// <description>region is the Alibaba Cloud region ID.</description>
            /// <description>workspaceId indicates the workspace ID.</description>
            /// <description>kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).</description>
            /// <description>id: is a unique identifier.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceType: Model source type, possible values: - Custom: Custom.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>PAIFlow:PAI workflow.</description>
            /// <description>TrainingService:PAI training service.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trainingSpec: Training configuration.</summary>
            /// <remarks>
            /// Configuration for fine-tuning, incremental training.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trainingSpec", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? TrainingSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property versionDescription: Model version description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "versionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VersionDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property versionName: The model version, which is unique for each model.</summary>
            /// <remarks>
            /// If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
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
