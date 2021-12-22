using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `ALIYUN::HBR::DbAgent`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDbAgentProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosDbAgentProps")]
    public interface IRosDbAgentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceInfo: Instance infos
        /// </remarks>
        [JsiiProperty(name: "instanceInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbAgent.InstanceInfoProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object InstanceInfo
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::HBR::DbAgent`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDbAgentProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosDbAgentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IRosDbAgentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceInfo: Instance infos
            /// </remarks>
            [JsiiProperty(name: "instanceInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbAgent.InstanceInfoProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object InstanceInfo
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
