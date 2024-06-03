using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Paiplugin
{
    /// <summary>Properties for defining a `TrainingJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrainingJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.TrainingJobProps")]
    public interface ITrainingJobProps
    {
        /// <summary>Property algorithm: The algorithm used in training.</summary>
        [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Algorithm
        {
            get;
        }

        /// <summary>Property campaignId: The related campaign Id.</summary>
        [JsiiProperty(name: "campaignId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CampaignId
        {
            get;
        }

        /// <summary>Property dataPath: The training data path in OSS bucket.</summary>
        [JsiiProperty(name: "dataPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DataPath
        {
            get;
        }

        /// <summary>Property name: The name of training job.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.</summary>
        [JsiiProperty(name: "userConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object UserConfig
        {
            get;
        }

        /// <summary>Property remark: The remark of training job.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes.</summary>
        [JsiiProperty(name: "waitForTrainingFinish", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WaitForTrainingFinish
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TrainingJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrainingJobProps), fullyQualifiedName: "@alicloud/ros-cdk-paiplugin.TrainingJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Paiplugin.ITrainingJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property algorithm: The algorithm used in training.</summary>
            [JsiiProperty(name: "algorithm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Algorithm
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property campaignId: The related campaign Id.</summary>
            [JsiiProperty(name: "campaignId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CampaignId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataPath: The training data path in OSS bucket.</summary>
            [JsiiProperty(name: "dataPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DataPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of training job.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.</summary>
            [JsiiProperty(name: "userConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object UserConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property remark: The remark of training job.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "waitForTrainingFinish", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WaitForTrainingFinish
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
