using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroupInstances`.</summary>
    [JsiiInterface(nativeType: typeof(IRosMonitorGroupInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupInstancesProps")]
    public interface IRosMonitorGroupInstancesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupId: The ID of the application group.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instances:
        /// </remarks>
        [JsiiProperty(name: "instances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Instances
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroupInstances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosMonitorGroupInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitorGroupInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: The ID of the application group.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instances:
            /// </remarks>
            [JsiiProperty(name: "instances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Instances
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
