using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `UserConfig`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.UserConfigProps")]
    public interface IUserConfigProps
    {
        /// <summary>Property categoryName: Represents a resource attribute for a configuration category.</summary>
        [JsiiProperty(name: "categoryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CategoryName
        {
            get;
        }

        /// <summary>Property configKey: Represents the resource attribute of the configuration Key.</summary>
        [JsiiProperty(name: "configKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConfigKey
        {
            get;
        }

        /// <summary>Property configs: Represents a resource property for the configuration list.</summary>
        [JsiiProperty(name: "configs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosUserConfig.ConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Configs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `UserConfig`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserConfigProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.UserConfigProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IUserConfigProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property categoryName: Represents a resource attribute for a configuration category.</summary>
            [JsiiProperty(name: "categoryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CategoryName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property configKey: Represents the resource attribute of the configuration Key.</summary>
            [JsiiProperty(name: "configKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConfigKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property configs: Represents a resource property for the configuration list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "configs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-pai.RosUserConfig.ConfigsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Configs
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
