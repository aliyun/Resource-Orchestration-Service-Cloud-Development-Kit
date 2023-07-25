using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::PAI::Services`.</summary>
    [JsiiInterface(nativeType: typeof(IServicesProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.ServicesProps")]
    public interface IServicesProps
    {
        /// <summary>Property labels: Service Tag.</summary>
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Labels
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceName: Service Name.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IServicesProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.ServicesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IServicesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property labels: Service Tag.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceName: Service Name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
