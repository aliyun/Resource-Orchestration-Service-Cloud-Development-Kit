using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `ALIYUN::PVTZ::UserVpcAuthorization`.</summary>
    [JsiiInterface(nativeType: typeof(IUserVpcAuthorizationProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.UserVpcAuthorizationProps")]
    public interface IUserVpcAuthorizationProps
    {
        /// <summary>Property authorizedUserId: The account ID of the user who authorizes the resource.</summary>
        [JsiiProperty(name: "authorizedUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AuthorizedUserId
        {
            get;
        }

        /// <summary>Property authChannel: Authorization channel.</summary>
        /// <remarks>
        /// Valid values:
        /// AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
        /// RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
        /// </remarks>
        [JsiiProperty(name: "authChannel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthChannel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.</summary>
        [JsiiProperty(name: "authCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property authType: Authorization type.</summary>
        [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::PVTZ::UserVpcAuthorization`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUserVpcAuthorizationProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.UserVpcAuthorizationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IUserVpcAuthorizationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property authorizedUserId: The account ID of the user who authorizes the resource.</summary>
            [JsiiProperty(name: "authorizedUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AuthorizedUserId
            {
                get => GetInstanceProperty<object>()!;
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property authType: Authorization type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
