using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `RosAppUser`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAppUserProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosAppUserProps")]
    public interface IRosAppUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth. Unit: Kbit\/s. Maximum bandwidth: 2,000 Kbit\/s.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bandwidth
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: The ID of the SAG APP instance.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SmartAgId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: userMail: The email address of the user. The username and password are sent to the specified
        /// email address.
        /// </remarks>
        [JsiiProperty(name: "userMail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserMail
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this
        /// case, SAG APP connects to Alibaba Cloud through the specified IP address.
        /// Note The IP address must fall into the CIDR block of the private network.
        /// After this feature is disabled, an IP address within the CIDR block of the private
        /// network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
        /// IP address.
        /// </remarks>
        [JsiiProperty(name: "clientIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClientIp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: disable: Disable user or not.
        /// </remarks>
        [JsiiProperty(name: "disable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Disable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: password: The password used to log on to SAG APP.
        /// For a client account, if you specify the username, you must also specify the password.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Password
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: userName: The username of the client account. Usernames of client accounts added to the same
        /// SAG APP instance must be unique.
        /// For a client account, if you specify the username, you must also specify the password.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAppUser`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-appuser
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAppUserProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosAppUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosAppUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bandwidth: The bandwidth. Unit: Kbit\/s. Maximum bandwidth: 2,000 Kbit\/s.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: smartAgId: The ID of the SAG APP instance.
            /// </remarks>
            [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SmartAgId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: userMail: The email address of the user. The username and password are sent to the specified
            /// email address.
            /// </remarks>
            [JsiiProperty(name: "userMail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserMail
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clientIp: After this feature is enabled, you must specify the IP address of SAG APP. In this
            /// case, SAG APP connects to Alibaba Cloud through the specified IP address.
            /// Note The IP address must fall into the CIDR block of the private network.
            /// After this feature is disabled, an IP address within the CIDR block of the private
            /// network is assigned to SAG APP. Each connection to Alibaba Cloud uses a different
            /// IP address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clientIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClientIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: disable: Disable user or not.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "disable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Disable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: password: The password used to log on to SAG APP.
            /// For a client account, if you specify the username, you must also specify the password.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: The username of the client account. Usernames of client accounts added to the same
            /// SAG APP instance must be unique.
            /// For a client account, if you specify the username, you must also specify the password.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
