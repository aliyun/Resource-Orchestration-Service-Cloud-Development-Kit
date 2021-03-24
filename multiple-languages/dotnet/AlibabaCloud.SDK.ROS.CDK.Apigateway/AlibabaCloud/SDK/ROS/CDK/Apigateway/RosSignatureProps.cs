using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Signature`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosSignatureProps")]
    public class RosSignatureProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosSignatureProps
    {
        /// <remarks>
        /// <strong>Property</strong>: signatureKey: The key of the signature.
        /// </remarks>
        [JsiiProperty(name: "signatureKey", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SignatureKey
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "signatureName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SignatureName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: signatureSecret: The secret of the signature.
        /// </remarks>
        [JsiiProperty(name: "signatureSecret", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SignatureSecret
        {
            get;
            set;
        }
    }
}
