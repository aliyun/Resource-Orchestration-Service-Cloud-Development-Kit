using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `SslVpnClientCert`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISslVpnClientCertProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.SslVpnClientCertProps")]
    public interface ISslVpnClientCertProps
    {
        /// <summary>Property sslVpnServerId: ID of the SSL-VPN server.</summary>
        [JsiiProperty(name: "sslVpnServerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SslVpnServerId
        {
            get;
        }

        /// <summary>Property name: The name of the SSL client certificate.</summary>
        /// <remarks>
        /// The name must be 1 to 100 characters in length, and cannot start with <c>http:\/\/</c>
        /// or <c>https:\/\/</c>.
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

        /// <summary>Properties for defining a `SslVpnClientCert`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-sslvpnclientcert
        /// </remarks>
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

            /// <summary>Property name: The name of the SSL client certificate.</summary>
            /// <remarks>
            /// The name must be 1 to 100 characters in length, and cannot start with <c>http:\/\/</c>
            /// or <c>https:\/\/</c>.
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
