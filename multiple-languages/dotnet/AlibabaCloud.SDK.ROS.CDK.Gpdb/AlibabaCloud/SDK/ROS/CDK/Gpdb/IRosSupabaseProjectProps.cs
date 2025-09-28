using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `RosSupabaseProject`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSupabaseProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosSupabaseProjectProps")]
    public interface IRosSupabaseProjectProps
    {
        /// <remarks>
        /// <strong></strong>: #$%^&*()_+-=
        /// The length is 8~32 characters.
        ///
        /// <strong>Property</strong>: accountPassword: The password for the initial account.
        /// It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
        /// Supported special characters: !
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectName: Project name.The naming rules are as follows:
        /// The length is 1~128 characters.
        /// Only English letters, numbers, dash (-) and underscore (_).
        /// Must start with English letters or underscores (_).
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: projectSpec: Supabase instance specification, default is 1C1G.
        /// </remarks>
        [JsiiProperty(name: "projectSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectSpec
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpList: IP whitelist.
        /// 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
        /// </remarks>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityIpList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: VPC ID.
        /// illustrate
        /// You can call the DescribeRdsVpcs interface to view the available VPC IDs.
        /// This parameter must be passed in.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: vSwitch ID.
        /// illustrate
        /// vSwitchId is required.
        /// The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Availability Zone ID.
        /// Description You can call the DescribeRegions interface to view the available Availability Zone ID.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskPerformanceLevel: Cloud disk PL level, default PL0. Selectable value:
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

        /// <remarks>
        /// <strong>Property</strong>: storageSize: Storage space size, unit GB, default 1GB.
        /// </remarks>
        [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSupabaseProject`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSupabaseProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.RosSupabaseProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IRosSupabaseProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong></strong>: #$%^&*()_+-=
            /// The length is 8~32 characters.
            ///
            /// <strong>Property</strong>: accountPassword: The password for the initial account.
            /// It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
            /// Supported special characters: !
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: Project name.The naming rules are as follows:
            /// The length is 1~128 characters.
            /// Only English letters, numbers, dash (-) and underscore (_).
            /// Must start with English letters or underscores (_).
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: projectSpec: Supabase instance specification, default is 1C1G.
            /// </remarks>
            [JsiiProperty(name: "projectSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIpList: IP whitelist.
            /// 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
            /// </remarks>
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityIpList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: VPC ID.
            /// illustrate
            /// You can call the DescribeRdsVpcs interface to view the available VPC IDs.
            /// This parameter must be passed in.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: vSwitch ID.
            /// illustrate
            /// vSwitchId is required.
            /// The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: Availability Zone ID.
            /// Description You can call the DescribeRegions interface to view the available Availability Zone ID.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskPerformanceLevel: Cloud disk PL level, default PL0. Selectable value:
            /// PL0
            /// PL1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskPerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: storageSize: Storage space size, unit GB, default 1GB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSize
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
