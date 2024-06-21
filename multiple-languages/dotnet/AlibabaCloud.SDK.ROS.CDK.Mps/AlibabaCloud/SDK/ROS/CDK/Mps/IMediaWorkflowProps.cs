using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mps
{
    /// <summary>Properties for defining a `MediaWorkflow`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMediaWorkflowProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.MediaWorkflowProps")]
    public interface IMediaWorkflowProps
    {
        /// <summary>Property name: The topology of the media workflow.</summary>
        /// <remarks>
        /// The value cannot be empty.
        /// The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
        /// The name can be up to 64 characters in length.
        /// The value must be encoded in the UTF-8 format.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property topology: The topology of the media workflow.</summary>
        /// <remarks>
        /// The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
        /// </remarks>
        [JsiiProperty(name: "topology", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Topology
        {
            get;
        }

        /// <summary>Property triggerMode: The triggering mode of the media workflow.</summary>
        /// <remarks>
        /// Valid values:
        /// OssAutoTrigger: The media workflow is automatically triggered.
        /// NotInAuto: The media workflow is not automatically triggered.
        /// </remarks>
        [JsiiProperty(name: "triggerMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TriggerMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MediaWorkflow`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMediaWorkflowProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.MediaWorkflowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mps.IMediaWorkflowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: The topology of the media workflow.</summary>
            /// <remarks>
            /// The value cannot be empty.
            /// The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
            /// The name can be up to 64 characters in length.
            /// The value must be encoded in the UTF-8 format.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property topology: The topology of the media workflow.</summary>
            /// <remarks>
            /// The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
            /// </remarks>
            [JsiiProperty(name: "topology", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Topology
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property triggerMode: The triggering mode of the media workflow.</summary>
            /// <remarks>
            /// Valid values:
            /// OssAutoTrigger: The media workflow is automatically triggered.
            /// NotInAuto: The media workflow is not automatically triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "triggerMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TriggerMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
