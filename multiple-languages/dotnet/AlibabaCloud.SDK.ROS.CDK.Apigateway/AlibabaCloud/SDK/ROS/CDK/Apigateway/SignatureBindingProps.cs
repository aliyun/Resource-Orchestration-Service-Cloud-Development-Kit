using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::SignatureBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.SignatureBindingProps")]
    public class SignatureBindingProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.ISignatureBindingProps
    {
        /// <summary>Property apiIds: APIs to bind with the signature.</summary>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ApiIds
        {
            get;
            set;
        }

        /// <summary>Property groupId: The id of group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupId
        {
            get;
            set;
        }

        /// <summary>Property signatureId: The id of the Signature.</summary>
        [JsiiProperty(name: "signatureId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SignatureId
        {
            get;
            set;
        }

        /// <summary>Property stageName: Bind signature in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object StageName
        {
            get;
            set;
        }
    }
}
