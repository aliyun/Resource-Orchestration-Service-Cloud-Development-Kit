using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Tsdb
{
    /// <summary>Properties for defining a `ALIYUN::TSDB::InfluxDBUser`.</summary>
    [JsiiInterface(nativeType: typeof(IInfluxDBUserProps), fullyQualifiedName: "@alicloud/ros-cdk-tsdb.InfluxDBUserProps")]
    public interface IInfluxDBUserProps
    {
        /// <summary>Property instanceId: The ID of TSDB for InfluxDB.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&amp;*()_+-=.</summary>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Password
        {
            get;
        }

        /// <summary>Property userName: The name of user.</summary>
        /// <remarks>
        /// The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserName
        {
            get;
        }

        /// <summary>Property userType: The type of user.</summary>
        /// <remarks>
        /// Valid values:
        /// normal: normal user
        /// admin: administrator user.
        /// </remarks>
        [JsiiProperty(name: "userType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserType
        {
            get;
        }

        /// <summary>Property databasePermissions: The list of databases that the user can access.</summary>
        /// <remarks>
        /// If the user type is admin, do not specify this parameter.
        /// </remarks>
        [JsiiProperty(name: "databasePermissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-tsdb.RosInfluxDBUser.DatabasePermissionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatabasePermissions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::TSDB::InfluxDBUser`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInfluxDBUserProps), fullyQualifiedName: "@alicloud/ros-cdk-tsdb.InfluxDBUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Tsdb.IInfluxDBUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of TSDB for InfluxDB.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&amp;*()_+-=.</summary>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property userName: The name of user.</summary>
            /// <remarks>
            /// The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserName
            {
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property databasePermissions: The list of databases that the user can access.</summary>
            /// <remarks>
            /// If the user type is admin, do not specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databasePermissions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-tsdb.RosInfluxDBUser.DatabasePermissionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DatabasePermissions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
