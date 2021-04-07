using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::SslVpnClientCert`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSslVpnClientCertProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosSslVpnClientCertProps")]
    public interface IRosSslVpnClientCertProps
    {
        /// <remarks>
        /// <strong>Property</strong>: sslVpnServerId: ID of the SSL-VPN server.
        /// </remarks>
        [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SslVpnServerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the client certificate.
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::SslVpnClientCert`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSslVpnClientCertProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosSslVpnClientCertProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosSslVpnClientCertProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: sslVpnServerId: ID of the SSL-VPN server.
            /// </remarks>
            [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SslVpnServerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the client certificate.
            /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
