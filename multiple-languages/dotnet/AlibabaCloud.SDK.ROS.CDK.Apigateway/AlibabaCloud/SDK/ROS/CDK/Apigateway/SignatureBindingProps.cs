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
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ApiIds
        {
            get;
            set;
        }

        /// <summary>Property groupId: The id of group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GroupId
        {
            get;
            set;
        }

        /// <summary>Property signatureId: The id of the Signature.</summary>
        [JsiiProperty(name: "signatureId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SignatureId
        {
            get;
            set;
        }

        /// <summary>Property stageName: Bind signature in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string StageName
        {
            get;
            set;
        }
    }
}
