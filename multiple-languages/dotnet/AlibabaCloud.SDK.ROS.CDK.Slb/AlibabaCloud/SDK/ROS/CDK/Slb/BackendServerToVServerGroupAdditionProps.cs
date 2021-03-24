using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLB::BackendServerToVServerGroupAddition`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.BackendServerToVServerGroupAdditionProps")]
    public class BackendServerToVServerGroupAdditionProps : AlibabaCloud.SDK.ROS.CDK.Slb.IBackendServerToVServerGroupAdditionProps
    {
        /// <summary>Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.</summary>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition.BackendServersProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object BackendServers
        {
            get;
            set;
        }

        /// <summary>Property vServerGroupId: The ID of virtual server group.</summary>
        [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VServerGroupId
        {
            get;
            set;
        }
    }
}
