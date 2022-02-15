using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::PVTZ::UserVpcAuthorization`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-pvtz.UserVpcAuthorizationProps")]
    public class UserVpcAuthorizationProps : AlibabaCloud.SDK.ROS.CDK.Pvtz.IUserVpcAuthorizationProps
    {
        /// <summary>Property authorizedUserId: The account ID of the user who authorizes the resource.</summary>
        [JsiiProperty(name: "authorizedUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AuthorizedUserId
        {
            get;
            set;
        }

        /// <summary>Property authChannel: Authorization channel.</summary>
        /// <remarks>
        /// Valid values:
        /// AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
        /// RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "authChannel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AuthChannel
        {
            get;
            set;
        }

        /// <summary>Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "authCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AuthCode
        {
            get;
            set;
        }

        /// <summary>Property authType: Authorization type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AuthType
        {
            get;
            set;
        }
    }
}
