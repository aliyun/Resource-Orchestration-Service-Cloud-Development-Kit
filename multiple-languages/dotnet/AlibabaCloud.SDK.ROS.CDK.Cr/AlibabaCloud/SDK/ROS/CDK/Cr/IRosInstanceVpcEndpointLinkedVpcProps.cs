using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`.</summary>
    [JsiiInterface(nativeType: typeof(IRosInstanceVpcEndpointLinkedVpcProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosInstanceVpcEndpointLinkedVpcProps")]
    public interface IRosInstanceVpcEndpointLinkedVpcProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the vpc.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vswitchId: The ID of the vswitch.
        /// </remarks>
        [JsiiProperty(name: "vswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VswitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.
        /// If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
        /// Valid values:
        /// - **true**: Automatically creates a Privatezone record.
        /// - **false** (default): Do not automatically create Privatezone records.
        /// </remarks>
        [JsiiProperty(name: "enableCreateDnsRecordInPvzt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableCreateDnsRecordInPvzt
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: moduleName: The name of the module in the instance for which a whitelist is configured. Valid values:
        /// - **Registry** (default): Access the image repository.
        /// - **Chart**: Access Helm Chart.
        /// </remarks>
        [JsiiProperty(name: "moduleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ModuleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceVpcEndpointLinkedVpcProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosInstanceVpcEndpointLinkedVpcProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRosInstanceVpcEndpointLinkedVpcProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the vpc.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vswitchId: The ID of the vswitch.
            /// </remarks>
            [JsiiProperty(name: "vswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VswitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.
            /// If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
            /// Valid values:
            /// - **true**: Automatically creates a Privatezone record.
            /// - **false** (default): Do not automatically create Privatezone records.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableCreateDnsRecordInPvzt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableCreateDnsRecordInPvzt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: moduleName: The name of the module in the instance for which a whitelist is configured. Valid values:
            /// - **Registry** (default): Access the image repository.
            /// - **Chart**: Access Helm Chart.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "moduleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ModuleName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
