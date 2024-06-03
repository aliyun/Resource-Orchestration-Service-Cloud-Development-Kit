using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `TLSPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-tlspolicy
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.TLSPolicyProps")]
    public class TLSPolicyProps : AlibabaCloud.SDK.ROS.CDK.Slb.ITLSPolicyProps
    {
        private object _ciphers;

        /// <summary>Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.</summary>
        /// <remarks>
        /// You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
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
            get => _ciphers;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case string cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ciphers = value;
            }
        }

        private object _tlsPolicyName;

        /// <summary>Property tlsPolicyName: The name of the TLS policy.</summary>
        /// <remarks>
        /// The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "tlsPolicyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object TlsPolicyName
        {
            get => _tlsPolicyName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _tlsPolicyName = value;
            }
        }

        private object _tlsVersions;

        /// <summary>Property tlsVersions: The version of the TLS protocol.</summary>
        [JsiiProperty(name: "tlsVersions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object TlsVersions
        {
            get => _tlsVersions;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case string cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _tlsVersions = value;
            }
        }
    }
}
