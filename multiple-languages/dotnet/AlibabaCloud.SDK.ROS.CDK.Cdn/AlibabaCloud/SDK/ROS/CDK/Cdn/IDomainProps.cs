using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdn
{
    /// <summary>Properties for defining a `ALIYUN::CDN::Domain`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.DomainProps")]
    public interface IDomainProps
    {
        /// <summary>Property cdnType: The business type.</summary>
        /// <remarks>
        /// Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
        /// </remarks>
        [JsiiProperty(name: "cdnType", typeJson: "{\"primitive\":\"string\"}")]
        string CdnType
        {
            get;
        }

        /// <summary>Property domainName: The CDN domain name.</summary>
        /// <remarks>
        /// Wildcard domain names that start with periods (.) are supported. For example, .a.com.
        /// </remarks>
        [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
        string DomainName
        {
            get;
        }

        /// <summary>Property checkUrl: The validation of the origin.</summary>
        [JsiiProperty(name: "checkUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CheckUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        /// <remarks>
        /// If this is left blank, the system automatically fills in the ID of the default resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scope: Valid values: domestic, overseas, and global.</summary>
        /// <remarks>
        /// Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
        /// </remarks>
        [JsiiProperty(name: "scope", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Scope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sources: The list of origin URLs.</summary>
        [JsiiProperty(name: "sources", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Sources
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.</summary>
        [JsiiProperty(name: "topLevelDomain", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? TopLevelDomain
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CDN::Domain`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomainProps), fullyQualifiedName: "@alicloud/ros-cdk-cdn.DomainProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdn.IDomainProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cdnType: The business type.</summary>
            /// <remarks>
            /// Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
            /// </remarks>
            [JsiiProperty(name: "cdnType", typeJson: "{\"primitive\":\"string\"}")]
            public string CdnType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property domainName: The CDN domain name.</summary>
            /// <remarks>
            /// Wildcard domain names that start with periods (.) are supported. For example, .a.com.
            /// </remarks>
            [JsiiProperty(name: "domainName", typeJson: "{\"primitive\":\"string\"}")]
            public string DomainName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property checkUrl: The validation of the origin.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "checkUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CheckUrl
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            /// <remarks>
            /// If this is left blank, the system automatically fills in the ID of the default resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property scope: Valid values: domestic, overseas, and global.</summary>
            /// <remarks>
            /// Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scope", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Scope
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sources: The list of origin URLs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sources", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Sources
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "topLevelDomain", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? TopLevelDomain
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
