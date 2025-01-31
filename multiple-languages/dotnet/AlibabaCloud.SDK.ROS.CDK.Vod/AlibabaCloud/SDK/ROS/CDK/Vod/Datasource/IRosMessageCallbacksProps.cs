using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod.Datasource
{
    /// <summary>Properties for defining a `RosMessageCallbacks`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallbacks
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMessageCallbacksProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.RosMessageCallbacksProps")]
    public interface IRosMessageCallbacksProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appId: The ID of the application.
        /// </remarks>
        [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
        /// - Never: Never refresh the datasource resource when the stack is updated.
        /// - Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosMessageCallbacks`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallbacks
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMessageCallbacksProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.RosMessageCallbacksProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IRosMessageCallbacksProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appId: The ID of the application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
            /// - Never: Never refresh the datasource resource when the stack is updated.
            /// - Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
