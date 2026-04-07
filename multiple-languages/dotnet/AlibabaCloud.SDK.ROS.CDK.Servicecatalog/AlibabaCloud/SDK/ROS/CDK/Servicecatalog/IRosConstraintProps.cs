using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Servicecatalog
{
    /// <summary>Properties for defining a `RosConstraint`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosConstraintProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.RosConstraintProps")]
    public interface IRosConstraintProps
    {
        /// <remarks>
        /// <strong>Property</strong>: config: The configuration of the constraint.
        /// </remarks>
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Config
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: constraintType: The type of the constraint.
        /// </remarks>
        [JsiiProperty(name: "constraintType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConstraintType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: portfolioId: The ID of the portfolio.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the constraint.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosConstraint`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosConstraintProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.RosConstraintProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IRosConstraintProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: config: The configuration of the constraint.
            /// </remarks>
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Config
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: constraintType: The type of the constraint.
            /// </remarks>
            [JsiiProperty(name: "constraintType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConstraintType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: portfolioId: The ID of the portfolio.
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

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the constraint.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
