using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Signature`.</summary>
    [JsiiInterface(nativeType: typeof(ISignatureProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.SignatureProps")]
    public interface ISignatureProps
    {
        /// <summary>Property signatureKey: The key of the signature.</summary>
        [JsiiProperty(name: "signatureKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureKey
        {
            get;
        }

        /// <summary>Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "signatureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureName
        {
            get;
        }

        /// <summary>Property signatureSecret: The secret of the signature.</summary>
        [JsiiProperty(name: "signatureSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureSecret
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
            [JsiiProperty(name: "signatureKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.</summary>
            [JsiiProperty(name: "signatureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property signatureSecret: The secret of the signature.</summary>
            [JsiiProperty(name: "signatureSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureSecret
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
