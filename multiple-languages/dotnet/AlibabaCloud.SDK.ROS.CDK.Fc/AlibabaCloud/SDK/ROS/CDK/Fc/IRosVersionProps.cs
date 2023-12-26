using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `RosVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosVersionProps")]
    public interface IRosVersionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Version description
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-version
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IRosVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
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
            /// <strong>Property</strong>: description: Version description
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
