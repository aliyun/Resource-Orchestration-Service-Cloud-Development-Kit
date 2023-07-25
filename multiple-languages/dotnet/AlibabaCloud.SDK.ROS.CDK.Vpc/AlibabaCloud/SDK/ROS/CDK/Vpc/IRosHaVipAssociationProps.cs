using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::HaVipAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IRosHaVipAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosHaVipAssociationProps")]
    public interface IRosHaVipAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: haVipId: The ID of the HAVIP.
        /// </remarks>
        [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HaVipId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the ECS instance to be associated with the HAVIP.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the instance to be associated with the HAVIP. Valid values:
        /// EcsInstance: an ECS instance
        /// NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::HaVipAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosHaVipAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosHaVipAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosHaVipAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: haVipId: The ID of the HAVIP.
            /// </remarks>
            [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HaVipId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the ECS instance to be associated with the HAVIP.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the instance to be associated with the HAVIP. Valid values:
            /// EcsInstance: an ECS instance
            /// NetworkInterface: an ENI. If you want to associate the HAVIP with an ENI, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
