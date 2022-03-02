using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::StageConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosStageConfigProps")]
    public class RosStageConfigProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosStageConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupId: The id of the Group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: stageName: The name of the Stage.
        /// </remarks>
        [JsiiProperty(name: "stageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object StageName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: variables: Variables in the stage, key-value pairs.
        /// </remarks>
        [JsiiProperty(name: "variables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        public object Variables
        {
            get;
            set;
        }
    }
}
