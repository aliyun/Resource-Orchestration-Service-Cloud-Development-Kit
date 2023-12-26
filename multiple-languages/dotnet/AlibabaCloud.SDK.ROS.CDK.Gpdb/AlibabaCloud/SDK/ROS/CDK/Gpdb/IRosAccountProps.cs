using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `RosAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosAccountProps")]
    public interface IRosAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the privileged account.
        /// The name can contain lowercase letters, digits, and underscores (_).
        /// The name must start with a lowercase letter and end with a lowercase letter or a digit.
        /// The name cannot start with gp.
        /// The name must be 2 to 16 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountName
        {
            get;
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
        object AccountPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
        /// Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
        /// region, including instance IDs.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountDescription: The description of the privileged account.
        /// </remarks>
        [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-account
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IRosAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

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
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
            /// Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
            /// region, including instance IDs.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountDescription: The description of the privileged account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
