using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ECS::Activations`.</summary>
    [JsiiInterface(nativeType: typeof(IRosActivationsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosActivationsProps")]
    public interface IRosActivationsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: activationId: Activation code ID.
        /// </remarks>
        [JsiiProperty(name: "activationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ActivationId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The default prefix of the instance name.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ECS::Activations`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosActivationsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosActivationsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosActivationsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: activationId: Activation code ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "activationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ActivationId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The default prefix of the instance name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
