using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::OOS::SecretParameters`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSecretParametersProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.RosSecretParametersProps")]
    public interface IRosSecretParametersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: secretParameterName: The name of the encryption parameter.
        /// </remarks>
        [JsiiProperty(name: "secretParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecretParameterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::OOS::SecretParameters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSecretParametersProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.RosSecretParametersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.IRosSecretParametersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secretParameterName: The name of the encryption parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretParameterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretParameterName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
