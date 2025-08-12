using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `UpgradeVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-upgradeversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUpgradeVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.UpgradeVersionProps")]
    public interface IUpgradeVersionProps
    {
        /// <summary>Property instanceId: The id of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property autoUpgradeOpen: Whether to enable automatic upgrade.</summary>
        [JsiiProperty(name: "autoUpgradeOpen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoUpgradeOpen
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property effectiveTime: The time when the upgrade is effective.</summary>
        /// <remarks>
        /// Value: Immediately|MaintainTime, default: Immediately.
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

        /// <summary>Property majorVersion: Upgrade the major version of the instance.</summary>
        [JsiiProperty(name: "majorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MajorVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.</summary>
        [JsiiProperty(name: "minorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinorVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `UpgradeVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-upgradeversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUpgradeVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.UpgradeVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IUpgradeVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The id of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoUpgradeOpen: Whether to enable automatic upgrade.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoUpgradeOpen", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoUpgradeOpen
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property effectiveTime: The time when the upgrade is effective.</summary>
            /// <remarks>
            /// Value: Immediately|MaintainTime, default: Immediately.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "effectiveTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EffectiveTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property majorVersion: Upgrade the major version of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "majorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MajorVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property minorVersion: The minor version to be upgraded to, the default value is: latest_version, that is, the latest version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "minorVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinorVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
