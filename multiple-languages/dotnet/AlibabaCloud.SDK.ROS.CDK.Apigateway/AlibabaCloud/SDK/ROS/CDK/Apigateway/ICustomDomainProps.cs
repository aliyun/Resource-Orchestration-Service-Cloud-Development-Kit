using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::CustomDomain`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.CustomDomainProps")]
    public interface ICustomDomainProps
    {
        /// <summary>Property domainName: Custom domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DomainName
        {
            get;
        }

        /// <summary>Property groupId: The id of the Group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property certificateBody: SSL certificate body.</summary>
        [JsiiProperty(name: "certificateBody", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertificateBody
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certificateName: SSL certificate name.</summary>
        [JsiiProperty(name: "certificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertificateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certificatePrivateKey: SSL certificate key.</summary>
        [JsiiProperty(name: "certificatePrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertificatePrivateKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::CustomDomain`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.CustomDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.ICustomDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property domainName: Custom domain name.</summary>
            [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DomainName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupId: The id of the Group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property certificateBody: SSL certificate body.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificateBody", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertificateBody
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property certificateName: SSL certificate name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertificateName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property certificatePrivateKey: SSL certificate key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificatePrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertificatePrivateKey
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
