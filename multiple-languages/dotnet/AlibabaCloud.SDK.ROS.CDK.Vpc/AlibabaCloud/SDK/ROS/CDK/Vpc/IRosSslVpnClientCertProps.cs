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
        [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"primitive\":\"string\"}")]
        string SslVpnServerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the client certificate.
        /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
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
            [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"primitive\":\"string\"}")]
            public string SslVpnServerId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the client certificate.
            /// The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
