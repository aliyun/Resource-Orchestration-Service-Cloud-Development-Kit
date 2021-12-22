using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pvtz
{
    /// <summary>Properties for defining a `ALIYUN::PVTZ::UserVpcAuthorization`.</summary>
    [JsiiInterface(nativeType: typeof(IRosUserVpcAuthorizationProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosUserVpcAuthorizationProps")]
    public interface IRosUserVpcAuthorizationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: authorizedUserId: The account ID of the user who authorizes the resource.
        /// </remarks>
        [JsiiProperty(name: "authorizedUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AuthorizedUserId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: authChannel: Authorization channel. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
        /// </remarks>
        [JsiiProperty(name: "authCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuthCode
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: authType: Authorization type.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosUserVpcAuthorizationProps), fullyQualifiedName: "@alicloud/ros-cdk-pvtz.RosUserVpcAuthorizationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pvtz.IRosUserVpcAuthorizationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: authorizedUserId: The account ID of the user who authorizes the resource.
            /// </remarks>
            [JsiiProperty(name: "authorizedUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AuthorizedUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: authChannel: Authorization channel. Valid values:
            /// AUTH_CODE: Verification code authorization, to verify whether the verification code passed in by AuthCode is correct.
            /// RESOURCE_DIRECTORY: Resource directory authorization, verify whether the AuthorizedUserId and the current account have resource directory credit.When it is empty, it is the same as AUTH_CODE, that is, verification code authorization.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authChannel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthChannel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: authCode: Verification code, if AuthChannel takes "AUTH_CODE" or is empty, it is mandatory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: authType: Authorization type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "authType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AuthType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
