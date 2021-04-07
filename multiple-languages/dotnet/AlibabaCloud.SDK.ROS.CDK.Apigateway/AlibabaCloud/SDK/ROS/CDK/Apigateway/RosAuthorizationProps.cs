using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Authorization`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosAuthorizationProps")]
    public class RosAuthorizationProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosAuthorizationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiIds: APIs to authorize.
        /// </remarks>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ApiIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: appIds: APPs are authorized to APIs.
        /// </remarks>
        [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AppIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: Authorize in this stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object StageName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the authorization, less than 180 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
