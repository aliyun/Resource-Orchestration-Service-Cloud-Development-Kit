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
        [JsiiProperty(name: "oppositeInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object OppositeInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.</summary>
        [JsiiProperty(name: "routerInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RouterInterfaceId
        {
            get;
            set;
        }

        /// <summary>Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeInterfaceOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OppositeInterfaceOwnerId
        {
            get;
            set;
        }

        /// <summary>Property oppositeRouterId: Router ID of the connection peer RouterInterface.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "oppositeRouterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OppositeRouterId
        {
            get;
            set;
        }
    }
}
