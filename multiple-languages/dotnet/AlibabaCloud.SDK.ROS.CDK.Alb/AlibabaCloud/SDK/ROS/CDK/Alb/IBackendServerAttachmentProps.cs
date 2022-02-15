using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `ALIYUN::ALB::BackendServerAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.BackendServerAttachmentProps")]
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
        /// 40 servers in each call.
        /// </remarks>
        [JsiiProperty(name: "servers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosBackendServerAttachment.ServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Servers
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ALB::BackendServerAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBackendServerAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.BackendServerAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IBackendServerAttachmentProps
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
            /// 40 servers in each call.
            /// </remarks>
            [JsiiProperty(name: "servers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosBackendServerAttachment.ServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Servers
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
