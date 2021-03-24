using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Deployment`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.DeploymentProps")]
    public class DeploymentProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IDeploymentProps
    {
        /// <summary>Property apiId: The id of the API.</summary>
        [JsiiProperty(name: "apiId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ApiId
        {
            get;
            set;
        }

        /// <summary>Property groupId: The id of the Group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string GroupId
        {
            get;
            set;
        }

        /// <summary>Property stageName: Bind traffic in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string StageName
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the deployment, less than 180 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property historyVersion: The history version.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "historyVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? HistoryVersion
        {
            get;
            set;
        }
    }
}
