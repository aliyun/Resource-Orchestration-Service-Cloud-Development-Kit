using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `RosCrossAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCrossAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosCrossAccountProps")]
    public interface IRosCrossAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: alias: The alias of the cross-account authorization.
        /// </remarks>
        [JsiiProperty(name: "alias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Alias
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.
        /// </remarks>
        [JsiiProperty(name: "crossAccountRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossAccountRoleName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: crossAccountType: The type of the cross-account authorization. Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
        /// </remarks>
        [JsiiProperty(name: "crossAccountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossAccountType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.
        /// </remarks>
        [JsiiProperty(name: "crossAccountUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossAccountUserId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCrossAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCrossAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosCrossAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IRosCrossAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: alias: The alias of the cross-account authorization.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Alias
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "crossAccountRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossAccountRoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: crossAccountType: The type of the cross-account authorization. Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "crossAccountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossAccountType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "crossAccountUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossAccountUserId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
