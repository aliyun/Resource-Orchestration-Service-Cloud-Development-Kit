using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb
{
    /// <summary>Properties for defining a `RosBackendServerAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.RosBackendServerAttachmentProps")]
    public interface IRosBackendServerAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serverGroupId: The ID of the server group.
        /// </remarks>
        [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServerGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: servers: The backend servers that you want to add to the server group. You can specify up to
        /// 200 servers in each call.
        /// </remarks>
        [JsiiProperty(name: "servers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosBackendServerAttachment.ServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Servers
        {
            get;
        }

        /// <summary>Properties for defining a `RosBackendServerAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.RosBackendServerAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.IRosBackendServerAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: serverGroupId: The ID of the server group.
            /// </remarks>
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: servers: The backend servers that you want to add to the server group. You can specify up to
            /// 200 servers in each call.
            /// </remarks>
            [JsiiProperty(name: "servers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosBackendServerAttachment.ServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Servers
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
