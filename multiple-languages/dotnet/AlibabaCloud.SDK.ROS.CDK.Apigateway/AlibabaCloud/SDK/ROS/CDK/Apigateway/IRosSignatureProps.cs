using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Signature`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSignatureProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosSignatureProps")]
    public interface IRosSignatureProps
    {
        /// <remarks>
        /// <strong>Property</strong>: signatureKey: The key of the signature.
        /// </remarks>
        [JsiiProperty(name: "signatureKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "signatureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: signatureSecret: The secret of the signature.
        /// </remarks>
        [JsiiProperty(name: "signatureSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureSecret
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::Signature`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSignatureProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosSignatureProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosSignatureProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: signatureKey: The key of the signature.
            /// </remarks>
            [JsiiProperty(name: "signatureKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: signatureName: The name of the Signature.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
            /// </remarks>
            [JsiiProperty(name: "signatureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: signatureSecret: The secret of the signature.
            /// </remarks>
            [JsiiProperty(name: "signatureSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureSecret
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
