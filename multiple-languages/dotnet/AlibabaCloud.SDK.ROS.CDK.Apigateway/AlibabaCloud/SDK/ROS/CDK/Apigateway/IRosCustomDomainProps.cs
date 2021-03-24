using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::CustomDomain`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosCustomDomainProps")]
    public interface IRosCustomDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: Custom domain name.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        string DomainName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the Group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        string GroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: certificateBody: SSL certificate body.
        /// </remarks>
        [JsiiProperty(name: "certificateBody", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CertificateBody
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CertificateName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: certificatePrivateKey: SSL certificate key.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosCustomDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosCustomDomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosCustomDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: domainName: Custom domain name.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The id of the Group.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: certificateBody: SSL certificate body.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificateBody", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificateBody
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificateName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificateName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: certificatePrivateKey: SSL certificate key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certificatePrivateKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CertificatePrivateKey
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
