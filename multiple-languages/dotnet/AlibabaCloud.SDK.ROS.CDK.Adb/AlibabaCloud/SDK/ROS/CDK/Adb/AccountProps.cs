using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ADB::Account`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-adb.AccountProps")]
    public class AccountProps : AlibabaCloud.SDK.ROS.CDK.Adb.IAccountProps
    {
        /// <summary>Property accountName: The name of the account.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountName
        {
            get;
            set;
        }

        /// <summary>Property accountPassword: The password of the account.</summary>
        /// <remarks>
        /// The password must contain uppercase letters, lowercase letters, digits, and special
        /// characters.
        /// Special characters include ! @ # $ % ^ &amp; * ()  _ + - and =
        /// The password must be 8 to 32 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountPassword
        {
            get;
            set;
        }

        /// <summary>Property dbClusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbClusterId
        {
            get;
            set;
        }

        /// <summary>Property accountDescription: The description of the account.</summary>
        /// <remarks>
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

        /// <summary>Property accountType: Normal: standard account Super: privileged account.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountType
        {
            get;
            set;
        }
    }
}
