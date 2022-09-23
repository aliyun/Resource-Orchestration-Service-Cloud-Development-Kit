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
        public RosMigrationJob(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dts.IRosMigrationJobProps props, bool enableResourcePropertyConstraint): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dts.IRosMigrationJobProps props, bool enableResourcePropertyConstraint)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
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

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
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
        [JsiiProperty(name: "attrMigrationJobId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrMigrationJobId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
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
        [JsiiProperty(name: "migrationJobClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object MigrationJobClass
        {
            get => GetInstanceProperty<object>()!;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpoint: Migration target configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpoint
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IDestinationEndpointProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IDestinationEndpointProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationJobName: Migrating job name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "migrationJobName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MigrationJobName
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationMode: Migration mode
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "migrationMode", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationModeProperty\"}]}}", isOptional: true)]
        public virtual object? MigrationMode
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IMigrationModeProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IMigrationModeProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: migrationObject: Objects that need to be migrated
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "migrationObject", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? MigrationObject
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IMigrationObjectProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IMigrationObjectProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IMigrationObjectProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpoint: Migration source configuration
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty\"}]}}", isOptional: true)]
        public virtual object? SourceEndpoint
        {
            get => GetInstanceProperty<object?>();
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ISourceEndpointProperty cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ISourceEndpointProperty).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                SetInstanceProperty(value);
            }
        }
        [JsiiInterface(nativeType: typeof(IColumnExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty")]
        public interface IColumnExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: Column names are not migrated in the table to be migrated
            /// </remarks>
            [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ColumnName
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
                [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ColumnName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty")]
        public class ColumnExcludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnExcludesProperty
        {
            private object? _columnName;

            /// <remarks>
            /// <strong>Property</strong>: columnName: Column names are not migrated in the table to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColumnName
            {
                get => _columnName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _columnName = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IColumnIncludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty")]
        public interface IColumnIncludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: The column name to be migrated in the table to be migrated
            /// </remarks>
            [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ColumnName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newColumnName: The name of the column to be migrated to be mapped in the target instance
            /// </remarks>
            [JsiiProperty(name: "newColumnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NewColumnName
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
                [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ColumnName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newColumnName: The name of the column to be migrated to be mapped in the target instance
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newColumnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NewColumnName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty")]
        public class ColumnIncludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnIncludesProperty
        {
            private object? _columnName;

            /// <remarks>
            /// <strong>Property</strong>: columnName: The column name to be migrated in the table to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColumnName
            {
                get => _columnName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _columnName = value;
                }
            }

            private object? _newColumnName;

            /// <remarks>
            /// <strong>Property</strong>: newColumnName: The name of the column to be migrated to be mapped in the target instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newColumnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NewColumnName
            {
                get => _newColumnName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _newColumnName = value;
                }
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
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Target instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Password
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Region
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Target instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object UserName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
            /// </remarks>
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DatabaseName
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
            [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EngineName
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
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the target instance. Required when the source instance is a self-built database.
            /// </remarks>
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Ip
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The listening port of the target instance, which is required when the source instance is a self-built database.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            /// </remarks>
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Role
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
                [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object InstanceType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: password: Target instance password
                /// </remarks>
                [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Password
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
                /// </remarks>
                [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Region
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: Target instance access account
                /// </remarks>
                [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object UserName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DatabaseName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: engineName: The data type of the target instance. It is required when the target instance is a self-built database. The values include:
                /// MySQL, SQLServer, PostgreSQL, PPAS, MongoDB, Redis
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EngineName
                {
                    get => GetInstanceProperty<object?>();
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
                [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ip: The connection address of the target instance. Required when the source instance is a self-built database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Ip
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The listening port of the target instance, which is required when the source instance is a self-built database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Role
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.DestinationEndpointProperty")]
        public class DestinationEndpointProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IDestinationEndpointProperty
        {
            private object _instanceType;

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
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => _instanceType;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _instanceType = value;
                }
            }

            private object _password;

            /// <remarks>
            /// <strong>Property</strong>: password: Target instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => _password;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _password = value;
                }
            }

            private object _region;

            /// <remarks>
            /// <strong>Property</strong>: region: The area where the target instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Region
            {
                get => _region;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _region = value;
                }
            }

            private object _userName;

            /// <remarks>
            /// <strong>Property</strong>: userName: Target instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserName
            {
                get => _userName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _userName = value;
                }
            }

            private object? _databaseName;

            /// <remarks>
            /// <strong>Property</strong>: databaseName: The connection database library name of the target instance, which is required if the target instance's database type is: PostgreSQL, PPAS, or MongoDB
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatabaseName
            {
                get => _databaseName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _databaseName = value;
                }
            }

            private object? _engineName;

            /// <remarks>
            /// <strong>Property</strong>: engineName: The data type of the target instance. It is required when the target instance is a self-built database. The values include:
            /// MySQL, SQLServer, PostgreSQL, PPAS, MongoDB, Redis
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineName
            {
                get => _engineName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _engineName = value;
                }
            }

            private object? _instanceId;

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
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => _instanceId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _instanceId = value;
                }
            }

            private object? _ip;

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the target instance. Required when the source instance is a self-built database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ip
            {
                get => _ip;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _ip = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: The listening port of the target instance, which is required when the source instance is a self-built database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _port = value;
                }
            }

            private object? _role;

            /// <remarks>
            /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Role
            {
                get => _role;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _role = value;
                }
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
            private object? _dataIntialization;

            /// <remarks>
            /// <strong>Property</strong>: dataIntialization: Whether the migration task performs full data migration, and the values include:
            /// true: indicates that full data migration is required.
            /// false: indicates no structural migration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataIntialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataIntialization
            {
                get => _dataIntialization;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _dataIntialization = value;
                }
            }

            private object? _dataSynchronization;

            /// <remarks>
            /// <strong>Property</strong>: dataSynchronization: Whether the migration task synchronizes incremental data, including:
            /// true: Indicates that incremental data synchronization is required.
            /// false: Indicates that incremental data synchronization is not performed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataSynchronization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataSynchronization
            {
                get => _dataSynchronization;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _dataSynchronization = value;
                }
            }

            private object? _structureIntialization;

            /// <remarks>
            /// <strong>Property</strong>: structureIntialization: Whether the migration task performs structural migration, and the values include:
            /// true: indicates that a structure migration is required.
            /// false: indicates no structural migration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "structureIntialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StructureIntialization
            {
                get => _structureIntialization;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case bool cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _structureIntialization = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(IMigrationObjectProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.MigrationObjectProperty")]
        public interface IMigrationObjectProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dbName: db name to be migrated
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DbName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newDbName: The name of the db to be migrated in the target instance.
            /// </remarks>
            [JsiiProperty(name: "newDbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NewDbName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newSchemaName: Schema name to be migrated by Schema in the target instance
            /// </remarks>
            [JsiiProperty(name: "newSchemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NewSchemaName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: schemaName: Schema name to be migrated
            /// </remarks>
            [JsiiProperty(name: "schemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SchemaName
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
                [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DbName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newDbName: The name of the db to be migrated in the target instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newDbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NewDbName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newSchemaName: Schema name to be migrated by Schema in the target instance
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newSchemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NewSchemaName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: schemaName: Schema name to be migrated
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "schemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SchemaName
                {
                    get => GetInstanceProperty<object?>();
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
            private object? _dbName;

            /// <remarks>
            /// <strong>Property</strong>: dbName: db name to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbName
            {
                get => _dbName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _dbName = value;
                }
            }

            private object? _newDbName;

            /// <remarks>
            /// <strong>Property</strong>: newDbName: The name of the db to be migrated in the target instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newDbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NewDbName
            {
                get => _newDbName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _newDbName = value;
                }
            }

            private object? _newSchemaName;

            /// <remarks>
            /// <strong>Property</strong>: newSchemaName: Schema name to be migrated by Schema in the target instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newSchemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NewSchemaName
            {
                get => _newSchemaName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _newSchemaName = value;
                }
            }

            private object? _schemaName;

            /// <remarks>
            /// <strong>Property</strong>: schemaName: Schema name to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "schemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SchemaName
            {
                get => _schemaName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _schemaName = value;
                }
            }

            private object? _tableExcludes;

            /// <remarks>
            /// <strong>Property</strong>: tableExcludes: Table excludes configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TableExcludes
            {
                get => _tableExcludes;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableExcludesProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableExcludesProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableExcludesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _tableExcludes = value;
                }
            }

            private object? _tableIncludes;

            /// <remarks>
            /// <strong>Property</strong>: tableIncludes: Table configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TableIncludes
            {
                get => _tableIncludes;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableIncludesProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableIncludesProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableIncludesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _tableIncludes = value;
                }
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
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Source instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Password
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Region
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Source instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object UserName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
            /// </remarks>
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DatabaseName
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
            [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EngineName
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
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the source instance. Required when the source instance is a self-built database.
            /// </remarks>
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Ip
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
            /// </remarks>
            [JsiiProperty(name: "oracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OracleSid
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
            /// </remarks>
            [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? OwnerId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The listening port of the source instance, which is required when the source instance is a self-built database.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            /// </remarks>
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Role
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
                [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object InstanceType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: password: Source instance password
                /// </remarks>
                [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Password
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
                /// </remarks>
                [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Region
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: Source instance access account
                /// </remarks>
                [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object UserName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DatabaseName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: engineName: The database type of the source instance, which is required when SourceEndpoint.InstanceType is not RDS. Values include:
                /// MySQL, SQLServer, PostgreSQL, Oracle, MongoDB, Redis
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EngineName
                {
                    get => GetInstanceProperty<object?>();
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
                [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ip: The connection address of the source instance. Required when the source instance is a self-built database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Ip
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "oracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OracleSid
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OwnerId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The listening port of the source instance, which is required when the source instance is a self-built database.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Role
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.SourceEndpointProperty")]
        public class SourceEndpointProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ISourceEndpointProperty
        {
            private object _instanceType;

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the migration source instance, including:
            /// RDS: Alibaba Cloud RDS instance
            /// ECS: Self-built database on ECS
            /// LocalInstance: Self-built database with public IP address
            /// Express: self-built database accessed via dedicated line
            /// MongoDB: Ali cloud MongoDB instance
            /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => _instanceType;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _instanceType = value;
                }
            }

            private object _password;

            /// <remarks>
            /// <strong>Property</strong>: password: Source instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => _password;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _password = value;
                }
            }

            private object _region;

            /// <remarks>
            /// <strong>Property</strong>: region: The area where the source instance is located. If it is a self-built database, you can select the area closest to the physical distance of the self-built IDC.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Region
            {
                get => _region;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _region = value;
                }
            }

            private object _userName;

            /// <remarks>
            /// <strong>Property</strong>: userName: Source instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserName
            {
                get => _userName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _userName = value;
                }
            }

            private object? _databaseName;

            /// <remarks>
            /// <strong>Property</strong>: databaseName: When the source instance database type is PostgreSQL or MongoDB, this parameter is the database library name used when creating the connection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatabaseName
            {
                get => _databaseName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _databaseName = value;
                }
            }

            private object? _engineName;

            /// <remarks>
            /// <strong>Property</strong>: engineName: The database type of the source instance, which is required when SourceEndpoint.InstanceType is not RDS. Values include:
            /// MySQL, SQLServer, PostgreSQL, Oracle, MongoDB, Redis
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineName
            {
                get => _engineName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _engineName = value;
                }
            }

            private object? _instanceId;

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Source instance ID.
            /// When the value of SourceEndpoint.InstanceType is RDS, this parameter needs to be passed in the RDS instance ID.
            /// When the SourceEndpoint.InstanceType value is ECS, this parameter needs to be passed to the ECS instance ID.
            /// When the SourceEndpoint.InstanceType value is Express, this parameter needs to be passed in the VPC ID (ie, the proprietary network ID).
            /// When the SourceEndpoint.InstanceType value is MongoDB, this parameter needs to be passed to the MongoDB instance ID.
            /// When the SourceEndpoint.InstanceType value is POLARDB, this parameter needs to be passed to POLARDB for MySQL cluster ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => _instanceId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _instanceId = value;
                }
            }

            private object? _ip;

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the source instance. Required when the source instance is a self-built database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ip
            {
                get => _ip;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _ip = value;
                }
            }

            private object? _oracleSid;

            /// <remarks>
            /// <strong>Property</strong>: oracleSid: When the source instance database type is Oracle, this parameter is Oracle SID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "oracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OracleSid
            {
                get => _oracleSid;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _oracleSid = value;
                }
            }

            private object? _ownerId;

            /// <remarks>
            /// <strong>Property</strong>: ownerId: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the UID of the Alibaba Cloud account to which the source RDS instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OwnerId
            {
                get => _ownerId;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _ownerId = value;
                }
            }

            private object? _port;

            /// <remarks>
            /// <strong>Property</strong>: port: The listening port of the source instance, which is required when the source instance is a self-built database.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => _port;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _port = value;
                }
            }

            private object? _role;

            /// <remarks>
            /// <strong>Property</strong>: role: When the source instance is an RDS instance and the source instance is different from the Alibaba Cloud account to which the target instance belongs, this parameter is the authorization role of the Alibaba Cloud account to which the source instance belongs to the target instance Alibaba Cloud account. For details on the permissions and authorization methods required for this role, see Cross-Account Migration Synchronization.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Role
            {
                get => _role;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _role = value;
                }
            }
        }
        [JsiiInterface(nativeType: typeof(ITableExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty")]
        public interface ITableExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tableName: The name of the table to be migrated does not require the table name of the migration table.
            /// </remarks>
            [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TableName
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
                [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TableName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.TableExcludesProperty")]
        public class TableExcludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableExcludesProperty
        {
            private object? _tableName;

            /// <remarks>
            /// <strong>Property</strong>: tableName: The name of the table to be migrated does not require the table name of the migration table.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TableName
            {
                get => _tableName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _tableName = value;
                }
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
            [JsiiProperty(name: "filterCondition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? FilterCondition
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newTableName: The name of the table to be migrated in the target instance mapping
            /// </remarks>
            [JsiiProperty(name: "newTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NewTableName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tableName: Table name to be migrated
            /// </remarks>
            [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TableName
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
                [JsiiProperty(name: "filterCondition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? FilterCondition
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newTableName: The name of the table to be migrated in the target instance mapping
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NewTableName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tableName: Table name to be migrated
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TableName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosMigrationJob.TableIncludesProperty")]
        public class TableIncludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.ITableIncludesProperty
        {
            private object? _columnExcludes;

            /// <remarks>
            /// <strong>Property</strong>: columnExcludes: Column excludes configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.ColumnExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ColumnExcludes
            {
                get => _columnExcludes;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnExcludesProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnExcludesProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnExcludesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _columnExcludes = value;
                }
            }

            private object? _columnIncludes;

            /// <remarks>
            /// <strong>Property</strong>: columnIncludes: Column includes configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosMigrationJob.ColumnIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ColumnIncludes
            {
                get => _columnIncludes;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case object[] cast_cd4240:
                                for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                                {
                                    switch (cast_cd4240[__idx_f64a5c])
                                    {
                                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                            break;
                                        case AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnIncludesProperty cast_201718:
                                            break;
                                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                            // Not enough information to type-check...
                                            break;
                                        case null:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnIncludesProperty).FullName}; received null", nameof(value));
                                        default:
                                            throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosMigrationJob.IColumnIncludesProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                    }
                                }
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _columnIncludes = value;
                }
            }

            private object? _filterCondition;

            /// <remarks>
            /// <strong>Property</strong>: filterCondition: Where condition
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterCondition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterCondition
            {
                get => _filterCondition;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _filterCondition = value;
                }
            }

            private object? _newTableName;

            /// <remarks>
            /// <strong>Property</strong>: newTableName: The name of the table to be migrated in the target instance mapping
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NewTableName
            {
                get => _newTableName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _newTableName = value;
                }
            }

            private object? _tableName;

            /// <remarks>
            /// <strong>Property</strong>: tableName: Table name to be migrated
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TableName
            {
                get => _tableName;
                set
                {
                    if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                    {
                        switch (value)
                        {
                            case string cast_cd4240:
                                break;
                            case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                                break;
                            case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                                // Not enough information to type-check...
                                break;
                            case null:
                                break;
                            default:
                                throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                        }
                    }
                    _tableName = value;
                }
            }
        }
    }
}
