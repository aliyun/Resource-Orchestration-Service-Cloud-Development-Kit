using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Represents a `UploadMedia`.</summary>
    [JsiiInterface(nativeType: typeof(IUploadMedia), fullyQualifiedName: "@alicloud/ros-cdk-ice.IUploadMedia")]
    public interface IUploadMedia : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute FileURL: The OSS URL of the file.</summary>
        /// <remarks>
        /// The URL does not contain the information used for authentication.
        /// </remarks>
        [JsiiProperty(name: "attrFileUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFileUrl
        {
            get;
        }

        /// <summary>Attribute MediaId: The ID of the media asset.</summary>
        [JsiiProperty(name: "attrMediaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMediaId
        {
            get;
        }

        /// <summary>Attribute MediaURL: The URL of the media asset.</summary>
        /// <remarks>
        /// Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
        /// </remarks>
        [JsiiProperty(name: "attrMediaUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMediaUrl
        {
            get;
        }

        /// <summary>Attribute UploadAddress: The upload URL.</summary>
        /// <remarks>
        /// Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
        /// </remarks>
        [JsiiProperty(name: "attrUploadAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUploadAddress
        {
            get;
        }

        /// <summary>Attribute UploadAuth: The upload credential.</summary>
        /// <remarks>
        /// Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
        /// </remarks>
        [JsiiProperty(name: "attrUploadAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUploadAuth
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ice.UploadMediaProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ice.IUploadMediaProps Props
        {
            get;
        }

        /// <summary>Represents a `UploadMedia`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUploadMedia), fullyQualifiedName: "@alicloud/ros-cdk-ice.IUploadMedia")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.IUploadMedia
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute FileURL: The OSS URL of the file.</summary>
            /// <remarks>
            /// The URL does not contain the information used for authentication.
            /// </remarks>
            [JsiiProperty(name: "attrFileUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFileUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MediaId: The ID of the media asset.</summary>
            [JsiiProperty(name: "attrMediaId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMediaId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MediaURL: The URL of the media asset.</summary>
            /// <remarks>
            /// Note If a domain name for Alibaba Cloud CDN (CDN) is specified, a CDN URL is returned. Otherwise, an OSS URL is returned. If the HTTP status code 403 is returned when you access the URL from your browser, the URL authentication feature of ApsaraVideo VOD is enabled. To resolve this issue, disable URL authentication or generate an authentication signature.
            /// </remarks>
            [JsiiProperty(name: "attrMediaUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMediaUrl
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UploadAddress: The upload URL.</summary>
            /// <remarks>
            /// Note The returned upload URL is a Base64-encoded URL. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAddress only if you use OSS SDK or call an OSS API operation to upload media files.
            /// </remarks>
            [JsiiProperty(name: "attrUploadAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUploadAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UploadAuth: The upload credential.</summary>
            /// <remarks>
            /// Note The returned upload credential is a Base64-encoded value. You must decode the Base64-encoded upload URL before you use an SDK or call an API operation to upload media files. You need to parse UploadAuth only if you use OSS SDK or call an OSS API operation to upload media files.
            /// </remarks>
            [JsiiProperty(name: "attrUploadAuth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUploadAuth
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ice.UploadMediaProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ice.IUploadMediaProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ice.IUploadMediaProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
