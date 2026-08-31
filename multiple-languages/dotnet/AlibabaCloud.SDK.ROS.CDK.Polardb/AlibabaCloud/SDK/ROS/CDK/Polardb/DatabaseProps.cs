using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `Database`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-database
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.DatabaseProps")]
    public class DatabaseProps : AlibabaCloud.SDK.ROS.CDK.Polardb.IDatabaseProps
    {
        private object _characterSetName;

        /// <summary>Property characterSetName: The character set of the database.</summary>
        /// <remarks>
        /// For more information, see Character sets.
        /// </remarks>
        [JsiiProperty(name: "characterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CharacterSetName
        {
            get => _characterSetName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _characterSetName = value;
            }
        }

        private object _dbClusterId;

        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterId
        {
            get => _dbClusterId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbClusterId = value;
            }
        }

        private object _dbName;

        /// <summary>Property dbName: The name of the database.</summary>
        /// <remarks>
        /// The name must meet the following requirements:
        ///
        /// <list type="bullet">
        /// <description>The name can contain lowercase letters, digits, hyphens (-), and underscores
        /// (_).</description>
        /// <description>The name must start with a lowercase letter and end with a lowercase letter
        /// or a digit. The name must be 1 to 64 characters in length.</description>
        /// </list>
        ///
        ///     Do not use reserved words as database names, such as <c>test</c> or <c>mysql</c>.
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbName
        {
            get => _dbName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbName = value;
            }
        }

        private object? _accountName;

        /// <summary>Property accountName: The name of the account that is authorized to access the database.</summary>
        /// <remarks>
        /// You can call
        /// the <a href="">DescribeAccounts</a> operation to query account information.
        ///
        ///     <list type="bullet">
        ///     <description>You can specify only a standard account. By default, privileged accounts have
        ///     all permissions on all databases. You do not need to grant privileged accounts
        ///     the permissions to access the database.</description>
        ///     <description>This parameter is required for PolarDB for PostgreSQL (Compatible with Oracle)
        ///     clusters or PolarDB for PostgreSQL clusters. This parameter is optional for
        ///     PolarDB for MySQL clusters.</description>
        ///     </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountName
        {
            get => _accountName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _accountName = value;
            }
        }

        private object? _accountPrivilege;

        /// <summary>Property accountPrivilege: The permissions that are granted to the account.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ReadWrite: read and write permissions.</description>
        /// <description>ReadOnly: read-only permissions.</description>
        /// <description>DMLOnly: permissions only to execute DML statements on the database.</description>
        /// <description>DDLOnly: permissions only to execute DDL statements on the database.</description>
        /// <description>ReadIndex: read-only and index permissions.
        /// The default value is ReadWrite.</description>
        /// </list>
        ///
        ///
        ///
        /// <list type="bullet">
        /// <description>This parameter is valid only when the AccountName parameter is specified.</description>
        /// <description>For a PolarDB for PostgreSQL (Compatible with Oracle) or PolarDB for
        /// PostgreSQL cluster, this parameter is optional. If AccountName is specified, it
        /// is the account of the database owner.</description>
        /// <description>For a PolarDB for MySQL cluster, this parameter is optional.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountPrivilege
        {
            get => _accountPrivilege;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _accountPrivilege = value;
            }
        }

        private object? _collate;

        /// <summary>Property collate: A locale setting that specifies the collation for newly created databases.</summary>
        /// <remarks>
        /// The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        /// when the cluster is PolarDB MySQL, this parameter is not supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "collate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Collate
        {
            get => _collate;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _collate = value;
            }
        }

        private object? _ctype;

        /// <summary>Property ctype: A locale setting that specifies the character classification of the database.</summary>
        /// <remarks>
        /// The locale must be compatible with the character set set by the CharacterSetName parameter.
        /// It is consistent with the incoming information of Collate.
        /// When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        /// when the cluster is PolarDB MySQL, this parameter is optional.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ctype", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Ctype
        {
            get => _ctype;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ctype = value;
            }
        }

        private object? _dbDescription;

        /// <summary>Property dbDescription: The description of the database.</summary>
        /// <remarks>
        /// The description must meet the following
        /// requirements:
        ///
        /// <list type="bullet">
        /// <description>It cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.</description>
        /// <description>It must be 2 to 256 characters in length.</description>
        /// </list>
        ///
        ///     This parameter is required for a PolarDB for Oracle or PolarDB for PostgreSQL
        ///     cluster. This parameter is optional for a PolarDB for MySQL cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DbDescription
        {
            get => _dbDescription;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbDescription = value;
            }
        }
    }
}
