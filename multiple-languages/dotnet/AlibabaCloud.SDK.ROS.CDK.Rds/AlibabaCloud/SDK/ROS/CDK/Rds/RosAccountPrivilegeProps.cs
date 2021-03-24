using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::AccountPrivilege`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosAccountPrivilegeProps")]
    public class RosAccountPrivilegeProps : AlibabaCloud.SDK.ROS.CDK.Rds.IRosAccountPrivilegeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: RDS account name.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPrivilege: RDS account privilege
        /// </remarks>
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountPrivilege
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: RDS instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbName: RDS database name
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbName
        {
            get;
            set;
        }
    }
}
