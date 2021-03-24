using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::VServerGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.VServerGroupProps")]
    public class VServerGroupProps : AlibabaCloud.SDK.ROS.CDK.Slb.IVServerGroupProps
    {
        /// <summary>Property loadBalancerId: The id of load balancer.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LoadBalancerId
        {
            get;
            set;
        }

        /// <summary>Property vServerGroupName: Display name of the VServerGroup.</summary>
        [JsiiProperty(name: "vServerGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VServerGroupName
        {
            get;
            set;
        }

        /// <summary>Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? BackendServers
        {
            get;
            set;
        }
    }
}
