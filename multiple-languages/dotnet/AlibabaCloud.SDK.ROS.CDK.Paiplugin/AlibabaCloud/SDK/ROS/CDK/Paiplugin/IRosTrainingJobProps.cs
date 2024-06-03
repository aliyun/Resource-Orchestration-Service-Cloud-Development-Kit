using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paiplugin
{
    /// <summary>Properties for defining a `RosTrainingJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTrainingJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.RosTrainingJobProps")]
    public interface IRosTrainingJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: algorithm: The algorithm used in training.
        /// </remarks>
        [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Algorithm
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: campaignId: The related campaign Id.
        /// </remarks>
        [JsiiProperty(name: "campaignId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CampaignId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataPath: The training data path in OSS bucket.
        /// </remarks>
        [JsiiProperty(name: "dataPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataPath
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of training job.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
        /// </remarks>
        [JsiiProperty(name: "userConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object UserConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: The remark of training job.
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
        /// <strong>Property</strong>: waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
        /// </remarks>
        [JsiiProperty(name: "waitForTrainingFinish", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WaitForTrainingFinish
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTrainingJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTrainingJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.RosTrainingJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paiplugin.IRosTrainingJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: algorithm: The algorithm used in training.
            /// </remarks>
            [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Algorithm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: campaignId: The related campaign Id.
            /// </remarks>
            [JsiiProperty(name: "campaignId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CampaignId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataPath: The training data path in OSS bucket.
            /// </remarks>
            [JsiiProperty(name: "dataPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of training job.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
            /// </remarks>
            [JsiiProperty(name: "userConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object UserConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: remark: The remark of training job.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "waitForTrainingFinish", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WaitForTrainingFinish
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
