using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DRDS::DrdsDB`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-drds.RosDrdsDBProps")]
    public class RosDrdsDBProps : AlibabaCloud.SDK.ROS.CDK.Drds.IRosDrdsDBProps
    {
        /// <remarks>
        /// <strong>Property</strong>: drdsInstanceId: DRDS instance ID
        /// </remarks>
        [JsiiProperty(name: "drdsInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DrdsInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountName: In the vertical split scenario, an account name with access rights to the corresponding database on all RDSs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AccountName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIsCreating: Check whether the RDS instance is being created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceIsCreating", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DbInstanceIsCreating
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstType: The type of the attached storage. Valid values:
        /// RDS or POLARDB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: Database Name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: encode: Encoding used by the database
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Encode
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instDbName:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instDbName", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-drds.RosDrdsDB.InstDbNameProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? InstDbName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: password: The logon password of the database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Password
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: rdsInstance: This property is required only for vertical partitioning.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "rdsInstance", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? RdsInstance
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Database Sharding method. For more information, see scalability principle. Valid values:
        /// HORIZONTAL: indicates HORIZONTAL partitioning, which is commonly known as database
        /// and table sharding.
        /// VERTICAL: indicates VERTICAL partitioning.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Type
        {
            get;
            set;
        }
    }
}
