using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram.Datasource
{
    /// <summary>Properties for defining a `User`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.UserProps")]
    public interface IUserProps
    {
        /// <summary>Property userId: RAM user ID.</summary>
        /// <remarks>
        /// At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
        /// </remarks>
        [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userName: RAM user name.</summary>
        /// <remarks>
        /// At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
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

        /// <summary>Properties for defining a `User`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.UserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property userId: RAM user ID.</summary>
            /// <remarks>
            /// At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userName: RAM user name.</summary>
            /// <remarks>
            /// At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
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
