using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `RosApplicationConnectionBind`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnectionbind
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplicationConnectionBindProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosApplicationConnectionBindProps")]
    public interface IRosApplicationConnectionBindProps
    {
        /// <remarks>
        /// <strong>Property</strong>: connectionIds: The list of connection IDs to bind.
        /// The maximum number of connections is 100.
        /// </remarks>
        [JsiiProperty(name: "connectionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ConnectionIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: applicationGroupName: The name of the application group.
        /// </remarks>
        [JsiiProperty(name: "applicationGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApplicationGroupName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: applicationName: The name of the application.
        /// </remarks>
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApplicationName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosApplicationConnectionBind`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnectionbind
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationConnectionBindProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosApplicationConnectionBindProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IRosApplicationConnectionBindProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionIds: The list of connection IDs to bind.
            /// The maximum number of connections is 100.
            /// </remarks>
            [JsiiProperty(name: "connectionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ConnectionIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: applicationGroupName: The name of the application group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "applicationGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApplicationGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: applicationName: The name of the application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApplicationName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
