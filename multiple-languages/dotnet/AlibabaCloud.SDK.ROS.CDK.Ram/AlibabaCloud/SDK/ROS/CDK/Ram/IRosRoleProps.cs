using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `RosRole`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRoleProps")]
    public interface IRosRoleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
        /// </remarks>
        [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty\"}]}}")]
        object AssumeRolePolicyDocument
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleName: Specifies the role name, containing up to 64 characters.
        /// </remarks>
        [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RoleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether force detach the policies attached to the role. Default value is false.
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Remark information, up to 1024 characters or Chinese characters.
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
        /// <strong>Property</strong>: ignoreExisting: Whether to ignore existing role
        /// False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it.
        /// True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored.
        /// If the role is not created by ROS, it will be ignored during update and delete stage.
        /// </remarks>
        [JsiiProperty(name: "ignoreExisting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IgnoreExisting
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxSessionDuration: The maximum session duration of the RAM role.
        /// Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
        /// The default value is used if the parameter is not specified.
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

        /// <remarks>
        /// <strong>Property</strong>: policies: Describes what actions are allowed on what resources.
        /// </remarks>
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policies
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: policyAttachments: System and custom policy names to attach.
        /// </remarks>
        [JsiiProperty(name: "policyAttachments", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PolicyAttachmentsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyAttachments
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRole`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-role
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRoleProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosRoleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosRoleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: assumeRolePolicyDocument: The RAM assume role policy that is associated with this role.
            /// </remarks>
            [JsiiProperty(name: "assumeRolePolicyDocument", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.AssumeRolePolicyDocumentProperty\"}]}}")]
            public object AssumeRolePolicyDocument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: roleName: Specifies the role name, containing up to 64 characters.
            /// </remarks>
            [JsiiProperty(name: "roleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionForce: Whether force detach the policies attached to the role. Default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Remark information, up to 1024 characters or Chinese characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ignoreExisting: Whether to ignore existing role
            /// False: ROS will perform a uniqueness check.If a role with the same name exists, an error will be reported when creating it.
            /// True: ROS will not check the uniqueness.If there is a role with the same name, the role creation process will be ignored.
            /// If the role is not created by ROS, it will be ignored during update and delete stage.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ignoreExisting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IgnoreExisting
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxSessionDuration: The maximum session duration of the RAM role.
            /// Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.
            /// The default value is used if the parameter is not specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxSessionDuration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: policies: Describes what actions are allowed on what resources.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Policies
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: policyAttachments: System and custom policy names to attach.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policyAttachments", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosRole.PolicyAttachmentsProperty\"}]}}", isOptional: true)]
            public object? PolicyAttachments
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
