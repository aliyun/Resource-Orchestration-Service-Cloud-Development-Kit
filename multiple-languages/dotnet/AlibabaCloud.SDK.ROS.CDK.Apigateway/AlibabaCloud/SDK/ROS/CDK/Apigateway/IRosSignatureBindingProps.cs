using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `RosSignatureBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signaturebinding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSignatureBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosSignatureBindingProps")]
    public interface IRosSignatureBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiIds: APIs to bind with the signature.
        /// </remarks>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApiIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: signatureId: The id of the Signature.
        /// </remarks>
        [JsiiProperty(name: "signatureId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SignatureId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: Bind signature in this stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StageName
        {
            get;
        }

        /// <summary>Properties for defining a `RosSignatureBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-signaturebinding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSignatureBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosSignatureBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosSignatureBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: apiIds: APIs to bind with the signature.
            /// </remarks>
            [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApiIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The id of group.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: signatureId: The id of the Signature.
            /// </remarks>
            [JsiiProperty(name: "signatureId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SignatureId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: stageName: Bind signature in this stage.
            /// </remarks>
            [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StageName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
