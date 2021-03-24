using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::DBInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBInstanceProps")]
    public interface IRosDBInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: characterSetName: The character set of the database. For more information, see Character sets.
        /// </remarks>
        [JsiiProperty(name: "characterSetName", typeJson: "{\"primitive\":\"string\"}")]
        string CharacterSetName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
        string DbClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: The name of the database to be created. The name must comply with the following rules:
        /// It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
        /// (-), and underscores (_).
        /// It must end with a letter or a digit. It can be up to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
        string DbName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the database account to be used.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPrivilege: The permissions of the database account on the database. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: dbDescription: The description of the database. Valid values:
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
        [JsiiTypeProxy(nativeType: typeof(IRosDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosDBInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: characterSetName: The character set of the database. For more information, see Character sets.
            /// </remarks>
            [JsiiProperty(name: "characterSetName", typeJson: "{\"primitive\":\"string\"}")]
            public string CharacterSetName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database is to be created.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbName: The name of the database to be created. The name must comply with the following rules:
            /// It must start with a lowercase letter and consist of lowercase letters, digits, hyphens
            /// (-), and underscores (_).
            /// It must end with a letter or a digit. It can be up to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
            public string DbName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountName: The name of the database account to be used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: accountPrivilege: The permissions of the database account on the database. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: dbDescription: The description of the database. Valid values:
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
