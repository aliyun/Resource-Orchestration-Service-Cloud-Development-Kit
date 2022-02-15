using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DMS::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dms.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Dms.IInstanceProps
    {
        /// <summary>Property databasePassword: The logon password of the database instance.</summary>
        [JsiiProperty(name: "databasePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DatabasePassword
        {
            get;
            set;
        }

        /// <summary>Property databaseUser: The logon username of the database instance.</summary>
        [JsiiProperty(name: "databaseUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DatabaseUser
        {
            get;
            set;
        }

        /// <summary>Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance.</summary>
        /// <remarks>
        /// Note To query the UID, log on to the DMS Enterprise console and choose System Management
        ///
        ///     User Management.
        /// </remarks>
        [JsiiProperty(name: "dbaUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbaUid
        {
            get;
            set;
        }

        /// <summary>Property envType: The type of the environment to which the database instance belongs.</summary>
        /// <remarks>
        /// Valid values:
        /// product: the production environment.
        /// dev: the test environment.
        /// </remarks>
        [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EnvType
        {
            get;
            set;
        }

        /// <summary>Property exportTimeout: The timeout period for exporting the database instance.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "exportTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ExportTimeout
        {
            get;
            set;
        }

        /// <summary>Property host: The endpoint of the database instance.</summary>
        [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Host
        {
            get;
            set;
        }

        /// <summary>Property instanceAlias: The alias of the database instance.</summary>
        /// <remarks>
        /// The alias helps you quickly find the required
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "instanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceAlias
        {
            get;
            set;
        }

        /// <summary>Property instanceSource: The source of the database instance.</summary>
        /// <remarks>
        /// Valid values:
        /// PUBLIC_OWN: an on-premises database built on the public network.
        /// RDS: an ApsaraDB for RDS (RDS) instance.
        /// ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
        /// VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
        /// Cloud (VPC).
        /// </remarks>
        [JsiiProperty(name: "instanceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceSource
        {
            get;
            set;
        }

        /// <summary>Property instanceType: The type of the database instance.</summary>
        /// <remarks>
        /// Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceType
        {
            get;
            set;
        }

        /// <summary>Property networkType: The network type of the database instance.</summary>
        /// <remarks>
        /// Valid values:
        /// CLASSIC
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NetworkType
        {
            get;
            set;
        }

        /// <summary>Property port: The connection port of the database instance.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Port
        {
            get;
            set;
        }

        /// <summary>Property queryTimeout: The timeout period for querying the database instance.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "queryTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QueryTimeout
        {
            get;
            set;
        }

        /// <summary>Property safeRule: The security rule of the database instance.</summary>
        /// <remarks>
        /// Enter the name of the security rule for
        /// your enterprise.
        /// Note To query a specified security rule, log on to the DMS Enterprise console and choose
        /// System Management &gt; Security Rules. The security rule appears in the security rule
        /// list.
        /// </remarks>
        [JsiiProperty(name: "safeRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SafeRule
        {
            get;
            set;
        }

        /// <summary>Property tid: The ID of the tenant.</summary>
        /// <remarks>
        /// Note To query the ID, log on to the DMS Enterprise console and choose System Management
        ///
        ///     Instance Management or System Management &gt; User Management. The ID of the tenant
        ///     appears in the Service Specification section.
        /// </remarks>
        [JsiiProperty(name: "tid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Tid
        {
            get;
            set;
        }

        /// <summary>Property dataLinkName: The name of the data link for cross-database query.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dataLinkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DataLinkName
        {
            get;
            set;
        }

        /// <summary>Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.</summary>
        /// <remarks>
        /// Currently, this service is available only for the MySQL and PolarDB databases.
        /// 0: The service is disabled.
        /// 1: The native online DDL service prevails.
        /// 2: Data change without table locking provided by DMS prevails.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ddlOnline", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DdlOnline
        {
            get;
            set;
        }

        /// <summary>Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.</summary>
        /// <remarks>
        /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ecsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EcsInstanceId
        {
            get;
            set;
        }

        /// <summary>Property ecsRegion: The region where the database instance resides.</summary>
        /// <remarks>
        /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ecsRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EcsRegion
        {
            get;
            set;
        }

        /// <summary>Property sid: The system ID (SID) of the database instance.</summary>
        /// <remarks>
        /// Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Sid
        {
            get;
            set;
        }

        /// <summary>Property useDsql: Specifies whether to enable cross-database query for the database instance.</summary>
        /// <remarks>
        /// Valid
        /// values:
        /// 0: disabled
        /// 1: enabled
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "useDsql", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UseDsql
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The ID of the VPC to which the database instance belongs.</summary>
        /// <remarks>
        /// Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VpcId
        {
            get;
            set;
        }
    }
}
