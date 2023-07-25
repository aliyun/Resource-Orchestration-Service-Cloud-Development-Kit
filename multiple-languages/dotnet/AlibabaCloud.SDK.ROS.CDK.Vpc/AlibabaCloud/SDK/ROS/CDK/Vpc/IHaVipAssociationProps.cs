using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::HaVipAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IHaVipAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.HaVipAssociationProps")]
    public interface IHaVipAssociationProps
    {
        /// <summary>Property haVipId: The ID of the HAVIP.</summary>
        [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HaVipId
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the ECS instance to be associated with the HAVIP.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property instanceType: The type of the instance to be associated with the HAVIP.</summary>
        /// <remarks>
        /// Valid values:
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
        [JsiiTypeProxy(nativeType: typeof(IHaVipAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.HaVipAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IHaVipAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property haVipId: The ID of the HAVIP.</summary>
            [JsiiProperty(name: "haVipId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HaVipId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the ECS instance to be associated with the HAVIP.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceType: The type of the instance to be associated with the HAVIP.</summary>
            /// <remarks>
            /// Valid values:
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
