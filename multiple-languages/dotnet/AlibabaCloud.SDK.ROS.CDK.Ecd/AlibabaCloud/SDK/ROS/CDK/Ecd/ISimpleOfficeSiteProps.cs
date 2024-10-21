using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Properties for defining a `SimpleOfficeSite`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-simpleofficesite
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISimpleOfficeSiteProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.SimpleOfficeSiteProps")]
    public interface ISimpleOfficeSiteProps
    {
        /// <summary>Property bandwidth: The maximum public bandwidth.</summary>
        /// <remarks>
        /// Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Bandwidth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
        /// <remarks>
        /// NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.</summary>
        /// <remarks>
        /// If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
        /// If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
        /// </remarks>
        [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CenOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace.</summary>
        /// <remarks>
        /// The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
        /// </remarks>
        [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CidrBlock
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.</summary>
        /// <remarks>
        /// Enumeration Value:
        /// true
        /// false
        /// </remarks>
        [JsiiProperty(name: "cloudBoxOfficeSite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CloudBoxOfficeSite
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property desktopAccessType: The method that is used to connect the client to cloud desktops.</summary>
        /// <remarks>
        /// NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
        /// </remarks>
        [JsiiProperty(name: "desktopAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DesktopAccessType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.</summary>
        /// <remarks>
        /// Enumeration Value:
        /// true
        /// false
        /// </remarks>
        [JsiiProperty(name: "enableAdminAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAdminAccess
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableInternetAccess: Specifies whether to enable Internet access.</summary>
        /// <remarks>
        /// By default, Internet access is not enabled.
        /// Enumeration Value:
        /// true
        /// false
        /// </remarks>
        [JsiiProperty(name: "enableInternetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableInternetAccess
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.</summary>
        /// <remarks>
        /// Enumeration Value:
        /// true
        /// false
        /// </remarks>
        [JsiiProperty(name: "needVerifyZeroDevice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NeedVerifyZeroDevice
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property officeSiteName: The name of the workspace.</summary>
        /// <remarks>
        /// The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "officeSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OfficeSiteName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property verifyCode: The verification code.</summary>
        /// <remarks>
        /// If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
        /// </remarks>
        [JsiiProperty(name: "verifyCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VerifyCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcType: The type of office network.</summary>
        /// <remarks>
        /// Enumeration value:
        /// standard: Advanced office network.
        /// basic: Basic office network.
        /// </remarks>
        [JsiiProperty(name: "vpcType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The IDs of the vSwitches in the VPC.</summary>
        /// <remarks>
        /// This parameter is required when you create a CloudBox-based workspace.
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

        /// <summary>Properties for defining a `SimpleOfficeSite`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-simpleofficesite
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISimpleOfficeSiteProps), fullyQualifiedName: "@alicloud/ros-cdk-ecd.SimpleOfficeSiteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.ISimpleOfficeSiteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bandwidth: The maximum public bandwidth.</summary>
            /// <remarks>
            /// Value range: 10 to 200. Unit: Mbit/s. This parameter is available if you set EnableInternetAccess to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Bandwidth
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
            /// <remarks>
            /// NoteIf you want to connect to your cloud desktops over a VPC, you can attach the network of the workspace to the CEN instance. The CEN instance is connected to the on-premises network over VPN Gateway or Express Connect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cenOwnerId: The ID of the Alibaba Cloud account to which the Cloud Enterprise Network (CEN) instance belongs.</summary>
            /// <remarks>
            /// If you do not specify the CenId parameter, or the CEN instance that is specified by the CenId parameter belongs to the current Alibaba Cloud account, skip this parameter.
            /// If you specify the CenId parameter and the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, enter the ID of the Alibaba Cloud account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CenOwnerId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cidrBlock: The IPv4 CIDR block in the secure office network of the workspace.</summary>
            /// <remarks>
            /// The IPv4 CIDR block that the system uses to create a virtual private cloud (VPC) for the workspace. We recommend that you set the IPv4 CIDR block to 10.0.0.0/12, 172.16.0.0/12, 192.168.0.0/16, or a subnet of these CIDR blocks. If you set the IPv4 CIDR block to 10.0.0.0/12 or 172.16.0.0/12, the mask is 1224 bits in length. If you set the IPv4 CIDR block to 192.168.0.0/16, the mask is 1624 bits in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cidrBlock", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CidrBlock
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cloudBoxOfficeSite: Specifies whether the workspace is a CloudBox-based workspace.</summary>
            /// <remarks>
            /// Enumeration Value:
            /// true
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cloudBoxOfficeSite", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CloudBoxOfficeSite
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property desktopAccessType: The method that is used to connect the client to cloud desktops.</summary>
            /// <remarks>
            /// NoteVPC connections are established by using Alibaba Cloud PrivateLink. You can use PrivateLink for free. When you set this parameter to VPC or Any, PrivateLink is automatically activated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "desktopAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DesktopAccessType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAdminAccess: Specifies whether to grant the permissions of the local administrator to the regular user of the cloud desktop.</summary>
            /// <remarks>
            /// Enumeration Value:
            /// true
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAdminAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAdminAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableInternetAccess: Specifies whether to enable Internet access.</summary>
            /// <remarks>
            /// By default, Internet access is not enabled.
            /// Enumeration Value:
            /// true
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableInternetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableInternetAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property needVerifyZeroDevice: Specifies whether to enable trusted device verification.</summary>
            /// <remarks>
            /// Enumeration Value:
            /// true
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "needVerifyZeroDevice", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NeedVerifyZeroDevice
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property officeSiteName: The name of the workspace.</summary>
            /// <remarks>
            /// The name must be 2 to 255 characters in length. It must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "officeSiteName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OfficeSiteName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property verifyCode: The verification code.</summary>
            /// <remarks>
            /// If the CEN instance that you specify for the CenId parameter belongs to another Alibaba Cloud account, you must call the SendVerifyCode operation to obtain the verification code.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "verifyCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VerifyCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcType: The type of office network.</summary>
            /// <remarks>
            /// Enumeration value:
            /// standard: Advanced office network.
            /// basic: Basic office network.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The IDs of the vSwitches in the VPC.</summary>
            /// <remarks>
            /// This parameter is required when you create a CloudBox-based workspace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
