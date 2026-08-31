using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `Signature`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISignatureProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.SignatureProps")]
    public interface ISignatureProps
    {
        /// <summary>Property signatureKey: The Key value of the key.</summary>
        /// <remarks>
        /// The value must be 6 to 20 characters in length and can
        /// contain letters, digits, and underscores (_). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "signatureKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureKey
        {
            get;
        }

        /// <summary>Property signatureName: The displayed name of the key.</summary>
        /// <remarks>
        /// The name must be 4 to 50 characters in length and
        /// can contain letters, digits, and underscores (_). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "signatureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureName
        {
            get;
        }

        /// <summary>Property signatureSecret: The Secret value of the key.</summary>
        /// <remarks>
        /// The value must be 6 to 30 characters in length and
        /// can contain letters, digits, and special characters. Special characters include
        /// underscores (_), at signs (@), number signs (#), exclamation points (!), and
        /// asterisks (*). The value must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "signatureSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureSecret
        {
            get;
        }

        /// <summary>Properties for defining a `Signature`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signature
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISignatureProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.SignatureProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.ISignatureProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property signatureKey: The Key value of the key.</summary>
            /// <remarks>
            /// The value must be 6 to 20 characters in length and can
            /// contain letters, digits, and underscores (_). It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "signatureKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property signatureName: The displayed name of the key.</summary>
            /// <remarks>
            /// The name must be 4 to 50 characters in length and
            /// can contain letters, digits, and underscores (_). It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "signatureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property signatureSecret: The Secret value of the key.</summary>
            /// <remarks>
            /// The value must be 6 to 30 characters in length and
            /// can contain letters, digits, and special characters. Special characters include
            /// underscores (_), at signs (@), number signs (#), exclamation points (!), and
            /// asterisks (*). The value must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "signatureSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureSecret
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
