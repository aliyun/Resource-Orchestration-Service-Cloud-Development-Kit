using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `RosShardingNetworkPrivateAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosShardingNetworkPrivateAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosShardingNetworkPrivateAddressProps")]
    public interface IRosShardingNetworkPrivateAddressProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the Shard cluster instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
        /// > You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
        /// </remarks>
        [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountName: Account name.
        /// >- starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.
        /// - Only when you apply for the Shard\/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
        /// - The permissions of this account are fixed to read-only.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPassword: Account password.
        /// - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
        /// - The password length is 8-32 bits.
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountPassword
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone to which the instance belongs.
        /// > You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosShardingNetworkPrivateAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosShardingNetworkPrivateAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosShardingNetworkPrivateAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IRosShardingNetworkPrivateAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The ID of the Shard cluster instance.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
            /// > You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
            /// </remarks>
            [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountName: Account name.
            /// >- starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.
            /// - Only when you apply for the Shard\/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
            /// - The permissions of this account are fixed to read-only.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: accountPassword: Account password.
            /// - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
            /// - The password length is 8-32 bits.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone to which the instance belongs.
            /// > You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
