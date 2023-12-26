using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `DbAgent`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDbAgentProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.DbAgentProps")]
    public interface IDbAgentProps
    {
        /// <summary>Property instanceInfo: Instance infos.</summary>
        [JsiiProperty(name: "instanceInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbAgent.InstanceInfoProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object InstanceInfo
        {
            get;
        }

        /// <summary>Properties for defining a `DbAgent`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbagent
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDbAgentProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.DbAgentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IDbAgentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceInfo: Instance infos.</summary>
            [JsiiProperty(name: "instanceInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-hbr.RosDbAgent.InstanceInfoProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object InstanceInfo
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
