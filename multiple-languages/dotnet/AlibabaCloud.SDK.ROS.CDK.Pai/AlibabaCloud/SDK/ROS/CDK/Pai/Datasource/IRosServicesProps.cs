using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::PAI::Services`.</summary>
    [JsiiInterface(nativeType: typeof(IRosServicesProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.RosServicesProps")]
    public interface IRosServicesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: labels: Service Tag.
        /// </remarks>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service Name.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::PAI::Services`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosServicesProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.RosServicesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IRosServicesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: labels: Service Tag.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Service Name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
