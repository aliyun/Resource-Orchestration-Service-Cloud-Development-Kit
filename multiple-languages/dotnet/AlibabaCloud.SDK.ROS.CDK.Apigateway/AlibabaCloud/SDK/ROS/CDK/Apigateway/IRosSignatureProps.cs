using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `RosSignature`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSignatureProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosSignatureProps")]
    public interface IRosSignatureProps
    {
        /// <remarks>
        /// <strong>Property</strong>: signatureKey: The Key value of the key. The value must be 6 to 20 characters in length and can
        /// contain letters, digits, and underscores (_). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "signatureKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: signatureName: The displayed name of the key. The name must be 4 to 50 characters in length and
        /// can contain letters, digits, and underscores (_). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "signatureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureName
        {
            get;
        }

        /// <remarks>
        /// <strong></strong>: ), number signs (#), exclamation points (!), and
        /// asterisks (\*). The value must start with a letter.
        ///
        /// <strong>Property</strong>: signatureSecret: The Secret value of the key. The value must be 6 to 30 characters in length and
        /// can contain letters, digits, and special characters. Special characters include
        /// underscores (_), at signs (
        /// </remarks>
        [JsiiProperty(name: "signatureSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureSecret
        {
            get;
        }

        /// <summary>Properties for defining a `RosSignature`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSignatureProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosSignatureProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosSignatureProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: signatureKey: The Key value of the key. The value must be 6 to 20 characters in length and can
            /// contain letters, digits, and underscores (_). It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "signatureKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: signatureName: The displayed name of the key. The name must be 4 to 50 characters in length and
            /// can contain letters, digits, and underscores (_). It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "signatureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong></strong>: ), number signs (#), exclamation points (!), and
            /// asterisks (\*). The value must start with a letter.
            ///
            /// <strong>Property</strong>: signatureSecret: The Secret value of the key. The value must be 6 to 30 characters in length and
            /// can contain letters, digits, and special characters. Special characters include
            /// underscores (_), at signs (
            /// </remarks>
            [JsiiProperty(name: "signatureSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureSecret
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
