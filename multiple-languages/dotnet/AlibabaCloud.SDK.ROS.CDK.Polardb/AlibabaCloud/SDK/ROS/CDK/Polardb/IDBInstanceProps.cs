using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `DBInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBInstanceProps")]
    public interface IDBInstanceProps
    {
        /// <summary>Property characterSetName: The character set of the database.</summary>
        /// <remarks>
        /// For more information, see Character sets.
        /// </remarks>
        [JsiiProperty(name: "characterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CharacterSetName
        {
            get;
        }

        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property dbName: The name of the database to be created.</summary>
        /// <remarks>
        /// The name must comply with the following rules:
        /// It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
        /// (-), and underscores (_).
        /// It must end with a letter or a digit. It can be up to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbName
        {
            get;
        }

        /// <summary>Property accountName: The name of the database account to be used.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property accountPrivilege: The permissions of the database account on the database.</summary>
        /// <remarks>
        /// Valid values:
        /// ReadWrite: has read and write permissions on the database.
        /// ReadOnly: has the read-only permission on the database.
        /// DMLOnly: runs only data manipulation language (DML) statements.
        /// DDLOnly: runs only data definition language (DDL) statements.
        /// Default value: ReadWrite.
        /// </remarks>
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountPrivilege
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property collate: A locale setting that specifies the collation for newly created databases.</summary>
        /// <remarks>
        /// The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        /// when the cluster is PolarDB MySQL, this parameter is not supported.
        /// </remarks>
        [JsiiProperty(name: "collate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Collate
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ctype: A locale setting that specifies the character classification of the database.</summary>
        /// <remarks>
        /// The locale must be compatible with the character set set by the CharacterSetName parameter.
        /// It is consistent with the incoming information of Collate.
        /// When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
        /// when the cluster is PolarDB MySQL, this parameter is optional.
        /// </remarks>
        [JsiiProperty(name: "ctype", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ctype
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbDescription: The description of the database.</summary>
        /// <remarks>
        /// Valid values:
        /// It cannot start with http:// or https://.
        /// It must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "dbDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IDBInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property characterSetName: The character set of the database.</summary>
            /// <remarks>
            /// For more information, see Character sets.
            /// </remarks>
            [JsiiProperty(name: "characterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CharacterSetName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbName: The name of the database to be created.</summary>
            /// <remarks>
            /// The name must comply with the following rules:
            /// It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
            /// (-), and underscores (_).
            /// It must end with a letter or a digit. It can be up to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountName: The name of the database account to be used.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property accountPrivilege: The permissions of the database account on the database.</summary>
            /// <remarks>
            /// Valid values:
            /// ReadWrite: has read and write permissions on the database.
            /// ReadOnly: has the read-only permission on the database.
            /// DMLOnly: runs only data manipulation language (DML) statements.
            /// DDLOnly: runs only data definition language (DDL) statements.
            /// Default value: ReadWrite.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountPrivilege
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property collate: A locale setting that specifies the collation for newly created databases.</summary>
            /// <remarks>
            /// The locale must be compatible with the character set set by the CharacterSetName parameter.When the cluster is PolarDB PostgreSQL (compatible with Oracle) or PolarDB PostgreSQL, this parameter is required;
            /// when the cluster is PolarDB MySQL, this parameter is not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "collate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Collate
            {
                get => GetInstanceProperty<object?>();
            }

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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbDescription: The description of the database.</summary>
            /// <remarks>
            /// Valid values:
            /// It cannot start with http:// or https://.
            /// It must be 2 to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
