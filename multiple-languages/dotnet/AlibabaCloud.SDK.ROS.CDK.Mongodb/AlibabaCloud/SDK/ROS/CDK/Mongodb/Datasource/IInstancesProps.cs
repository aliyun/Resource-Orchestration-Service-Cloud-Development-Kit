using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::MONGODB::Instances`.</summary>
    [JsiiInterface(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.datasource.InstancesProps")]
    public interface IInstancesProps
    {
        /// <summary>Property chargeType: The billing method of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PostPaid: pay-as-you-go
        /// PrePaid: subscription
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectionDomain: The endpoint of the node.</summary>
        /// <remarks>
        /// You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
        /// </remarks>
        [JsiiProperty(name: "connectionDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionDomain
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceClass: The instance type.</summary>
        /// <remarks>
        /// For more information about valid values, see Instance types.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: The description of the instance.</summary>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceStatus: The state of the instance.</summary>
        /// <remarks>
        /// For more information about valid values, see Instance states.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceType: The category of the instance.</summary>
        /// <remarks>
        /// Default value: replicate. Valid values:
        /// sharding: sharded cluster instance
        /// replicate: replica set or standalone instance
        /// Note
        /// To query the list of sharded cluster instances, you must set the parameter to sharding.
        /// This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engineVersion: The database engine version of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// 5.0
        /// 4.4
        /// 4.2
        /// 4.0
        /// 3.4
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EngineVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property expired: Specifies whether the instance expires.</summary>
        /// <remarks>
        /// Valid values:
        /// true: The instance expires.
        /// false: The instance does not expire.
        /// </remarks>
        [JsiiProperty(name: "expired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Expired
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkType: The network type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Classic
        /// Vpc
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property replicationFactor: The number of nodes in a replica set instance.</summary>
        /// <remarks>
        /// Valid values: 3, 5, and 7.
        /// </remarks>
        [JsiiProperty(name: "replicationFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReplicationFactor
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of instance.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mongodb.datasource.RosInstances.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.RosInstances.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The VPC ID of the instance.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The vSwitch ID of the instance.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The zone ID of the instance.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query the most recent zone list.
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

        /// <summary>Properties for defining a `DATASOURCE::MONGODB::Instances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.datasource.InstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.IInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property chargeType: The billing method of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// PostPaid: pay-as-you-go
            /// PrePaid: subscription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connectionDomain: The endpoint of the node.</summary>
            /// <remarks>
            /// You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectionDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionDomain
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceClass: The instance type.</summary>
            /// <remarks>
            /// For more information about valid values, see Instance types.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceDescription: The description of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceStatus: The state of the instance.</summary>
            /// <remarks>
            /// For more information about valid values, see Instance states.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceType: The category of the instance.</summary>
            /// <remarks>
            /// Default value: replicate. Valid values:
            /// sharding: sharded cluster instance
            /// replicate: replica set or standalone instance
            /// Note
            /// To query the list of sharded cluster instances, you must set the parameter to sharding.
            /// This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engineVersion: The database engine version of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// 5.0
            /// 4.4
            /// 4.2
            /// 4.0
            /// 3.4
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property expired: Specifies whether the instance expires.</summary>
            /// <remarks>
            /// Valid values:
            /// true: The instance expires.
            /// false: The instance does not expire.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Expired
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkType: The network type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Classic
            /// Vpc
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property replicationFactor: The number of nodes in a replica set instance.</summary>
            /// <remarks>
            /// Valid values: 3, 5, and 7.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "replicationFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReplicationFactor
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mongodb.datasource.RosInstances.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.RosInstances.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mongodb.Datasource.RosInstances.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: The VPC ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The vSwitch ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The zone ID of the instance.</summary>
            /// <remarks>
            /// You can call the DescribeRegions operation to query the most recent zone list.
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
