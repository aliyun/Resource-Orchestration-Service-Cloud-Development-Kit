using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `Group`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.GroupProps")]
    public interface IGroupProps
    {
        /// <summary>Property groupName: Specifies the group name, containing up to 64 characters.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Property comments: Remark information, up to 128 characters or Chinese characters.</summary>
        [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Comments
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionForce: Whether force detach the policies attached to the group.</summary>
        /// <remarks>
        /// Default value is false.
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

        /// <summary>Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage.</summary>
        [JsiiProperty(name: "ignoreExisting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IgnoreExisting
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policies: Describes what actions are allowed on what resources.</summary>
        [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosGroup.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policies
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policyAttachments: System and custom policy names to attach.</summary>
        [JsiiProperty(name: "policyAttachments", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosGroup.PolicyAttachmentsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolicyAttachments
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Group`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-group
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.GroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupName: Specifies the group name, containing up to 64 characters.</summary>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property comments: Remark information, up to 128 characters or Chinese characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "comments", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Comments
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionForce: Whether force detach the policies attached to the group.</summary>
            /// <remarks>
            /// Default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ignoreExisting: Whether to ignore existing group False: ROS will perform a uniqueness check.If a group with the same name exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If there is a group with the same name, the group creation process will be ignored. If the group is not created by ROS, it will be ignored during update and delete stage.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ignoreExisting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IgnoreExisting
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policies: Describes what actions are allowed on what resources.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policies", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosGroup.PoliciesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Policies
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property policyAttachments: System and custom policy names to attach.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "policyAttachments", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ram.RosGroup.PolicyAttachmentsProperty\"}]}}", isOptional: true)]
            public object? PolicyAttachments
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
