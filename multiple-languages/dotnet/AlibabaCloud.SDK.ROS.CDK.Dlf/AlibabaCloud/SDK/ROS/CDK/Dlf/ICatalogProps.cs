using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dlf
{
    /// <summary>Properties for defining a `Catalog`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICatalogProps), fullyQualifiedName: "@alicloud/ros-cdk-dlf.CatalogProps")]
    public interface ICatalogProps
    {
        /// <summary>Property catalogId: Catalog ID.</summary>
        [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CatalogId
        {
            get;
        }

        /// <summary>Property description: Description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property locationUri: Location uri, for example: oss:\/\/dlf-test-oss-location\/.</summary>
        [JsiiProperty(name: "locationUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocationUri
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property owner: Person in charge, principal format.</summary>
        /// <remarks>
        /// Empty auto-fill with current creator identity
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

        /// <summary>Properties for defining a `Catalog`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICatalogProps), fullyQualifiedName: "@alicloud/ros-cdk-dlf.CatalogProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dlf.ICatalogProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property catalogId: Catalog ID.</summary>
            [JsiiProperty(name: "catalogId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CatalogId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property locationUri: Location uri, for example: oss:\/\/dlf-test-oss-location\/.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "locationUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocationUri
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property owner: Person in charge, principal format.</summary>
            /// <remarks>
            /// Empty auto-fill with current creator identity
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
