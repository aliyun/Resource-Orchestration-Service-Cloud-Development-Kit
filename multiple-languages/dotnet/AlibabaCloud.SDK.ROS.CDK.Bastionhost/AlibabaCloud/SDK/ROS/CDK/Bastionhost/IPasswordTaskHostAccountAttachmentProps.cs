using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `PasswordTaskHostAccountAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPasswordTaskHostAccountAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.PasswordTaskHostAccountAttachmentProps")]
    public interface IPasswordTaskHostAccountAttachmentProps
    {
        /// <summary>Property hostAccountIds: The IDs of the host accounts to be attached to the password task.</summary>
        [JsiiProperty(name: "hostAccountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object HostAccountIds
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the bastion host instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property taskId: The ID of the password task.</summary>
        [JsiiProperty(name: "taskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskId
        {
            get;
        }

        /// <summary>Properties for defining a `PasswordTaskHostAccountAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPasswordTaskHostAccountAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.PasswordTaskHostAccountAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IPasswordTaskHostAccountAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property hostAccountIds: The IDs of the host accounts to be attached to the password task.</summary>
            [JsiiProperty(name: "hostAccountIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object HostAccountIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the bastion host instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property taskId: The ID of the password task.</summary>
            [JsiiProperty(name: "taskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
