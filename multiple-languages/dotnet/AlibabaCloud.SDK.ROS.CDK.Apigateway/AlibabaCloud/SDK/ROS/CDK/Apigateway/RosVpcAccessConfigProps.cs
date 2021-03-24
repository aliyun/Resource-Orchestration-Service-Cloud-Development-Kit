using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::VpcAccessConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosVpcAccessConfigProps")]
    public class RosVpcAccessConfigProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosVpcAccessConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The id of the instance (ECS/SLB).
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The port of the VPC.
        /// </remarks>
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Port
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The id of the VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VpcId
        {
            get;
            set;
        }
    }
}
