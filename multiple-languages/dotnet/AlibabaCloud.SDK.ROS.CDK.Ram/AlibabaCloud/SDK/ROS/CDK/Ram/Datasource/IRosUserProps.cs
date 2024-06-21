using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram.Datasource
{
    /// <summary>Properties for defining a `RosUser`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.RosUserProps")]
    public interface IRosUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: userId: RAM user ID. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
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

        /// <remarks>
        /// <strong>Property</strong>: userName: RAM user name. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
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

        /// <summary>Properties for defining a `RosUser`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-user
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosUserProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.RosUserProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IRosUserProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: userId: RAM user ID. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "userId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: userName: RAM user name. At most one UserName and UserId can be specified; if both are specified, UserName will be used. If neither is specified, the current user ID will be used.
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
