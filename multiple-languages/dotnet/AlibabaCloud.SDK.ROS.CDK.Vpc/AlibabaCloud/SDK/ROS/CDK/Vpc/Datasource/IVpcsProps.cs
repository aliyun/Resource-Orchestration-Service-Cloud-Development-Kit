using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::Vpcs`.</summary>
    [JsiiInterface(nativeType: typeof(IVpcsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.VpcsProps")]
    public interface IVpcsProps
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

        /// <summary>Property vpcIds: The list of The VPC IDs.</summary>
        /// <remarks>
        /// You can specify up to 20 VPC IDs.
        /// </remarks>
        [JsiiProperty(name: "vpcIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcName: The name of the VPC.</summary>
        [JsiiProperty(name: "vpcName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.</summary>
        [JsiiProperty(name: "vpcOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::Vpcs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVpcsProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.VpcsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IVpcsProps
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

            /// <summary>Property vpcIds: The list of The VPC IDs.</summary>
            /// <remarks>
            /// You can specify up to 20 VPC IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VpcIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcName: The name of the VPC.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcOwnerId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
