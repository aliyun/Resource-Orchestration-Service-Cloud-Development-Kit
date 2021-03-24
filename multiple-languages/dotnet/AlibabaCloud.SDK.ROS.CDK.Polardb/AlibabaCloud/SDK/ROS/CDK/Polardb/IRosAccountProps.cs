using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::Account`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosAccountProps")]
    public interface IRosAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the database account. The name must comply with the following rules:
        /// - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
        /// - It can be up to 16 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
        string AccountName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPassword: The password of the database account. The password must comply with the following rules:
        /// - It must consist of uppercase letters, lowercase letters, digits, and special characters.
        /// - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
        /// - It must be 8 to 32 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}")]
        string AccountPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
        string DbClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountDescription: The description of the database account. The description must comply with the following rules:
        /// - It cannot start with http:// or https://.
        /// - It must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountDescription
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
        /// Separate multiple permissions with a comma (,).
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
        /// <strong>Property</strong>: accountType: The type of the database account. Valid values:
        /// - Normal: standard account
        /// - Super: privileged account
        /// Default value: Super.
        /// Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
        /// You can create only one privileged account for an ApsaraDB for POLARDB cluster.
        /// </remarks>
        [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::POLARDB::Account`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountName: The name of the database account. The name must comply with the following rules:
            /// - It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).
            /// - It can be up to 16 characters in length.
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountPassword: The password of the database account. The password must comply with the following rules:
            /// - It must consist of uppercase letters, lowercase letters, digits, and special characters.
            /// - Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).
            /// - It must be 8 to 32 characters in length.
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountPassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountDescription: The description of the database account. The description must comply with the following rules:
            /// - It cannot start with http:// or https://.
            /// - It must be 2 to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountDescription
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
            /// Separate multiple permissions with a comma (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountPrivilege
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: accountType: The type of the database account. Valid values:
            /// - Normal: standard account
            /// - Super: privileged account
            /// Default value: Super.
            /// Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
            /// You can create only one privileged account for an ApsaraDB for POLARDB cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbName: The name of the database whose access permissions are to be granted to the database account. Separate multiple databases with a comma (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
