using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::CustomDomain`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosCustomDomainProps")]
    public class RosCustomDomainProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosCustomDomainProps
    {
        /// <remarks>
        /// <strong>Property</strong>: domainName: Custom domain name.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DomainName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the Group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: certificateBody: SSL certificate body.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certificateBody", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CertificateBody
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: certificateName: SSL certificate name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certificateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CertificateName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: certificatePrivateKey: SSL certificate key.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certificatePrivateKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CertificatePrivateKey
        {
            get;
            set;
        }
    }
}
