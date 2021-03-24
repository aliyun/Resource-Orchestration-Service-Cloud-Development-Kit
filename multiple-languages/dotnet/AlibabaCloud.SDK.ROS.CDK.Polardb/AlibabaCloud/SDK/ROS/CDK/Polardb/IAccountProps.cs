using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `ALIYUN::POLARDB::Account`.</summary>
    [JsiiInterface(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.AccountProps")]
    public interface IAccountProps
    {
        /// <summary>Property accountName: The name of the database account.</summary>
        /// <remarks>
        /// The name must comply with the following rules:
        /// 
        /// <list type="bullet">
        /// <description>It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).</description>
        /// <description>It can be up to 16 characters in length.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
        string AccountName
        {
            get;
        }

        /// <summary>Property accountPassword: The password of the database account.</summary>
        /// <remarks>
        /// The password must comply with the following rules:
        /// 
        /// <list type="bullet">
        /// <description>It must consist of uppercase letters, lowercase letters, digits, and special characters.</description>
        /// <description>Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).</description>
        /// <description>It must be 8 to 32 characters in length.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}")]
        string AccountPassword
        {
            get;
        }

        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
        string DbClusterId
        {
            get;
        }

        /// <summary>Property accountDescription: The description of the database account.</summary>
        /// <remarks>
        /// The description must comply with the following rules:
        /// 
        /// <list type="bullet">
        /// <description>It cannot start with http:// or https://.</description>
        /// <description>It must be 2 to 256 characters in length.</description>
        /// </list>
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

        /// <summary>Property accountPrivilege: The permissions of the database account on the database.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property accountType: The type of the database account.</summary>
        /// <remarks>
        /// Valid values:
        /// 
        /// <list type="bullet">
        /// <description>Normal: standard account</description>
        /// <description>Super: privileged account
        /// Default value: Super.
        /// Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
        /// You can create only one privileged account for an ApsaraDB for POLARDB cluster.</description>
        /// </list>
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

        /// <summary>Property dbName: The name of the database whose access permissions are to be granted to the database account.</summary>
        /// <remarks>
        /// Separate multiple databases with a comma (,).
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
        [JsiiTypeProxy(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.AccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountName: The name of the database account.</summary>
            /// <remarks>
            /// The name must comply with the following rules:
            /// 
            /// <list type="bullet">
            /// <description>It must start with a lowercase letter and consist of lowercase letters, digits, and underscores (_).</description>
            /// <description>It can be up to 16 characters in length.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accountPassword: The password of the database account.</summary>
            /// <remarks>
            /// The password must comply with the following rules:
            /// 
            /// <list type="bullet">
            /// <description>It must consist of uppercase letters, lowercase letters, digits, and special characters.</description>
            /// <description>Special characters include exclamation points (!), number signs (#), dollar signs ($), percent signs (%), carets (^), ampersands (&amp;), asterisks (*), parentheses (()), underscores (_), plus signs (+), hyphens (-), and equal signs (=).</description>
            /// <description>It must be 8 to 32 characters in length.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}")]
            public string AccountPassword
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}")]
            public string DbClusterId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property accountDescription: The description of the database account.</summary>
            /// <remarks>
            /// The description must comply with the following rules:
            /// 
            /// <list type="bullet">
            /// <description>It cannot start with http:// or https://.</description>
            /// <description>It must be 2 to 256 characters in length.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountDescription
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
            /// Separate multiple permissions with a comma (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountPrivilege
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property accountType: The type of the database account.</summary>
            /// <remarks>
            /// Valid values:
            /// 
            /// <list type="bullet">
            /// <description>Normal: standard account</description>
            /// <description>Super: privileged account
            /// Default value: Super.
            /// Currently, POLARDB for PostgreSQL and POLARDB compatible with Oracle do not support standard accounts.
            /// You can create only one privileged account for an ApsaraDB for POLARDB cluster.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbName: The name of the database whose access permissions are to be granted to the database account.</summary>
            /// <remarks>
            /// Separate multiple databases with a comma (,).
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
