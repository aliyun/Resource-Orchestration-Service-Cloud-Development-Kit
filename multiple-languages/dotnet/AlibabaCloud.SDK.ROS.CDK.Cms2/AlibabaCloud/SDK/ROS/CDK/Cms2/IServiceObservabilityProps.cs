using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>Properties for defining a `ServiceObservability`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServiceObservabilityProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.ServiceObservabilityProps")]
    public interface IServiceObservabilityProps
    {
        /// <summary>Property type: The type of the service observability.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property workspace: The workspace of the service observability.</summary>
        [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Workspace
        {
            get;
        }

        /// <summary>Properties for defining a `ServiceObservability`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-serviceobservability
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServiceObservabilityProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.ServiceObservabilityProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.IServiceObservabilityProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property type: The type of the service observability.</summary>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspace: The workspace of the service observability.</summary>
            [JsiiProperty(name: "workspace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Workspace
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
