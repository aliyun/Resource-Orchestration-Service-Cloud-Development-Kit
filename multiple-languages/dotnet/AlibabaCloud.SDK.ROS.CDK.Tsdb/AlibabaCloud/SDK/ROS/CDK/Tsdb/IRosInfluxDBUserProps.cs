using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Tsdb
{
    /// <summary>Properties for defining a `ALIYUN::TSDB::InfluxDBUser`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInfluxDBUserProps), fullyQualifiedName: "@alicloud/ros-cdk-tsdb.RosInfluxDBUserProps")]
    public interface IRosInfluxDBUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of TSDB for InfluxDB.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong></strong>: #$%^&*()_+-=
        ///
        /// <strong>Property</strong>: password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Password
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: userType: The type of user. Valid values:
        /// normal: normal user
        /// admin: administrator user.
        /// </remarks>
        [JsiiProperty(name: "userType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
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
        [JsiiTypeProxy(nativeType: typeof(IRosInfluxDBUserProps), fullyQualifiedName: "@alicloud/ros-cdk-tsdb.RosInfluxDBUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Tsdb.IRosInfluxDBUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of TSDB for InfluxDB.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong></strong>: #$%^&*()_+-=
            ///
            /// <strong>Property</strong>: password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
            /// </remarks>
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: userType: The type of user. Valid values:
            /// normal: normal user
            /// admin: administrator user.
            /// </remarks>
            [JsiiProperty(name: "userType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
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
