using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::SignatureBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosSignatureBindingProps")]
    public class RosSignatureBindingProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosSignatureBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiIds: APIs to bind with the signature.
        /// </remarks>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ApiIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: signatureId: The id of the Signature.
        /// </remarks>
        [JsiiProperty(name: "signatureId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SignatureId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: Bind signature in this stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string StageName
        {
            get;
            set;
        }
    }
}
