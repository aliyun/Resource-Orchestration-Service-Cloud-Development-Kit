using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    /// <summary>Properties for defining a `ALIYUN::DMS::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: databasePassword: The logon password of the database instance.
        /// </remarks>
        [JsiiProperty(name: "databasePassword", typeJson: "{\"primitive\":\"string\"}")]
        string DatabasePassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: databaseUser: The logon username of the database instance.
        /// </remarks>
        [JsiiProperty(name: "databaseUser", typeJson: "{\"primitive\":\"string\"}")]
        string DatabaseUser
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
        /// instance.
        /// Note To query the UID, log on to the DMS Enterprise console and choose System Management
        /// > User Management.
        /// </remarks>
        [JsiiProperty(name: "dbaUid", typeJson: "{\"primitive\":\"number\"}")]
        double DbaUid
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: envType: The type of the environment to which the database instance belongs. Valid values:
        /// product: the production environment.
        /// dev: the test environment.
        /// </remarks>
        [JsiiProperty(name: "envType", typeJson: "{\"primitive\":\"string\"}")]
        string EnvType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "exportTimeout", typeJson: "{\"primitive\":\"number\"}")]
        double ExportTimeout
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: host: The endpoint of the database instance.
        /// </remarks>
        [JsiiProperty(name: "host", typeJson: "{\"primitive\":\"string\"}")]
        string Host
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceAlias: The alias of the database instance. The alias helps you quickly find the required
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "instanceAlias", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceAlias
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceSource: The source of the database instance. Valid values:
        /// PUBLIC_OWN: an on-premises database built on the public network.
        /// RDS: an ApsaraDB for RDS (RDS) instance.
        /// ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
        /// VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
        /// Cloud (VPC).
        /// </remarks>
        [JsiiProperty(name: "instanceSource", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceSource
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkType: The network type of the database instance. Valid values:
        /// CLASSIC
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}")]
        string NetworkType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The connection port of the database instance.
        /// </remarks>
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
        double Port
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "queryTimeout", typeJson: "{\"primitive\":\"number\"}")]
        double QueryTimeout
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: safeRule: The security rule of the database instance. Enter the name of the security rule for
        /// your enterprise.
        /// Note To query a specified security rule, log on to the DMS Enterprise console and choose
        /// System Management > Security Rules. The security rule appears in the security rule
        /// list.
        /// </remarks>
        [JsiiProperty(name: "safeRule", typeJson: "{\"primitive\":\"string\"}")]
        string SafeRule
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: tid: The ID of the tenant.
        /// Note To query the ID, log on to the DMS Enterprise console and choose System Management
        /// > Instance Management or System Management > User Management. The ID of the tenant
        /// appears in the Service Specification section.
        /// </remarks>
        [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"number\"}")]
        double Tid
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataLinkName: The name of the data link for cross-database query.
        /// </remarks>
        [JsiiProperty(name: "dataLinkName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DataLinkName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
        /// service. Currently, this service is available only for the MySQL and PolarDB databases.
        /// 0: The service is disabled.
        /// 1: The native online DDL service prevails.
        /// 2: Data change without table locking provided by DMS prevails.
        /// </remarks>
        [JsiiProperty(name: "ddlOnline", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? DdlOnline
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
        /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
        /// </remarks>
        [JsiiProperty(name: "ecsInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EcsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsRegion: The region where the database instance resides.
        /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
        /// </remarks>
        [JsiiProperty(name: "ecsRegion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EcsRegion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sid: The system ID (SID) of the database instance.
        /// Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
        /// </remarks>
        [JsiiProperty(name: "sid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Sid
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: useDsql: Specifies whether to enable cross-database query for the database instance. Valid
        /// values:
        /// 0: disabled
        /// 1: enabled
        /// </remarks>
        [JsiiProperty(name: "useDsql", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? UseDsql
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC to which the database instance belongs.
        /// Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::DMS::Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dms.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: databasePassword: The logon password of the database instance.
            /// </remarks>
            [JsiiProperty(name: "databasePassword", typeJson: "{\"primitive\":\"string\"}")]
            public string DatabasePassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseUser: The logon username of the database instance.
            /// </remarks>
            [JsiiProperty(name: "databaseUser", typeJson: "{\"primitive\":\"string\"}")]
            public string DatabaseUser
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
            /// instance.
            /// Note To query the UID, log on to the DMS Enterprise console and choose System Management
            /// > User Management.
            /// </remarks>
            [JsiiProperty(name: "dbaUid", typeJson: "{\"primitive\":\"number\"}")]
            public double DbaUid
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: envType: The type of the environment to which the database instance belongs. Valid values:
            /// product: the production environment.
            /// dev: the test environment.
            /// </remarks>
            [JsiiProperty(name: "envType", typeJson: "{\"primitive\":\"string\"}")]
            public string EnvType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "exportTimeout", typeJson: "{\"primitive\":\"number\"}")]
            public double ExportTimeout
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: host: The endpoint of the database instance.
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"primitive\":\"string\"}")]
            public string Host
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceAlias: The alias of the database instance. The alias helps you quickly find the required
            /// instance.
            /// </remarks>
            [JsiiProperty(name: "instanceAlias", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceAlias
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceSource: The source of the database instance. Valid values:
            /// PUBLIC_OWN: an on-premises database built on the public network.
            /// RDS: an ApsaraDB for RDS (RDS) instance.
            /// ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
            /// VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
            /// Cloud (VPC).
            /// </remarks>
            [JsiiProperty(name: "instanceSource", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceSource
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkType: The network type of the database instance. Valid values:
            /// CLASSIC
            /// VPC
            /// </remarks>
            [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}")]
            public string NetworkType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The connection port of the database instance.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
            public double Port
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "queryTimeout", typeJson: "{\"primitive\":\"number\"}")]
            public double QueryTimeout
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: safeRule: The security rule of the database instance. Enter the name of the security rule for
            /// your enterprise.
            /// Note To query a specified security rule, log on to the DMS Enterprise console and choose
            /// System Management > Security Rules. The security rule appears in the security rule
            /// list.
            /// </remarks>
            [JsiiProperty(name: "safeRule", typeJson: "{\"primitive\":\"string\"}")]
            public string SafeRule
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: tid: The ID of the tenant.
            /// Note To query the ID, log on to the DMS Enterprise console and choose System Management
            /// > Instance Management or System Management > User Management. The ID of the tenant
            /// appears in the Service Specification section.
            /// </remarks>
            [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"number\"}")]
            public double Tid
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataLinkName: The name of the data link for cross-database query.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataLinkName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DataLinkName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
            /// service. Currently, this service is available only for the MySQL and PolarDB databases.
            /// 0: The service is disabled.
            /// 1: The native online DDL service prevails.
            /// 2: Data change without table locking provided by DMS prevails.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ddlOnline", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? DdlOnline
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
            /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EcsInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ecsRegion: The region where the database instance resides.
            /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsRegion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EcsRegion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sid: The system ID (SID) of the database instance.
            /// Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Sid
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: useDsql: Specifies whether to enable cross-database query for the database instance. Valid
            /// values:
            /// 0: disabled
            /// 1: enabled
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "useDsql", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? UseDsql
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC to which the database instance belongs.
            /// Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
