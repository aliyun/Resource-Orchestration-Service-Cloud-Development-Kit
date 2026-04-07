using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosRole`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosRoleProps")]
    public interface IRosRoleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
        /// </remarks>
        [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object AssumeRolePolicyDocument
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleName: Role Name.
        /// </remarks>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RoleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the Resource Manager role.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxSessionDuration: Role maximum session time. Valid values: [3600-43200]. Default to 3600.
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

        /// <summary>Properties for defining a `RosRole`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-role
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosRoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosRoleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: assumeRolePolicyDocument: The content of the permissions strategy that plays a role.
            /// </remarks>
            [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object AssumeRolePolicyDocument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: roleName: Role Name.
            /// </remarks>
            [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the Resource Manager role.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxSessionDuration: Role maximum session time. Valid values: [3600-43200]. Default to 3600.
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
