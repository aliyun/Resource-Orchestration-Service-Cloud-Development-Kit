using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mps
{
    /// <summary>Properties for defining a `RosMediaWorkflow`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMediaWorkflowProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.RosMediaWorkflowProps")]
    public interface IRosMediaWorkflowProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The topology of the media workflow.
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

        /// <remarks>
        /// <strong>Property</strong>: topology: The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
        /// </remarks>
        [JsiiProperty(name: "topology", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Topology
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerMode: The triggering mode of the media workflow. Valid values:
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

        /// <summary>Properties for defining a `RosMediaWorkflow`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-mediaworkflow
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMediaWorkflowProps), fullyQualifiedName: "@alicloud/ros-cdk-mps.RosMediaWorkflowProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mps.IRosMediaWorkflowProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The topology of the media workflow.
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

            /// <remarks>
            /// <strong>Property</strong>: topology: The topology of the media workflow. The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
            /// </remarks>
            [JsiiProperty(name: "topology", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Topology
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: triggerMode: The triggering mode of the media workflow. Valid values:
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
