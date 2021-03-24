using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::Database`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.DatabaseProps")]
    public class DatabaseProps : AlibabaCloud.SDK.ROS.CDK.Rds.IDatabaseProps
    {
        /// <summary>Property characterSetName: The character set you want to use for the database.</summary>
        /// <remarks>
        /// Valid values:
        /// MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
        /// SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
        /// | Chinese_PRC_BIN.
        /// PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
        /// WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
        /// | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
        /// | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
        /// SQL_ASCII.
        /// </remarks>
        [JsiiProperty(name: "characterSetName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CharacterSetName
        {
            get;
            set;
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceId
        {
            get;
            set;
        }

        /// <summary>Property dbName: The name of the database you want to create.</summary>
        /// <remarks>
        /// Note
        /// The name must be 2 to 64 characters in length.
        /// The name must start with a lowercase letter and end with a lowercase letter or digit.
        /// The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
        /// The name must be unique in the instance.
        /// For more information about invalid characters, see Forbidden keywords table.
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbName
        {
            get;
            set;
        }

        /// <summary>Property dbDescription: The description of the database.</summary>
        /// <remarks>
        /// The description must be 2 to 256 characters in length.
        /// The description must start with a letter and can contain letters, digits, underscores
        /// (_), and hyphens (-).
        /// Note The description cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbDescription
        {
            get;
            set;
        }
    }
}
