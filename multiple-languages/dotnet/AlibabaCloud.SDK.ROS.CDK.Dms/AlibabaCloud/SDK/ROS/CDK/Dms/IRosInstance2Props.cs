using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    /// <summary>Properties for defining a `RosInstance2`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInstance2Props), fullyQualifiedName: "@alicloud/ros-cdk-dms.RosInstance2Props")]
    public interface IRosInstance2Props
    {
        /// <remarks>
        /// <strong>Property</strong>: databasePassword: The logon password of the database instance.
        /// </remarks>
        [JsiiProperty(name: "databasePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatabasePassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: databaseUser: The logon username of the database instance.
        /// </remarks>
        [JsiiProperty(name: "databaseUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatabaseUser
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbaId: The user ID of the instance DBA role. You can call the ListUsers or GetInstance operation to obtain the value of this parameter.
        /// </remarks>
        [JsiiProperty(name: "dbaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbaId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSellTrust: Whether the instance needs to enable secure hosting.
        /// - Y: Enable secure hosting mode.
        /// - NULL or other: Do not enable secure hosting mode.
        /// </remarks>
        [JsiiProperty(name: "enableSellTrust", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnableSellTrust
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: envType: The type of the environment to which the database instance belongs. Valid values:
        /// product: the production environment.
        /// dev: the test environment.
        /// </remarks>
        [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EnvType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "exportTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExportTimeout
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: host: The endpoint of the database instance.
        /// </remarks>
        [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Host
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceAlias: The alias of the database instance. The alias helps you quickly find the required
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "instanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceAlias
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
        [JsiiProperty(name: "instanceSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceSource
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkType: The network type of the database instance. Valid values:
        /// CLASSIC
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The connection port of the database instance.
        /// </remarks>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Port
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "queryTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QueryTimeout
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
        [JsiiProperty(name: "safeRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SafeRule
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dataLinkName: The name of the data link for cross-database query.
        /// </remarks>
        [JsiiProperty(name: "dataLinkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataLinkName
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
        [JsiiProperty(name: "ddlOnline", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DdlOnline
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
        [JsiiProperty(name: "ecsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsInstanceId
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
        [JsiiProperty(name: "ecsRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsRegion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSellCommon: Whether the instance needs to enable the security collaboration function.
        /// - Y: Enable.
        /// - NULL or other: Not enable.
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

        /// <remarks>
        /// <strong>Property</strong>: enableSellSitd: Y: enables the sensitive data protection feature
        /// NULL or other: disables the sensitive data protection feature
        /// </remarks>
        [JsiiProperty(name: "enableSellSitd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSellSitd
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSellStable: Whether the instance needs to enable the stable change function.
        /// - Y: Enable.
        /// - NULL or other: Do not enable.
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

        /// <remarks>
        /// <strong>Property</strong>: sid: The system ID (SID) of the database instance.
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

        /// <remarks>
        /// <strong>Property</strong>: skipTest: Whether the instance ignores the test connectivity. The values are as follows:
        /// - true: ignore
        /// - false: do not ignore
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

        /// <remarks>
        /// <strong>Property</strong>: templateId: The ID of the classification template. You can call the ListClassificationTemplates operation to query the template ID.
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

        /// <remarks>
        /// <strong>Property</strong>: templateType: The type of the classification template. You can call the ListClassificationTemplates operation to query the template type.
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

        /// <remarks>
        /// <strong>Property</strong>: tid: The ID of the tenant.
        /// Note To query the ID, log on to the DMS Enterprise console and choose System Management
        /// > Instance Management or System Management > User Management. The ID of the tenant
        /// appears in the Service Specification section.
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

        /// <remarks>
        /// <strong>Property</strong>: useDsql: Specifies whether to enable cross-database query for the database instance. Valid
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

        /// <remarks>
        /// <strong>Property</strong>: useSsl: Select whether to enable SSL connection. When enabled, DMS will connect to the database via SSL. The premise of using this parameter is that the database has enabled SSL connection. Currently, the following options are supported:
        /// - 0: Default value (DMS and database service automatically negotiate whether to enable it) The system will automatically identify whether the target database has enabled SSL connection. If the database has enabled SSL connection, DMS will connect to the database via SSL; if the database has not enabled SSL connection, it will connect in a normal way.
        /// - 1: Enable SSL connection. If the database has not enabled SSL connection, this parameter is invalid.
        /// - -1: Disable SSL connection.
        /// Note:
        /// - This configuration item only appears when the database is MySQL or Redis.
        /// - SSL (Secure Sockets Layer) can encrypt network connections at the transport layer to improve the security and integrity of communication data, but it will increase the network connection response time.
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

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC to which the database instance belongs.
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

        /// <summary>Properties for defining a `RosInstance2`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInstance2Props), fullyQualifiedName: "@alicloud/ros-cdk-dms.RosInstance2Props")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dms.IRosInstance2Props
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: databasePassword: The logon password of the database instance.
            /// </remarks>
            [JsiiProperty(name: "databasePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatabasePassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseUser: The logon username of the database instance.
            /// </remarks>
            [JsiiProperty(name: "databaseUser", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatabaseUser
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbaId: The user ID of the instance DBA role. You can call the ListUsers or GetInstance operation to obtain the value of this parameter.
            /// </remarks>
            [JsiiProperty(name: "dbaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbaId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSellTrust: Whether the instance needs to enable secure hosting.
            /// - Y: Enable secure hosting mode.
            /// - NULL or other: Do not enable secure hosting mode.
            /// </remarks>
            [JsiiProperty(name: "enableSellTrust", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnableSellTrust
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: envType: The type of the environment to which the database instance belongs. Valid values:
            /// product: the production environment.
            /// dev: the test environment.
            /// </remarks>
            [JsiiProperty(name: "envType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EnvType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "exportTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExportTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: host: The endpoint of the database instance.
            /// </remarks>
            [JsiiProperty(name: "host", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Host
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceAlias: The alias of the database instance. The alias helps you quickly find the required
            /// instance.
            /// </remarks>
            [JsiiProperty(name: "instanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceAlias
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceSource: The source of the database instance. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkType: The network type of the database instance. Valid values:
            /// CLASSIC
            /// VPC
            /// </remarks>
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The connection port of the database instance.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Port
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: queryTimeout: The timeout period for querying the database instance. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "queryTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QueryTimeout
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: safeRule: The security rule of the database instance. Enter the name of the security rule for
            /// your enterprise.
            /// Note To query a specified security rule, log on to the DMS Enterprise console and choose
            /// System Management > Security Rules. The security rule appears in the security rule
            /// list.
            /// </remarks>
            [JsiiProperty(name: "safeRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SafeRule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dataLinkName: The name of the data link for cross-database query.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataLinkName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataLinkName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
            /// service. Currently, this service is available only for the MySQL and PolarDB databases.
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

            /// <remarks>
            /// <strong>Property</strong>: ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
            /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ecsRegion: The region where the database instance resides.
            /// Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSellCommon: Whether the instance needs to enable the security collaboration function.
            /// - Y: Enable.
            /// - NULL or other: Not enable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSellCommon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSellCommon
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSellSitd: Y: enables the sensitive data protection feature
            /// NULL or other: disables the sensitive data protection feature
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSellSitd", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSellSitd
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSellStable: Whether the instance needs to enable the stable change function.
            /// - Y: Enable.
            /// - NULL or other: Do not enable.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSellStable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSellStable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sid: The system ID (SID) of the database instance.
            /// Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: skipTest: Whether the instance ignores the test connectivity. The values are as follows:
            /// - true: ignore
            /// - false: do not ignore
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "skipTest", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SkipTest
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: templateId: The ID of the classification template. You can call the ListClassificationTemplates operation to query the template ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: templateType: The type of the classification template. You can call the ListClassificationTemplates operation to query the template type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TemplateType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tid: The ID of the tenant.
            /// Note To query the ID, log on to the DMS Enterprise console and choose System Management
            /// > Instance Management or System Management > User Management. The ID of the tenant
            /// appears in the Service Specification section.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Tid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: useDsql: Specifies whether to enable cross-database query for the database instance. Valid
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

            /// <remarks>
            /// <strong>Property</strong>: useSsl: Select whether to enable SSL connection. When enabled, DMS will connect to the database via SSL. The premise of using this parameter is that the database has enabled SSL connection. Currently, the following options are supported:
            /// - 0: Default value (DMS and database service automatically negotiate whether to enable it) The system will automatically identify whether the target database has enabled SSL connection. If the database has enabled SSL connection, DMS will connect to the database via SSL; if the database has not enabled SSL connection, it will connect in a normal way.
            /// - 1: Enable SSL connection. If the database has not enabled SSL connection, this parameter is invalid.
            /// - -1: Disable SSL connection.
            /// Note:
            /// - This configuration item only appears when the database is MySQL or Redis.
            /// - SSL (Secure Sockets Layer) can encrypt network connections at the transport layer to improve the security and integrity of communication data, but it will increase the network connection response time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "useSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UseSsl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC to which the database instance belongs.
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
