using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `ALIYUN::GPDB::Account`.</summary>
    [JsiiInterface(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.AccountProps")]
    public interface IAccountProps
    {
        /// <summary>Property accountName: The name of the privileged account.</summary>
        /// <remarks>
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

        /// <summary>Property accountPassword: The password of the privileged account.</summary>
        /// <remarks>
        /// The password must contain at least three of the following character types: uppercase
        /// letters, lowercase letters, digits, and special characters.
        /// Special characters include ! @ # $ % ^ &amp; * ( ) _ + - =
        /// The password must be 8 to 32 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountPassword
        {
            get;
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        /// <remarks>
        /// Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
        /// region, including instance IDs.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property accountDescription: The description of the privileged account.</summary>
        [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::GPDB::Account`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.AccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountName: The name of the privileged account.</summary>
            /// <remarks>
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

            /// <summary>Property accountPassword: The password of the privileged account.</summary>
            /// <remarks>
            /// The password must contain at least three of the following character types: uppercase
            /// letters, lowercase letters, digits, and special characters.
            /// Special characters include ! @ # $ % ^ &amp; * ( ) _ + - =
            /// The password must be 8 to 32 characters in length.
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            /// <remarks>
            /// Note You can call the DescribeDBInstances operation to query details of all AnalyticDB for PostgreSQL instances in a specific
            /// region, including instance IDs.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountDescription: The description of the privileged account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
