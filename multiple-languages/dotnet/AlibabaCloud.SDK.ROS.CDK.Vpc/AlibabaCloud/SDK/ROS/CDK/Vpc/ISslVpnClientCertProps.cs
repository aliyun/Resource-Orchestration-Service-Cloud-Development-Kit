using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::SslVpnClientCert`.</summary>
    [JsiiInterface(nativeType: typeof(ISslVpnClientCertProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SslVpnClientCertProps")]
    public interface ISslVpnClientCertProps
    {
        /// <summary>Property sslVpnServerId: ID of the SSL-VPN server.</summary>
        [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"primitive\":\"string\"}")]
        string SslVpnServerId
        {
            get;
        }

        /// <summary>Property name: The name of the client certificate.</summary>
        /// <remarks>
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
        [JsiiTypeProxy(nativeType: typeof(ISslVpnClientCertProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SslVpnClientCertProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ISslVpnClientCertProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property sslVpnServerId: ID of the SSL-VPN server.</summary>
            [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"primitive\":\"string\"}")]
            public string SslVpnServerId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property name: The name of the client certificate.</summary>
            /// <remarks>
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
