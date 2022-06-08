using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::AppUser`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosAppUserProps")]
    public class RosAppUserProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosAppUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth. Unit: Kbit/s. Maximum bandwidth: 2,000 Kbit/s.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Bandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: smartAgId: The ID of the SAG APP instance.
        /// </remarks>
        [JsiiProperty(name: "smartAgId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SmartAgId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userMail: The email address of the user. The username and password are sent to the specified
        /// email address.
        /// </remarks>
        [JsiiProperty(name: "userMail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UserMail
        {
            get;
            set;
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
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: disable: Disable user or not.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "disable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Disable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: password: The password used to log on to SAG APP.
        /// For a client account, if you specify the username, you must also specify the password.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Password
        {
            get;
            set;
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
            get;
            set;
        }
    }
}
