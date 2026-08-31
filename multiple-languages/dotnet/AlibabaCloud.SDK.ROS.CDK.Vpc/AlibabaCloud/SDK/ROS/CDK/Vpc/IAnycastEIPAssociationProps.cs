using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `AnycastEIPAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAnycastEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps")]
    public interface IAnycastEIPAssociationProps
    {
        /// <summary>Property anycastId: Anycast EIP instance ID.</summary>
        [JsiiProperty(name: "anycastId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AnycastId
        {
            get;
        }

        /// <summary>Property bindInstanceId: The ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "bindInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindInstanceId
        {
            get;
        }

        /// <summary>Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.</summary>
        [JsiiProperty(name: "bindInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindInstanceRegionId
        {
            get;
        }

        /// <summary>Property bindInstanceType: The type of the cloud resource with which you want to associate the Anycast EIP.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>SlbInstance: CLB instance in a virtual private cloud (VPC).</description>
        /// <description>NetworkInterface: ENI.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "bindInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindInstanceType
        {
            get;
        }

        /// <summary>Property associationMode: The association mode.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Default: the default mode. In this mode, the associated cloud resource is the
        /// default origin server.</description>
        /// <description>Normal: the normal mode. In this mode, the associated cloud resource is a
        /// normal origin server.</description>
        /// </list>
        ///
        ///     An Anycast EIP can be associated with cloud resources in multiple regions.
        ///     However, you can specify only one default origin server and multiple normal
        ///     origin servers. When you do not specify an access point or add a new access
        ///     point, requests are forwarded to the default origin server by default.
        ///
        /// <list type="bullet">
        ///     <description>If this is your first time to associate a cloud resource with the Anycast
        ///     EIP, the association mode is Default by default.</description>
        ///     <description>If this is not your first time to associate a cloud resource with the Anycast
        ///     EIP, you can set the association mode to Default. This makes the new cloud
        ///     resource the default origin server, and the original default origin server
        ///     becomes a normal origin server.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "associationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AssociationMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property popLocations: The pop locations.</summary>
        [JsiiProperty(name: "popLocations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosAnycastEIPAssociation.PopLocationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PopLocations
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddress: The secondary private IP address of the ENI.</summary>
        /// <remarks>
        /// This parameter is required when BindInstanceType is set to NetworkInterface. If
        /// you do not specify this parameter, the primary private IP address of the ENI is
        /// used.
        /// </remarks>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AnycastEIPAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-anycasteipassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAnycastEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.AnycastEIPAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IAnycastEIPAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property anycastId: Anycast EIP instance ID.</summary>
            [JsiiProperty(name: "anycastId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AnycastId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bindInstanceId: The ID of the cloud resource instance to be bound.</summary>
            [JsiiProperty(name: "bindInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.</summary>
            [JsiiProperty(name: "bindInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bindInstanceType: The type of the cloud resource with which you want to associate the Anycast EIP.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>SlbInstance: CLB instance in a virtual private cloud (VPC).</description>
            /// <description>NetworkInterface: ENI.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "bindInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property associationMode: The association mode.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Default: the default mode. In this mode, the associated cloud resource is the
            /// default origin server.</description>
            /// <description>Normal: the normal mode. In this mode, the associated cloud resource is a
            /// normal origin server.</description>
            /// </list>
            ///
            ///     An Anycast EIP can be associated with cloud resources in multiple regions.
            ///     However, you can specify only one default origin server and multiple normal
            ///     origin servers. When you do not specify an access point or add a new access
            ///     point, requests are forwarded to the default origin server by default.
            ///
            /// <list type="bullet">
            ///     <description>If this is your first time to associate a cloud resource with the Anycast
            ///     EIP, the association mode is Default by default.</description>
            ///     <description>If this is not your first time to associate a cloud resource with the Anycast
            ///     EIP, you can set the association mode to Default. This makes the new cloud
            ///     resource the default origin server, and the original default origin server
            ///     becomes a normal origin server.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "associationMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AssociationMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property popLocations: The pop locations.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "popLocations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosAnycastEIPAssociation.PopLocationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PopLocations
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateIpAddress: The secondary private IP address of the ENI.</summary>
            /// <remarks>
            /// This parameter is required when BindInstanceType is set to NetworkInterface. If
            /// you do not specify this parameter, the primary private IP address of the ENI is
            /// used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddress
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
