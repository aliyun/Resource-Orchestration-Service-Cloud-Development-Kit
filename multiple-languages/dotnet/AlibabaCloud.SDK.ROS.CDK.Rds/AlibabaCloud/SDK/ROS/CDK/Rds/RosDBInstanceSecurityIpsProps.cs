using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceSecurityIps`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosDBInstanceSecurityIpsProps")]
    public class RosDBInstanceSecurityIpsProps : AlibabaCloud.SDK.ROS.CDK.Rds.IRosDBInstanceSecurityIpsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Database instance id to update security ips.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIpArrayAttribute: Security ips to add or remove.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceIpArrayAttribute", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceIpArrayAttribute
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
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
