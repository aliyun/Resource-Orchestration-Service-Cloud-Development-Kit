using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `RosAddonRelease`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAddonReleaseProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAddonReleaseProps")]
    public interface IRosAddonReleaseProps
    {
        /// <remarks>
        /// <strong>Property</strong>: addonVersion: The version of the add-on.
        /// </remarks>
        [JsiiProperty(name: "addonVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AddonVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: environmentId: The id of the environment.
        /// </remarks>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the add-on.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
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

        /// <remarks>
        /// <strong>Property</strong>: values: The metadata.
        /// </remarks>
        [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Values
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAddonRelease`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAddonReleaseProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.RosAddonReleaseProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IRosAddonReleaseProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: addonVersion: The version of the add-on.
            /// </remarks>
            [JsiiProperty(name: "addonVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AddonVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: environmentId: The id of the environment.
            /// </remarks>
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the add-on.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: releaseName: The name of the add-on after it is installed. If you do not specify this parameter, a default rule name is generated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "releaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReleaseName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: values: The metadata.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "values", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Values
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
