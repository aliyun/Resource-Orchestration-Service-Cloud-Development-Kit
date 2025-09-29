using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `SupabaseProject`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISupabaseProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.SupabaseProjectProps")]
    public interface ISupabaseProjectProps
    {
        /// <summary>Property accountPassword: The password for the initial account.</summary>
        /// <remarks>
        /// It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
        /// Supported special characters: !@#$%^&amp;*()_+-=
        /// The length is 8~32 characters.
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountPassword
        {
            get;
        }

        /// <summary>Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (_). Must start with English letters or underscores (_).</summary>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <summary>Property projectSpec: Supabase instance specification, default is 1C1G.</summary>
        [JsiiProperty(name: "projectSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectSpec
        {
            get;
        }

        /// <summary>Property securityIpList: IP whitelist.</summary>
        /// <remarks>
        /// 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
        /// </remarks>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityIpList
        {
            get;
        }

        /// <summary>Property vpcId: VPC ID.</summary>
        /// <remarks>
        /// illustrate
        /// You can call the DescribeRdsVpcs interface to view the available VPC IDs.
        /// This parameter must be passed in.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: vSwitch ID.</summary>
        /// <remarks>
        /// illustrate
        /// vSwitchId is required.
        /// The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property zoneId: Availability Zone ID.</summary>
        /// <remarks>
        /// Description You can call the DescribeRegions interface to view the available Availability Zone ID.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property diskPerformanceLevel: Cloud disk PL level, default PL0.</summary>
        /// <remarks>
        /// Selectable value:
        /// PL0
        /// PL1
        /// </remarks>
        [JsiiProperty(name: "diskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskPerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageSize: Storage space size, unit GB, default 1GB.</summary>
        [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SupabaseProject`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISupabaseProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.SupabaseProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.ISupabaseProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountPassword: The password for the initial account.</summary>
            /// <remarks>
            /// It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
            /// Supported special characters: !@#$%^&amp;*()_+-=
            /// The length is 8~32 characters.
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (_). Must start with English letters or underscores (_).</summary>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property projectSpec: Supabase instance specification, default is 1C1G.</summary>
            [JsiiProperty(name: "projectSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityIpList: IP whitelist.</summary>
            /// <remarks>
            /// 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
            /// </remarks>
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: VPC ID.</summary>
            /// <remarks>
            /// illustrate
            /// You can call the DescribeRdsVpcs interface to view the available VPC IDs.
            /// This parameter must be passed in.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: vSwitch ID.</summary>
            /// <remarks>
            /// illustrate
            /// vSwitchId is required.
            /// The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: Availability Zone ID.</summary>
            /// <remarks>
            /// Description You can call the DescribeRegions interface to view the available Availability Zone ID.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property diskPerformanceLevel: Cloud disk PL level, default PL0.</summary>
            /// <remarks>
            /// Selectable value:
            /// PL0
            /// PL1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskPerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageSize: Storage space size, unit GB, default 1GB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSize
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
