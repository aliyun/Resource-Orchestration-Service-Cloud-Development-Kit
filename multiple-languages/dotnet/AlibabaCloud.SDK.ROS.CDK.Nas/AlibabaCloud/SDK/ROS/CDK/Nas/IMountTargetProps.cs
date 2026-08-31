using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `MountTarget`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-mounttarget
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMountTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.MountTargetProps")]
    public interface IMountTargetProps
    {
        /// <summary>Property accessGroupName: The name of the permission group.</summary>
        /// <remarks>
        /// This parameter is required if you create a mount target for a General-purpose NAS
        /// file system or an Extreme NAS file system.
        /// The default permission group for virtual private clouds (VPCs) is named
        /// DEFAULT_VPC_GROUP_NAME.
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessGroupName
        {
            get;
        }

        /// <summary>Property fileSystemId: The ID of the file system.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Sample ID of a General-purpose NAS file system: 31a8e4****.</description>
        /// <description>The IDs of Extreme NAS file systems must start with <c>extreme-</c>, for example,
        /// extreme-0015****.</description>
        /// <description>The IDs of CPFS file systems must start with <c>cpfs-</c>. Example:
        /// cpfs-125487****.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FileSystemId
        {
            get;
        }

        /// <summary>Property networkType: Network type, including Vpc and Classic networks.</summary>
        [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkType
        {
            get;
        }

        /// <summary>Property enableIpv6: Whether to create an IPv6 mount point.Value: true: create false (default): do not create Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.</summary>
        [JsiiProperty(name: "enableIpv6", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableIpv6
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Security group Id.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: Status, including Active and Inactive.</summary>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: VPC network ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MountTarget`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-mounttarget
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMountTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.MountTargetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IMountTargetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessGroupName: The name of the permission group.</summary>
            /// <remarks>
            /// This parameter is required if you create a mount target for a General-purpose NAS
            /// file system or an Extreme NAS file system.
            /// The default permission group for virtual private clouds (VPCs) is named
            /// DEFAULT_VPC_GROUP_NAME.
            /// </remarks>
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property fileSystemId: The ID of the file system.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Sample ID of a General-purpose NAS file system: 31a8e4****.</description>
            /// <description>The IDs of Extreme NAS file systems must start with <c>extreme-</c>, for example,
            /// extreme-0015****.</description>
            /// <description>The IDs of CPFS file systems must start with <c>cpfs-</c>. Example:
            /// cpfs-125487****.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FileSystemId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkType: Network type, including Vpc and Classic networks.</summary>
            [JsiiProperty(name: "networkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enableIpv6: Whether to create an IPv6 mount point.Value: true: create false (default): do not create Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableIpv6", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableIpv6
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: Security group Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: Status, including Active and Inactive.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: VPC network ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: VSwitch ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
