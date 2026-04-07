using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `TransitRouterGrantAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITransitRouterGrantAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterGrantAttachmentProps")]
    public interface ITransitRouterGrantAttachmentProps
    {
        /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.</summary>
        [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenOwnerId
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the network instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property instanceType: The type of the network instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>VPC: Virtual Private Cloud instance.</description>
        /// <description>ExpressConnect: Virtual Border Router (VBR) instance.</description>
        /// <description>VPN: IPsec connection.</description>
        /// <description>ECR: ECR instance.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceType
        {
            get;
        }

        /// <summary>Property orderType: The billing method for the network instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.</description>
        /// <description>PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.</description>
        /// </list>
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

        /// <summary>Properties for defining a `TransitRouterGrantAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutergrantattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterGrantAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterGrantAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterGrantAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: The ID of the Cloud Enterprise Network (CEN) instance.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cenOwnerId: The Alibaba Cloud account ID (main account ID) of the CEN instance owner.</summary>
            [JsiiProperty(name: "cenOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenOwnerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the network instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceType: The type of the network instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>VPC: Virtual Private Cloud instance.</description>
            /// <description>ExpressConnect: Virtual Border Router (VBR) instance.</description>
            /// <description>VPN: IPsec connection.</description>
            /// <description>ECR: ECR instance.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property orderType: The billing method for the network instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>PayByCenOwner: The fees incurred by the network instance are paid by the owner of the CEN instance.</description>
            /// <description>PayByResourceOwner: The fees incurred by the network instance are paid by the owner of the network instance.</description>
            /// </list>
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
