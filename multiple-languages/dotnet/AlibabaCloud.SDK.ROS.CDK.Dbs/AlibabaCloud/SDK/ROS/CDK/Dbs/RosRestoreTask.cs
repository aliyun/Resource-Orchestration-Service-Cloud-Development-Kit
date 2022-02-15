using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dbs
{
    /// <summary>A ROS template type:  `ALIYUN::DBS::RestoreTask`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dbs.RosRestoreTask), fullyQualifiedName: "@alicloud/ros-cdk-dbs.RosRestoreTask", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-dbs.RosRestoreTaskProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosRestoreTask : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::DBS::RestoreTask`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosRestoreTask(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dbs.IRosRestoreTaskProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRestoreTask(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRestoreTask(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Dbs.RosRestoreTask))!;

        /// <remarks>
        /// <strong>Attribute</strong>: RestoreTaskId: The ID of the restoration task.
        /// </remarks>
        [JsiiProperty(name: "attrRestoreTaskId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRestoreTaskId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupPlanId: The ID of the backup plan.
        /// </remarks>
        [JsiiProperty(name: "backupPlanId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object BackupPlanId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointInstanceType: The location of the database. Valid values:
        /// - rds
        /// - ecs
        /// - express: a database connected over express connect, VPN Gateway, or smart gateway.
        /// - agent: The database connected through the backup Gateway
        /// - dds: apsaradb for MongoDB
        /// - kvstore
        /// - polardb
        /// - drds
        /// - dg: the database is directly connected through IP Address: Port.
        /// </remarks>
        [JsiiProperty(name: "destinationEndpointInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object DestinationEndpointInstanceType
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
        /// <strong>Property</strong>: restoreTaskName: The name of the restoration task.
        /// </remarks>
        [JsiiProperty(name: "restoreTaskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object RestoreTaskName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backupGatewayId: The ID of the backup gateway.
        /// NoteDestinationEndpointInstanceType if you set this parameter to agent, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? BackupGatewayId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backupSetId: The ID of the full backup set used for restoration, which is mutually exclusive to
        /// RestoreTime.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? BackupSetId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointDatabaseName: The name of the RDS database.
        /// Note When the database type is PostgreSQL or MongoDB, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointDatabaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpointDatabaseName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointInstanceId: The ID of the ApsaraDB RDS instance to query.
        /// NoteDestinationEndpointInstanceType if the value is RDS, ECS, DDS, or Express, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpointInstanceId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointIp: The endpoint used to connect to the database.
        /// NoteDestinationEndpointInstanceType is express, agent, or other. This parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpointIp
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointOracleSid: The SID of the Oracle instance.
        /// Note This parameter is required if the database type is Oracle.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointOracleSid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpointOracleSid
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointPassword: The password that is used to log on to the RDS instance.
        /// Note You must specify this parameter when the database type is Redis, or the database location
        /// is agent and the database type is MSSQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpointPassword
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointPort: The port that is used to access the database of the primary MySQL server.
        /// NoteDestinationEndpointInstanceType is in the format of express, agent, other, or ECS. This parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpointPort
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointRegion: The region of the database.
        /// NoteDestinationEndpointInstanceType for RDS, ECS, DDS, Express, or Agent, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpointRegion
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationEndpointUserName: The database account.
        /// Note You must specify this parameter when the database type is Redis, or the database location
        /// is agent and the database type is MSSQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destinationEndpointUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DestinationEndpointUserName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: duplicateConflict: The handling method for conflicts between objects with the same name. Valid values:
        /// failure: The object with the same name fails (default).
        /// renamenew: renames an object with the same name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duplicateConflict", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DuplicateConflict
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreDir: DestinationEndpointInstanceType this parameter is required when agent is specified and the backup schedule is MySQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RestoreDir
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreHome: Database Program Directory.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreHome", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RestoreHome
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreObjects: Restore an object.
        /// Note For details, see the following RestoreObjects if the database is located in an agent, this parameter is required in other scenarios.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreObjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RestoreObjects
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTime: The time when the fault is restored. Set the value to 1554560477000.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RestoreTime
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: startTask: Start restore task after creating a recovery task.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "startTask", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? StartTask
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
    }
}
