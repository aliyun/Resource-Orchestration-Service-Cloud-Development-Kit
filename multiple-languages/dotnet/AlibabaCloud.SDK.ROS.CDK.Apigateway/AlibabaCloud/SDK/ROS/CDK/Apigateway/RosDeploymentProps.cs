using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Deployment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosDeploymentProps")]
    public class RosDeploymentProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosDeploymentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: apiId: The id of the API.
        /// </remarks>
        [JsiiProperty(name: "apiId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ApiId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the Group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: Bind traffic in this stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string StageName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the deployment, less than 180 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: historyVersion: The history version.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "historyVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HistoryVersion
        {
            get;
            set;
        }
    }
}
