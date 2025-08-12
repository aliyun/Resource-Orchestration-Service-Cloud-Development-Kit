using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `RosUpgradeVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-upgradeversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosUpgradeVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosUpgradeVersionProps")]
    public interface IRosUpgradeVersionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The id of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoUpgradeOpen: Whether to enable automatic upgrade.
        /// </remarks>
        [JsiiProperty(name: "autoUpgradeOpen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoUpgradeOpen
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: effectiveTime: The time when the upgrade is effective. Value: Immediately|MaintainTime, default: Immediately.
        /// </remarks>
        [JsiiProperty(name: "effectiveTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EffectiveTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: majorVersion: Upgrade the major version of the instance.
        /// </remarks>
        [JsiiProperty(name: "majorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MajorVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.
        /// </remarks>
        [JsiiProperty(name: "minorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinorVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosUpgradeVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-upgradeversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosUpgradeVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosUpgradeVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IRosUpgradeVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The id of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoUpgradeOpen: Whether to enable automatic upgrade.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoUpgradeOpen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoUpgradeOpen
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: effectiveTime: The time when the upgrade is effective. Value: Immediately|MaintainTime, default: Immediately.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "effectiveTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EffectiveTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: majorVersion: Upgrade the major version of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "majorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MajorVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinorVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
