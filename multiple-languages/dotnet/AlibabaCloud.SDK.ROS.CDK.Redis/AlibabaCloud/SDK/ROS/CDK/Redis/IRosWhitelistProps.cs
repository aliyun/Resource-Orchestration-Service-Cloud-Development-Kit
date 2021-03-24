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
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIps: IP address whitelist to be modified
        /// </remarks>
        [JsiiProperty(name: "securityIps", typeJson: "{\"primitive\":\"string\"}")]
        string SecurityIps
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
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

        /// <remarks>
        /// <strong>Property</strong>: securityIpGroupName: Whitelist group
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosWhitelistProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.IRosWhitelistProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Instance ID (globally unique)
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIps: IP address whitelist to be modified
            /// </remarks>
            [JsiiProperty(name: "securityIps", typeJson: "{\"primitive\":\"string\"}")]
            public string SecurityIps
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpGroupAttribute", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityIpGroupAttribute
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIpGroupName: Whitelist group
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityIpGroupName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
