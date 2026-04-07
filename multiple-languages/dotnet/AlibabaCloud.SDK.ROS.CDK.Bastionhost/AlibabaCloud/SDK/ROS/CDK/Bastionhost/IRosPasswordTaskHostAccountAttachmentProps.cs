using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `RosPasswordTaskHostAccountAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPasswordTaskHostAccountAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.RosPasswordTaskHostAccountAttachmentProps")]
    public interface IRosPasswordTaskHostAccountAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: hostAccountIds: The IDs of the host accounts to be attached to the password task.
        /// </remarks>
        [JsiiProperty(name: "hostAccountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object HostAccountIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the bastion host instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskId: The ID of the password task.
        /// </remarks>
        [JsiiProperty(name: "taskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskId
        {
            get;
        }

        /// <summary>Properties for defining a `RosPasswordTaskHostAccountAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPasswordTaskHostAccountAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.RosPasswordTaskHostAccountAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IRosPasswordTaskHostAccountAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: hostAccountIds: The IDs of the host accounts to be attached to the password task.
            /// </remarks>
            [JsiiProperty(name: "hostAccountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object HostAccountIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the bastion host instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: taskId: The ID of the password task.
            /// </remarks>
            [JsiiProperty(name: "taskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
