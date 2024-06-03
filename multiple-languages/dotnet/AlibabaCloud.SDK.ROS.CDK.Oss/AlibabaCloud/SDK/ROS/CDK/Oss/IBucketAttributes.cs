using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>A reference to a bucket outside this stack.</summary>
    [JsiiInterface(nativeType: typeof(IBucketAttributes), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketAttributes")]
    public interface IBucketAttributes
    {
        /// <summary>The domain name of the bucket.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Inferred from bucket name and region
        /// </remarks>
        [JsiiProperty(name: "bucketDomainName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BucketDomainName
        {
            get
            {
                return null;
            }
        }

        /// <summary>The endpoint of the bucket.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Inferred from region
        /// </remarks>
        [JsiiProperty(name: "bucketEndpoint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BucketEndpoint
        {
            get
            {
                return null;
            }
        }

        /// <summary>The name of the bucket.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BucketName
        {
            get
            {
                return null;
            }
        }

        /// <summary>The website URL of the bucket (if static web hosting is enabled).</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Inferred from bucket name and region
        /// </remarks>
        [JsiiProperty(name: "bucketWebsiteUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BucketWebsiteUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>If this bucket has been configured for static website hosting.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiProperty(name: "isWebsite", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? IsWebsite
        {
            get
            {
                return null;
            }
        }

        /// <summary>The region this existing bucket is in.</summary>
        /// <remarks>
        /// Features that require the region (e.g. <c>bucketWebsiteUrl</c>) won't fully work
        /// if the region cannot be correctly inferred.
        ///
        /// <strong>Default</strong>: - it's assumed the bucket is in the same region as the scope it's being imported into
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Region
        {
            get
            {
                return null;
            }
        }

        /// <summary>A reference to a bucket outside this stack.</summary>
        [JsiiTypeProxy(nativeType: typeof(IBucketAttributes), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketAttributes")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketAttributes
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The domain name of the bucket.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Inferred from bucket name and region
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bucketDomainName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BucketDomainName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>The endpoint of the bucket.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Inferred from region
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bucketEndpoint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BucketEndpoint
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>The name of the bucket.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BucketName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>The website URL of the bucket (if static web hosting is enabled).</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Inferred from bucket name and region
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bucketWebsiteUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BucketWebsiteUrl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>If this bucket has been configured for static website hosting.</summary>
            /// <remarks>
            /// <strong>Default</strong>: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isWebsite", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? IsWebsite
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>The region this existing bucket is in.</summary>
            /// <remarks>
            /// Features that require the region (e.g. <c>bucketWebsiteUrl</c>) won't fully work
            /// if the region cannot be correctly inferred.
            ///
            /// <strong>Default</strong>: - it's assumed the bucket is in the same region as the scope it's being imported into
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
