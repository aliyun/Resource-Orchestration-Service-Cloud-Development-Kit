using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Properties for defining a `ALIYUN::ApiGateway::SignatureBinding`.</summary>
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
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        string GroupId
        {
            get;
        }

        /// <summary>Property signatureId: The id of the Signature.</summary>
        [JsiiProperty(name: "signatureId", typeJson: "{\"primitive\":\"string\"}")]
        string SignatureId
        {
            get;
        }

        /// <summary>Property stageName: Bind signature in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
        string StageName
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ApiGateway::SignatureBinding`.</summary>
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
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property signatureId: The id of the Signature.</summary>
            [JsiiProperty(name: "signatureId", typeJson: "{\"primitive\":\"string\"}")]
            public string SignatureId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property stageName: Bind signature in this stage.</summary>
            [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}")]
            public string StageName
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
