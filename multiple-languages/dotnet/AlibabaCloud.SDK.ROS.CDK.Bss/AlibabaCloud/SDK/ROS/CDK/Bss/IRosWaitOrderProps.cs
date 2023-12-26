using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bss
{
    /// <summary>Properties for defining a `RosWaitOrder`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWaitOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-bss.RosWaitOrderProps")]
    public interface IRosWaitOrderProps
    {
        /// <remarks>
        /// <strong>Property</strong>: orderIds: A list of order ids.
        /// </remarks>
        [JsiiProperty(name: "orderIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrderIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
        /// </remarks>
        [JsiiProperty(name: "cancelOnDelete", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CancelOnDelete
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: waitForOrderProduced: Wait util all orders related ROS resources are produced.
        /// Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        /// </remarks>
        [JsiiProperty(name: "waitForOrderProduced", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WaitForOrderProduced
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosWaitOrder`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWaitOrderProps), fullyQualifiedName: "@alicloud/ros-cdk-bss.RosWaitOrderProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Bss.IRosWaitOrderProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: orderIds: A list of order ids.
            /// </remarks>
            [JsiiProperty(name: "orderIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrderIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cancelOnDelete", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CancelOnDelete
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: waitForOrderProduced: Wait util all orders related ROS resources are produced.
            /// Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "waitForOrderProduced", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WaitForOrderProduced
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
