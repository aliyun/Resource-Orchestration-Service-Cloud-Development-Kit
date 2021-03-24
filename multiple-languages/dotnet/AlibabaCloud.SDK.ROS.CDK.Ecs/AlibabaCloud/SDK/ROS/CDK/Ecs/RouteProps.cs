using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::Route`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RouteProps")]
    public class RouteProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRouteProps
    {
        /// <summary>Property destinationCidrBlock: The RouteEntry's target network segment.</summary>
        [JsiiProperty(name: "destinationCidrBlock", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DestinationCidrBlock
        {
            get;
            set;
        }

        /// <summary>Property routeId: RouteId of created route entry.</summary>
        [JsiiProperty(name: "routeId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RouteId
        {
            get;
            set;
        }

        /// <summary>Property routeTableId: RouteTableId of created route entry.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RouteTableId
        {
            get;
            set;
        }

        /// <summary>Property nextHopId: The route entry's next hop.</summary>
        /// <remarks>
        /// When the NextHopList is specified, the value will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nextHopId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NextHopId
        {
            get;
            set;
        }

        /// <summary>Property nextHopList: The route entry's next hop list.</summary>
        /// <remarks>
        /// If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nextHopList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosRoute.NextHopListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? NextHopList
        {
            get;
            set;
        }

        /// <summary>Property nextHopType: The next hop type.</summary>
        /// <remarks>
        /// Available value options: Instance | Tunnel | HaVip | RouterInterface. The default value is Instance.When the NextHopList is specified, the value will be ignored.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nextHopType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NextHopType
        {
            get;
            set;
        }
    }
}
