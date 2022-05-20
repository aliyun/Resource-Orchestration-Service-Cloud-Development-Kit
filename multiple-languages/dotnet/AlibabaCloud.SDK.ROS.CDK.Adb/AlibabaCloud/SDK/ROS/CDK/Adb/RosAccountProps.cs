using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ADB::Account`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-adb.RosAccountProps")]
    public class RosAccountProps : AlibabaCloud.SDK.ROS.CDK.Adb.IRosAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the account.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong></strong>: # $ % ^ & * ()  _ + - and =
        /// The password must be 8 to 32 characters in length.
        ///
        /// <strong>Property</strong>: accountPassword: The password of the account.
        /// The password must contain uppercase letters, lowercase letters, digits, and special
        /// characters.
        /// Special characters include !
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountPassword
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: The ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountDescription: The description of the account.
        /// The description cannot start with http://or https://.
        /// The description can be up to 256 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountType: Normal: standard account
        /// Super: privileged account
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountType
        {
            get;
            set;
        }
    }
}
