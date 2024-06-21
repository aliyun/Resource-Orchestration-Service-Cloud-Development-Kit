using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `AddonRelease`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAddonReleaseProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.AddonReleaseProps")]
    public interface IAddonReleaseProps
    {
        /// <summary>Property addonVersion: The version of the add-on.</summary>
        [JsiiProperty(name: "addonVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddonVersion
        {
            get;
        }

        /// <summary>Property environmentId: The id of the environment.</summary>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentId
        {
            get;
        }

        /// <summary>Property name: The name of the add-on.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property releaseName: The name of the add-on after it is installed.</summary>
        /// <remarks>
        /// If you do not specify this parameter, a default rule name is generated.
        /// </remarks>
        [JsiiProperty(name: "releaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReleaseName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property values: The metadata.</summary>
        [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Values
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AddonRelease`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAddonReleaseProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.AddonReleaseProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IAddonReleaseProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property addonVersion: The version of the add-on.</summary>
            [JsiiProperty(name: "addonVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddonVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property environmentId: The id of the environment.</summary>
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the add-on.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property releaseName: The name of the add-on after it is installed.</summary>
            /// <remarks>
            /// If you do not specify this parameter, a default rule name is generated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "releaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReleaseName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property values: The metadata.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Values
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
