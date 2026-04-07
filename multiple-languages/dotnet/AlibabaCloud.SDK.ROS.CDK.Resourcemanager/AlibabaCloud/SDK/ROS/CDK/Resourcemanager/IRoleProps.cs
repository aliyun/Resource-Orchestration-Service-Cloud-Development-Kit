using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `Role`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RoleProps")]
    public interface IRoleProps
    {
        /// <summary>Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.</summary>
        [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object AssumeRolePolicyDocument
        {
            get;
        }

        /// <summary>Property roleName: Role Name.</summary>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RoleName
        {
            get;
        }

        /// <summary>Property description: The description of the Resource Manager role.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxSessionDuration: Role maximum session time.</summary>
        /// <remarks>
        /// Valid values: [3600-43200]. Default to 3600.
        /// </remarks>
        [JsiiProperty(name: "maxSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxSessionDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Role`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRoleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property assumeRolePolicyDocument: The content of the permissions strategy that plays a role.</summary>
            [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object AssumeRolePolicyDocument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property roleName: Role Name.</summary>
            [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the Resource Manager role.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxSessionDuration: Role maximum session time.</summary>
            /// <remarks>
            /// Valid values: [3600-43200]. Default to 3600.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxSessionDuration
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
