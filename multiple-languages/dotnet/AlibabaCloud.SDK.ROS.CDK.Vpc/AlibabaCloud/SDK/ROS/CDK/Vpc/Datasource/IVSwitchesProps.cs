using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `VSwitches`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVSwitchesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.VSwitchesProps")]
    public interface IVSwitchesProps
    {
        /// <summary>Property dhcpOptionsSetId: The ID of the DHCP options set.</summary>
        [JsiiProperty(name: "dhcpOptionsSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DhcpOptionsSetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property isDefault: Specifies whether to query the default VPC in the specified region.</summary>
        /// <remarks>
        /// Valid values:
        /// true(default): queries all VPCs in the specified region.
        /// false: does not query the default VPC.
        /// </remarks>
        [JsiiProperty(name: "isDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IsDefault
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property routeTableId: The ID of the route table.</summary>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTableId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the VPC to which the vSwitch belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchIds: The list of The vSwitch IDs.</summary>
        /// <remarks>
        /// You can specify up to 20 vSwitch IDs.
        /// </remarks>
        [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchName: The name of the vSwitch.</summary>
        [JsiiProperty(name: "vSwitchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.</summary>
        [JsiiProperty(name: "vSwitchOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VSwitches`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVSwitchesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.VSwitchesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IVSwitchesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dhcpOptionsSetId: The ID of the DHCP options set.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dhcpOptionsSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DhcpOptionsSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property isDefault: Specifies whether to query the default VPC in the specified region.</summary>
            /// <remarks>
            /// Valid values:
            /// true(default): queries all VPCs in the specified region.
            /// false: does not query the default VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsDefault
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property routeTableId: The ID of the route table.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteTableId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC to which the vSwitch belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchIds: The list of The vSwitch IDs.</summary>
            /// <remarks>
            /// You can specify up to 20 vSwitch IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchName: The name of the vSwitch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchOwnerId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
