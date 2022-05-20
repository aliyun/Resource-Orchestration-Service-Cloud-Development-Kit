using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GPDB::Account`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-gpdb.RosAccountProps")]
    public class RosAccountProps : AlibabaCloud.SDK.ROS.CDK.Gpdb.IRosAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the privileged account.
        /// The name can contain lowercase letters, digits, and underscores (_).
        /// The name must start with a lowercase letter and end with a lowercase letter or a digit.
        /// The name cannot start with gp.
        /// The name must be 2 to 16 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong></strong>: # $ % ^ & * ( ) _ + - =
        /// The password must be 8 to 32 characters in length.
        ///
        /// <strong>Property</strong>: accountPassword: The password of the privileged account.
        /// The password must contain at least three of the following character types: uppercase
        /// letters, lowercase letters, digits, and special characters.
        /// Special characters include !
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccountPassword
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
        /// Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
        /// region, including instance IDs.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountDescription: The description of the privileged account.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AccountDescription
        {
            get;
            set;
        }
    }
}
