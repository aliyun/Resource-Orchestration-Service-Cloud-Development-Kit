using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mps
{
    /// <summary>Properties for defining a `TranscodeJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITranscodeJobProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.TranscodeJobProps")]
    public interface ITranscodeJobProps
    {
        /// <summary>Property input: The input configuration of the job.</summary>
        /// <remarks>
        /// For more information, see Input details.
        /// </remarks>
        [JsiiProperty(name: "input", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Input
        {
            get;
        }

        /// <summary>Property outputBucket: The name of the OSS bucket where the output files are stored.</summary>
        [JsiiProperty(name: "outputBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OutputBucket
        {
            get;
        }

        /// <summary>Property outputs: The output configuration of the job.</summary>
        /// <remarks>
        /// Consists of a list of Output objects, JSON array, with a maximum size of 30.
        /// </remarks>
        [JsiiProperty(name: "outputs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
        object Outputs
        {
            get;
        }

        /// <summary>Property pipelineId: The ID of the pipeline.</summary>
        [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PipelineId
        {
            get;
        }

        /// <summary>Property outputLocation: The region of the OSS bucket where the output files are stored.</summary>
        [JsiiProperty(name: "outputLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OutputLocation
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TranscodeJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITranscodeJobProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.TranscodeJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mps.ITranscodeJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property input: The input configuration of the job.</summary>
            /// <remarks>
            /// For more information, see Input details.
            /// </remarks>
            [JsiiProperty(name: "input", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Input
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property outputBucket: The name of the OSS bucket where the output files are stored.</summary>
            [JsiiProperty(name: "outputBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OutputBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property outputs: The output configuration of the job.</summary>
            /// <remarks>
            /// Consists of a list of Output objects, JSON array, with a maximum size of 30.
            /// </remarks>
            [JsiiProperty(name: "outputs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
            public object Outputs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pipelineId: The ID of the pipeline.</summary>
            [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PipelineId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property outputLocation: The region of the OSS bucket where the output files are stored.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "outputLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OutputLocation
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
