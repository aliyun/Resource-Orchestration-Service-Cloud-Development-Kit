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

        /// <summary>Property bindInstanceType: The cloud resource instance type to be bound.</summary>
        /// <remarks>
        /// Valid value: SlbInstance, SLB instance of private network type.
        /// </remarks>
        [JsiiProperty(name: "bindInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindInstanceType
        {
            get;
        }

        /// <summary>Property associationMode: The association mode.</summary>
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

        /// <summary>Property privateIpAddress: The private IP address.</summary>
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

            /// <summary>Property bindInstanceType: The cloud resource instance type to be bound.</summary>
            /// <remarks>
            /// Valid value: SlbInstance, SLB instance of private network type.
            /// </remarks>
            [JsiiProperty(name: "bindInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property associationMode: The association mode.</summary>
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

            /// <summary>Property privateIpAddress: The private IP address.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddress
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
