using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `Activation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IActivationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ActivationProps")]
    public interface IActivationProps
    {
        /// <summary>Property activationId: Activation code ID.</summary>
        [JsiiProperty(name: "activationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ActivationId
        {
            get;
        }

        /// <summary>Properties for defining a `Activation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IActivationProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ActivationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IActivationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property activationId: Activation code ID.</summary>
            [JsiiProperty(name: "activationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ActivationId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
