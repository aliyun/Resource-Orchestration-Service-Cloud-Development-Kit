using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ProvisionConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.ProvisionConfigProps")]
    public interface IProvisionConfigProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FunctionName
        {
            get;
        }

        /// <summary>Property qualifier: Service's alias.</summary>
        /// <remarks>
        /// Example : "LATEST"
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Qualifier
        {
            get;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Property target: Number of provision.</summary>
        [JsiiProperty(name: "target", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Target
        {
            get;
        }

        /// <summary>Properties for defining a `ProvisionConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.ProvisionConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IProvisionConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property functionName: Function name.</summary>
            [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property qualifier: Service's alias.</summary>
            /// <remarks>
            /// Example : "LATEST"
            /// </remarks>
            [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Qualifier
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property target: Number of provision.</summary>
            [JsiiProperty(name: "target", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Target
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
