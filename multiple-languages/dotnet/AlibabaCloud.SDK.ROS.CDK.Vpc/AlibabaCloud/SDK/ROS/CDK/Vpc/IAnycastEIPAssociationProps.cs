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
        }
    }
}
