using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bastionhost
{
    /// <summary>Properties for defining a `HostAccountUserGroupAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHostAccountUserGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.HostAccountUserGroupAttachmentProps")]
    public interface IHostAccountUserGroupAttachmentProps
    {
        /// <summary>Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.</summary>
        [JsiiProperty(name: "hosts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachment.HostsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Hosts
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the BastionHost instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property userGroupId: The ID of the user group.</summary>
        [JsiiProperty(name: "userGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserGroupId
        {
            get;
        }

        /// <summary>Properties for defining a `HostAccountUserGroupAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccountusergroupattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHostAccountUserGroupAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-bastionhost.HostAccountUserGroupAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bastionhost.IHostAccountUserGroupAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property hosts: Specify the host IDs and host account IDs that you want to authorize for the user group.</summary>
            [JsiiProperty(name: "hosts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-bastionhost.RosHostAccountUserGroupAttachment.HostsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Hosts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the BastionHost instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userGroupId: The ID of the user group.</summary>
            [JsiiProperty(name: "userGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserGroupId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
