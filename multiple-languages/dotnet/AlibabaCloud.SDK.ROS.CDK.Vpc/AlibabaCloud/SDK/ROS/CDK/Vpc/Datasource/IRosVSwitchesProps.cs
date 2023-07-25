using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::VSwitches`.</summary>
    [JsiiInterface(nativeType: typeof(IRosVSwitchesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosVSwitchesProps")]
    public interface IRosVSwitchesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dhcpOptionsSetId: The ID of the DHCP options set.
        /// </remarks>
        [JsiiProperty(name: "dhcpOptionsSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DhcpOptionsSetId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: routeTableId: The ID of the route table.
        /// </remarks>
        [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RouteTableId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC to which the vSwitch belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchIds: The list of The vSwitch IDs.
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

        /// <remarks>
        /// <strong>Property</strong>: vSwitchName: The name of the vSwitch.
        /// </remarks>
        [JsiiProperty(name: "vSwitchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
        /// </remarks>
        [JsiiProperty(name: "vSwitchOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::VSwitches`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosVSwitchesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosVSwitchesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosVSwitchesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dhcpOptionsSetId: The ID of the DHCP options set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dhcpOptionsSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DhcpOptionsSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: isDefault: Specifies whether to query the default VPC in the specified region. Valid values:
            /// true(default): queries all VPCs in the specified region.
            /// false: does not query the default VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IsDefault
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: routeTableId: The ID of the route table.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "routeTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RouteTableId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC to which the vSwitch belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchIds: The list of The vSwitch IDs.
            /// You can specify up to 20 vSwitch IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VSwitchIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchName: The name of the vSwitch.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchOwnerId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
