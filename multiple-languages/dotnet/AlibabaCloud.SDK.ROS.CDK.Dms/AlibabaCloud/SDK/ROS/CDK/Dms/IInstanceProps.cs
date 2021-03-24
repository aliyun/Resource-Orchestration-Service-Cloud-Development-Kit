using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    /// <summary>Properties for defining a `ALIYUN::DMS::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property databasePassword: The logon password of the database instance.</summary>
        [JsiiProperty(name: "databasePassword", typeJson: "{\"primitive\":\"string\"}")]
        string DatabasePassword
        {
            get;
        }

        /// <summary>Property databaseUser: The logon username of the database instance.</summary>
        [JsiiProperty(name: "databaseUser", typeJson: "{\"primitive\":\"string\"}")]
        string DatabaseUser
        {
            get;
        }

        /// <summary>Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance.</summary>
        /// <remarks>
        /// Note To query the UID, log on to the DMS Enterprise console and choose System Management
        /// 
        ///     User Management.
        /// </remarks>
        [JsiiProperty(name: "dbaUid", typeJson: "{\"primitive\":\"number\"}")]
        double DbaUid
        {
            get;
        }

        /// <summary>Property envType: The type of the environment to which the database instance belongs.</summary>
        /// <remarks>
        /// Valid values:
        /// product: the production environment.
        /// dev: the test environment.
        /// </remarks>
        [JsiiProperty(name: "envType", typeJson: "{\"primitive\":\"string\"}")]
        string EnvType
        {
            get;
        }

        /// <summary>Property exportTimeout: The timeout period for exporting the database instance.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "exportTimeout", typeJson: "{\"primitive\":\"number\"}")]
        double ExportTimeout
        {
            get;
        }

        /// <summary>Property host: The endpoint of the database instance.</summary>
        [JsiiProperty(name: "host", typeJson: "{\"primitive\":\"string\"}")]
        string Host
        {
            get;
        }

        /// <summary>Property instanceAlias: The alias of the database instance.</summary>
        /// <remarks>
        /// The alias helps you quickly find the required
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "instanceAlias", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceAlias
        {
            get;
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
        [JsiiProperty(name: "instanceSource", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceSource
        {
            get;
        }

        /// <summary>Property instanceType: The type of the database instance.</summary>
        /// <remarks>
        /// Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceType
        {
            get;
        }

        /// <summary>Property networkType: The network type of the database instance.</summary>
        /// <remarks>
        /// Valid values:
        /// CLASSIC
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}")]
        string NetworkType
        {
            get;
        }

        /// <summary>Property port: The connection port of the database instance.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
        double Port
        {
            get;
        }

        /// <summary>Property queryTimeout: The timeout period for querying the database instance.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "queryTimeout", typeJson: "{\"primitive\":\"number\"}")]
        double QueryTimeout
        {
            get;
        }

        /// <summary>Property safeRule: The security rule of the database instance.</summary>
        /// <remarks>
        /// Enter the name of the security rule for
        /// your enterprise.
        /// Note To query a specified security rule, log on to the DMS Enterprise console and choose
        /// System Management &gt; Security Rules. The security rule appears in the security rule
        /// list.
        /// </remarks>
        [JsiiProperty(name: "safeRule", typeJson: "{\"primitive\":\"string\"}")]
        string SafeRule
        {
            get;
        }

        /// <summary>Property tid: The ID of the tenant.</summary>
        /// <remarks>
        /// Note To query the ID, log on to the DMS Enterprise console and choose System Management
        /// 
        ///     Instance Management or System Management &gt; User Management. The ID of the tenant
        ///     appears in the Service Specification section.
        /// </remarks>
        [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"number\"}")]
        double Tid
        {
            get;
        }

        /// <summary>Property dataLinkName: The name of the data link for cross-database query.</summary>
        [JsiiProperty(name: "dataLinkName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DataLinkName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.</summary>
        /// <remarks>
        /// Currently, this service is available only for the MySQL and PolarDB databases.
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

        /// <summary>Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.</summary>
        /// <remarks>
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

        /// <summary>Property ecsRegion: The region where the database instance resides.</summary>
        /// <remarks>
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

        /// <summary>Property sid: The system ID (SID) of the database instance.</summary>
        /// <remarks>
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

        /// <summary>Property useDsql: Specifies whether to enable cross-database query for the database instance.</summary>
        /// <remarks>
        /// Valid
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

        /// <summary>Property vpcId: The ID of the VPC to which the database instance belongs.</summary>
        /// <remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dms.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property databasePassword: The logon password of the database instance.</summary>
            [JsiiProperty(name: "databasePassword", typeJson: "{\"primitive\":\"string\"}")]
            public string DatabasePassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property databaseUser: The logon username of the database instance.</summary>
            [JsiiProperty(name: "databaseUser", typeJson: "{\"primitive\":\"string\"}")]
            public string DatabaseUser
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance.</summary>
            /// <remarks>
            /// Note To query the UID, log on to the DMS Enterprise console and choose System Management
            /// 
            ///     User Management.
            /// </remarks>
            [JsiiProperty(name: "dbaUid", typeJson: "{\"primitive\":\"number\"}")]
            public double DbaUid
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property envType: The type of the environment to which the database instance belongs.</summary>
            /// <remarks>
            /// Valid values:
            /// product: the production environment.
            /// dev: the test environment.
            /// </remarks>
            [JsiiProperty(name: "envType", typeJson: "{\"primitive\":\"string\"}")]
            public string EnvType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property exportTimeout: The timeout period for exporting the database instance.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "exportTimeout", typeJson: "{\"primitive\":\"number\"}")]
            public double ExportTimeout
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property host: The endpoint of the database instance.</summary>
            [JsiiProperty(name: "host", typeJson: "{\"primitive\":\"string\"}")]
            public string Host
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceAlias: The alias of the database instance.</summary>
            /// <remarks>
            /// The alias helps you quickly find the required
            /// instance.
            /// </remarks>
            [JsiiProperty(name: "instanceAlias", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceAlias
            {
                get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "instanceSource", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceSource
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceType: The type of the database instance.</summary>
            /// <remarks>
            /// Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property networkType: The network type of the database instance.</summary>
            /// <remarks>
            /// Valid values:
            /// CLASSIC
            /// VPC
            /// </remarks>
            [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}")]
            public string NetworkType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property port: The connection port of the database instance.</summary>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}")]
            public double Port
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property queryTimeout: The timeout period for querying the database instance.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "queryTimeout", typeJson: "{\"primitive\":\"number\"}")]
            public double QueryTimeout
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property safeRule: The security rule of the database instance.</summary>
            /// <remarks>
            /// Enter the name of the security rule for
            /// your enterprise.
            /// Note To query a specified security rule, log on to the DMS Enterprise console and choose
            /// System Management &gt; Security Rules. The security rule appears in the security rule
            /// list.
            /// </remarks>
            [JsiiProperty(name: "safeRule", typeJson: "{\"primitive\":\"string\"}")]
            public string SafeRule
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property tid: The ID of the tenant.</summary>
            /// <remarks>
            /// Note To query the ID, log on to the DMS Enterprise console and choose System Management
            /// 
            ///     Instance Management or System Management &gt; User Management. The ID of the tenant
            ///     appears in the Service Specification section.
            /// </remarks>
            [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"number\"}")]
            public double Tid
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property dataLinkName: The name of the data link for cross-database query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataLinkName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DataLinkName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL) service.</summary>
            /// <remarks>
            /// Currently, this service is available only for the MySQL and PolarDB databases.
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

            /// <summary>Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.</summary>
            /// <remarks>
            /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EcsInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ecsRegion: The region where the database instance resides.</summary>
            /// <remarks>
            /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsRegion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EcsRegion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sid: The system ID (SID) of the database instance.</summary>
            /// <remarks>
            /// Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Sid
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property useDsql: Specifies whether to enable cross-database query for the database instance.</summary>
            /// <remarks>
            /// Valid
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

            /// <summary>Property vpcId: The ID of the VPC to which the database instance belongs.</summary>
            /// <remarks>
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
