using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Authorization`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.AuthorizationProps")]
    public class AuthorizationProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IAuthorizationProps
    {
        /// <summary>Property apiIds: APIs to authorize.</summary>
        [JsiiProperty(name: "apiIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ApiIds
        {
            get;
            set;
        }

        /// <summary>Property appIds: APPs are authorized to APIs.</summary>
        [JsiiProperty(name: "appIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AppIds
        {
            get;
            set;
        }

        /// <summary>Property groupId: The id of the group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object GroupId
        {
            get;
            set;
        }

        /// <summary>Property stageName: Authorize in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object StageName
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the authorization, less than 180 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
