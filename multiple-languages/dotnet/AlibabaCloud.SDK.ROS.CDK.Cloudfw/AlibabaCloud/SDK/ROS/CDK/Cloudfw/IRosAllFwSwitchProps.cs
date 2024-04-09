using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw
{
    /// <summary>Properties for defining a `RosAllFwSwitch`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAllFwSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosAllFwSwitchProps")]
    public interface IRosAllFwSwitchProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the cloud firewall instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAllFwSwitch`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAllFwSwitchProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudfw.RosAllFwSwitchProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudfw.IRosAllFwSwitchProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the cloud firewall instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
