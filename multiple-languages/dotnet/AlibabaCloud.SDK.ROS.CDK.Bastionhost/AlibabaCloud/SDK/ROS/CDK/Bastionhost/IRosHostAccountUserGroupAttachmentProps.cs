using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `RosHostAccountUserGroupAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHostAccountUserGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachmentProps")]
    public interface IRosHostAccountUserGroupAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
        /// </remarks>
        [JsiiProperty(name: "hosts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachment.HostsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Hosts
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the BastionHost instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: userGroupId: The ID of the user group.
        /// </remarks>
        [JsiiProperty(name: "userGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserGroupId
        {
            get;
        }

        /// <summary>Properties for defining a `RosHostAccountUserGroupAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHostAccountUserGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IRosHostAccountUserGroupAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.
            /// </remarks>
            [JsiiProperty(name: "hosts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachment.HostsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Hosts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the BastionHost instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: userGroupId: The ID of the user group.
            /// </remarks>
            [JsiiProperty(name: "userGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserGroupId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
