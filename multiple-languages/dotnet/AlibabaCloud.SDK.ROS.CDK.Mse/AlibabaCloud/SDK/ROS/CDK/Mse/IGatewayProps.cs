using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse
{
    /// <summary>Properties for defining a `Gateway`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.GatewayProps")]
    public interface IGatewayProps
    {
        /// <summary>Property replica: Gateway Node Number.</summary>
        [JsiiProperty(name: "replica", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Replica
        {
            get;
        }

        /// <summary>Property spec: Gateway Node Specifications.</summary>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Spec
        {
            get;
        }

        /// <summary>Property vpcId: VpcId.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: VSwitchId.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property backupVSwitchId: VSwitchId For Backup.</summary>
        [JsiiProperty(name: "backupVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enterpriseSecurityGroup:.</summary>
        [JsiiProperty(name: "enterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnterpriseSecurityGroup
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetSlbSpec:.</summary>
        [JsiiProperty(name: "internetSlbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetSlbSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name:.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slbSpec:.</summary>
        [JsiiProperty(name: "slbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlbSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Gateway`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGatewayProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.GatewayProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.IGatewayProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property replica: Gateway Node Number.</summary>
            [JsiiProperty(name: "replica", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Replica
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property spec: Gateway Node Specifications.</summary>
            [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Spec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: VpcId.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: VSwitchId.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backupVSwitchId: VSwitchId For Backup.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enterpriseSecurityGroup:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enterpriseSecurityGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnterpriseSecurityGroup
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetSlbSpec:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetSlbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetSlbSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slbSpec:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SlbSpec
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
