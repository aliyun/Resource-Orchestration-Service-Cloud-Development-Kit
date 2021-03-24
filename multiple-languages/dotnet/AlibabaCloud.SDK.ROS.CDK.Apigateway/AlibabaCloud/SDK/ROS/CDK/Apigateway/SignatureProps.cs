using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Signature`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.SignatureProps")]
    public class SignatureProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.ISignatureProps
    {
        /// <summary>Property signatureKey: The key of the signature.</summary>
        [JsiiProperty(name: "signatureKey", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SignatureKey
        {
            get;
            set;
        }

        /// <summary>Property signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "signatureName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SignatureName
        {
            get;
            set;
        }

        /// <summary>Property signatureSecret: The secret of the signature.</summary>
        [JsiiProperty(name: "signatureSecret", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SignatureSecret
        {
            get;
            set;
        }
    }
}
