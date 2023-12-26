using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc
{
    /// <summary>Properties for defining a `MyBase`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMyBaseProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.MyBaseProps")]
    public interface IMyBaseProps
    {
        /// <summary>Property ecsClassList: ECS Class List.</summary>
        [JsiiProperty(name: "ecsClassList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
        object EcsClassList
        {
            get;
        }

        /// <summary>Property engine: Database type.</summary>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <summary>Property payType: Payment type, currently only supports PrePaid.</summary>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property period: The period of the subscription in months.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Period
        {
            get;
        }

        /// <summary>Property securityGroupId: The ID of the security group.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecurityGroupId
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: Virtual switch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property zoneId: Availability Zone ID.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property autoRenew: Whether to enable auto renew.</summary>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostGroupDescription: The name of the dedicated cluster.</summary>
        [JsiiProperty(name: "dedicatedHostGroupDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostGroupDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostGroupId: The ID of the dedicated cluster.</summary>
        [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsDeploymentSetId: The ID of the deployment set.</summary>
        [JsiiProperty(name: "ecsDeploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsDeploymentSetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsHostName: The host name of the ECS instance.</summary>
        [JsiiProperty(name: "ecsHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsHostName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsInstanceName: The name of the ECS instance.</summary>
        [JsiiProperty(name: "ecsInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsInstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsUniqueSuffix: The unique suffix of the ECS instance.</summary>
        [JsiiProperty(name: "ecsUniqueSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsUniqueSuffix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageId: The image ID.</summary>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: Network billing type.</summary>
        /// <remarks>
        /// Value range:
        /// PayByBandwidth: billed based on fixed bandwidth.
        /// PayByTraffic: Pay by traffic usage.
        /// </remarks>
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetMaxBandwidthOut: Set internet output bandwidth of instance.</summary>
        /// <remarks>
        /// Unit is Mbps(Mega bit per second).
        /// Range is [0,200]. Default is 1.
        /// While the property is not 0, public ip will be assigned for instance.
        /// </remarks>
        [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetMaxBandwidthOut
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property keyPairName: The name of the key pair.</summary>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyPairName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property osPassword: Password of created ecs instance.</summary>
        /// <remarks>
        /// Must contain at least 3 types of special character, lower character, upper character, number.
        /// </remarks>
        [JsiiProperty(name: "osPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OsPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property passwordInherit: Whether to inherit the password from the parent cluster.</summary>
        [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PasswordInherit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).</summary>
        [JsiiProperty(name: "periodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userData: User-defined script data, the original data is up to 16KB.</summary>
        [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserData
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property userDataInBase64: The user data of the ECS instance.</summary>
        [JsiiProperty(name: "userDataInBase64", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UserDataInBase64
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MyBase`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMyBaseProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.MyBaseProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cddc.IMyBaseProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ecsClassList: ECS Class List.</summary>
            [JsiiProperty(name: "ecsClassList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
            public object EcsClassList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property engine: Database type.</summary>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property payType: Payment type, currently only supports PrePaid.</summary>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property period: The period of the subscription in months.</summary>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Period
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property securityGroupId: The ID of the security group.</summary>
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: Virtual switch ID.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: Availability Zone ID.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoRenew: Whether to enable auto renew.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostGroupDescription: The name of the dedicated cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostGroupDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostGroupDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostGroupId: The ID of the dedicated cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsDeploymentSetId: The ID of the deployment set.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsDeploymentSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsDeploymentSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsHostName: The host name of the ECS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsHostName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsInstanceName: The name of the ECS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsInstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsUniqueSuffix: The unique suffix of the ECS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsUniqueSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsUniqueSuffix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageId: The image ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: Network billing type.</summary>
            /// <remarks>
            /// Value range:
            /// PayByBandwidth: billed based on fixed bandwidth.
            /// PayByTraffic: Pay by traffic usage.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetMaxBandwidthOut: Set internet output bandwidth of instance.</summary>
            /// <remarks>
            /// Unit is Mbps(Mega bit per second).
            /// Range is [0,200]. Default is 1.
            /// While the property is not 0, public ip will be assigned for instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetMaxBandwidthOut
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property keyPairName: The name of the key pair.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyPairName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property osPassword: Password of created ecs instance.</summary>
            /// <remarks>
            /// Must contain at least 3 types of special character, lower character, upper character, number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "osPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OsPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property passwordInherit: Whether to inherit the password from the parent cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "passwordInherit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PasswordInherit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "periodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userData: User-defined script data, the original data is up to 16KB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserData
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property userDataInBase64: The user data of the ECS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userDataInBase64", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserDataInBase64
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
