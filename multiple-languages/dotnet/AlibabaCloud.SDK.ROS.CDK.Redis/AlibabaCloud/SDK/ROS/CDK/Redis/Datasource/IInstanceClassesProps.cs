using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis.Datasource
{
    /// <summary>Properties for defining a `InstanceClasses`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceClassesProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.InstanceClassesProps")]
    public interface IInstanceClassesProps
    {
        /// <summary>Property acceptLanguage: The language of the return values.</summary>
        /// <remarks>
        /// Valid values:
        /// zh-CN: Chinese. This is the default value.
        /// en-US: English.
        /// </remarks>
        [JsiiProperty(name: "acceptLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcceptLanguage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engine: The engine type.</summary>
        /// <remarks>
        /// Valid values:
        /// Redis
        /// Memcache
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Engine
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceChargeType: The billing method.</summary>
        /// <remarks>
        /// Valid values:
        /// PrePaid: subscription
        /// PostPaid: pay-as-you-go
        /// Note Default value: PrePaid.
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceId: The ID of the resource group.</summary>
        /// <remarks>
        /// You can call the ListResourceGroups operation to query the IDs of resource groups.
        /// Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nodeId: The ID of the data node for which you want to query available instance types.</summary>
        /// <remarks>
        /// You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
        /// Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
        /// </remarks>
        [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NodeId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property orderType: The order type.</summary>
        /// <remarks>
        /// Valid values:
        /// BUY: the orders that are used to purchase instances.
        /// UPGRADE: the orders that are used to upgrade instances.
        /// DOWNGRADE: the orders that are used to downgrade instances.
        /// </remarks>
        [JsiiProperty(name: "orderType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OrderType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property productType: The edition or series of instances.</summary>
        /// <remarks>
        /// Valid values:
        /// Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
        /// Tair_scm: persistent memory-optimized instances
        /// Tair_essd: storage-optimized instances
        /// </remarks>
        [JsiiProperty(name: "productType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProductType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the instance.</summary>
        /// <remarks>
        /// Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.</summary>
        /// <remarks>
        /// Note You can call the DescribeRegions operation to query information about zones.
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

        /// <summary>Properties for defining a `InstanceClasses`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceClassesProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.InstanceClassesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceClassesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property acceptLanguage: The language of the return values.</summary>
            /// <remarks>
            /// Valid values:
            /// zh-CN: Chinese. This is the default value.
            /// en-US: English.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acceptLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcceptLanguage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engine: The engine type.</summary>
            /// <remarks>
            /// Valid values:
            /// Redis
            /// Memcache
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Engine
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The billing method.</summary>
            /// <remarks>
            /// Valid values:
            /// PrePaid: subscription
            /// PostPaid: pay-as-you-go
            /// Note Default value: PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceId: The ID of the resource group.</summary>
            /// <remarks>
            /// You can call the ListResourceGroups operation to query the IDs of resource groups.
            /// Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nodeId: The ID of the data node for which you want to query available instance types.</summary>
            /// <remarks>
            /// You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
            /// Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NodeId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property orderType: The order type.</summary>
            /// <remarks>
            /// Valid values:
            /// BUY: the orders that are used to purchase instances.
            /// UPGRADE: the orders that are used to upgrade instances.
            /// DOWNGRADE: the orders that are used to downgrade instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "orderType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OrderType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property productType: The edition or series of instances.</summary>
            /// <remarks>
            /// Valid values:
            /// Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
            /// Tair_scm: persistent memory-optimized instances
            /// Tair_essd: storage-optimized instances
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "productType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProductType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the instance.</summary>
            /// <remarks>
            /// Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.</summary>
            /// <remarks>
            /// Note You can call the DescribeRegions operation to query information about zones.
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
