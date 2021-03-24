using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::POLARDB::AccountPrivilege`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.RosAccountPrivilegeProps")]
    public class RosAccountPrivilegeProps : AlibabaCloud.SDK.ROS.CDK.Polardb.IRosAccountPrivilegeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the database account to be granted access permissions.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountName
        {
            get;
            set;
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
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountPrivilege
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the ApsaraDB for POLARDB cluster to which a database account belongs.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: The name of the database whose access permissions are to be granted to the database account.
        /// You can grant access permissions on one or more databases to the database account.
        /// Separate multiple databases with a comma (,).
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbName
        {
            get;
            set;
        }
    }
}
