using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `RosOrder`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.RosOrderProps")]
    public interface IRosOrderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        /// </remarks>
        [JsiiProperty(name: "certBrand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CertBrand
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: certType: Certificate type. Valid values: DV, OV, EV.
        /// </remarks>
        [JsiiProperty(name: "certType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CertType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: domainCnt: Number of domains to be included in the certificate. Valid values: 1-500.
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

        /// <remarks>
        /// <strong>Property</strong>: domainType: Domain type. Valid values: one, all, multiple.
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

        /// <remarks>
        /// <strong>Property</strong>: period: Service time of the certificate, in year. Valid values: 1, 2, 3.
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

        /// <remarks>
        /// <strong>Property</strong>: service: Whether enable other service. Valid values:
        /// - NoNeed: Do not apply for any services.
        /// - ExpeditedProduct: Request assistance services.
        /// - DeployProduct: Deploy services.
        /// - SM2DeployProduct: Deploy services with SM2 encryption.
        /// - VipProduct: Request assistance and deployment services.
        /// **Note:** This parameter is not supported by international stations.
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

        /// <summary>Properties for defining a `RosOrder`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.RosOrderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.IRosOrderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
            /// </remarks>
            [JsiiProperty(name: "certBrand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CertBrand
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: certType: Certificate type. Valid values: DV, OV, EV.
            /// </remarks>
            [JsiiProperty(name: "certType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CertType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: domainCnt: Number of domains to be included in the certificate. Valid values: 1-500.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainCnt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainCnt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: domainType: Domain type. Valid values: one, all, multiple.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: Service time of the certificate, in year. Valid values: 1, 2, 3.
            /// Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: service: Whether enable other service. Valid values:
            /// - NoNeed: Do not apply for any services.
            /// - ExpeditedProduct: Request assistance services.
            /// - DeployProduct: Deploy services.
            /// - SM2DeployProduct: Deploy services with SM2 encryption.
            /// - VipProduct: Request assistance and deployment services.
            /// **Note:** This parameter is not supported by international stations.
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
