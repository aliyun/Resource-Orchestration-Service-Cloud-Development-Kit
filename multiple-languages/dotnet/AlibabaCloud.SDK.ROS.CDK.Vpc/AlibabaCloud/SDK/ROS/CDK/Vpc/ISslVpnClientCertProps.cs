using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::SslVpnClientCert`.</summary>
    [JsiiInterface(nativeType: typeof(ISslVpnClientCertProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SslVpnClientCertProps")]
    public interface ISslVpnClientCertProps
    {
        /// <summary>Property sslVpnServerId: ID of the SSL-VPN server.</summary>
        [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SslVpnServerId
        {
            get;
        }

        /// <summary>Property name: The name of the client certificate.</summary>
        /// <remarks>
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
        [JsiiTypeProxy(nativeType: typeof(ISslVpnClientCertProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SslVpnClientCertProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ISslVpnClientCertProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property sslVpnServerId: ID of the SSL-VPN server.</summary>
            [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SslVpnServerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the client certificate.</summary>
            /// <remarks>
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
