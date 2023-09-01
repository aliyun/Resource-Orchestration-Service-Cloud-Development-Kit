using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ALIYUN::CR::InstanceVpcEndpointLinkedVpc`.</summary>
    [JsiiInterface(nativeType: typeof(IInstanceVpcEndpointLinkedVpcProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.InstanceVpcEndpointLinkedVpcProps")]
    public interface IInstanceVpcEndpointLinkedVpcProps
    {
        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the vpc.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vswitchId: The ID of the vswitch.</summary>
        [JsiiProperty(name: "vswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VswitchId
        {
            get;
        }

        /// <summary>Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.</summary>
        /// <remarks>
        /// If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>true</strong>: Automatically creates a Privatezone record.</description>
        /// <description><strong>false</strong> (default): Do not automatically create Privatezone records.</description>
        /// </list>
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

        /// <summary>Property moduleName: The name of the module in the instance for which a whitelist is configured.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>Registry</strong> (default): Access the image repository.</description>
        /// <description><strong>Chart</strong>: Access Helm Chart.</description>
        /// </list>
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
        [JsiiTypeProxy(nativeType: typeof(IInstanceVpcEndpointLinkedVpcProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.InstanceVpcEndpointLinkedVpcProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IInstanceVpcEndpointLinkedVpcProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the vpc.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vswitchId: The ID of the vswitch.</summary>
            [JsiiProperty(name: "vswitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VswitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enableCreateDnsRecordInPvzt: Whether to automatically create Privatezone records.</summary>
            /// <remarks>
            /// If you enable automatic Privatezone record creation, Privatezone records will be automatically created when VPC instances are added.
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>true</strong>: Automatically creates a Privatezone record.</description>
            /// <description><strong>false</strong> (default): Do not automatically create Privatezone records.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableCreateDnsRecordInPvzt", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableCreateDnsRecordInPvzt
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property moduleName: The name of the module in the instance for which a whitelist is configured.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>Registry</strong> (default): Access the image repository.</description>
            /// <description><strong>Chart</strong>: Access Helm Chart.</description>
            /// </list>
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
