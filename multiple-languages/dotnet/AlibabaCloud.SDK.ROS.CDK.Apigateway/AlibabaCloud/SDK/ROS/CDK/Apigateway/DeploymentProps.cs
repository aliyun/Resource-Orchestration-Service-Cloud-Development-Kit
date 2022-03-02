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
        [JsiiProperty(name: "apiId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ApiId
        {
            get;
            set;
        }

        /// <summary>Property groupId: The id of the Group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupId
        {
            get;
            set;
        }

        /// <summary>Property stageName: Bind traffic in this stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object StageName
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the deployment, less than 180 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property historyVersion: The history version.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "historyVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? HistoryVersion
        {
            get;
            set;
        }
    }
}
