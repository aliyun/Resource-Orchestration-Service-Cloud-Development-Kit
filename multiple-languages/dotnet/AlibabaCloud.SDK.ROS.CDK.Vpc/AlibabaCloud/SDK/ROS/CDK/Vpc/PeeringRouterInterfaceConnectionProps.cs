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
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object OppositeInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.</summary>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RouterInterfaceId
        {
            get;
            set;
        }
    }
}
