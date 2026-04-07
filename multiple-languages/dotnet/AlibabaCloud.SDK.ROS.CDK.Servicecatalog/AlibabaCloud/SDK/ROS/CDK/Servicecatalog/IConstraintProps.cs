using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Servicecatalog
{
    /// <summary>Properties for defining a `Constraint`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConstraintProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.ConstraintProps")]
    public interface IConstraintProps
    {
        /// <summary>Property config: The configuration of the constraint.</summary>
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Config
        {
            get;
        }

        /// <summary>Property constraintType: The type of the constraint.</summary>
        [JsiiProperty(name: "constraintType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConstraintType
        {
            get;
        }

        /// <summary>Property portfolioId: The ID of the portfolio.</summary>
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

        /// <summary>Property description: The description of the constraint.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Constraint`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConstraintProps), fullyQualifiedName: "@alicloud/ros-cdk-servicecatalog.ConstraintProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Servicecatalog.IConstraintProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property config: The configuration of the constraint.</summary>
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Config
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property constraintType: The type of the constraint.</summary>
            [JsiiProperty(name: "constraintType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConstraintType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property portfolioId: The ID of the portfolio.</summary>
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

            /// <summary>Property description: The description of the constraint.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
