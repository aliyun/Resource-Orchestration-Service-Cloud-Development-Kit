using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `SignatureBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signaturebinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISignatureBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.SignatureBindingProps")]
    public interface ISignatureBindingProps
    {
        /// <summary>Property apiIds: APIs to bind with the signature.</summary>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiIds
        {
            get;
        }

        /// <summary>Property groupId: The id of group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property signatureId: The id of the Signature.</summary>
        [JsiiProperty(name: "signatureId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureId
        {
            get;
        }

        /// <summary>Property stageName: Bind signature in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StageName
        {
            get;
        }

        /// <summary>Properties for defining a `SignatureBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signaturebinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISignatureBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.SignatureBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.ISignatureBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property apiIds: APIs to bind with the signature.</summary>
            [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupId: The id of group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property signatureId: The id of the Signature.</summary>
            [JsiiProperty(name: "signatureId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property stageName: Bind signature in this stage.</summary>
            [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StageName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
