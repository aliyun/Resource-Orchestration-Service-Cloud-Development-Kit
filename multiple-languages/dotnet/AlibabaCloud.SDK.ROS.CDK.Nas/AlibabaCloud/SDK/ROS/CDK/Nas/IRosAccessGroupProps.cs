using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `RosAccessGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosAccessGroupProps")]
    public interface IRosAccessGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessGroupName: The name of the permission group.
        /// Limits:
        /// *   The name must be 3 to 64 characters in length.
        /// *   The name must start with a letter and can contain letters, digits,
        /// underscores (_), and hyphens (-).
        /// *   The name must be different from the name of the default permission group.
        /// The default permission group for virtual private clouds (VPCs) is named
        /// DEFAULT_VPC_GROUP_NAME.
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessGroupType: Permission group type, including the Vpc and Classic types
        /// </remarks>
        [JsiiProperty(name: "accessGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessGroupType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the permission group.
        /// Limits:
        /// *   By default, the description of a permission group is the same as the name of
        /// the permission group. The description must be 2 to 128 characters in length.
        /// *   The name must start with a letter and cannot start with `http:\/\/` or
        /// `https:\/\/`.
        /// *   The description can contain digits, colons (:), underscores (_), and hyphens
        /// (-).
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
        /// <strong>Property</strong>: fileSystemType: File system type.
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

        /// <summary>Properties for defining a `RosAccessGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.RosAccessGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IRosAccessGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessGroupName: The name of the permission group.
            /// Limits:
            /// *   The name must be 3 to 64 characters in length.
            /// *   The name must start with a letter and can contain letters, digits,
            /// underscores (_), and hyphens (-).
            /// *   The name must be different from the name of the default permission group.
            /// The default permission group for virtual private clouds (VPCs) is named
            /// DEFAULT_VPC_GROUP_NAME.
            /// </remarks>
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessGroupType: Permission group type, including the Vpc and Classic types
            /// </remarks>
            [JsiiProperty(name: "accessGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessGroupType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the permission group.
            /// Limits:
            /// *   By default, the description of a permission group is the same as the name of
            /// the permission group. The description must be 2 to 128 characters in length.
            /// *   The name must start with a letter and cannot start with `http:\/\/` or
            /// `https:\/\/`.
            /// *   The description can contain digits, colons (:), underscores (_), and hyphens
            /// (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fileSystemType: File system type.
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
