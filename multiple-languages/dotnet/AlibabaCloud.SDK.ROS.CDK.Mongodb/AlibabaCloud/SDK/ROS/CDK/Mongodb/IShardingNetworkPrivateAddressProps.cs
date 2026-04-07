using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `ShardingNetworkPrivateAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IShardingNetworkPrivateAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ShardingNetworkPrivateAddressProps")]
    public interface IShardingNetworkPrivateAddressProps
    {
        /// <summary>Property dbInstanceId: The ID of the Shard cluster instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.</summary>
        /// <remarks>
        ///     You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
        /// </remarks>
        [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeId
        {
            get;
        }

        /// <summary>Property accountName: Account name.</summary>
        /// <remarks>
        ///     <list type="bullet">
        ///     <description>starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.</description>
        ///     </list>
        ///
        /// <list type="bullet">
        /// <description>Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.</description>
        /// <description>The permissions of this account are fixed to read-only.</description>
        /// </list>
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

        /// <summary>Property accountPassword: Account password.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^&amp; *()_+-='</description>
        /// <description>The password length is 8-32 bits.</description>
        /// </list>
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

        /// <summary>Property zoneId: The ID of the zone to which the instance belongs.</summary>
        /// <remarks>
        ///     You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
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

        /// <summary>Properties for defining a `ShardingNetworkPrivateAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IShardingNetworkPrivateAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ShardingNetworkPrivateAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingNetworkPrivateAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: The ID of the Shard cluster instance.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.</summary>
            /// <remarks>
            ///     You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
            /// </remarks>
            [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountName: Account name.</summary>
            /// <remarks>
            ///     <list type="bullet">
            ///     <description>starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.</description>
            ///     </list>
            ///
            /// <list type="bullet">
            /// <description>Only when you apply for the Shard/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.</description>
            /// <description>The permissions of this account are fixed to read-only.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property accountPassword: Account password.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^&amp; *()_+-='</description>
            /// <description>The password length is 8-32 bits.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The ID of the zone to which the instance belongs.</summary>
            /// <remarks>
            ///     You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
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
