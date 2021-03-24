using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Signature`.</summary>
    [JsiiInterface(nativeType: typeof(ISignatureProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.SignatureProps")]
    public interface ISignatureProps
    {
        /// <summary>Property signatureKey: The key of the signature.</summary>
        [JsiiProperty(name: "signatureKey", typeJson: "{\"primitive\":\"string\"}")]
        string SignatureKey
        {
            get;
        }

        /// <summary>Property signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "signatureName", typeJson: "{\"primitive\":\"string\"}")]
        string SignatureName
        {
            get;
        }

        /// <summary>Property signatureSecret: The secret of the signature.</summary>
        [JsiiProperty(name: "signatureSecret", typeJson: "{\"primitive\":\"string\"}")]
        string SignatureSecret
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::Signature`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISignatureProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.SignatureProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.ISignatureProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property signatureKey: The key of the signature.</summary>
            [JsiiProperty(name: "signatureKey", typeJson: "{\"primitive\":\"string\"}")]
            public string SignatureKey
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property signatureName: The name of the Signature.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
            [JsiiProperty(name: "signatureName", typeJson: "{\"primitive\":\"string\"}")]
            public string SignatureName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property signatureSecret: The secret of the signature.</summary>
            [JsiiProperty(name: "signatureSecret", typeJson: "{\"primitive\":\"string\"}")]
            public string SignatureSecret
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
