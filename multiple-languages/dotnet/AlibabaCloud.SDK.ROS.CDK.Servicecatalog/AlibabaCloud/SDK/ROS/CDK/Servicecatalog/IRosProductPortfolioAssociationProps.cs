using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Servicecatalog
{
    /// <summary>Properties for defining a `RosProductPortfolioAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProductPortfolioAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.RosProductPortfolioAssociationProps")]
    public interface IRosProductPortfolioAssociationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: portfolioId: The ID of the product portfolio.
        /// </remarks>
        [JsiiProperty(name: "portfolioId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PortfolioId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: productId: The ID of the product.
        /// </remarks>
        [JsiiProperty(name: "productId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductId
        {
            get;
        }

        /// <summary>Properties for defining a `RosProductPortfolioAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProductPortfolioAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.RosProductPortfolioAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IRosProductPortfolioAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: portfolioId: The ID of the product portfolio.
            /// </remarks>
            [JsiiProperty(name: "portfolioId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PortfolioId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: productId: The ID of the product.
            /// </remarks>
            [JsiiProperty(name: "productId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
