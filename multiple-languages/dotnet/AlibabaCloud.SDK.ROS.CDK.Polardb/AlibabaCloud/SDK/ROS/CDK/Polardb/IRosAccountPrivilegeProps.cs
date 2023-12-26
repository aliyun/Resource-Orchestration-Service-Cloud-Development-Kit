using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `RosAccountPrivilege`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccountPrivilegeProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosAccountPrivilegeProps")]
    public interface IRosAccountPrivilegeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the database account to be granted access permissions.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPrivilege: The permissions of the database account on the database. Valid values:
        /// - ReadWrite: has read and write permissions on the database.
        /// - ReadOnly: has the read-only permission on the database.
        /// - DMLOnly: runs only data manipulation language (DML) statements.
        /// - DDLOnly: runs only data definition language (DDL) statements.
        /// The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
        /// Separate multiple permissions with a comma (,).
        /// </remarks>
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountPrivilege
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: The name of the database whose access permissions are to be granted to the database account.
        /// You can grant access permissions on one or more databases to the database account.
        /// Separate multiple databases with a comma (,).
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbName
        {
            get;
        }

        /// <summary>Properties for defining a `RosAccountPrivilege`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-accountprivilege
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccountPrivilegeProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosAccountPrivilegeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosAccountPrivilegeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accountName: The name of the database account to be granted access permissions.
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountPrivilege: The permissions of the database account on the database. Valid values:
            /// - ReadWrite: has read and write permissions on the database.
            /// - ReadOnly: has the read-only permission on the database.
            /// - DMLOnly: runs only data manipulation language (DML) statements.
            /// - DDLOnly: runs only data definition language (DDL) statements.
            /// The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
            /// Separate multiple permissions with a comma (,).
            /// </remarks>
            [JsiiProperty(name: "accountPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountPrivilege
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbName: The name of the database whose access permissions are to be granted to the database account.
            /// You can grant access permissions on one or more databases to the database account.
            /// Separate multiple databases with a comma (,).
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
