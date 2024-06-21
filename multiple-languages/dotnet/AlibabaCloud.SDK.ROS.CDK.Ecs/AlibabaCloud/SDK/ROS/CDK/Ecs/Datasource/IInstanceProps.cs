using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property instanceId: Instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: Instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
