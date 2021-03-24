using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>Properties for defining a `ALIYUN::REDIS::Whitelist`.</summary>
    [JsiiInterface(nativeType: typeof(IWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.WhitelistProps")]
    public interface IWhitelistProps
    {
        /// <summary>Property instanceId: Instance ID (globally unique).</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property securityIps: IP address whitelist to be modified.</summary>
        [JsiiProperty(name: "securityIps", typeJson: "{\"primitive\":\"string\"}")]
        string SecurityIps
        {
            get;
        }

        /// <summary>Property securityIpGroupAttribute: The default is empty.</summary>
        /// <remarks>
        /// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
        /// </remarks>
        [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityIpGroupAttribute
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpGroupName: Whitelist group.</summary>
        [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityIpGroupName
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
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property securityIps: IP address whitelist to be modified.</summary>
            [JsiiProperty(name: "securityIps", typeJson: "{\"primitive\":\"string\"}")]
            public string SecurityIps
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property securityIpGroupAttribute: The default is empty.</summary>
            /// <remarks>
            /// For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityIpGroupAttribute
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityIpGroupName: Whitelist group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityIpGroupName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
