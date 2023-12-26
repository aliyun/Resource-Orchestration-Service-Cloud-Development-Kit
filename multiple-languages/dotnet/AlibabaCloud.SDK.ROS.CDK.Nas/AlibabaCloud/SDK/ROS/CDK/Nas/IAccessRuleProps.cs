using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `AccessRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.AccessRuleProps")]
    public interface IAccessRuleProps
    {
        /// <summary>Property accessGroupName: Permission group name.</summary>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessGroupName
        {
            get;
        }

        /// <summary>Property fileSystemType: The type of file system.</summary>
        /// <remarks>
        /// Values:
        /// standard: the general NAS
        /// extreme: the extreme NAS
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

        /// <summary>Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.</summary>
        /// <remarks>
        /// IP addresses in CIDR format and IPv6 format are supported.
        /// Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
        /// Only VPC private network is supported.
        /// IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
        /// </remarks>
        [JsiiProperty(name: "ipv6SourceCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6SourceCidrIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property priority: Priority level.</summary>
        /// <remarks>
        /// Range: 1-100. Default value: 1
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.</summary>
        [JsiiProperty(name: "rwAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RwAccessType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceCidrIp: Address or address segment.</summary>
        [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceCidrIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.</summary>
        [JsiiProperty(name: "userAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserAccessType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AccessRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccessRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.AccessRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IAccessRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessGroupName: Permission group name.</summary>
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property fileSystemType: The type of file system.</summary>
            /// <remarks>
            /// Values:
            /// standard: the general NAS
            /// extreme: the extreme NAS
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fileSystemType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FileSystemType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.</summary>
            /// <remarks>
            /// IP addresses in CIDR format and IPv6 format are supported.
            /// Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
            /// Only VPC private network is supported.
            /// IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6SourceCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6SourceCidrIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property priority: Priority level.</summary>
            /// <remarks>
            /// Range: 1-100. Default value: 1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Priority
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rwAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RwAccessType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceCidrIp: Address or address segment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceCidrIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserAccessType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
