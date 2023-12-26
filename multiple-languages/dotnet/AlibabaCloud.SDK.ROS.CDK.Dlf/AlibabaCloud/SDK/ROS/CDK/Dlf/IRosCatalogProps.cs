using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dlf
{
    /// <summary>Properties for defining a `RosCatalog`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCatalogProps), fullyQualifiedName: "@alicloud/ros-cdk-dlf.RosCatalogProps")]
    public interface IRosCatalogProps
    {
        /// <remarks>
        /// <strong>Property</strong>: catalogId: Catalog ID
        /// </remarks>
        [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CatalogId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description
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

        /// <remarks>
        /// <strong>Property</strong>: locationUri: Location uri, for example: oss:\/\/dlf-test-oss-location\/
        /// </remarks>
        [JsiiProperty(name: "locationUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocationUri
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: owner: Person in charge, principal format. Empty auto-fill with current creator identity
        /// </remarks>
        [JsiiProperty(name: "owner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Owner
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCatalog`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCatalogProps), fullyQualifiedName: "@alicloud/ros-cdk-dlf.RosCatalogProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dlf.IRosCatalogProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: catalogId: Catalog ID
            /// </remarks>
            [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CatalogId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: locationUri: Location uri, for example: oss:\/\/dlf-test-oss-location\/
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "locationUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocationUri
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: owner: Person in charge, principal format. Empty auto-fill with current creator identity
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "owner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Owner
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
