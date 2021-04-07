using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::BackendServerToVServerGroupAddition`.</summary>
    [JsiiInterface(nativeType: typeof(IBackendServerToVServerGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.BackendServerToVServerGroupAdditionProps")]
    public interface IBackendServerToVServerGroupAdditionProps
    {
        /// <summary>Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.</summary>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object BackendServers
        {
            get;
        }

        /// <summary>Property vServerGroupId: The ID of virtual server group.</summary>
        [JsiiProperty(name: "vServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VServerGroupId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::BackendServerToVServerGroupAddition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBackendServerToVServerGroupAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.BackendServerToVServerGroupAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IBackendServerToVServerGroupAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.</summary>
            [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosBackendServerToVServerGroupAddition.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object BackendServers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vServerGroupId: The ID of virtual server group.</summary>
            [JsiiProperty(name: "vServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VServerGroupId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
