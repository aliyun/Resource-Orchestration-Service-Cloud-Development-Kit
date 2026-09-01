using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>Properties for defining a `Application`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-application
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.ApplicationProps")]
    public interface IApplicationProps
    {
        /// <summary>Property applicationType: The type of the application.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>supabase: Creates a managed Supabase application.</description>
        /// <description>raycluster: Creates a managed Ray Cluster application.</description>
        /// <description>polarclaw: Creates a managed PolarClaw application.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "applicationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ApplicationType
        {
            get;
        }

        /// <summary>Property architecture: The architecture of the application.</summary>
        /// <remarks>
        /// This parameter is required.
        /// </remarks>
        [JsiiProperty(name: "architecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Architecture
        {
            get;
        }

        /// <summary>Property dbClusterId: The ID of the database cluster.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property autoCreatePolarFs: Specifies whether to automatically create a PolarFS cold storage instance.</summary>
        /// <remarks>
        /// Valid
        /// values:
        ///
        /// <list type="bullet">
        /// <description>false (default): Does not automatically create the instance.</description>
        /// <description>true: Automatically creates the instance.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "autoCreatePolarFs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoCreatePolarFs
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property components: A list of custom child components for the application.</summary>
        [JsiiProperty(name: "components", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosApplication.ComponentsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Components
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the application.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payType: The billing method of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period type.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property polarFsInstanceId: The ID of the PolarFileSystem (PolarFS) cold storage or high-performance instance.</summary>
        /// <remarks>
        /// This parameter is empty by default. If you specify this parameter, the
        /// corresponding storage is mounted to the application.
        /// This feature is currently supported only by the following applications:
        ///
        /// <list type="bullet">
        /// <description>supabase</description>
        /// <description>raycluster</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "polarFsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PolarFsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: The ID of the security group.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpList: The IP address whitelist.</summary>
        /// <remarks>
        /// If you do not specify this parameter, the default value
        /// <c>127.0.0.1</c> is used.
        /// </remarks>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The vSwitch.</summary>
        /// <remarks>
        /// The default value is the current vSwitch in the primary zone of the
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: The zone.</summary>
        /// <remarks>
        /// The default value is the primary zone of the instance.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Application`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-application
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-polardb.ApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.IApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property applicationType: The type of the application.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>supabase: Creates a managed Supabase application.</description>
            /// <description>raycluster: Creates a managed Ray Cluster application.</description>
            /// <description>polarclaw: Creates a managed PolarClaw application.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "applicationType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ApplicationType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property architecture: The architecture of the application.</summary>
            /// <remarks>
            /// This parameter is required.
            /// </remarks>
            [JsiiProperty(name: "architecture", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Architecture
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterId: The ID of the database cluster.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoCreatePolarFs: Specifies whether to automatically create a PolarFS cold storage instance.</summary>
            /// <remarks>
            /// Valid
            /// values:
            ///
            /// <list type="bullet">
            /// <description>false (default): Does not automatically create the instance.</description>
            /// <description>true: Automatically creates the instance.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoCreatePolarFs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoCreatePolarFs
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property components: A list of custom child components for the application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "components", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosApplication.ComponentsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Components
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the application.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payType: The billing method of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Postpaid: pay-as-you-go
            /// Prepaid: subscription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property polarFsInstanceId: The ID of the PolarFileSystem (PolarFS) cold storage or high-performance instance.</summary>
            /// <remarks>
            /// This parameter is empty by default. If you specify this parameter, the
            /// corresponding storage is mounted to the application.
            /// This feature is currently supported only by the following applications:
            ///
            /// <list type="bullet">
            /// <description>supabase</description>
            /// <description>raycluster</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "polarFsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PolarFsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: The ID of the security group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityIpList: The IP address whitelist.</summary>
            /// <remarks>
            /// If you do not specify this parameter, the default value
            /// <c>127.0.0.1</c> is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The vSwitch.</summary>
            /// <remarks>
            /// The default value is the current vSwitch in the primary zone of the
            /// instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: The zone.</summary>
            /// <remarks>
            /// The default value is the primary zone of the instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
