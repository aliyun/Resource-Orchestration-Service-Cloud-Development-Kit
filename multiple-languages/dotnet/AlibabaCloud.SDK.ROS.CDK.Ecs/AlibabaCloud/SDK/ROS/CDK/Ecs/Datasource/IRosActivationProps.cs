using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosActivation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosActivationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosActivationProps")]
    public interface IRosActivationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: activationId: Activation code ID.
        /// </remarks>
        [JsiiProperty(name: "activationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ActivationId
        {
            get;
        }

        /// <summary>Properties for defining a `RosActivation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosActivationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosActivationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosActivationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: activationId: Activation code ID.
            /// </remarks>
            [JsiiProperty(name: "activationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ActivationId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
