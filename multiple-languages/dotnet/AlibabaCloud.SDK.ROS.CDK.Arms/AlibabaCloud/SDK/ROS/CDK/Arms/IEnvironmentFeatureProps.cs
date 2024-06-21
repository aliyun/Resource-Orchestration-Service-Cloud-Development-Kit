using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms
{
    /// <summary>Properties for defining a `EnvironmentFeature`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEnvironmentFeatureProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.EnvironmentFeatureProps")]
    public interface IEnvironmentFeatureProps
    {
        /// <summary>Property environmentId: The id of the environment.</summary>
        [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvironmentId
        {
            get;
        }

        /// <summary>Property featureName: The name of the feature.</summary>
        /// <remarks>
        /// Valid values:
        /// app-agent-pilot
        /// metric-agent
        /// </remarks>
        [JsiiProperty(name: "featureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FeatureName
        {
            get;
        }

        /// <summary>Property featureVersion: The version of the feature.</summary>
        [JsiiProperty(name: "featureVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FeatureVersion
        {
            get;
        }

        /// <summary>Property config: The metadata of the feature.</summary>
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Config
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EnvironmentFeature`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEnvironmentFeatureProps), fullyQualifiedName: "@alicloud/ros-cdk-arms.EnvironmentFeatureProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.IEnvironmentFeatureProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property environmentId: The id of the environment.</summary>
            [JsiiProperty(name: "environmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property featureName: The name of the feature.</summary>
            /// <remarks>
            /// Valid values:
            /// app-agent-pilot
            /// metric-agent
            /// </remarks>
            [JsiiProperty(name: "featureName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FeatureName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property featureVersion: The version of the feature.</summary>
            [JsiiProperty(name: "featureVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FeatureVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property config: The metadata of the feature.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Config
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
