using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `AccessGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.AccessGroupProps")]
    public interface IAccessGroupProps
    {
        /// <summary>Property accessGroupName: The name of the permission group.</summary>
        /// <remarks>
        /// Limits:
        ///
        /// <list type="bullet">
        /// <description>The name must be 3 to 64 characters in length.</description>
        /// <description>The name must start with a letter and can contain letters, digits,
        /// underscores (_), and hyphens (-).</description>
        /// <description>The name must be different from the name of the default permission group.
        /// The default permission group for virtual private clouds (VPCs) is named
        /// DEFAULT_VPC_GROUP_NAME.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessGroupName
        {
            get;
        }

        /// <summary>Property accessGroupType: Permission group type, including the Vpc and Classic types.</summary>
        [JsiiProperty(name: "accessGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessGroupType
        {
            get;
        }

        /// <summary>Property description: The description of the permission group.</summary>
        /// <remarks>
        /// Limits:
        ///
        /// <list type="bullet">
        /// <description>By default, the description of a permission group is the same as the name of
        /// the permission group. The description must be 2 to 128 characters in length.</description>
        /// <description>The name must start with a letter and cannot start with <c>http:\/\/</c> or
        /// <c>https:\/\/</c>.</description>
        /// <description>The description can contain digits, colons (:), underscores (_), and hyphens
        /// (-).</description>
        /// </list>
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

        /// <summary>Property fileSystemType: File system type.</summary>
        /// <remarks>
        /// Values: standard (default), extreme
        /// </remarks>
        [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FileSystemType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AccessGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.AccessGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IAccessGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessGroupName: The name of the permission group.</summary>
            /// <remarks>
            /// Limits:
            ///
            /// <list type="bullet">
            /// <description>The name must be 3 to 64 characters in length.</description>
            /// <description>The name must start with a letter and can contain letters, digits,
            /// underscores (_), and hyphens (-).</description>
            /// <description>The name must be different from the name of the default permission group.
            /// The default permission group for virtual private clouds (VPCs) is named
            /// DEFAULT_VPC_GROUP_NAME.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessGroupType: Permission group type, including the Vpc and Classic types.</summary>
            [JsiiProperty(name: "accessGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessGroupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the permission group.</summary>
            /// <remarks>
            /// Limits:
            ///
            /// <list type="bullet">
            /// <description>By default, the description of a permission group is the same as the name of
            /// the permission group. The description must be 2 to 128 characters in length.</description>
            /// <description>The name must start with a letter and cannot start with <c>http:\/\/</c> or
            /// <c>https:\/\/</c>.</description>
            /// <description>The description can contain digits, colons (:), underscores (_), and hyphens
            /// (-).</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fileSystemType: File system type.</summary>
            /// <remarks>
            /// Values: standard (default), extreme
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileSystemType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
