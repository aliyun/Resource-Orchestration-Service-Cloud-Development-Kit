using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `RosApplicationConnection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplicationConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosApplicationConnectionProps")]
    public interface IRosApplicationConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: connectionCategory: The category of the application connection.
        /// </remarks>
        [JsiiProperty(name: "connectionCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionCategory
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionType: The type of the application connection.
        /// </remarks>
        [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: envVars: The environment variables of the application connection.
        /// </remarks>
        [JsiiProperty(name: "envVars", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oos.RosApplicationConnection.EnvVarsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object EnvVars
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the application connection.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Properties for defining a `RosApplicationConnection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosApplicationConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IRosApplicationConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionCategory: The category of the application connection.
            /// </remarks>
            [JsiiProperty(name: "connectionCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionType: The type of the application connection.
            /// </remarks>
            [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: envVars: The environment variables of the application connection.
            /// </remarks>
            [JsiiProperty(name: "envVars", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oos.RosApplicationConnection.EnvVarsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object EnvVars
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the application connection.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
