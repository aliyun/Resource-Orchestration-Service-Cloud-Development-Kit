using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosTransitRouterGrantAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterGrantAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterGrantAttachmentProps")]
    public interface IRosTransitRouterGrantAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.
        /// </remarks>
        [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenOwnerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the network instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: The type of the network instance. Valid values:
        /// - VPC: Virtual Private Cloud instance.
        /// - ExpressConnect: Virtual Border Router (VBR) instance.
        /// - VPN: IPsec connection.
        /// - ECR: ECR instance.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: orderType: The billing method for the network instance. Valid values:
        /// - PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.
        /// - PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.
        /// </remarks>
        [JsiiProperty(name: "orderType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OrderType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTransitRouterGrantAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterGrantAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterGrantAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterGrantAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: The ID of the Cloud Enterprise Network (CEN) instance.
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.
            /// </remarks>
            [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenOwnerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the network instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceType: The type of the network instance. Valid values:
            /// - VPC: Virtual Private Cloud instance.
            /// - ExpressConnect: Virtual Border Router (VBR) instance.
            /// - VPN: IPsec connection.
            /// - ECR: ECR instance.
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: orderType: The billing method for the network instance. Valid values:
            /// - PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.
            /// - PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "orderType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OrderType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
