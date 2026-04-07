using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `CrossAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICrossAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.CrossAccountProps")]
    public interface ICrossAccountProps
    {
        /// <summary>Property alias: The alias of the cross-account authorization.</summary>
        [JsiiProperty(name: "alias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Alias
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.</summary>
        [JsiiProperty(name: "crossAccountRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossAccountRoleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property crossAccountType: The type of the cross-account authorization.</summary>
        /// <remarks>
        /// Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
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

        /// <summary>Property crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.</summary>
        [JsiiProperty(name: "crossAccountUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossAccountUserId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CrossAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-crossaccount
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICrossAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.CrossAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.ICrossAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property alias: The alias of the cross-account authorization.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "alias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Alias
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property crossAccountRoleName: The name of the RAM role that is used to grant permissions to the authorized account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "crossAccountRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossAccountRoleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property crossAccountType: The type of the cross-account authorization.</summary>
            /// <remarks>
            /// Valid values: CROSS_ACCOUNT, CROSS_ACCOUNT_BY_RD.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "crossAccountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossAccountType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property crossAccountUserId: The user ID of the account that you want to authorize to back up data in your account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "crossAccountUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossAccountUserId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
