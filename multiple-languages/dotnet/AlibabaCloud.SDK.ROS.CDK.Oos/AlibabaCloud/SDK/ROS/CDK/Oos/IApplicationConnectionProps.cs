using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `ApplicationConnection`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnection
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ApplicationConnectionProps")]
    public interface IApplicationConnectionProps
    {
        /// <summary>Property connectionCategory: The category of the application connection.</summary>
        [JsiiProperty(name: "connectionCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionCategory
        {
            get;
        }

        /// <summary>Property connectionType: The type of the application connection.</summary>
        [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionType
        {
            get;
        }

        /// <summary>Property envVars: The environment variables of the application connection.</summary>
        [JsiiProperty(name: "envVars", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oos.RosApplicationConnection.EnvVarsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object EnvVars
        {
            get;
        }

        /// <summary>Property name: The name of the application connection.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Properties for defining a `ApplicationConnection`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnection
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplicationConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ApplicationConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IApplicationConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property connectionCategory: The category of the application connection.</summary>
            [JsiiProperty(name: "connectionCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property connectionType: The type of the application connection.</summary>
            [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property envVars: The environment variables of the application connection.</summary>
            [JsiiProperty(name: "envVars", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oos.RosApplicationConnection.EnvVarsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object EnvVars
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the application connection.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
