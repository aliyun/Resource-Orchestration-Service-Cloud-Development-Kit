using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.DBInstanceProps")]
    public interface IDBInstanceProps
    {
        /// <summary>Property characterSetName: The character set of the database.</summary>
        /// <remarks>
        /// For more information, see Character sets.
        /// </remarks>
        [JsiiProperty(name: "characterSetName", typeJson: "{\"primitive\":\"string\"}")]
        string CharacterSetName
        {
            get;
        }

        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
        string DbClusterId
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
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
        string DbName
        {
            get;
        }

        /// <summary>Property accountName: The name of the database account to be used.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountName
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
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountPrivilege
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
        [JsiiProperty(name: "dbDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::POLARDB::DBInstance`.</summary>
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
            [JsiiProperty(name: "characterSetName", typeJson: "{\"primitive\":\"string\"}")]
            public string CharacterSetName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbName: The name of the database to be created.</summary>
            /// <remarks>
            /// The name must comply with the following rules:
            /// It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
            /// (-), and underscores (_).
            /// It must end with a letter or a digit. It can be up to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
            public string DbName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accountName: The name of the database account to be used.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountName
            {
                get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountPrivilege
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbDescription: The description of the database.</summary>
            /// <remarks>
            /// Valid values:
            /// It cannot start with http:// or https://.
            /// It must be 2 to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbDescription
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
