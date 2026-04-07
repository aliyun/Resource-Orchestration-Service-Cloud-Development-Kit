using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `ApplicationConnectionBind`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnectionbind
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationConnectionBindProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ApplicationConnectionBindProps")]
    public interface IApplicationConnectionBindProps
    {
        /// <summary>Property connectionIds: The list of connection IDs to bind.</summary>
        /// <remarks>
        /// The maximum number of connections is 100.
        /// </remarks>
        [JsiiProperty(name: "connectionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ConnectionIds
        {
            get;
        }

        /// <summary>Property applicationGroupName: The name of the application group.</summary>
        [JsiiProperty(name: "applicationGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApplicationGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property applicationName: The name of the application.</summary>
        [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ApplicationName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ApplicationConnectionBind`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnectionbind
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplicationConnectionBindProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ApplicationConnectionBindProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IApplicationConnectionBindProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property connectionIds: The list of connection IDs to bind.</summary>
            /// <remarks>
            /// The maximum number of connections is 100.
            /// </remarks>
            [JsiiProperty(name: "connectionIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ConnectionIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property applicationGroupName: The name of the application group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "applicationGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApplicationGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property applicationName: The name of the application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "applicationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ApplicationName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
