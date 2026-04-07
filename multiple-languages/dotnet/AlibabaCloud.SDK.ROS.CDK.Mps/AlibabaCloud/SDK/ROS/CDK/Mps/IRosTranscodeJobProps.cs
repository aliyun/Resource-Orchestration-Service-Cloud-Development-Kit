using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mps
{
    /// <summary>Properties for defining a `RosTranscodeJob`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTranscodeJobProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.RosTranscodeJobProps")]
    public interface IRosTranscodeJobProps
    {
        /// <remarks>
        /// <strong>Property</strong>: input: The input configuration of the job. For more information, see Input details.
        /// </remarks>
        [JsiiProperty(name: "input", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Input
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: outputBucket: The name of the OSS bucket where the output files are stored.
        /// </remarks>
        [JsiiProperty(name: "outputBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OutputBucket
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: outputs: The output configuration of the job. Consists of a list of Output objects, JSON array, with a maximum size of 30.
        /// </remarks>
        [JsiiProperty(name: "outputs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
        object Outputs
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pipelineId: The ID of the pipeline.
        /// </remarks>
        [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PipelineId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: outputLocation: The region of the OSS bucket where the output files are stored.
        /// </remarks>
        [JsiiProperty(name: "outputLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OutputLocation
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTranscodeJob`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTranscodeJobProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.RosTranscodeJobProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mps.IRosTranscodeJobProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: input: The input configuration of the job. For more information, see Input details.
            /// </remarks>
            [JsiiProperty(name: "input", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Input
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: outputBucket: The name of the OSS bucket where the output files are stored.
            /// </remarks>
            [JsiiProperty(name: "outputBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OutputBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: outputs: The output configuration of the job. Consists of a list of Output objects, JSON array, with a maximum size of 30.
            /// </remarks>
            [JsiiProperty(name: "outputs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
            public object Outputs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pipelineId: The ID of the pipeline.
            /// </remarks>
            [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PipelineId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: outputLocation: The region of the OSS bucket where the output files are stored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "outputLocation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OutputLocation
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
