using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupClone`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSecurityGroupCloneProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSecurityGroupCloneProps")]
    public interface IRosSecurityGroupCloneProps
    {
        /// <remarks>
        /// <strong>Property</strong>: sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
        /// </remarks>
        [JsiiProperty(name: "sourceSecurityGroupId", typeJson: "{\"primitive\":\"string\"}")]
        string SourceSecurityGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationRegionId: Clone security group to the specified region. Default to current region.
        /// </remarks>
        [JsiiProperty(name: "destinationRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestinationRegionId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupType: The type of the security group. Valid values:
        /// normal: basic security group
        /// enterprise: advanced security group
        /// </remarks>
        [JsiiProperty(name: "securityGroupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: Physical ID of the VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupClone`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSecurityGroupCloneProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSecurityGroupCloneProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSecurityGroupCloneProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
            /// </remarks>
            [JsiiProperty(name: "sourceSecurityGroupId", typeJson: "{\"primitive\":\"string\"}")]
            public string SourceSecurityGroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationRegionId: Clone security group to the specified region. Default to current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationRegionId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestinationRegionId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: networkType: Clone new security group as classic network type. If the VpcId is specified, the value will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NetworkType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupType: The type of the security group. Valid values:
            /// normal: basic security group
            /// enterprise: advanced security group
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: Physical ID of the VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
