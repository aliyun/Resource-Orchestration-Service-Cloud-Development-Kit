using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    /// <summary>Properties for defining a `Instance2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstance2Props), fullyQualifiedName: "@alicloud/ros-cdk-dms.Instance2Props")]
    public interface IInstance2Props
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

        /// <summary>Property dbaId: The user ID of the instance DBA role.</summary>
        /// <remarks>
        /// You can call the ListUsers or GetInstance operation to obtain the value of this parameter.
        /// </remarks>
        [JsiiProperty(name: "dbaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbaId
        {
            get;
        }

        /// <summary>Property enableSellTrust: Whether the instance needs to enable secure hosting.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Y: Enable secure hosting mode.</description>
        /// <description>NULL or other: Do not enable secure hosting mode.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enableSellTrust", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnableSellTrust
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

        /// <summary>Property enableSellCommon: Whether the instance needs to enable the security collaboration function.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Y: Enable.</description>
        /// <description>NULL or other: Not enable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enableSellCommon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSellCommon
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableSellSitd: Y: enables the sensitive data protection feature NULL or other: disables the sensitive data protection feature.</summary>
        [JsiiProperty(name: "enableSellSitd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSellSitd
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableSellStable: Whether the instance needs to enable the stable change function.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Y: Enable.</description>
        /// <description>NULL or other: Do not enable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "enableSellStable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSellStable
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

        /// <summary>Property skipTest: Whether the instance ignores the test connectivity.</summary>
        /// <remarks>
        /// The values are as follows:
        ///
        /// <list type="bullet">
        /// <description>true: ignore</description>
        /// <description>false: do not ignore</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "skipTest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SkipTest
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateId: The ID of the classification template.</summary>
        /// <remarks>
        /// You can call the ListClassificationTemplates operation to query the template ID.
        /// </remarks>
        [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property templateType: The type of the classification template.</summary>
        /// <remarks>
        /// You can call the ListClassificationTemplates operation to query the template type.
        /// </remarks>
        [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tid: The ID of the tenant.</summary>
        /// <remarks>
        /// Note To query the ID, log on to the DMS Enterprise console and choose System Management
        ///
        ///     Instance Management or System Management &gt; User Management. The ID of the tenant
        ///     appears in the Service Specification section.
        /// </remarks>
        [JsiiProperty(name: "tid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tid
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

        /// <summary>Property useSsl: Select whether to enable SSL connection.</summary>
        /// <remarks>
        /// When enabled, DMS will connect to the database via SSL. The premise of using this parameter is that the database has enabled SSL connection. Currently, the following options are supported:
        ///
        /// <list type="bullet">
        /// <description>0: Default value (DMS and database service automatically negotiate whether to enable it) The system will automatically identify whether the target database has enabled SSL connection. If the database has enabled SSL connection, DMS will connect to the database via SSL; if the database has not enabled SSL connection, it will connect in a normal way.</description>
        /// <description>1: Enable SSL connection. If the database has not enabled SSL connection, this parameter is invalid.</description>
        /// <description>-1: Disable SSL connection.
        /// Note:</description>
        /// <description>This configuration item only appears when the database is MySQL or Redis.</description>
        /// <description>SSL (Secure Sockets Layer) can encrypt network connections at the transport layer to improve the security and integrity of communication data, but it will increase the network connection response time.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "useSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UseSsl
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

        /// <summary>Properties for defining a `Instance2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstance2Props), fullyQualifiedName: "@alicloud/ros-cdk-dms.Instance2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dms.IInstance2Props
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

            /// <summary>Property dbaId: The user ID of the instance DBA role.</summary>
            /// <remarks>
            /// You can call the ListUsers or GetInstance operation to obtain the value of this parameter.
            /// </remarks>
            [JsiiProperty(name: "dbaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbaId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enableSellTrust: Whether the instance needs to enable secure hosting.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Y: Enable secure hosting mode.</description>
            /// <description>NULL or other: Do not enable secure hosting mode.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "enableSellTrust", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnableSellTrust
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

            /// <summary>Property enableSellCommon: Whether the instance needs to enable the security collaboration function.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Y: Enable.</description>
            /// <description>NULL or other: Not enable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSellCommon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSellCommon
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableSellSitd: Y: enables the sensitive data protection feature NULL or other: disables the sensitive data protection feature.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableSellSitd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSellSitd
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableSellStable: Whether the instance needs to enable the stable change function.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Y: Enable.</description>
            /// <description>NULL or other: Do not enable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSellStable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSellStable
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

            /// <summary>Property skipTest: Whether the instance ignores the test connectivity.</summary>
            /// <remarks>
            /// The values are as follows:
            ///
            /// <list type="bullet">
            /// <description>true: ignore</description>
            /// <description>false: do not ignore</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "skipTest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SkipTest
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateId: The ID of the classification template.</summary>
            /// <remarks>
            /// You can call the ListClassificationTemplates operation to query the template ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateType: The type of the classification template.</summary>
            /// <remarks>
            /// You can call the ListClassificationTemplates operation to query the template type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tid: The ID of the tenant.</summary>
            /// <remarks>
            /// Note To query the ID, log on to the DMS Enterprise console and choose System Management
            ///
            ///     Instance Management or System Management &gt; User Management. The ID of the tenant
            ///     appears in the Service Specification section.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tid
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

            /// <summary>Property useSsl: Select whether to enable SSL connection.</summary>
            /// <remarks>
            /// When enabled, DMS will connect to the database via SSL. The premise of using this parameter is that the database has enabled SSL connection. Currently, the following options are supported:
            ///
            /// <list type="bullet">
            /// <description>0: Default value (DMS and database service automatically negotiate whether to enable it) The system will automatically identify whether the target database has enabled SSL connection. If the database has enabled SSL connection, DMS will connect to the database via SSL; if the database has not enabled SSL connection, it will connect in a normal way.</description>
            /// <description>1: Enable SSL connection. If the database has not enabled SSL connection, this parameter is invalid.</description>
            /// <description>-1: Disable SSL connection.
            /// Note:</description>
            /// <description>This configuration item only appears when the database is MySQL or Redis.</description>
            /// <description>SSL (Secure Sockets Layer) can encrypt network connections at the transport layer to improve the security and integrity of communication data, but it will increase the network connection response time.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "useSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UseSsl
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
