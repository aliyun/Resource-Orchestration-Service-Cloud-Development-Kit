using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::CustomDomain`.</summary>
    [JsiiInterface(nativeType: typeof(ICustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.CustomDomainProps")]
    public interface ICustomDomainProps
    {
        /// <summary>Property domainName: Custom domain name.</summary>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        string DomainName
        {
            get;
        }

        /// <summary>Property groupId: The id of the Group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        string GroupId
        {
            get;
        }

        /// <summary>Property certificateBody: SSL certificate body.</summary>
        [JsiiProperty(name: "certificateBody", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CertificateBody
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CertificateName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certificatePrivateKey: SSL certificate key.</summary>
        [JsiiProperty(name: "certificatePrivateKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CertificatePrivateKey
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
            [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property groupId: The id of the Group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property certificateBody: SSL certificate body.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificateBody", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificateBody
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificateName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property certificatePrivateKey: SSL certificate key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "certificatePrivateKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificatePrivateKey
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
