using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `ALIYUN::REDIS::Connection`.</summary>
    [JsiiInterface(nativeType: typeof(IRosConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosConnectionProps")]
    public interface IRosConnectionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: connectionStringPrefix: The prefix of the public endpoint.
        /// The prefix must be 8 to 64 characters in length,
        /// and can contain lowercase letters and digits.
        /// It must start with a lowercase letter.
        /// </remarks>
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionStringPrefix
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionType: Allowed values:
        /// - Public: Public address.
        /// - Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.
        /// </remarks>
        [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConnectionType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance ID (globally unique)
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
        /// </remarks>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Port
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::REDIS::Connection`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosConnectionProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosConnectionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IRosConnectionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionStringPrefix: The prefix of the public endpoint.
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionStringPrefix
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionType: Allowed values:
            /// - Public: Public address.
            /// - Direct: Direct connection address. The instance is a cluster instance. You can apply for a direct connection endpoint as required.
            /// </remarks>
            [JsiiProperty(name: "connectionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Instance ID (globally unique)
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Port
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
