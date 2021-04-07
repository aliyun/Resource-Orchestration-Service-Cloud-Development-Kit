using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `ALIYUN::VPC::AnycastEIPAssociation`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAnycastEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosAnycastEIPAssociationProps")]
    public interface IRosAnycastEIPAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: anycastId: Anycast EIP instance ID.
        /// </remarks>
        [JsiiProperty(name: "anycastId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AnycastId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bindInstanceId: The ID of the cloud resource instance to be bound.
        /// </remarks>
        [JsiiProperty(name: "bindInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
        /// </remarks>
        [JsiiProperty(name: "bindInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindInstanceRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
        /// </remarks>
        [JsiiProperty(name: "bindInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindInstanceType
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::VPC::AnycastEIPAssociation`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAnycastEIPAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosAnycastEIPAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosAnycastEIPAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: anycastId: Anycast EIP instance ID.
            /// </remarks>
            [JsiiProperty(name: "anycastId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AnycastId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bindInstanceId: The ID of the cloud resource instance to be bound.
            /// </remarks>
            [JsiiProperty(name: "bindInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
            /// </remarks>
            [JsiiProperty(name: "bindInstanceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindInstanceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
            /// </remarks>
            [JsiiProperty(name: "bindInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
