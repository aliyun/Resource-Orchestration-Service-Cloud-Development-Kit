using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `RosCustomDomain`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosCustomDomainProps")]
    public interface IRosCustomDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: domain name
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: HTTP or HTTP,HTTPS
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Protocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: apiVersion: api version
        /// </remarks>
        [JsiiProperty(name: "apiVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApiVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: certConfig: certificate info
        /// </remarks>
        [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
        /// </remarks>
        [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCustomDomain`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosCustomDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IRosCustomDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: domain name
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: HTTP or HTTP,HTTPS
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Protocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: apiVersion: api version
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "apiVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApiVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: certConfig: certificate info
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
            public object? CertConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
            public object? RouteConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
