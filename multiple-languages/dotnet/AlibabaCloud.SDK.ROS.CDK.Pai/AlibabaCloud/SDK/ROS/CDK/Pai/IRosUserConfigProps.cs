using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `RosUserConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosUserConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosUserConfigProps")]
    public interface IRosUserConfigProps
    {
        /// <remarks>
        /// <strong>Property</strong>: categoryName: Represents a resource attribute for a configuration category.
        /// </remarks>
        [JsiiProperty(name: "categoryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CategoryName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: configKey: Represents the resource attribute of the configuration Key.
        /// </remarks>
        [JsiiProperty(name: "configKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConfigKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: configs: Represents a resource property for the configuration list.
        /// </remarks>
        [JsiiProperty(name: "configs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosUserConfig.ConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Configs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosUserConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosUserConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosUserConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRosUserConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: categoryName: Represents a resource attribute for a configuration category.
            /// </remarks>
            [JsiiProperty(name: "categoryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CategoryName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: configKey: Represents the resource attribute of the configuration Key.
            /// </remarks>
            [JsiiProperty(name: "configKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConfigKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: configs: Represents a resource property for the configuration list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosUserConfig.ConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Configs
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
