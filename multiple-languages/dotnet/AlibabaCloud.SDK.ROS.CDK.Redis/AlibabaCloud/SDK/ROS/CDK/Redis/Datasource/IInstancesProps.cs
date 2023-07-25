using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::REDIS::Instances`.</summary>
    [JsiiInterface(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.InstancesProps")]
    public interface IInstancesProps
    {
        /// <summary>Property architectureType: The architecture of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// cluster: The instance is a cluster instance.
        /// standard: The instance is a standard instance.
        /// rwsplit: The instance is a read/write splitting instance.
        /// </remarks>
        [JsiiProperty(name: "architectureType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ArchitectureType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: The billing method of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PrePaid: subscription
        /// PostPaid: pay-as-you-go
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

        /// <summary>Property editionType: The edition of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Community: Community Edition
        /// Enterprise: Enhance Edition (Tair)
        /// </remarks>
        [JsiiProperty(name: "editionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EditionType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engineVersion: The database engine version of the instance.</summary>
        /// <remarks>
        /// Valid values: 2.8, 4.0, and 5.0.
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

        /// <summary>Property expired: Specifies whether the instance has expired.</summary>
        /// <remarks>
        /// Valid values:
        /// true: The instance has expired.
        /// false: The instance has not expired.
        /// </remarks>
        [JsiiProperty(name: "expired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Expired
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property globalInstance: Specifies whether to return the child instances of distributed instances.</summary>
        /// <remarks>
        /// Valid values:
        /// true: Only child instances are returned.
        /// false: Child instances are not returned.
        /// </remarks>
        [JsiiProperty(name: "globalInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GlobalInstance
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceClass: The instance type.</summary>
        [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceIds: The IDs of instances.</summary>
        /// <remarks>
        /// If you specify multiple instance IDs, separate the instance IDs with commas (,).
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceStatus: The state of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Normal: The instance is normal.
        /// Creating: The instance is being created.
        /// Changing: The configurations of the instance are being changed.
        /// Inactive: The instance is disabled.
        /// Flushing: The instance is being released.
        /// Released: The instance is released.
        /// Transforming: The instance is being transformed.
        /// Unavailable: The instance is suspended.
        /// Error: The instance cannot be created.
        /// Migrating: The instance is being migrated.
        /// BackupRecovering: The instance is being restored from a backup.
        /// MinorVersionUpgrading: The minor version of the instance is being updated.
        /// NetworkModifying: The network type of the instance is being changed.
        /// SSLModifying: The SSL certificate of the instance is being changed.
        /// MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
        /// </remarks>
        [JsiiProperty(name: "instanceStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: The category of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Tair
        /// Redis
        /// Memcache
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkType: The network type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// CLASSIC: classic network
        /// VPC: Virtual Private Cloud (VPC)
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

        /// <summary>Property privateIp: The private IP address of the instance.</summary>
        [JsiiProperty(name: "privateIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the instance belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property searchKey: The keyword used for fuzzy search.</summary>
        /// <remarks>
        /// The keyword can be based on an instance name or an instance ID.
        /// </remarks>
        [JsiiProperty(name: "searchKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SearchKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
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
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::REDIS::Instances`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstancesProps), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.InstancesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstancesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property architectureType: The architecture of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// cluster: The instance is a cluster instance.
            /// standard: The instance is a standard instance.
            /// rwsplit: The instance is a read/write splitting instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "architectureType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ArchitectureType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: The billing method of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// PrePaid: subscription
            /// PostPaid: pay-as-you-go
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property editionType: The edition of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Community: Community Edition
            /// Enterprise: Enhance Edition (Tair)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "editionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EditionType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engineVersion: The database engine version of the instance.</summary>
            /// <remarks>
            /// Valid values: 2.8, 4.0, and 5.0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property expired: Specifies whether the instance has expired.</summary>
            /// <remarks>
            /// Valid values:
            /// true: The instance has expired.
            /// false: The instance has not expired.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Expired
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property globalInstance: Specifies whether to return the child instances of distributed instances.</summary>
            /// <remarks>
            /// Valid values:
            /// true: Only child instances are returned.
            /// false: Child instances are not returned.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "globalInstance", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GlobalInstance
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceClass: The instance type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceIds: The IDs of instances.</summary>
            /// <remarks>
            /// If you specify multiple instance IDs, separate the instance IDs with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceStatus: The state of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Normal: The instance is normal.
            /// Creating: The instance is being created.
            /// Changing: The configurations of the instance are being changed.
            /// Inactive: The instance is disabled.
            /// Flushing: The instance is being released.
            /// Released: The instance is released.
            /// Transforming: The instance is being transformed.
            /// Unavailable: The instance is suspended.
            /// Error: The instance cannot be created.
            /// Migrating: The instance is being migrated.
            /// BackupRecovering: The instance is being restored from a backup.
            /// MinorVersionUpgrading: The minor version of the instance is being updated.
            /// NetworkModifying: The network type of the instance is being changed.
            /// SSLModifying: The SSL certificate of the instance is being changed.
            /// MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: The category of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Tair
            /// Redis
            /// Memcache
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property networkType: The network type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// CLASSIC: classic network
            /// VPC: Virtual Private Cloud (VPC)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateIp: The private IP address of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property searchKey: The keyword used for fuzzy search.</summary>
            /// <remarks>
            /// The keyword can be based on an instance name or an instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "searchKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SearchKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The zone ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
