using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `MonitorGroupInstances`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroupinstances
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMonitorGroupInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitorGroupInstancesProps")]
    public interface IMonitorGroupInstancesProps
    {
        /// <summary>Property groupId: The ID of the application group.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupId
        {
            get;
        }

        /// <summary>Property instances:.</summary>
        [JsiiProperty(name: "instances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Instances
        {
            get;
        }

        /// <summary>Properties for defining a `MonitorGroupInstances`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroupinstances
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMonitorGroupInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitorGroupInstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IMonitorGroupInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupId: The ID of the application group.</summary>
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instances:.</summary>
            [JsiiProperty(name: "instances", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMonitorGroupInstances.InstancesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Instances
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
