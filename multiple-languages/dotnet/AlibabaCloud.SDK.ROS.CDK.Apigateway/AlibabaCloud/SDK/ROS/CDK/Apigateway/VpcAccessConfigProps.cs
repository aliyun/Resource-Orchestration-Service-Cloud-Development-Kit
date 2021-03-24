using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::VpcAccessConfig`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.VpcAccessConfigProps")]
    public class VpcAccessConfigProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IVpcAccessConfigProps
    {
        /// <summary>Property instanceId: The id of the instance (ECS/SLB).</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceId
        {
            get;
            set;
        }

        /// <summary>Property name: The name of one VPC access configuration.Need [4, 50] Chinese\English\Number characters "-" or "_",and should start with Chinese/English character.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <summary>Property port: The port of the VPC.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Port
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The id of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VpcId
        {
            get;
            set;
        }
    }
}
