using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>A ROS template type:  `ALIYUN::DTS::MigrationJob`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJobProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosMigrationJob : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::DTS::MigrationJob`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosMigrationJob(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dts.IRosMigrationJobProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMigrationJob(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMigrationJob(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob))!;

        /// <remarks>
        /// <strong>Attribute</strong>: MigrationJobId: Migration tasks task ID
        /// </remarks>
        [JsiiProperty(name: "attrMigrationJobId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrMigrationJobId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationJobClass: Migrating instance specifications, which can be:
        /// small, medium, large and so on.
        /// Various specifications of the reference data migration test performance specifications
        /// </remarks>
        [JsiiProperty(name: "migrationJobClass", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string MigrationJobClass
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpoint: Migration target configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpoint
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationJobName: Migrating job name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "migrationJobName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MigrationJobName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationMode: Migration mode
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "migrationMode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty\"}]}}", isOptional: true)]
        public virtual object? MigrationMode
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationObject: Objects that need to be migrated
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "migrationObject", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? MigrationObject
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpoint: Migration source configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty\"}]}}", isOptional: true)]
        public virtual object? SourceEndpoint
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IColumnExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty")]
        public interface IColumnExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: Column names are not migrated in the table to be migrated
            /// </remarks>
            [JsiiProperty(name: "columnName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ColumnName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IColumnExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnExcludesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: columnName: Column names are not migrated in the table to be migrated
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "columnName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ColumnName
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty")]
        public class ColumnExcludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: Column names are not migrated in the table to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ColumnName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IColumnIncludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty")]
        public interface IColumnIncludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: The column name to be migrated in the table to be migrated
            /// </remarks>
            [JsiiProperty(name: "columnName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ColumnName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newColumnName: The name of the column to be migrated to be mapped in the target instance
            /// </remarks>
            [JsiiProperty(name: "newColumnName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NewColumnName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IColumnIncludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnIncludesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: columnName: The column name to be migrated in the table to be migrated
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "columnName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ColumnName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newColumnName: The name of the column to be migrated to be mapped in the target instance
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newColumnName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NewColumnName
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty")]
        public class ColumnIncludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnIncludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: The column name to be migrated in the table to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ColumnName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newColumnName: The name of the column to be migrated to be mapped in the target instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newColumnName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NewColumnName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IDestinationEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty")]
        public interface IDestinationEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the target instance, including:
            /// RDS: Alibaba Cloud RDS instance
            /// ECS: Self-built database on ECS
            /// LocalInstance: Self-built database of local IDC
            /// MongoDB: Alibaba Cloud MongoDB instance
            /// Redis: Alibaba Cloud Redis instance
            /// DRDS: Alibaba Cloud DRDS instance
            /// PetaData: Alibaba Cloud PetaData instance
            /// OceanBase: Alibaba Cloud OceanBase instance
            /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
            string InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Target instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
            string Password
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            string Region
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Target instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
            string UserName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
            /// </remarks>
            [JsiiProperty(name: "databaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DatabaseName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: engineName: The data type of the target instance. It is required when the target instance is a self-built database. The values include:
            /// MySQL, SQLServer, PostgreSQL, PPAS, MongoDB, Redis
            /// </remarks>
            [JsiiProperty(name: "engineName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? EngineName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Target instance ID
            /// When the DestinationEndpoint.InstanceType value is RDS, this parameter needs to be passed to the RDS instance ID.
            /// When the DestinationEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            /// When the DestinationEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
            /// When the DestinationEndpoint.InstanceType value is Redis, this parameter needs to be passed in the Redis instance ID.
            /// When the DestinationEndpoint.InstanceType value is DRDS, this parameter needs to be passed to the DRDS instance ID.
            /// When the DestinationEndpoint.InstanceType value is PetaData, this parameter needs to pass in the PetaData instance ID.
            /// When the DestinationEndpoint.InstanceType value is OceanBase, this parameter needs to be passed to the OceanBase instance ID.
            /// When the DestinationEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to the POLARDB for MySQL cluster ID.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? InstanceId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the target instance. Required when the source instance is a self-built database.
            /// </remarks>
            [JsiiProperty(name: "ip", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Ip
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The listening port of the target instance, which is required when the source instance is a self-built database.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            /// </remarks>
            [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Role
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDestinationEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IDestinationEndpointProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceType: The instance type of the target instance, including:
                /// RDS: Alibaba Cloud RDS instance
                /// ECS: Self-built database on ECS
                /// LocalInstance: Self-built database of local IDC
                /// MongoDB: Alibaba Cloud MongoDB instance
                /// Redis: Alibaba Cloud Redis instance
                /// DRDS: Alibaba Cloud DRDS instance
                /// PetaData: Alibaba Cloud PetaData instance
                /// OceanBase: Alibaba Cloud OceanBase instance
                /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
                /// </remarks>
                [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
                public string InstanceType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: password: Target instance password
                /// </remarks>
                [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
                public string Password
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
                /// </remarks>
                [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
                public string Region
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: Target instance access account
                /// </remarks>
                [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
                public string UserName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "databaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DatabaseName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: engineName: The data type of the target instance. It is required when the target instance is a self-built database. The values include:
                /// MySQL, SQLServer, PostgreSQL, PPAS, MongoDB, Redis
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "engineName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? EngineName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceId: Target instance ID
                /// When the DestinationEndpoint.InstanceType value is RDS, this parameter needs to be passed to the RDS instance ID.
                /// When the DestinationEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
                /// When the DestinationEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
                /// When the DestinationEndpoint.InstanceType value is Redis, this parameter needs to be passed in the Redis instance ID.
                /// When the DestinationEndpoint.InstanceType value is DRDS, this parameter needs to be passed to the DRDS instance ID.
                /// When the DestinationEndpoint.InstanceType value is PetaData, this parameter needs to pass in the PetaData instance ID.
                /// When the DestinationEndpoint.InstanceType value is OceanBase, this parameter needs to be passed to the OceanBase instance ID.
                /// When the DestinationEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to the POLARDB for MySQL cluster ID.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? InstanceId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ip: The connection address of the target instance. Required when the source instance is a self-built database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ip", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Ip
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The listening port of the target instance, which is required when the source instance is a self-built database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Port
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Role
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty")]
        public class DestinationEndpointProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IDestinationEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the target instance, including:
            /// RDS: Alibaba Cloud RDS instance
            /// ECS: Self-built database on ECS
            /// LocalInstance: Self-built database of local IDC
            /// MongoDB: Alibaba Cloud MongoDB instance
            /// Redis: Alibaba Cloud Redis instance
            /// DRDS: Alibaba Cloud DRDS instance
            /// PetaData: Alibaba Cloud PetaData instance
            /// OceanBase: Alibaba Cloud OceanBase instance
            /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string InstanceType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Target instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Password
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Region
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Target instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string UserName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DatabaseName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: engineName: The data type of the target instance. It is required when the target instance is a self-built database. The values include:
            /// MySQL, SQLServer, PostgreSQL, PPAS, MongoDB, Redis
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? EngineName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Target instance ID
            /// When the DestinationEndpoint.InstanceType value is RDS, this parameter needs to be passed to the RDS instance ID.
            /// When the DestinationEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            /// When the DestinationEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
            /// When the DestinationEndpoint.InstanceType value is Redis, this parameter needs to be passed in the Redis instance ID.
            /// When the DestinationEndpoint.InstanceType value is DRDS, this parameter needs to be passed to the DRDS instance ID.
            /// When the DestinationEndpoint.InstanceType value is PetaData, this parameter needs to pass in the PetaData instance ID.
            /// When the DestinationEndpoint.InstanceType value is OceanBase, this parameter needs to be passed to the OceanBase instance ID.
            /// When the DestinationEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to the POLARDB for MySQL cluster ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? InstanceId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the target instance. Required when the source instance is a self-built database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ip", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Ip
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The listening port of the target instance, which is required when the source instance is a self-built database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Role
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IMigrationModeProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty")]
        public interface IMigrationModeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dataIntialization: Whether the migration task performs full data migration, and the values include:
            /// true: indicates that full data migration is required.
            /// false: indicates no structural migration
            /// </remarks>
            [JsiiProperty(name: "dataIntialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DataIntialization
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSynchronization: Whether the migration task synchronizes incremental data, including:
            /// true: Indicates that incremental data synchronization is required.
            /// false: Indicates that incremental data synchronization is not performed.
            /// </remarks>
            [JsiiProperty(name: "dataSynchronization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DataSynchronization
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: structureIntialization: Whether the migration task performs structural migration, and the values include:
            /// true: indicates that a structure migration is required.
            /// false: indicates no structural migration
            /// </remarks>
            [JsiiProperty(name: "structureIntialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StructureIntialization
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMigrationModeProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IMigrationModeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: dataIntialization: Whether the migration task performs full data migration, and the values include:
                /// true: indicates that full data migration is required.
                /// false: indicates no structural migration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dataIntialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DataIntialization
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: dataSynchronization: Whether the migration task synchronizes incremental data, including:
                /// true: Indicates that incremental data synchronization is required.
                /// false: Indicates that incremental data synchronization is not performed.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dataSynchronization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DataSynchronization
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: structureIntialization: Whether the migration task performs structural migration, and the values include:
                /// true: indicates that a structure migration is required.
                /// false: indicates no structural migration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "structureIntialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? StructureIntialization
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty")]
        public class MigrationModeProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IMigrationModeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dataIntialization: Whether the migration task performs full data migration, and the values include:
            /// true: indicates that full data migration is required.
            /// false: indicates no structural migration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataIntialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DataIntialization
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataSynchronization: Whether the migration task synchronizes incremental data, including:
            /// true: Indicates that incremental data synchronization is required.
            /// false: Indicates that incremental data synchronization is not performed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSynchronization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DataSynchronization
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: structureIntialization: Whether the migration task performs structural migration, and the values include:
            /// true: indicates that a structure migration is required.
            /// false: indicates no structural migration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "structureIntialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? StructureIntialization
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IMigrationObjectProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty")]
        public interface IMigrationObjectProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dbName: db name to be migrated
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DbName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newDbName: The name of the db to be migrated in the target instance.
            /// </remarks>
            [JsiiProperty(name: "newDbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NewDbName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newSchemaName: Schema name to be migrated by Schema in the target instance
            /// </remarks>
            [JsiiProperty(name: "newSchemaName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NewSchemaName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: schemaName: Schema name to be migrated
            /// </remarks>
            [JsiiProperty(name: "schemaName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? SchemaName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tableExcludes: Table excludes configuration
            /// </remarks>
            [JsiiProperty(name: "tableExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TableExcludes
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tableIncludes: Table configuration
            /// </remarks>
            [JsiiProperty(name: "tableIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TableIncludes
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IMigrationObjectProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IMigrationObjectProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: dbName: db name to be migrated
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DbName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newDbName: The name of the db to be migrated in the target instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newDbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NewDbName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newSchemaName: Schema name to be migrated by Schema in the target instance
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newSchemaName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NewSchemaName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: schemaName: Schema name to be migrated
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "schemaName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? SchemaName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tableExcludes: Table excludes configuration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tableExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? TableExcludes
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tableIncludes: Table configuration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tableIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? TableIncludes
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty")]
        public class MigrationObjectProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IMigrationObjectProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dbName: db name to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DbName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newDbName: The name of the db to be migrated in the target instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newDbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NewDbName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newSchemaName: Schema name to be migrated by Schema in the target instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newSchemaName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NewSchemaName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: schemaName: Schema name to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "schemaName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SchemaName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tableExcludes: Table excludes configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? TableExcludes
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tableIncludes: Table configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? TableIncludes
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISourceEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty")]
        public interface ISourceEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the migration source instance, including:
            /// RDS: Alibaba Cloud RDS instance
            /// ECS: Self-built database on ECS
            /// LocalInstance: Self-built database with public IP address
            /// Express: self-built database accessed via dedicated line
            /// MongoDB: Ali cloud MongoDB instance
            /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
            string InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Source instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
            string Password
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
            string Region
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Source instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
            string UserName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
            /// </remarks>
            [JsiiProperty(name: "databaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DatabaseName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: engineName: The database type of the source instance, which is required when SourceEndpoint.InstanceType is not RDS. Values include:
            /// MySQL, SQLServer, PostgreSQL, Oracle, MongoDB, Redis
            /// </remarks>
            [JsiiProperty(name: "engineName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? EngineName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Source instance ID.
            /// When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
            /// When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            /// When the SourceEndpoint.InstanceType value is Express, this parameter needs to be passed in the VPC ID (ie, the proprietary network ID).
            /// When the SourceEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
            /// When the SourceEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to POLARDB for MySQL cluster ID.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? InstanceId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the source instance. Required when the source instance is a self-built database.
            /// </remarks>
            [JsiiProperty(name: "ip", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Ip
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
            /// </remarks>
            [JsiiProperty(name: "oracleSid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? OracleSid
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
            /// </remarks>
            [JsiiProperty(name: "ownerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? OwnerId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The listening port of the source instance, which is required when the source instance is a self-built database.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            /// </remarks>
            [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Role
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISourceEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ISourceEndpointProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceType: The instance type of the migration source instance, including:
                /// RDS: Alibaba Cloud RDS instance
                /// ECS: Self-built database on ECS
                /// LocalInstance: Self-built database with public IP address
                /// Express: self-built database accessed via dedicated line
                /// MongoDB: Ali cloud MongoDB instance
                /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
                /// </remarks>
                [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
                public string InstanceType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: password: Source instance password
                /// </remarks>
                [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}")]
                public string Password
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
                /// </remarks>
                [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}")]
                public string Region
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: Source instance access account
                /// </remarks>
                [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}")]
                public string UserName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "databaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DatabaseName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: engineName: The database type of the source instance, which is required when SourceEndpoint.InstanceType is not RDS. Values include:
                /// MySQL, SQLServer, PostgreSQL, Oracle, MongoDB, Redis
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "engineName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? EngineName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceId: Source instance ID.
                /// When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
                /// When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
                /// When the SourceEndpoint.InstanceType value is Express, this parameter needs to be passed in the VPC ID (ie, the proprietary network ID).
                /// When the SourceEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
                /// When the SourceEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to POLARDB for MySQL cluster ID.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? InstanceId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ip: The connection address of the source instance. Required when the source instance is a self-built database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ip", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Ip
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "oracleSid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? OracleSid
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ownerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? OwnerId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The listening port of the source instance, which is required when the source instance is a self-built database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Port
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Role
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty")]
        public class SourceEndpointProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ISourceEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the migration source instance, including:
            /// RDS: Alibaba Cloud RDS instance
            /// ECS: Self-built database on ECS
            /// LocalInstance: Self-built database with public IP address
            /// Express: self-built database accessed via dedicated line
            /// MongoDB: Ali cloud MongoDB instance
            /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string InstanceType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Source instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Password
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Region
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Source instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string UserName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DatabaseName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: engineName: The database type of the source instance, which is required when SourceEndpoint.InstanceType is not RDS. Values include:
            /// MySQL, SQLServer, PostgreSQL, Oracle, MongoDB, Redis
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? EngineName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Source instance ID.
            /// When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
            /// When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            /// When the SourceEndpoint.InstanceType value is Express, this parameter needs to be passed in the VPC ID (ie, the proprietary network ID).
            /// When the SourceEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
            /// When the SourceEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to POLARDB for MySQL cluster ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? InstanceId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the source instance. Required when the source instance is a self-built database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ip", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Ip
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oracleSid", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? OracleSid
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ownerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? OwnerId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The listening port of the source instance, which is required when the source instance is a self-built database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Role
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITableExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty")]
        public interface ITableExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tableName: The name of the table to be migrated does not require the table name of the migration table.
            /// </remarks>
            [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? TableName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITableExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableExcludesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: tableName: The name of the table to be migrated does not require the table name of the migration table.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? TableName
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty")]
        public class TableExcludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tableName: The name of the table to be migrated does not require the table name of the migration table.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? TableName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITableIncludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty")]
        public interface ITableIncludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnExcludes: Column excludes configuration
            /// </remarks>
            [JsiiProperty(name: "columnExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ColumnExcludes
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: columnIncludes: Column includes configuration
            /// </remarks>
            [JsiiProperty(name: "columnIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ColumnIncludes
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: filterCondition: Where condition
            /// </remarks>
            [JsiiProperty(name: "filterCondition", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? FilterCondition
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newTableName: The name of the table to be migrated in the target instance mapping
            /// </remarks>
            [JsiiProperty(name: "newTableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NewTableName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tableName: Table name to be migrated
            /// </remarks>
            [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? TableName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITableIncludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableIncludesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: columnExcludes: Column excludes configuration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "columnExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ColumnExcludes
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: columnIncludes: Column includes configuration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "columnIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ColumnIncludes
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: filterCondition: Where condition
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "filterCondition", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? FilterCondition
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newTableName: The name of the table to be migrated in the target instance mapping
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newTableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NewTableName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tableName: Table name to be migrated
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? TableName
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty")]
        public class TableIncludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableIncludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnExcludes: Column excludes configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? ColumnExcludes
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: columnIncludes: Column includes configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? ColumnIncludes
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: filterCondition: Where condition
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterCondition", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? FilterCondition
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newTableName: The name of the table to be migrated in the target instance mapping
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newTableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NewTableName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tableName: Table name to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? TableName
            {
                get;
                set;
            }
        }
    }
}
