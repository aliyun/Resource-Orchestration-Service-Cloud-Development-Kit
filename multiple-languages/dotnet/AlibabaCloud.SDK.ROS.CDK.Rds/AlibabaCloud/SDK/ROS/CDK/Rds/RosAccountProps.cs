using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::Account`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosAccountProps")]
    public class RosAccountProps : AlibabaCloud.SDK.ROS.CDK.Rds.IRosAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: Account name, which must be unique and meet the following requirements:
        /// Start with a letter;
        /// Consist of lower-case letters, digits, and underscores (_);
        /// Contain no more than 16 characters.
        /// For other invalid characters, see Forbidden keywords table.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccountPassword
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
        /// <strong>Property</strong>: accountDescription: Account remarks.
        /// It cannot begin with http:// or https://.
        /// It must start with a Chinese character or English letter.
        /// It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
        /// The length may be 2-256 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AccountDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountType: Privilege type of account.
        /// Normal: Common privilege.
        /// Super: High privilege. And the default value is Normal.
        /// This parameter is valid for MySQL 5.5/5.6 only.
        /// MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AccountType
        {
            get;
            set;
        }
    }
}
