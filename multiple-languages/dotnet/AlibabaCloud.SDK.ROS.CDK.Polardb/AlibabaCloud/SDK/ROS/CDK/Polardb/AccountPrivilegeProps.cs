using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::POLARDB::AccountPrivilege`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.AccountPrivilegeProps")]
    public class AccountPrivilegeProps : AlibabaCloud.SDK.ROS.CDK.Polardb.IAccountPrivilegeProps
    {
        /// <summary>Property accountName: The name of the database account to be granted access permissions.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountName
        {
            get;
            set;
        }

        /// <summary>Property accountPrivilege: The permissions of the database account on the database.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>ReadWrite: has read and write permissions on the database.</description>
        /// <description>ReadOnly: has the read-only permission on the database.</description>
        /// <description>DMLOnly: runs only data manipulation language (DML) statements.</description>
        /// <description>DDLOnly: runs only data definition language (DDL) statements.
        /// The number of account permissions specified by the AccountPrivilege parameter must be the same as that of database names specified by the DBName parameter. Each account permission must correspond to a database name in sequence.
        /// Separate multiple permissions with a comma (,).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountPrivilege
        {
            get;
            set;
        }

        /// <summary>Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterId
        {
            get;
            set;
        }

        /// <summary>Property dbName: The name of the database whose access permissions are to be granted to the database account.</summary>
        /// <remarks>
        /// You can grant access permissions on one or more databases to the database account.
        /// Separate multiple databases with a comma (,).
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbName
        {
            get;
            set;
        }
    }
}
