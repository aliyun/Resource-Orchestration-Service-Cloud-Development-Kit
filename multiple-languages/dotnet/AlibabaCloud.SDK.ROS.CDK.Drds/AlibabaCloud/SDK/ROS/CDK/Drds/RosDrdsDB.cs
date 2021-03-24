using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    /// <summary>A ROS template type:  `ALIYUN::DRDS::DrdsDB`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Drds.RosDrdsDB), fullyQualifiedName: "@alicloud/ros-cdk-drds.RosDrdsDB", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-drds.RosDrdsDBProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosDrdsDB : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::DRDS::DrdsDB`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosDrdsDB(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Drds.IRosDrdsDBProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDrdsDB(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDrdsDB(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Drds.RosDrdsDB))!;

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: drdsInstanceId: DRDS instance ID
        /// </remarks>
        [JsiiProperty(name: "drdsInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DrdsInstanceId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <summary>A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.</summary>
        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AccountName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIsCreating: Check whether the RDS instance is being created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceIsCreating", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DbInstanceIsCreating
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstType: The type of the attached storage. Valid values:
        /// RDS or POLARDB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbInstType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: Database Name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: encode: Encoding used by the database
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Encode
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instDbName:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instDbName", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? InstDbName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: password: The logon password of the database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Password
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: rdsInstance: This property is required only for vertical partitioning.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "rdsInstance", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual string[]? RdsInstance
        {
            get => GetInstanceProperty<string[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Database Sharding method. For more information, see scalability principle. Valid values:
        /// HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        /// and table sharding.
        /// VERTICAL: indicates VERTICAL partitioning.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Type
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IInstDbNameProperty), fullyQualifiedName: "@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty")]
        public interface IInstDbNameProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
            string DbInstanceId
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: shardDbName: List of databases that need to be split vertically in the RDS instance.This property is only used in vertical subdivision.
            /// </remarks>
            [JsiiProperty(name: "shardDbName", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            string[] ShardDbName
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IInstDbNameProperty), fullyQualifiedName: "@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Drds.RosDrdsDB.IInstDbNameProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
                /// </remarks>
                [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
                public string DbInstanceId
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: shardDbName: List of databases that need to be split vertically in the RDS instance.This property is only used in vertical subdivision.
                /// </remarks>
                [JsiiProperty(name: "shardDbName", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
                public string[] ShardDbName
                {
                    get => GetInstanceProperty<string[]>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty")]
        public class InstDbNameProperty : AlibabaCloud.SDK.ROS.CDK.Drds.RosDrdsDB.IInstDbNameProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: List of DB instance ID that requires vertical segmentation.This property is only used in vertical subdivision.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string DbInstanceId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: shardDbName: List of databases that need to be split vertically in the RDS instance.This property is only used in vertical subdivision.
            /// </remarks>
            [JsiiProperty(name: "shardDbName", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
            public string[] ShardDbName
            {
                get;
                set;
            }
        }
    }
}
