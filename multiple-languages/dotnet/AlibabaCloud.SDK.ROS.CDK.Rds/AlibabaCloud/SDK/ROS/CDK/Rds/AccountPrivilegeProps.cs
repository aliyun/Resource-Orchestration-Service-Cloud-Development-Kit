using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::AccountPrivilege`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.AccountPrivilegeProps")]
    public class AccountPrivilegeProps : AlibabaCloud.SDK.ROS.CDK.Rds.IAccountPrivilegeProps
    {
        /// <summary>Property accountName: RDS account name.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AccountName
        {
            get;
            set;
        }

        /// <summary>Property accountPrivilege: RDS account privilege.</summary>
        [JsiiProperty(name: "accountPrivilege", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object AccountPrivilege
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceId: RDS instance ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DbInstanceId
        {
            get;
            set;
        }

        /// <summary>Property dbName: RDS database name.</summary>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DbName
        {
            get;
            set;
        }
    }
}
