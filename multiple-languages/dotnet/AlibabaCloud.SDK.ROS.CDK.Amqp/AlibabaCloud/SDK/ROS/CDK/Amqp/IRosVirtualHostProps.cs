using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Amqp
{
    /// <summary>Properties for defining a `ALIYUN::AMQP::VirtualHost`.</summary>
    [JsiiInterface(nativeType: typeof(IRosVirtualHostProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.RosVirtualHostProps")]
    public interface IRosVirtualHostProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: InstanceId
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: virtualHost: The name of the virtual host.
        /// </remarks>
        [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VirtualHost
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::AMQP::VirtualHost`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosVirtualHostProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.RosVirtualHostProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Amqp.IRosVirtualHostProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: InstanceId
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: virtualHost: The name of the virtual host.
            /// </remarks>
            [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VirtualHost
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
