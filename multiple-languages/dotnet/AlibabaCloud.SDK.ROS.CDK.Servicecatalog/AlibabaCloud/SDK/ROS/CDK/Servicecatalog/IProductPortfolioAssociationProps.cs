using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Servicecatalog
{
    /// <summary>Properties for defining a `ProductPortfolioAssociation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IProductPortfolioAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.ProductPortfolioAssociationProps")]
    public interface IProductPortfolioAssociationProps
    {
        /// <summary>Property portfolioId: The ID of the product portfolio.</summary>
        [JsiiProperty(name: "portfolioId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PortfolioId
        {
            get;
        }

        /// <summary>Property productId: The ID of the product.</summary>
        [JsiiProperty(name: "productId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductId
        {
            get;
        }

        /// <summary>Properties for defining a `ProductPortfolioAssociation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IProductPortfolioAssociationProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.ProductPortfolioAssociationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IProductPortfolioAssociationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property portfolioId: The ID of the product portfolio.</summary>
            [JsiiProperty(name: "portfolioId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PortfolioId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property productId: The ID of the product.</summary>
            [JsiiProperty(name: "productId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
