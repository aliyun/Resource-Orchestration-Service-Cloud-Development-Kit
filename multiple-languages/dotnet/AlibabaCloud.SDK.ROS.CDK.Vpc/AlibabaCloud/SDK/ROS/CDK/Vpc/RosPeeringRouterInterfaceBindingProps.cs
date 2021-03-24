using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosPeeringRouterInterfaceBindingProps")]
    public class RosPeeringRouterInterfaceBindingProps : AlibabaCloud.SDK.ROS.CDK.Vpc.IRosPeeringRouterInterfaceBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: oppositeInterfaceId: The connection peer RouterInterface ID.
        /// </remarks>
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string OppositeInterfaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
        /// </remarks>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RouterInterfaceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeInterfaceOwnerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: oppositeRouterId: Router ID of the connection peer RouterInterface.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OppositeRouterId
        {
            get;
            set;
        }
    }
}
