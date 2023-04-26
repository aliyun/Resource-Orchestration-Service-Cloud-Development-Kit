using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `ALIYUN::REDIS::Connection`.</summary>
    [JsiiInterface(nativeType: typeof(IConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.ConnectionProps")]
    public interface IConnectionProps
    {
        /// <summary>Property connectionStringPrefix: The prefix of the public endpoint.</summary>
        /// <remarks>
        /// The prefix must be 8 to 64 characters in length,
        /// and can contain lowercase letters and digits.
        /// It must start with a lowercase letter.
        /// </remarks>
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionStringPrefix
        {
            get;
        }

        /// <summary>Property connectionType: Allowed values: - Public: Public address.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionType
        {
            get;
        }

        /// <summary>Property instanceId: Instance ID (globally unique).</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property port: The service port number of the ApsaraDB for Redis instance.</summary>
        /// <remarks>
        /// Valid values: 1024 to 65535.
        /// </remarks>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Port
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::REDIS::Connection`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.ConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property connectionStringPrefix: The prefix of the public endpoint.</summary>
            /// <remarks>
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionStringPrefix
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property connectionType: Allowed values: - Public: Public address.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: Instance ID (globally unique).</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property port: The service port number of the ApsaraDB for Redis instance.</summary>
            /// <remarks>
            /// Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Port
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
