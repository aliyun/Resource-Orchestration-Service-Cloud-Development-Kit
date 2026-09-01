using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `Account`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.AccountProps")]
    public interface IAccountProps
    {
        /// <summary>Property accountName: The name of the database account.</summary>
        /// <remarks>
        /// The name must meet the following requirements:
        ///
        /// <list type="bullet">
        /// <description>It must start with a lowercase letter and end with a letter or a digit.</description>
        /// <description>It can contain lowercase letters, digits, and underscores (_).</description>
        /// <description>It must be 1 to 16 characters in length.</description>
        /// <description>It cannot be a reserved keyword, such as root or admin.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountName
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
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountPassword
        {
            get;
        }

        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
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
        [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property accountPrivilege: The privilege level to grant on the specified databases.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ReadWrite: read and write permissions</description>
        /// <description>ReadOnly: read-only permissions</description>
        /// <description>DMLOnly: DML permissions only</description>
        /// <description>DDLOnly: DDL permissions only</description>
        /// <description>ReadIndex: read-only and index permissions</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>This parameter takes effect only when you specify the <c>DBName</c> parameter.</description>
        ///     <description>If you specify multiple databases in <c>DBName</c>, you must specify a
        ///     corresponding permission for each in <c>AccountPrivilege</c>, separated by commas. The
        ///     <c>AccountPrivilege</c> string cannot exceed 900 characters. For example, to grant
        ///     read and write permissions to database DB1 and read-only permissions to database
        ///     DB2, set <c>DBName</c> to <c>DB1,DB2</c> and set <c>AccountPrivilege</c> to
        ///     <c>ReadWrite,ReadOnly</c>.</description>
        ///     <description>This parameter applies only to standard accounts on PolarDB for MySQL
        ///     clusters.</description>
        ///     </list>
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
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbName: The name of the database that the account can access.</summary>
        /// <remarks>
        /// To specify multiple
        /// databases, separate the database names with a comma (,).
        ///
        ///     This parameter applies only to standard accounts on PolarDB for MySQL clusters.
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>0 (default)): Not authorized.</description>
        /// <description>1: Authorization.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "privForAllDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivForAllDb
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Account`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-account
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.AccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountName: The name of the database account.</summary>
            /// <remarks>
            /// The name must meet the following requirements:
            ///
            /// <list type="bullet">
            /// <description>It must start with a lowercase letter and end with a letter or a digit.</description>
            /// <description>It can contain lowercase letters, digits, and underscores (_).</description>
            /// <description>It must be 1 to 16 characters in length.</description>
            /// <description>It cannot be a reserved keyword, such as root or admin.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountName
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster for which a database account is to be created.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
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
            [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property accountPrivilege: The privilege level to grant on the specified databases.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>ReadWrite: read and write permissions</description>
            /// <description>ReadOnly: read-only permissions</description>
            /// <description>DMLOnly: DML permissions only</description>
            /// <description>DDLOnly: DDL permissions only</description>
            /// <description>ReadIndex: read-only and index permissions</description>
            /// </list>
            ///
            ///     <list type="bullet">
            ///     <description>This parameter takes effect only when you specify the <c>DBName</c> parameter.</description>
            ///     <description>If you specify multiple databases in <c>DBName</c>, you must specify a
            ///     corresponding permission for each in <c>AccountPrivilege</c>, separated by commas. The
            ///     <c>AccountPrivilege</c> string cannot exceed 900 characters. For example, to grant
            ///     read and write permissions to database DB1 and read-only permissions to database
            ///     DB2, set <c>DBName</c> to <c>DB1,DB2</c> and set <c>AccountPrivilege</c> to
            ///     <c>ReadWrite,ReadOnly</c>.</description>
            ///     <description>This parameter applies only to standard accounts on PolarDB for MySQL
            ///     clusters.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountPrivilege
            {
                get => GetInstanceProperty<object?>();
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
            [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbName: The name of the database that the account can access.</summary>
            /// <remarks>
            /// To specify multiple
            /// databases, separate the database names with a comma (,).
            ///
            ///     This parameter applies only to standard accounts on PolarDB for MySQL clusters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privForAllDb: Whether to grant permissions to all libraries in the current cluster and any libraries that will be added in the future.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>0 (default)): Not authorized.</description>
            /// <description>1: Authorization.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privForAllDb", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivForAllDb
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
