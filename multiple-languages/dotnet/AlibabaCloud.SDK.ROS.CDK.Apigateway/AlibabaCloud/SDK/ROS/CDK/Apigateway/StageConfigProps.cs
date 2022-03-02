using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::StageConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.StageConfigProps")]
    public class StageConfigProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IStageConfigProps
    {
        /// <summary>Property groupId: The id of the Group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupId
        {
            get;
            set;
        }

        /// <summary>Property stageName: The name of the Stage.</summary>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object StageName
        {
            get;
            set;
        }

        /// <summary>Property variables: Variables in the stage, key-value pairs.</summary>
        [JsiiProperty(name: "variables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        public object Variables
        {
            get;
            set;
        }
    }
}
