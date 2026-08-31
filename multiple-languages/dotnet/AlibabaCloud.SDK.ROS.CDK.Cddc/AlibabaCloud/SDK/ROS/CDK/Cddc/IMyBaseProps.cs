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

        /// <summary>Property engine: The database type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>mysql</description>
        /// <description>tair</description>
        /// </list>
        /// </remarks>
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

        /// <summary>Property securityGroupId: The security group ID.</summary>
        /// <remarks>
        /// Specify multiple security groups, separated by commas (,).
        /// Format: sg-t4neld965n89ocvt,sg-t4neld965n89ocvu
        /// </remarks>
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

        /// <summary>Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length and can contain uppercase letters, lowercase letters, and digits.</summary>
        /// <remarks>
        /// It cannot
        /// consist of only digits.
        /// For other operating systems (such as Linux): The host name must be 2 to 64
        /// characters in length and can contain periods (.) to separate multiple segments.
        /// Each segment can contain uppercase letters, lowercase letters, and digits.
        /// Consecutive periods (.) are not allowed. The host name cannot start or end with a
        /// period (.).
        /// </remarks>
        [JsiiProperty(name: "ecsHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsHostName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsInstanceName: The instance name.</summary>
        /// <remarks>
        /// It must be 2 to 128 characters in length. It must start with
        /// an uppercase letter, a lowercase letter, or a Chinese character. It cannot start
        /// with http:// or https://. It can contain Chinese characters, English letters,
        /// digits, colons (:), underscores (_), periods (.), or hyphens (-). The default
        /// value is the instance ID.
        /// </remarks>
        [JsiiProperty(name: "ecsInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsInstanceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you create multiple instances.</summary>
        /// <remarks>
        /// The sequential suffix starts from 001 and increments
        /// up to 999. Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Add.</description>
        /// <description>false (default): Do not add.
        /// If HostName or InstanceName is set in a specific sorting format, and the
        /// name_suffix is not set (i.e., the naming format is
        /// name_prefix[begin_number,bits]), UniqueSuffix does not take effect. The names
        /// are sorted only in the specified order.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ecsUniqueSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsUniqueSuffix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property imageId: The custom image ID.</summary>
        /// <remarks>
        ///     If you want to use the default image, do not specify this parameter.
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ImageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetChargeType: The network billing method.</summary>
        /// <remarks>
        /// Valid values include the following:
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

        /// <summary>Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit\/s.</summary>
        /// <remarks>
        /// Valid values: 0 to 100.
        /// Default value: 0. If you set this parameter to a value greater than 0, a public
        /// IP address is automatically created.
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

        /// <summary>Property osPassword: The logon password for the host.</summary>
        /// <remarks>
        /// You can set it later. The password must meet the
        /// following requirements:
        ///
        /// <list type="bullet">
        /// <description>It must be 8 to 30 characters in length.</description>
        /// <description>It must contain at least three of the following character types: uppercase
        /// letters, lowercase letters, digits, and special characters.</description>
        /// <description>Special characters: <c>()\</c>~!@#$%^&amp;*-_+=|{}[]:;'&lt;&gt;,.?/`</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>If you want to set the logon password later, leave this parameter empty.</description>
        ///     <description>If you want to set the logon password, use HTTPS to send requests to prevent
        ///     password leakage.</description>
        ///     </list>
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

        /// <summary>Property passwordInherit: Use the default password of the image.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>false (default): Do not use.</description>
        /// <description>true: Use.</description>
        /// </list>
        ///
        ///     If you use the default password of the image, do not specify the OSPassword
        ///     parameter.
        /// </remarks>
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

        /// <summary>Property userDataInBase64: Indicates whether the custom data is Base64-encoded.</summary>
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

            /// <summary>Property engine: The database type.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>mysql</description>
            /// <description>tair</description>
            /// </list>
            /// </remarks>
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

            /// <summary>Property securityGroupId: The security group ID.</summary>
            /// <remarks>
            /// Specify multiple security groups, separated by commas (,).
            /// Format: sg-t4neld965n89ocvt,sg-t4neld965n89ocvu
            /// </remarks>
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

            /// <summary>Property ecsHostName: For Windows operating systems: The host name must be 2 to 15 characters in length and can contain uppercase letters, lowercase letters, and digits.</summary>
            /// <remarks>
            /// It cannot
            /// consist of only digits.
            /// For other operating systems (such as Linux): The host name must be 2 to 64
            /// characters in length and can contain periods (.) to separate multiple segments.
            /// Each segment can contain uppercase letters, lowercase letters, and digits.
            /// Consecutive periods (.) are not allowed. The host name cannot start or end with a
            /// period (.).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsHostName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsInstanceName: The instance name.</summary>
            /// <remarks>
            /// It must be 2 to 128 characters in length. It must start with
            /// an uppercase letter, a lowercase letter, or a Chinese character. It cannot start
            /// with http:// or https://. It can contain Chinese characters, English letters,
            /// digits, colons (:), underscores (_), periods (.), or hyphens (-). The default
            /// value is the instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsInstanceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsUniqueSuffix: Automatically add a sequential suffix to the HostName and InstanceName when you create multiple instances.</summary>
            /// <remarks>
            /// The sequential suffix starts from 001 and increments
            /// up to 999. Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: Add.</description>
            /// <description>false (default): Do not add.
            /// If HostName or InstanceName is set in a specific sorting format, and the
            /// name_suffix is not set (i.e., the naming format is
            /// name_prefix[begin_number,bits]), UniqueSuffix does not take effect. The names
            /// are sorted only in the specified order.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsUniqueSuffix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsUniqueSuffix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property imageId: The custom image ID.</summary>
            /// <remarks>
            ///     If you want to use the default image, do not specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ImageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetChargeType: The network billing method.</summary>
            /// <remarks>
            /// Valid values include the following:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetMaxBandwidthOut: The maximum outbound public bandwidth, in Mbit\/s.</summary>
            /// <remarks>
            /// Valid values: 0 to 100.
            /// Default value: 0. If you set this parameter to a value greater than 0, a public
            /// IP address is automatically created.
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

            /// <summary>Property osPassword: The logon password for the host.</summary>
            /// <remarks>
            /// You can set it later. The password must meet the
            /// following requirements:
            ///
            /// <list type="bullet">
            /// <description>It must be 8 to 30 characters in length.</description>
            /// <description>It must contain at least three of the following character types: uppercase
            /// letters, lowercase letters, digits, and special characters.</description>
            /// <description>Special characters: <c>()\</c>~!@#$%^&amp;*-_+=|{}[]:;'&lt;&gt;,.?/`</description>
            /// </list>
            ///
            ///     <list type="bullet">
            ///     <description>If you want to set the logon password later, leave this parameter empty.</description>
            ///     <description>If you want to set the logon password, use HTTPS to send requests to prevent
            ///     password leakage.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "osPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OsPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property passwordInherit: Use the default password of the image.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>false (default): Do not use.</description>
            /// <description>true: Use.</description>
            /// </list>
            ///
            ///     If you use the default password of the image, do not specify the OSPassword
            ///     parameter.
            /// </remarks>
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

            /// <summary>Property userDataInBase64: Indicates whether the custom data is Base64-encoded.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "userDataInBase64", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UserDataInBase64
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
