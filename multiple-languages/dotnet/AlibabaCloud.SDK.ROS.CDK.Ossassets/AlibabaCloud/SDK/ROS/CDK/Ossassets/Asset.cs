using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ossassets
{
    /// <summary>An asset represents a local file or directory, which is automatically uploaded to OSS bucket and then can be referenced within a CDK application.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ossassets.Asset), fullyQualifiedName: "@alicloud/ros-cdk-ossassets.Asset", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ossassets.AssetProps\"}}]")]
    public class Asset : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        public Asset(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ossassets.IAssetProps props): base(_MakeDeputyProps(scope, id, props))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ossassets.IAssetProps props)
        {
            return new DeputyProps(new object?[]{scope, id, props});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Asset(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Asset(DeputyProps props): base(props)
        {
        }

        /// <summary>Adds ROS template metadata to the specified resource with information that indicates which resource property is mapped to this local asset.</summary>
        /// <param name="resource">The ROS resource which is using this asset.</param>
        /// <param name="resourceProperty">The property name where this asset is referenced.</param>
        /// <remarks>
        /// Asset metadata will only be included if the stack is synthesized with the
        /// "ros:cdk:enable-asset-metadata" context key defined, which is the default
        /// behavior when synthesizing via the CDK Toolkit.
        /// </remarks>
        [JsiiMethod(name: "addResourceMetadata", parametersJson: "[{\"docs\":{\"summary\":\"The ROS resource which is using this asset.\"},\"name\":\"resource\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosResource\"}},{\"docs\":{\"summary\":\"The property name where this asset is referenced.\"},\"name\":\"resourceProperty\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddResourceMetadata(AlibabaCloud.SDK.ROS.CDK.Core.RosResource resource, string resourceProperty)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosResource), typeof(string)}, new object[]{resource, resourceProperty});
        }

        /// <summary>A cryptographic hash of the asset.</summary>
        [JsiiProperty(name: "assetHash", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string AssetHash
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The path to the asset, relative to the current Cloud Assembly.</summary>
        /// <remarks>
        /// If asset staging is disabled, this will just be the original path.
        /// If asset staging is enabled it will be the staged path.
        /// </remarks>
        [JsiiProperty(name: "assetPath", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string AssetPath
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Attribute that represents the name of the OSS bucket this asset exists in.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string BucketName
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Attribute which represents the OSS HTTP URL of this asset.</summary>
        /// <remarks>
        /// For example, <c>https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}</c>
        /// </remarks>
        [JsiiProperty(name: "httpUrl", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string HttpUrl
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Indicates if this asset is a single file.</summary>
        /// <remarks>
        /// Allows constructs to ensure that the
        /// correct file type was used.
        /// </remarks>
        [JsiiProperty(name: "isFile", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool IsFile
        {
            get => GetInstanceProperty<bool>()!;
        }

        /// <summary>Indicates if this asset is a zip archive.</summary>
        /// <remarks>
        /// Allows constructs to ensure that the
        /// correct file type was used.
        /// </remarks>
        [JsiiProperty(name: "isZipArchive", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool IsZipArchive
        {
            get => GetInstanceProperty<bool>()!;
        }

        /// <summary>Attribute which represents the OSS object key of this asset.</summary>
        [JsiiProperty(name: "objectKey", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ObjectKey
        {
            get => GetInstanceProperty<string>()!;
        }
    }
}
