using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>A ROS template type:  `ALIYUN::DTS::SynchronizationJob`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJobProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosSynchronizationJob : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::DTS::SynchronizationJob`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosSynchronizationJob(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dts.IRosSynchronizationJobProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSynchronizationJob(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSynchronizationJob(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob))!;

        /// <remarks>
        /// <strong>Attribute</strong>: SynchronizationJobId: Synchronization instance ID
        /// </remarks>
        [JsiiProperty(name: "attrSynchronizationJobId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrSynchronizationJobId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpoint: Migration target configuration
        /// </remarks>
        [JsiiProperty(name: "destinationEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty\"}]}}")]
        public virtual object DestinationEndpoint
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destRegion: Region where the synchronization target instance is located.
        /// </remarks>
        [JsiiProperty(name: "destRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object DestRegion
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceEndpoint: Migration source configuration
        /// </remarks>
        [JsiiProperty(name: "sourceEndpoint", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty\"}]}}")]
        public virtual object SourceEndpoint
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceRegion: Region where the synchronization source instance is located.
        /// </remarks>
        [JsiiProperty(name: "sourceRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object SourceRegion
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: synchronizationJobClass: Synchronous instance specifications, which can be:
        /// micro, small, medium, large and so on. The default value is: small
        /// </remarks>
        [JsiiProperty(name: "synchronizationJobClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object SynchronizationJobClass
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
        /// false: no full data initialization
        /// The default value is: true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dataInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DataInitialization
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? NetworkType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: Payment type, which include:
        /// Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PayType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
        /// Year: Annual, Month: monthly
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Period
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
        /// false: no result object initialization
        /// The default value is: true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "structureInitialization", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? StructureInitialization
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: synchronizationObjects: Objects that need to be synchronized
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "synchronizationObjects", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? SynchronizationObjects
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "topology", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Topology
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? UsedTime
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IColumnExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty")]
        public interface IColumnExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: Column names are not synchronized in the table to be synchronized
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

            [JsiiTypeProxy(nativeType: typeof(IColumnExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.IColumnExcludesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: columnName: Column names are not synchronized in the table to be synchronized
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ColumnName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty")]
        public class ColumnExcludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.IColumnExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: Column names are not synchronized in the table to be synchronized
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColumnName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IColumnIncludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty")]
        public interface IColumnIncludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: The column name to be synchronized in the table to be synchronized
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
            /// <strong>Property</strong>: newColumnName: The name of the column to be synchronized to be mapped in the target instance
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

            [JsiiTypeProxy(nativeType: typeof(IColumnIncludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.IColumnIncludesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: columnName: The column name to be synchronized in the table to be synchronized
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ColumnName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newColumnName: The name of the column to be synchronized to be mapped in the target instance
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newColumnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NewColumnName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty")]
        public class ColumnIncludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.IColumnIncludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnName: The column name to be synchronized in the table to be synchronized
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColumnName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newColumnName: The name of the column to be synchronized to be mapped in the target instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newColumnName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NewColumnName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IDestinationEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty")]
        public interface IDestinationEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the synchronization target instance for configuration, including:
            /// Redis: Alibaba Cloud Redis instance
            /// RDS: Alibaba Cloud RDS instance
            /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// ECS: Self-built database on ECS
            /// Express: self-built database accessed via dedicated line
            /// MaxCompute: Alibaba Cloud MaxCompute instance
            /// DataHub: Alibaba Cloud DataHub instance
            /// AnalyticDB: Alibaba Cloud Analytic Database MySQL Version (2.0)
            /// AnalyticDB30: Alibaba Cloud Analytic Database MySQL Version (3.0)
            /// Greenplum: Cloud-native data warehouse ADB PostgreSQL version (formerly analytical database PostgreSQL version).
            /// The default value is RDS
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Target instance ID.
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
            /// <strong>Property</strong>: instanceTypeForCreation: The instance type of the synchronization target instance for creation, including:
            /// MySQL: Alibaba Cloud MySQL instance
            /// PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// MaxCompute: Alibaba Cloud MaxCompute instance.
            /// If this property is not specified, it will be same with InstanceType
            /// </remarks>
            [JsiiProperty(name: "instanceTypeForCreation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceTypeForCreation
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the target instance. Required if the target instance is a local DB accessed through a dedicated line.
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
            /// <strong>Property</strong>: password: Target instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Password
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: Listening port of the target instance. Required when the target instance is ECS or a local DB accessed through a dedicated line.
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
            /// <strong>Property</strong>: userName: Target instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UserName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDestinationEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.IDestinationEndpointProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceType: The instance type of the synchronization target instance for configuration, including:
                /// Redis: Alibaba Cloud Redis instance
                /// RDS: Alibaba Cloud RDS instance
                /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
                /// ECS: Self-built database on ECS
                /// Express: self-built database accessed via dedicated line
                /// MaxCompute: Alibaba Cloud MaxCompute instance
                /// DataHub: Alibaba Cloud DataHub instance
                /// AnalyticDB: Alibaba Cloud Analytic Database MySQL Version (2.0)
                /// AnalyticDB30: Alibaba Cloud Analytic Database MySQL Version (3.0)
                /// Greenplum: Cloud-native data warehouse ADB PostgreSQL version (formerly analytical database PostgreSQL version).
                /// The default value is RDS
                /// </remarks>
                [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object InstanceType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceId: Target instance ID.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceTypeForCreation: The instance type of the synchronization target instance for creation, including:
                /// MySQL: Alibaba Cloud MySQL instance
                /// PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
                /// MaxCompute: Alibaba Cloud MaxCompute instance.
                /// If this property is not specified, it will be same with InstanceType
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceTypeForCreation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceTypeForCreation
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ip: The connection address of the target instance. Required if the target instance is a local DB accessed through a dedicated line.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Ip
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: password: Target instance password
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Password
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: Listening port of the target instance. Required when the target instance is ECS or a local DB accessed through a dedicated line.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: Target instance access account
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UserName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob.DestinationEndpointProperty")]
        public class DestinationEndpointProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.IDestinationEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the synchronization target instance for configuration, including:
            /// Redis: Alibaba Cloud Redis instance
            /// RDS: Alibaba Cloud RDS instance
            /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// ECS: Self-built database on ECS
            /// Express: self-built database accessed via dedicated line
            /// MaxCompute: Alibaba Cloud MaxCompute instance
            /// DataHub: Alibaba Cloud DataHub instance
            /// AnalyticDB: Alibaba Cloud Analytic Database MySQL Version (2.0)
            /// AnalyticDB30: Alibaba Cloud Analytic Database MySQL Version (3.0)
            /// Greenplum: Cloud-native data warehouse ADB PostgreSQL version (formerly analytical database PostgreSQL version).
            /// The default value is RDS
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Target instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceTypeForCreation: The instance type of the synchronization target instance for creation, including:
            /// MySQL: Alibaba Cloud MySQL instance
            /// PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// MaxCompute: Alibaba Cloud MaxCompute instance.
            /// If this property is not specified, it will be same with InstanceType
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceTypeForCreation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceTypeForCreation
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the target instance. Required if the target instance is a local DB accessed through a dedicated line.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ip
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Target instance password
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: Listening port of the target instance. Required when the target instance is ECS or a local DB accessed through a dedicated line.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Target instance access account
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISourceEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty")]
        public interface ISourceEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the synchronization source instance for configuration, including:
            /// Redis: Alibaba Cloud Redis instance
            /// RDS: Alibaba Cloud RDS instance
            /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// ECS: Self-built database on ECS
            /// Express: Self-built database accessed via dedicated line
            /// dg: Self-built database accessed via the database gateway DG
            /// cen: Self-built database accessed via the cloud enterprise network CEN.
            /// The default value is RDS.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object InstanceType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Source instance ID.
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
            /// <strong>Property</strong>: instanceTypeForCreation: The instance type of the synchronization source instance for creation, including:
            /// MySQL: Alibaba Cloud MySQL instance
            /// PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// Redis: Alibaba Cloud Redis instance.
            /// If this property is not specified, it will be same with InstanceType.
            /// </remarks>
            [JsiiProperty(name: "instanceTypeForCreation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? InstanceTypeForCreation
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the source instance. Required if the source instance is a local DB accessed through a dedicated line.
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
            /// <strong>Property</strong>: ownerId: When the source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the UID of the Alibaba Cloud account to which the source instance belongs.
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
            /// <strong>Property</strong>: password: Source instance password
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Password
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: Listening port of the source instance. Required when the source instance is ECS or a local DB accessed through a dedicated line.
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
            /// <strong>Property</strong>: role: When the synchronization source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the authorized role of the account to which the source instance belongs to the Alibaba Cloud account to which the target instance belongs, and the relevant permissions and authorization steps of the reference.
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

            /// <remarks>
            /// <strong>Property</strong>: userName: Source instance access account
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UserName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISourceEndpointProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.ISourceEndpointProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceType: The instance type of the synchronization source instance for configuration, including:
                /// Redis: Alibaba Cloud Redis instance
                /// RDS: Alibaba Cloud RDS instance
                /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
                /// ECS: Self-built database on ECS
                /// Express: Self-built database accessed via dedicated line
                /// dg: Self-built database accessed via the database gateway DG
                /// cen: Self-built database accessed via the cloud enterprise network CEN.
                /// The default value is RDS.
                /// </remarks>
                [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object InstanceType
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceId: Source instance ID.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: instanceTypeForCreation: The instance type of the synchronization source instance for creation, including:
                /// MySQL: Alibaba Cloud MySQL instance
                /// PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
                /// Redis: Alibaba Cloud Redis instance.
                /// If this property is not specified, it will be same with InstanceType.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "instanceTypeForCreation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? InstanceTypeForCreation
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ip: The connection address of the source instance. Required if the source instance is a local DB accessed through a dedicated line.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Ip
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ownerId: When the source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the UID of the Alibaba Cloud account to which the source instance belongs.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? OwnerId
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: password: Source instance password
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Password
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: Listening port of the source instance. Required when the source instance is ECS or a local DB accessed through a dedicated line.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Port
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: role: When the synchronization source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the authorized role of the account to which the source instance belongs to the Alibaba Cloud account to which the target instance belongs, and the relevant permissions and authorization steps of the reference.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Role
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: userName: Source instance access account
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UserName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob.SourceEndpointProperty")]
        public class SourceEndpointProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.ISourceEndpointProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: instanceType: The instance type of the synchronization source instance for configuration, including:
            /// Redis: Alibaba Cloud Redis instance
            /// RDS: Alibaba Cloud RDS instance
            /// POLARDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// ECS: Self-built database on ECS
            /// Express: Self-built database accessed via dedicated line
            /// dg: Self-built database accessed via the database gateway DG
            /// cen: Self-built database accessed via the cloud enterprise network CEN.
            /// The default value is RDS.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Source instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceTypeForCreation: The instance type of the synchronization source instance for creation, including:
            /// MySQL: Alibaba Cloud MySQL instance
            /// PolarDB: Alibaba Cloud POLARDB for MySQL Cluster
            /// Redis: Alibaba Cloud Redis instance.
            /// If this property is not specified, it will be same with InstanceType.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceTypeForCreation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceTypeForCreation
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ip: The connection address of the source instance. Required if the source instance is a local DB accessed through a dedicated line.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ip
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: ownerId: When the source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the UID of the Alibaba Cloud account to which the source instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ownerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OwnerId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: password: Source instance password
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: Listening port of the source instance. Required when the source instance is ECS or a local DB accessed through a dedicated line.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: role: When the synchronization source instance and the target instance do not belong to the same Alibaba Cloud account, this parameter is the authorized role of the account to which the source instance belongs to the Alibaba Cloud account to which the target instance belongs, and the relevant permissions and authorization steps of the reference.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Role
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: Source instance access account
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ISynchronizationObjectsProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty")]
        public interface ISynchronizationObjectsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dbName: db name to be synchronized
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
            /// <strong>Property</strong>: newDbName: The name of the db to be synchronized in the target instance.
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
            /// <strong>Property</strong>: newSchemaName: Schema name to be synchronized by Schema in the target instance
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
            /// <strong>Property</strong>: schemaName: Schema name to be synchronized
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
            [JsiiProperty(name: "tableExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
            [JsiiProperty(name: "tableIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? TableIncludes
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ISynchronizationObjectsProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.ISynchronizationObjectsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: dbName: db name to be synchronized
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DbName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newDbName: The name of the db to be synchronized in the target instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newDbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NewDbName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newSchemaName: Schema name to be synchronized by Schema in the target instance
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newSchemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NewSchemaName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: schemaName: Schema name to be synchronized
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
                [JsiiProperty(name: "tableExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? TableExcludes
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tableIncludes: Table configuration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tableIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? TableIncludes
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob.SynchronizationObjectsProperty")]
        public class SynchronizationObjectsProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.ISynchronizationObjectsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dbName: db name to be synchronized
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newDbName: The name of the db to be synchronized in the target instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newDbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NewDbName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newSchemaName: Schema name to be synchronized by Schema in the target instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newSchemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NewSchemaName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: schemaName: Schema name to be synchronized
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "schemaName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SchemaName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tableExcludes: Table excludes configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TableExcludes
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tableIncludes: Table configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TableIncludes
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITableExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty")]
        public interface ITableExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tableName: The name of the table to be synchronized does not require the table name of the migration table.
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

            [JsiiTypeProxy(nativeType: typeof(ITableExcludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.ITableExcludesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: tableName: The name of the table to be synchronized does not require the table name of the migration table.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TableName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob.TableExcludesProperty")]
        public class TableExcludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.ITableExcludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tableName: The name of the table to be synchronized does not require the table name of the migration table.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TableName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITableIncludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty")]
        public interface ITableIncludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnExcludes: Column excludes configuration
            /// </remarks>
            [JsiiProperty(name: "columnExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
            [JsiiProperty(name: "columnIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
            /// <strong>Property</strong>: newTableName: The name of the table to be synchronized in the target instance mapping
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
            /// <strong>Property</strong>: tableName: Table name to be synchronized
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

            [JsiiTypeProxy(nativeType: typeof(ITableIncludesProperty), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.ITableIncludesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: columnExcludes: Column excludes configuration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "columnExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ColumnExcludes
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: columnIncludes: Column includes configuration
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "columnIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
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
                /// <strong>Property</strong>: newTableName: The name of the table to be synchronized in the target instance mapping
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NewTableName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tableName: Table name to be synchronized
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? TableName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-dts.RosSynchronizationJob.TableIncludesProperty")]
        public class TableIncludesProperty : AlibabaCloud.SDK.ROS.CDK.Dts.RosSynchronizationJob.ITableIncludesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: columnExcludes: Column excludes configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnExcludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnExcludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ColumnExcludes
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: columnIncludes: Column includes configuration
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "columnIncludes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-dts.RosSynchronizationJob.ColumnIncludesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ColumnIncludes
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: filterCondition: Where condition
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filterCondition", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilterCondition
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newTableName: The name of the table to be synchronized in the target instance mapping
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newTableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NewTableName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tableName: Table name to be synchronized
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tableName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TableName
            {
                get;
                set;
            }
        }
    }
}
