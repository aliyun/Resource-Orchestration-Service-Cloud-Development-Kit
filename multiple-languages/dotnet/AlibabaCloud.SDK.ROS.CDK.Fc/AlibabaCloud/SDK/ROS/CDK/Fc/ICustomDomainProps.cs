using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::CustomDomain`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.CustomDomainProps")]
    public interface ICustomDomainProps
    {
        /// <summary>Property domainName: domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        string DomainName
        {
            get;
        }

        /// <summary>Property protocol: HTTP or HTTP,HTTPS.</summary>
        [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
        string Protocol
        {
            get;
        }

        /// <summary>Property apiVersion: api version.</summary>
        [JsiiProperty(name: "apiVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ApiVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certConfig: certificate info.</summary>
        [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.</summary>
        [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FC::CustomDomain`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.CustomDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.ICustomDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: domain name.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property protocol: HTTP or HTTP,HTTPS.</summary>
            [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
            public string Protocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property apiVersion: api version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "apiVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ApiVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property certConfig: certificate info.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.CertConfigProperty\"}]}}", isOptional: true)]
            public object? CertConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosCustomDomain.RouteConfigProperty\"}]}}", isOptional: true)]
            public object? RouteConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
