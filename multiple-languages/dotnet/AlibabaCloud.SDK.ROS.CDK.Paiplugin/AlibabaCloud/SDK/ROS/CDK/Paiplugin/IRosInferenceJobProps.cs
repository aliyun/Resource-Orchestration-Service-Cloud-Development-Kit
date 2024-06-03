using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paiplugin
{
    /// <summary>Properties for defining a `RosInferenceJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInferenceJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.RosInferenceJobProps")]
    public interface IRosInferenceJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: algorithm: The algorithm of inference job.
        /// </remarks>
        [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Algorithm
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: campaignId: The campaign id of inference job.
        /// </remarks>
        [JsiiProperty(name: "campaignId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CampaignId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataPath: The input data path of inference job.
        /// </remarks>
        [JsiiProperty(name: "dataPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataPath
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of inference job.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetPath: The output result path of inference job.
        /// </remarks>
        [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetPath
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trainingJobId: The training job id of inference job.
        /// </remarks>
        [JsiiProperty(name: "trainingJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrainingJobId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: userConfig: The user config of inference job.
        /// </remarks>
        [JsiiProperty(name: "userConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object UserConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: The remark of inference job.
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
        /// </remarks>
        [JsiiProperty(name: "waitForInferenceFinish", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WaitForInferenceFinish
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosInferenceJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInferenceJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.RosInferenceJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paiplugin.IRosInferenceJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: algorithm: The algorithm of inference job.
            /// </remarks>
            [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Algorithm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: campaignId: The campaign id of inference job.
            /// </remarks>
            [JsiiProperty(name: "campaignId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CampaignId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataPath: The input data path of inference job.
            /// </remarks>
            [JsiiProperty(name: "dataPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of inference job.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetPath: The output result path of inference job.
            /// </remarks>
            [JsiiProperty(name: "targetPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trainingJobId: The training job id of inference job.
            /// </remarks>
            [JsiiProperty(name: "trainingJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrainingJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: userConfig: The user config of inference job.
            /// </remarks>
            [JsiiProperty(name: "userConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object UserConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: remark: The remark of inference job.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "waitForInferenceFinish", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WaitForInferenceFinish
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
