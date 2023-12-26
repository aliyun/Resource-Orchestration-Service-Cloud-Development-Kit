using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `Service`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.ServiceProps")]
    public interface IServiceProps
    {
        /// <summary>Property serviceConfig: Service configuration information.</summary>
        [JsiiProperty(name: "serviceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object ServiceConfig
        {
            get;
        }

        /// <summary>Property develop: Whether to enter the development mode.</summary>
        [JsiiProperty(name: "develop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Develop
        {
            get
            {
                return null;
            }
        }

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

        /// <summary>Properties for defining a `Service`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-service
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.ServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property serviceConfig: Service configuration information.</summary>
            [JsiiProperty(name: "serviceConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object ServiceConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property develop: Whether to enter the development mode.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "develop", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Develop
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property labels: Service Tag.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Labels
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
