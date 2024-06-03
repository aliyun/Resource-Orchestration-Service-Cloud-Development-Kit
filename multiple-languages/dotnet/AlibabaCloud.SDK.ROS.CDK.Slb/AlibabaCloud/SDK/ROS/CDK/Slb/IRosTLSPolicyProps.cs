using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `RosTLSPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTLSPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosTLSPolicyProps")]
    public interface IRosTLSPolicyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ciphers: The supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
        /// ECDHE-ECDSA-AES128-SHA
        /// ECDHE-ECDSA-AES256-SHA
        /// ECDHE-RSA-AES128-SHA
        /// ECDHE-RSA-AES256-SHA
        /// AES128-SHA
        /// AES256-SHA
        /// DES-CBC3-SHA
        /// TLS 1.2 supports the following cipher suites:
        /// ECDHE-ECDSA-AES128-SHA
        /// ECDHE-ECDSA-AES256-SHA
        /// ECDHE-RSA-AES128-SHA
        /// ECDHE-RSA-AES256-SHA
        /// AES128-SHA
        /// AES256-SHA
        /// DES-CBC3-SHA
        /// ECDHE-ECDSA-AES128-GCM-SHA256
        /// ECDHE-ECDSA-AES256-GCM-SHA384
        /// ECDHE-ECDSA-AES128-SHA256
        /// ECDHE-ECDSA-AES256-SHA384
        /// ECDHE-RSA-AES128-GCM-SHA256
        /// ECDHE-RSA-AES256-GCM-SHA384
        /// ECDHE-RSA-AES128-SHA256
        /// ECDHE-RSA-AES256-SHA384
        /// AES128-GCM-SHA256
        /// AES256-GCM-SHA384
        /// AES128-SHA256
        /// AES256-SHA256
        /// TLS 1.3 supports the following cipher suites:
        /// TLS_AES_128_GCM_SHA256
        /// TLS_AES_256_GCM_SHA384
        /// TLS_CHACHA20_POLY1305_SHA256
        /// TLS_AES_128_CCM_SHA256
        /// TLS_AES_128_CCM_8_SHA256
        /// </remarks>
        [JsiiProperty(name: "ciphers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object Ciphers
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: tlsPolicyName: The name of the TLS policy. The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "tlsPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TlsPolicyName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: tlsVersions: The version of the TLS protocol.
        /// </remarks>
        [JsiiProperty(name: "tlsVersions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object TlsVersions
        {
            get;
        }

        /// <summary>Properties for defining a `RosTLSPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTLSPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosTLSPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IRosTLSPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ciphers: The supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
            /// ECDHE-ECDSA-AES128-SHA
            /// ECDHE-ECDSA-AES256-SHA
            /// ECDHE-RSA-AES128-SHA
            /// ECDHE-RSA-AES256-SHA
            /// AES128-SHA
            /// AES256-SHA
            /// DES-CBC3-SHA
            /// TLS 1.2 supports the following cipher suites:
            /// ECDHE-ECDSA-AES128-SHA
            /// ECDHE-ECDSA-AES256-SHA
            /// ECDHE-RSA-AES128-SHA
            /// ECDHE-RSA-AES256-SHA
            /// AES128-SHA
            /// AES256-SHA
            /// DES-CBC3-SHA
            /// ECDHE-ECDSA-AES128-GCM-SHA256
            /// ECDHE-ECDSA-AES256-GCM-SHA384
            /// ECDHE-ECDSA-AES128-SHA256
            /// ECDHE-ECDSA-AES256-SHA384
            /// ECDHE-RSA-AES128-GCM-SHA256
            /// ECDHE-RSA-AES256-GCM-SHA384
            /// ECDHE-RSA-AES128-SHA256
            /// ECDHE-RSA-AES256-SHA384
            /// AES128-GCM-SHA256
            /// AES256-GCM-SHA384
            /// AES128-SHA256
            /// AES256-SHA256
            /// TLS 1.3 supports the following cipher suites:
            /// TLS_AES_128_GCM_SHA256
            /// TLS_AES_256_GCM_SHA384
            /// TLS_CHACHA20_POLY1305_SHA256
            /// TLS_AES_128_CCM_SHA256
            /// TLS_AES_128_CCM_8_SHA256
            /// </remarks>
            [JsiiProperty(name: "ciphers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object Ciphers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: tlsPolicyName: The name of the TLS policy. The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiProperty(name: "tlsPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TlsPolicyName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: tlsVersions: The version of the TLS protocol.
            /// </remarks>
            [JsiiProperty(name: "tlsVersions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object TlsVersions
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
