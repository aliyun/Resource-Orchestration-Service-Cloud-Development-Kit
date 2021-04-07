using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `ALIYUN::REDIS::Whitelist`.</summary>
    [JsiiInterface(nativeType: typeof(IWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.WhitelistProps")]
    public interface IWhitelistProps
    {
        /// <summary>Property instanceId: Instance ID (globally unique).</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property securityIps: IP address whitelist to be modified.</summary>
        [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityIps
        {
            get;
        }

        /// <summary>Property securityIpGroupAttribute: The default is empty.</summary>
        /// <remarks>
        /// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
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

        /// <summary>Property securityIpGroupName: Whitelist group.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.WhitelistProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IWhitelistProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: Instance ID (globally unique).</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityIps: IP address whitelist to be modified.</summary>
            [JsiiProperty(name: "securityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityIpGroupAttribute: The default is empty.</summary>
            /// <remarks>
            /// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpGroupAttribute
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityIpGroupName: Whitelist group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
