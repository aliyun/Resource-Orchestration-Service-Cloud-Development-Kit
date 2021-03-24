using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::VServerGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosVServerGroupProps")]
    public class RosVServerGroupProps : AlibabaCloud.SDK.ROS.CDK.Slb.IRosVServerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The id of load balancer.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string LoadBalancerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vServerGroupName: Display name of the VServerGroup.
        /// </remarks>
        [JsiiProperty(name: "vServerGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VServerGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? BackendServers
        {
            get;
            set;
        }
    }
}
