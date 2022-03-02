using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Tsdb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::TSDB::InfluxDBUser`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-tsdb.InfluxDBUserProps")]
    public class InfluxDBUserProps : AlibabaCloud.SDK.ROS.CDK.Tsdb.IInfluxDBUserProps
    {
        /// <summary>Property instanceId: The ID of TSDB for InfluxDB.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceId
        {
            get;
            set;
        }

        /// <summary>Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&amp;*()_+-=.</summary>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Password
        {
            get;
            set;
        }

        /// <summary>Property userName: The name of user.</summary>
        /// <remarks>
        /// The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UserName
        {
            get;
            set;
        }

        /// <summary>Property userType: The type of user.</summary>
        /// <remarks>
        /// Valid values:
        /// normal: normal user
        /// admin: administrator user.
        /// </remarks>
        [JsiiProperty(name: "userType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UserType
        {
            get;
            set;
        }

        /// <summary>Property databasePermissions: The list of databases that the user can access.</summary>
        /// <remarks>
        /// If the user type is admin, do not specify this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "databasePermissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-tsdb.RosInfluxDBUser.DatabasePermissionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? DatabasePermissions
        {
            get;
            set;
        }
    }
}
