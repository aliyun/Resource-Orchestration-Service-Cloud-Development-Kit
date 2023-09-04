using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ECS::Activations`.</summary>
    [JsiiInterface(nativeType: typeof(IActivationsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ActivationsProps")]
    public interface IActivationsProps
    {
        /// <summary>Property activationId: Activation code ID.</summary>
        [JsiiProperty(name: "activationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ActivationId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceName: The default prefix of the instance name.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IActivationsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ActivationsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IActivationsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property activationId: Activation code ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "activationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ActivationId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceName: The default prefix of the instance name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
