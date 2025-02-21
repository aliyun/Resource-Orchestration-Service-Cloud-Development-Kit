using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nlb
{
    /// <summary>Properties for defining a `BackendServerAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.BackendServerAttachmentProps")]
    public interface IBackendServerAttachmentProps
    {
        /// <summary>Property serverGroupId: The ID of the server group.</summary>
        [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServerGroupId
        {
            get;
        }

        /// <summary>Property servers: The backend servers that you want to add to the server group.</summary>
        /// <remarks>
        /// You can specify up to
        /// 200 servers in each call.
        /// </remarks>
        [JsiiProperty(name: "servers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-nlb.RosBackendServerAttachment.ServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Servers
        {
            get;
        }

        /// <summary>Properties for defining a `BackendServerAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-backendserverattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-nlb.BackendServerAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nlb.IBackendServerAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property serverGroupId: The ID of the server group.</summary>
            [JsiiProperty(name: "serverGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property servers: The backend servers that you want to add to the server group.</summary>
            /// <remarks>
            /// You can specify up to
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
