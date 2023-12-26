using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `RosProvisionConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosProvisionConfigProps")]
    public interface IRosProvisionConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FunctionName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: qualifier: Service's alias.
        /// Example : "LATEST"
        /// </remarks>
        [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Qualifier
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: target: Number of provision
        /// </remarks>
        [JsiiProperty(name: "target", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Target
        {
            get;
        }

        /// <summary>Properties for defining a `RosProvisionConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-provisionconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProvisionConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosProvisionConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IRosProvisionConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: functionName: Function name
            /// </remarks>
            [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: qualifier: Service's alias.
            /// Example : "LATEST"
            /// </remarks>
            [JsiiProperty(name: "qualifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Qualifier
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: Service name
            /// </remarks>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: target: Number of provision
            /// </remarks>
            [JsiiProperty(name: "target", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Target
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
