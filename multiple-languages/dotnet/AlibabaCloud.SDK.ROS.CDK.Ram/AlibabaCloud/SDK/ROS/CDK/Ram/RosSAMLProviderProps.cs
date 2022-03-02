using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RAM::SAMLProvider`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosSAMLProviderProps")]
    public class RosSAMLProviderProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRosSAMLProviderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: samlProviderName: IdP Name. The IdP name can contain a maximum of 128 characters and only letters, numbers, and the following special characters are accepted: hyphens (-), periods (.), and underscores (_). It cannot start or end with a special character.
        /// </remarks>
        [JsiiProperty(name: "samlProviderName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SamlProviderName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description can contain a maximum of 256 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: samlMetadataDocument: SAML metadata document. The content must be 1 to 102,400 bytes in length.You must specify one of the SAMLMetadataDocument and SAMLMetadataDocumentURL properties, but you cannot specify both of them.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "samlMetadataDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SamlMetadataDocument
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: samlMetadataDocumentUrl: The URL for the file that contains the SAML metadata document. The URL must point to a document located in an HTTP or HTTPS web server or an Alibaba Cloud OSS bucket. Examples: oss://ros/document/demo and oss://ros/document/demo?RegionId=cn-hangzhou. The URL can be up to 1,024 bytes in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "samlMetadataDocumentUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SamlMetadataDocumentUrl
        {
            get;
            set;
        }
    }
}
