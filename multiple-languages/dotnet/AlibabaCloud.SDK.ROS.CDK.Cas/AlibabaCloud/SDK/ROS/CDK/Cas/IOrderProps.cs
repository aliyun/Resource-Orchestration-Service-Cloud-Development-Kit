using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `Order`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.OrderProps")]
    public interface IOrderProps
    {
        /// <summary>Property certBrand: Certificate brand.</summary>
        /// <remarks>
        /// Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        /// </remarks>
        [JsiiProperty(name: "certBrand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CertBrand
        {
            get;
        }

        /// <summary>Property certType: Certificate type.</summary>
        /// <remarks>
        /// Valid values: DV, OV, EV.
        /// </remarks>
        [JsiiProperty(name: "certType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CertType
        {
            get;
        }

        /// <summary>Property domainCnt: Number of domains to be included in the certificate.</summary>
        /// <remarks>
        /// Valid values: 1-500.
        /// </remarks>
        [JsiiProperty(name: "domainCnt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainCnt
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domains: Domain names.</summary>
        /// <remarks>
        /// If you specify this parameter, you do not need to specify DomainCnt; otherwise, the length of the array used for this parameter will prevail.
        /// <strong>Note:</strong> This parameter is not supported by international stations.
        /// </remarks>
        [JsiiProperty(name: "domains", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Domains
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domainType: Domain type.</summary>
        /// <remarks>
        /// Valid values: one, all, multiple.
        /// </remarks>
        [JsiiProperty(name: "domainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property merge: Whether to merge issues.</summary>
        /// <remarks>
        /// Syndication is the process of combining multiple certificates (domains) into a single certificate, including full single or wildcard domains.
        /// For example: aliyun.com/*.aliyun.com
        /// <strong>Note</strong>: The number of combined certificates (domains) is not recommended to exceed 200
        /// </remarks>
        [JsiiProperty(name: "merge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Merge
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property monitor: Whether to enable monitoring domains.</summary>
        /// <remarks>
        /// <strong>Note:</strong> This parameter is not supported by international stations.
        /// </remarks>
        [JsiiProperty(name: "monitor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Monitor
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Service time of the certificate, in year.</summary>
        /// <remarks>
        /// Valid values: 1, 2, 3.
        /// Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property service: Whether enable other service.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>NoNeed: Do not apply for any services.</description>
        /// <description>ExpeditedProduct: Request assistance services.</description>
        /// <description>DeployProduct: Deploy services.</description>
        /// <description>SM2DeployProduct: Deploy services with SM2 encryption.</description>
        /// <description>VipProduct: Request assistance and deployment services.
        /// <strong>Note:</strong> This parameter is not supported by international stations.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "service", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Service
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Order`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.OrderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.IOrderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property certBrand: Certificate brand.</summary>
            /// <remarks>
            /// Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
            /// </remarks>
            [JsiiProperty(name: "certBrand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CertBrand
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property certType: Certificate type.</summary>
            /// <remarks>
            /// Valid values: DV, OV, EV.
            /// </remarks>
            [JsiiProperty(name: "certType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CertType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domainCnt: Number of domains to be included in the certificate.</summary>
            /// <remarks>
            /// Valid values: 1-500.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainCnt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainCnt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domains: Domain names.</summary>
            /// <remarks>
            /// If you specify this parameter, you do not need to specify DomainCnt; otherwise, the length of the array used for this parameter will prevail.
            /// <strong>Note:</strong> This parameter is not supported by international stations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domains", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Domains
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainType: Domain type.</summary>
            /// <remarks>
            /// Valid values: one, all, multiple.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property merge: Whether to merge issues.</summary>
            /// <remarks>
            /// Syndication is the process of combining multiple certificates (domains) into a single certificate, including full single or wildcard domains.
            /// For example: aliyun.com/*.aliyun.com
            /// <strong>Note</strong>: The number of combined certificates (domains) is not recommended to exceed 200
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "merge", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Merge
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property monitor: Whether to enable monitoring domains.</summary>
            /// <remarks>
            /// <strong>Note:</strong> This parameter is not supported by international stations.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "monitor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Monitor
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: Service time of the certificate, in year.</summary>
            /// <remarks>
            /// Valid values: 1, 2, 3.
            /// Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property service: Whether enable other service.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>NoNeed: Do not apply for any services.</description>
            /// <description>ExpeditedProduct: Request assistance services.</description>
            /// <description>DeployProduct: Deploy services.</description>
            /// <description>SM2DeployProduct: Deploy services with SM2 encryption.</description>
            /// <description>VipProduct: Request assistance and deployment services.
            /// <strong>Note:</strong> This parameter is not supported by international stations.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "service", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Service
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
