using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceSecurityIps`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.DBInstanceSecurityIpsProps")]
    public class DBInstanceSecurityIpsProps : AlibabaCloud.SDK.ROS.CDK.Rds.IDBInstanceSecurityIpsProps
    {
        /// <summary>Property dbInstanceId: Database instance id to update security ips.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceId
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceIpArrayAttribute: Security ips to add or remove.</summary>
        [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceIpArrayAttribute
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'.</summary>
        /// <remarks>
        /// Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceIpArrayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceIpArrayName
        {
            get;
            set;
        }
    }
}
