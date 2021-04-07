using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    /// <summary>Properties for defining a `ALIYUN::DMS::Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-dms.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property databasePassword: The logon password of the database instance.</summary>
        [JsiiProperty(name: "databasePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatabasePassword
        {
            get;
        }

        /// <summary>Property databaseUser: The logon username of the database instance.</summary>
        [JsiiProperty(name: "databaseUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatabaseUser
        {
            get;
        }

        /// <summary>Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database instance.</summary>
        /// <remarks>
        /// Note To query the UID, log on to the DMS Enterprise console and choose System Management
        ///
        ///     User Management.
        /// </remarks>
        [JsiiProperty(name: "dbaUid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbaUid
        {
            get;
        }

        /// <summary>Property envType: The type of the environment to which the database instance belongs.</summary>
        /// <remarks>
        /// Valid values:
        /// product: the production environment.
        /// dev: the test environment.
        /// </remarks>
        [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvType
        {
            get;
        }

        /// <summary>Property exportTimeout: The timeout period for exporting the database instance.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "exportTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExportTimeout
        {
            get;
        }

        /// <summary>Property host: The endpoint of the database instance.</summary>
        [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Host
        {
            get;
        }

        /// <summary>Property instanceAlias: The alias of the database instance.</summary>
        /// <remarks>
        /// The alias helps you quickly find the required
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "instanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceAlias
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
        [JsiiProperty(name: "instanceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceSource
        {
            get;
        }

        /// <summary>Property instanceType: The type of the database instance.</summary>
        /// <remarks>
        /// Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <summary>Property networkType: The network type of the database instance.</summary>
        /// <remarks>
        /// Valid values:
        /// CLASSIC
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkType
        {
            get;
        }

        /// <summary>Property port: The connection port of the database instance.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Port
        {
            get;
        }

        /// <summary>Property queryTimeout: The timeout period for querying the database instance.</summary>
        /// <remarks>
        /// Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "queryTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueryTimeout
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
        [JsiiProperty(name: "safeRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SafeRule
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
        [JsiiProperty(name: "tid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Tid
        {
            get;
        }

        /// <summary>Property dataLinkName: The name of the data link for cross-database query.</summary>
        [JsiiProperty(name: "dataLinkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataLinkName
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
        [JsiiProperty(name: "ddlOnline", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DdlOnline
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
        [JsiiProperty(name: "ecsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsInstanceId
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
        [JsiiProperty(name: "ecsRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsRegion
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
        [JsiiProperty(name: "sid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sid
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
        [JsiiProperty(name: "useDsql", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UseDsql
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
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
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
            [JsiiProperty(name: "databasePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatabasePassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property databaseUser: The logon username of the database instance.</summary>
            [JsiiProperty(name: "databaseUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatabaseUser
            {
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property exportTimeout: The timeout period for exporting the database instance.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "exportTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExportTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property host: The endpoint of the database instance.</summary>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Host
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceAlias: The alias of the database instance.</summary>
            /// <remarks>
            /// The alias helps you quickly find the required
            /// instance.
            /// </remarks>
            [JsiiProperty(name: "instanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceAlias
            {
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceType: The type of the database instance.</summary>
            /// <remarks>
            /// Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property port: The connection port of the database instance.</summary>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Port
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property queryTimeout: The timeout period for querying the database instance.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "queryTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueryTimeout
            {
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataLinkName: The name of the data link for cross-database query.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dataLinkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataLinkName
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.</summary>
            /// <remarks>
            /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsRegion: The region where the database instance resides.</summary>
            /// <remarks>
            /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sid: The system ID (SID) of the database instance.</summary>
            /// <remarks>
            /// Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sid
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC to which the database instance belongs.</summary>
            /// <remarks>
            /// Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
