using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.PeeringRouterInterfaceBindingProps")]
    public class PeeringRouterInterfaceBindingProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IPeeringRouterInterfaceBindingProps
    {
        /// <summary>Property oppositeInterfaceId: The connection peer RouterInterface ID.</summary>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string OppositeInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RouterInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeInterfaceOwnerId
        {
            get;
            set;
        }

        /// <summary>Property oppositeRouterId: Router ID of the connection peer RouterInterface.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeRouterId
        {
            get;
            set;
        }
    }
}
