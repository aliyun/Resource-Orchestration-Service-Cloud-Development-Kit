using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::BackendServerToVServerGroupAddition`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAdditionProps")]
    public class RosBackendServerToVServerGroupAdditionProps : AlibabaCloud.SDK.ROS.CDK.Slb.IRosBackendServerToVServerGroupAdditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        /// </remarks>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition.BackendServersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object BackendServers
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vServerGroupId: The ID of virtual server group.
        /// </remarks>
        [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VServerGroupId
        {
            get;
            set;
        }
    }
}
