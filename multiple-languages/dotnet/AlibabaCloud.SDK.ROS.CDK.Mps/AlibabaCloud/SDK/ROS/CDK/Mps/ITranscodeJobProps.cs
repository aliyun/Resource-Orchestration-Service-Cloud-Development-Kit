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
        /// <summary>Property input: Job input.</summary>
        /// <remarks>
        ///     <list type="bullet">
        ///     <description>In ApsaraVideo Media Processing APIs, the Object value must be URL-encoded
        ///     using UTF-8 encoding.</description>
        ///     </list>
        ///
        /// <list type="bullet">
        /// <description>The OSS region must match the region where MPS is deployed.</description>
        /// </list>
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

        /// <summary>Property outputLocation: The OSS region (OSS Region) where the output bucket resides.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>The OSS bucket must be in the same region as the ApsaraVideo Media Processing
        /// service.</description>
        /// <description>Follows the OSS bucket definition.</description>
        /// </list>
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

            /// <summary>Property input: Job input.</summary>
            /// <remarks>
            ///     <list type="bullet">
            ///     <description>In ApsaraVideo Media Processing APIs, the Object value must be URL-encoded
            ///     using UTF-8 encoding.</description>
            ///     </list>
            ///
            /// <list type="bullet">
            /// <description>The OSS region must match the region where MPS is deployed.</description>
            /// </list>
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

            /// <summary>Property outputLocation: The OSS region (OSS Region) where the output bucket resides.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>The OSS bucket must be in the same region as the ApsaraVideo Media Processing
            /// service.</description>
            /// <description>Follows the OSS bucket definition.</description>
            /// </list>
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
