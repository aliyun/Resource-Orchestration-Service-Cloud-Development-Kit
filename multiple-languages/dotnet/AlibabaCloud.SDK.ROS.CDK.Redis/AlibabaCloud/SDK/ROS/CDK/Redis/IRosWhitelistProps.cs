using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `ALIYUN::REDIS::Whitelist`.</summary>
    [JsiiInterface(nativeType: typeof(IRosWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosWhitelistProps")]
    public interface IRosWhitelistProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance ID (globally unique)
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIps: IP address whitelist to be modified
        /// </remarks>
        [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityIps
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        /// </remarks>
        [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpGroupAttribute
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpGroupName: Whitelist group
        /// </remarks>
        [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::REDIS::Whitelist`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosWhitelistProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IRosWhitelistProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
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
            /// <strong>Property</strong>: securityIps: IP address whitelist to be modified
            /// </remarks>
            [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpGroupAttribute
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIpGroupName: Whitelist group
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
