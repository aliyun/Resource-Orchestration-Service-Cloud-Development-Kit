using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paiplugin
{
    /// <summary>Properties for defining a `InferenceJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInferenceJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.InferenceJobProps")]
    public interface IInferenceJobProps
    {
        /// <summary>Property algorithm: The algorithm of inference job.</summary>
        [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Algorithm
        {
            get;
        }

        /// <summary>Property campaignId: The campaign id of inference job.</summary>
        [JsiiProperty(name: "campaignId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CampaignId
        {
            get;
        }

        /// <summary>Property dataPath: The input data path of inference job.</summary>
        [JsiiProperty(name: "dataPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataPath
        {
            get;
        }

        /// <summary>Property name: The name of inference job.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property targetPath: The output result path of inference job.</summary>
        [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetPath
        {
            get;
        }

        /// <summary>Property trainingJobId: The training job id of inference job.</summary>
        [JsiiProperty(name: "trainingJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrainingJobId
        {
            get;
        }

        /// <summary>Property userConfig: The user config of inference job.</summary>
        [JsiiProperty(name: "userConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object UserConfig
        {
            get;
        }

        /// <summary>Property remark: The remark of inference job.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes.</summary>
        [JsiiProperty(name: "waitForInferenceFinish", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WaitForInferenceFinish
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `InferenceJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInferenceJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.InferenceJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paiplugin.IInferenceJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property algorithm: The algorithm of inference job.</summary>
            [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Algorithm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property campaignId: The campaign id of inference job.</summary>
            [JsiiProperty(name: "campaignId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CampaignId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataPath: The input data path of inference job.</summary>
            [JsiiProperty(name: "dataPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of inference job.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetPath: The output result path of inference job.</summary>
            [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property trainingJobId: The training job id of inference job.</summary>
            [JsiiProperty(name: "trainingJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrainingJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userConfig: The user config of inference job.</summary>
            [JsiiProperty(name: "userConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object UserConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property remark: The remark of inference job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "waitForInferenceFinish", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WaitForInferenceFinish
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
