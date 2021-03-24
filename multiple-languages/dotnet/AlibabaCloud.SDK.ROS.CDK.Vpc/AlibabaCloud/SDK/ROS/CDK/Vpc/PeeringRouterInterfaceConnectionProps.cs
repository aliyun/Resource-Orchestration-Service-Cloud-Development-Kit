using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceConnectionProps")]
    public class PeeringRouterInterfaceConnectionProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IPeeringRouterInterfaceConnectionProps
    {
        /// <summary>Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.</summary>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string OppositeInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.</summary>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RouterInterfaceId
        {
            get;
            set;
        }
    }
}
